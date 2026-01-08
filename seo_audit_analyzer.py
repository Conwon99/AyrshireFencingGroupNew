#!/usr/bin/env python3
"""
SEO Audit Analyzer for Screaming Frog CSV Export
Analyzes thin content, duplicates, internal links, redirects, 404s, and meta descriptions
"""

import csv
import json
from collections import defaultdict, Counter
from typing import Dict, List, Tuple
import re

def parse_csv(filename: str) -> Tuple[List[Dict], List[Dict]]:
    """Parse CSV and separate HTML pages from other resources"""
    all_data = []
    with open(filename, 'r', encoding='utf-8-sig') as f:  # utf-8-sig handles BOM
        reader = csv.DictReader(f)
        for row in reader:
            # Clean up the row data
            cleaned_row = {}
            for key, value in row.items():
                # Remove quotes and BOM if present
                key = key.strip('"\ufeff')
                if value:
                    value = value.strip('"')
                cleaned_row[key] = value
            all_data.append(cleaned_row)
    
    html_pages = [
        r for r in all_data 
        if r.get('Content Type', '').startswith('text/html') 
        and r.get('Status Code') == '200'
    ]
    
    return all_data, html_pages

def analyze_thin_content(html_pages: List[Dict]) -> Dict:
    """Analyze thin content issues"""
    issues = {
        'low_word_count': [],  # <300 words
        'low_text_ratio': [],  # <15%
        'missing_h1': [],
        'sparse_h2': [],  # <2 H2 tags
        'short_meta': [],  # <120 chars
        'long_meta': [],  # >160 chars
        'short_title': [],  # <30 chars
        'long_title': [],  # >60 chars
    }
    
    for page in html_pages:
        url = page.get('Address', '')
        word_count = int(page.get('Word Count', 0) or 0)
        text_ratio = float(page.get('Text Ratio', 0) or 0)
        h1 = page.get('H1-1', '').strip()
        h2_1 = page.get('H2-1', '').strip()
        h2_2 = page.get('H2-2', '').strip()
        meta_desc = page.get('Meta Description 1', '').strip()
        title = page.get('Title 1', '').strip()
        title_len = int(page.get('Title 1 Length', 0) or 0)
        meta_len = int(page.get('Meta Description 1 Length', 0) or 0)
        
        if word_count < 300:
            issues['low_word_count'].append({
                'url': url,
                'word_count': word_count
            })
        
        if text_ratio < 15 and text_ratio > 0:
            issues['low_text_ratio'].append({
                'url': url,
                'text_ratio': text_ratio
            })
        
        if not h1:
            issues['missing_h1'].append({
                'url': url
            })
        
        h2_count = sum([1 for h in [h2_1, h2_2] if h])
        if h2_count < 2 and word_count > 200:
            issues['sparse_h2'].append({
                'url': url,
                'h2_count': h2_count,
                'word_count': word_count
            })
        
        if meta_len > 0:
            if meta_len < 120:
                issues['short_meta'].append({
                    'url': url,
                    'length': meta_len,
                    'meta': meta_desc
                })
            elif meta_len > 160:
                issues['long_meta'].append({
                    'url': url,
                    'length': meta_len,
                    'meta': meta_desc
                })
        
        if title_len > 0:
            if title_len < 30:
                issues['short_title'].append({
                    'url': url,
                    'length': title_len,
                    'title': title
                })
            elif title_len > 60:
                issues['long_title'].append({
                    'url': url,
                    'length': title_len,
                    'title': title
                })
    
    return issues

def analyze_duplicates(html_pages: List[Dict]) -> Dict:
    """Analyze duplicate content issues"""
    title_groups = defaultdict(list)
    meta_groups = defaultdict(list)
    canonical_issues = []
    
    for page in html_pages:
        url = page.get('Address', '')
        title = page.get('Title 1', '').strip()
        meta = page.get('Meta Description 1', '').strip()
        canonical = page.get('Canonical Link Element 1', '').strip()
        
        if title:
            title_groups[title].append(url)
        
        if meta:
            meta_groups[meta].append(url)
        
        # Check canonical issues
        if canonical and canonical != url:
            # Check if canonical points to a different domain or invalid URL
            if not canonical.startswith('https://www.ayrshirefencinggroup.com') and not canonical.startswith('https://ayrshirefencinggroup.com'):
                canonical_issues.append({
                    'url': url,
                    'canonical': canonical
                })
    
    duplicate_titles = {k: v for k, v in title_groups.items() if len(v) > 1}
    duplicate_metas = {k: v for k, v in meta_groups.items() if len(v) > 1}
    
    return {
        'duplicate_titles': duplicate_titles,
        'duplicate_metas': duplicate_metas,
        'canonical_issues': canonical_issues
    }

def analyze_internal_links(html_pages: List[Dict], all_data: List[Dict]) -> Dict:
    """Analyze internal link structure"""
    issues = {
        'excessive_outlinks': [],  # >100
        'orphaned_pages': [],  # 0 inlinks
        'low_inlinks': [],  # <3 inlinks
        'deep_pages': [],  # crawl depth >3
    }
    
    # Build URL to page mapping
    url_to_page = {page.get('Address', ''): page for page in html_pages}
    
    for page in html_pages:
        url = page.get('Address', '')
        outlinks = int(page.get('Outlinks', 0) or 0)
        unique_outlinks = int(page.get('Unique Outlinks', 0) or 0)
        inlinks = int(page.get('Inlinks', 0) or 0)
        unique_inlinks = int(page.get('Unique Inlinks', 0) or 0)
        crawl_depth = int(page.get('Crawl Depth', 0) or 0)
        
        if unique_outlinks > 100:
            issues['excessive_outlinks'].append({
                'url': url,
                'outlinks': unique_outlinks
            })
        
        if unique_inlinks == 0:
            issues['orphaned_pages'].append({
                'url': url,
                'inlinks': unique_inlinks
            })
        elif unique_inlinks < 3:
            issues['low_inlinks'].append({
                'url': url,
                'inlinks': unique_inlinks
            })
        
        if crawl_depth > 3:
            issues['deep_pages'].append({
                'url': url,
                'depth': crawl_depth
            })
    
    return issues

def analyze_redirects(all_data: List[Dict]) -> Dict:
    """Analyze redirect chains and issues"""
    redirects = [r for r in all_data if r.get('Status Code') in ['301', '302']]
    redirect_chains = []
    redirect_issues = {
        'temporary_redirects': [],  # 302s
        'slow_redirects': [],  # >500ms
        'redirect_chains': []
    }
    
    # Build redirect map
    redirect_map = {}
    for r in redirects:
        from_url = r.get('Address', '')
        to_url = r.get('Redirect URL', '').strip()
        status = r.get('Status Code', '')
        response_time = float(r.get('Response Time', 0) or 0) * 1000  # Convert to ms
        
        if to_url:
            redirect_map[from_url] = {
                'to': to_url,
                'status': status,
                'response_time': response_time
            }
        
        if status == '302':
            redirect_issues['temporary_redirects'].append({
                'url': from_url,
                'redirects_to': to_url
            })
        
        if response_time > 500:
            redirect_issues['slow_redirects'].append({
                'url': from_url,
                'response_time_ms': response_time
            })
    
    # Find redirect chains
    for from_url, redirect_info in redirect_map.items():
        chain = [from_url]
        current = redirect_info['to']
        visited = {from_url}
        
        while current and current in redirect_map and current not in visited:
            if len(chain) > 10:  # Prevent infinite loops
                break
            visited.add(current)
            chain.append(current)
            current = redirect_map[current]['to']
        
        if len(chain) > 3:
            redirect_issues['redirect_chains'].append({
                'chain': chain,
                'length': len(chain)
            })
    
    return redirect_issues

def analyze_404s(all_data: List[Dict]) -> Dict:
    """Analyze 404 errors"""
    not_found = [r for r in all_data if r.get('Status Code') == '404']
    
    return {
        '404_pages': [{'url': r.get('Address', '')} for r in not_found]
    }

def analyze_meta_descriptions(html_pages: List[Dict]) -> Dict:
    """Analyze meta description issues"""
    issues = {
        'missing_meta': [],
        'short_meta': [],  # <120
        'long_meta': [],  # >160
        'duplicate_meta': []
    }
    
    meta_groups = defaultdict(list)
    
    for page in html_pages:
        url = page.get('Address', '')
        meta = page.get('Meta Description 1', '').strip()
        meta_len = int(page.get('Meta Description 1 Length', 0) or 0)
        
        if not meta or meta_len == 0:
            issues['missing_meta'].append({
                'url': url
            })
        else:
            if meta_len < 120:
                issues['short_meta'].append({
                    'url': url,
                    'length': meta_len,
                    'meta': meta
                })
            elif meta_len > 160:
                issues['long_meta'].append({
                    'url': url,
                    'length': meta_len,
                    'meta': meta
                })
            
            meta_groups[meta].append(url)
    
    # Find duplicate meta descriptions
    for meta, urls in meta_groups.items():
        if len(urls) > 1:
            issues['duplicate_meta'].append({
                'meta': meta,
                'urls': urls,
                'count': len(urls)
            })
    
    return issues

def generate_report(all_data: List[Dict], html_pages: List[Dict]) -> str:
    """Generate comprehensive SEO audit report"""
    
    # Run all analyses
    thin_content = analyze_thin_content(html_pages)
    duplicates = analyze_duplicates(html_pages)
    internal_links = analyze_internal_links(html_pages, all_data)
    redirects = analyze_redirects(all_data)
    not_found = analyze_404s(all_data)
    meta_issues = analyze_meta_descriptions(html_pages)
    
    # Calculate statistics
    total_html = len(html_pages)
    total_pages = len(all_data)
    
    report = []
    report.append("# SEO Audit Report - Ayrshire Fencing Group")
    report.append(f"\n**Generated:** {__import__('datetime').datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    report.append(f"\n**Total Pages Analyzed:** {total_html} HTML pages (out of {total_pages} total URLs)")
    report.append("\n---\n")
    
    # Executive Summary
    report.append("## Executive Summary\n")
    
    critical_issues = {
        'Thin Content (<300 words)': len(thin_content['low_word_count']),
        'Missing H1 Tags': len(thin_content['missing_h1']),
        'Duplicate Titles': len(duplicates['duplicate_titles']),
        'Duplicate Meta Descriptions': len(duplicates['duplicate_metas']),
        'Orphaned Pages': len(internal_links['orphaned_pages']),
        '404 Errors': len(not_found['404_pages']),
        'Missing Meta Descriptions': len(meta_issues['missing_meta']),
    }
    
    total_critical = sum(critical_issues.values())
    report.append(f"**Total Critical Issues Found:** {total_critical}\n")
    report.append("\n### Top Issues by Category:\n")
    for issue, count in sorted(critical_issues.items(), key=lambda x: x[1], reverse=True)[:5]:
        report.append(f"- **{issue}:** {count} pages ({count/total_html*100:.1f}%)")
    
    report.append("\n---\n")
    
    # Detailed Findings
    report.append("## 1. Thin Content Detection\n")
    report.append(f"### Pages with Low Word Count (<300 words): {len(thin_content['low_word_count'])}\n")
    if thin_content['low_word_count']:
        report.append("| URL | Word Count |")
        report.append("|-----|------------|")
        for item in sorted(thin_content['low_word_count'], key=lambda x: x['word_count'])[:10]:
            report.append(f"| {item['url']} | {item['word_count']} |")
        if len(thin_content['low_word_count']) > 10:
            report.append(f"\n*... and {len(thin_content['low_word_count']) - 10} more pages*")
    
    report.append(f"\n### Pages with Low Text Ratio (<15%): {len(thin_content['low_text_ratio'])}\n")
    if thin_content['low_text_ratio']:
        report.append("| URL | Text Ratio (%) |")
        report.append("|-----|----------------|")
        for item in sorted(thin_content['low_text_ratio'], key=lambda x: x['text_ratio'])[:10]:
            report.append(f"| {item['url']} | {item['text_ratio']:.2f}% |")
    
    report.append(f"\n### Pages Missing H1 Tags: {len(thin_content['missing_h1'])}\n")
    if thin_content['missing_h1']:
        for item in thin_content['missing_h1'][:10]:
            report.append(f"- {item['url']}")
        if len(thin_content['missing_h1']) > 10:
            report.append(f"\n*... and {len(thin_content['missing_h1']) - 10} more pages*")
    
    report.append(f"\n### Pages with Sparse H2 Tags (<2 H2s): {len(thin_content['sparse_h2'])}\n")
    if thin_content['sparse_h2']:
        report.append("| URL | H2 Count | Word Count |")
        report.append("|-----|----------|------------|")
        for item in thin_content['sparse_h2'][:10]:
            report.append(f"| {item['url']} | {item['h2_count']} | {item['word_count']} |")
    
    report.append("\n---\n")
    
    # Duplicate Content
    report.append("## 2. Duplicate Content Issues\n")
    report.append(f"### Duplicate Page Titles: {len(duplicates['duplicate_titles'])} unique titles with duplicates\n")
    if duplicates['duplicate_titles']:
        for title, urls in list(duplicates['duplicate_titles'].items())[:10]:
            report.append(f"\n**Title:** \"{title}\"")
            report.append(f"**Used on {len(urls)} pages:**")
            for url in urls:
                report.append(f"- {url}")
        if len(duplicates['duplicate_titles']) > 10:
            report.append(f"\n*... and {len(duplicates['duplicate_titles']) - 10} more duplicate titles*")
    
    report.append(f"\n### Duplicate Meta Descriptions: {len(duplicates['duplicate_metas'])} unique descriptions with duplicates\n")
    if duplicates['duplicate_metas']:
        for meta, urls in list(duplicates['duplicate_metas'].items())[:5]:
            report.append(f"\n**Meta Description:** \"{meta[:100]}...\"")
            report.append(f"**Used on {len(urls)} pages:**")
            for url in urls[:5]:
                report.append(f"- {url}")
            if len(urls) > 5:
                report.append(f"*... and {len(urls) - 5} more*")
        if len(duplicates['duplicate_metas']) > 5:
            report.append(f"\n*... and {len(duplicates['duplicate_metas']) - 5} more duplicate meta descriptions*")
    
    report.append("\n---\n")
    
    # Internal Links
    report.append("## 3. Internal Link Structure Analysis\n")
    report.append(f"### Pages with Excessive Outbound Links (>100): {len(internal_links['excessive_outlinks'])}\n")
    if internal_links['excessive_outlinks']:
        report.append("| URL | Outbound Links |")
        report.append("|-----|----------------|")
        for item in sorted(internal_links['excessive_outlinks'], key=lambda x: x['outlinks'], reverse=True):
            report.append(f"| {item['url']} | {item['outlinks']} |")
    
    report.append(f"\n### Orphaned Pages (0 Inbound Links): {len(internal_links['orphaned_pages'])}\n")
    if internal_links['orphaned_pages']:
        for item in internal_links['orphaned_pages']:
            report.append(f"- {item['url']}")
    
    report.append(f"\n### Pages with Low Inbound Links (<3): {len(internal_links['low_inlinks'])}\n")
    if internal_links['low_inlinks']:
        report.append("| URL | Inbound Links |")
        report.append("|-----|---------------|")
        for item in sorted(internal_links['low_inlinks'], key=lambda x: x['inlinks'])[:10]:
            report.append(f"| {item['url']} | {item['inlinks']} |")
        if len(internal_links['low_inlinks']) > 10:
            report.append(f"\n*... and {len(internal_links['low_inlinks']) - 10} more pages*")
    
    report.append(f"\n### Pages Buried Deep (>3 clicks from homepage): {len(internal_links['deep_pages'])}\n")
    if internal_links['deep_pages']:
        report.append("| URL | Crawl Depth |")
        report.append("|-----|-------------|")
        for item in sorted(internal_links['deep_pages'], key=lambda x: x['depth'], reverse=True):
            report.append(f"| {item['url']} | {item['depth']} |")
    
    report.append("\n---\n")
    
    # Redirects
    report.append("## 4. Redirect Chain Problems\n")
    report.append(f"### Redirect Chains (>3 hops): {len(redirects['redirect_chains'])}\n")
    if redirects['redirect_chains']:
        for chain_info in redirects['redirect_chains']:
            report.append(f"\n**Chain Length:** {chain_info['length']} redirects")
            for i, url in enumerate(chain_info['chain']):
                report.append(f"{i+1}. {url}")
    
    report.append(f"\n### Temporary Redirects (302s): {len(redirects['temporary_redirects'])}\n")
    if redirects['temporary_redirects']:
        report.append("| From URL | Redirects To |")
        report.append("|----------|--------------|")
        for item in redirects['temporary_redirects'][:10]:
            report.append(f"| {item['url']} | {item['redirects_to']} |")
        if len(redirects['temporary_redirects']) > 10:
            report.append(f"\n*... and {len(redirects['temporary_redirects']) - 10} more*")
    
    report.append(f"\n### Slow Redirects (>500ms): {len(redirects['slow_redirects'])}\n")
    if redirects['slow_redirects']:
        report.append("| URL | Response Time (ms) |")
        report.append("|-----|-------------------|")
        for item in sorted(redirects['slow_redirects'], key=lambda x: x['response_time_ms'], reverse=True):
            report.append(f"| {item['url']} | {item['response_time_ms']:.0f} |")
    
    report.append("\n---\n")
    
    # 404 Errors
    report.append("## 5. 404 Error Detection\n")
    report.append(f"### Pages Returning 404 Status: {len(not_found['404_pages'])}\n")
    if not_found['404_pages']:
        for item in not_found['404_pages']:
            report.append(f"- {item['url']}")
    else:
        report.append("✅ **No 404 errors found!**")
    
    report.append("\n---\n")
    
    # Meta Descriptions
    report.append("## 6. Meta Description Issues\n")
    report.append(f"### Missing Meta Descriptions: {len(meta_issues['missing_meta'])}\n")
    if meta_issues['missing_meta']:
        for item in meta_issues['missing_meta']:
            report.append(f"- {item['url']}")
    
    report.append(f"\n### Meta Descriptions Too Short (<120 chars): {len(meta_issues['short_meta'])}\n")
    if meta_issues['short_meta']:
        report.append("| URL | Length | Meta Description |")
        report.append("|-----|--------|------------------|")
        for item in sorted(meta_issues['short_meta'], key=lambda x: x['length'])[:10]:
            report.append(f"| {item['url']} | {item['length']} | {item['meta'][:80]}... |")
    
    report.append(f"\n### Meta Descriptions Too Long (>160 chars): {len(meta_issues['long_meta'])}\n")
    if meta_issues['long_meta']:
        report.append("| URL | Length | Meta Description |")
        report.append("|-----|--------|------------------|")
        for item in sorted(meta_issues['long_meta'], key=lambda x: x['length'], reverse=True)[:10]:
            report.append(f"| {item['url']} | {item['length']} | {item['meta'][:80]}... |")
    
    report.append(f"\n### Duplicate Meta Descriptions: {len(meta_issues['duplicate_meta'])}\n")
    if meta_issues['duplicate_meta']:
        for item in sorted(meta_issues['duplicate_meta'], key=lambda x: x['count'], reverse=True)[:5]:
            report.append(f"\n**Used on {item['count']} pages:** \"{item['meta'][:100]}...\"")
            for url in item['urls'][:3]:
                report.append(f"- {url}")
            if len(item['urls']) > 3:
                report.append(f"*... and {len(item['urls']) - 3} more*")
    
    report.append("\n---\n")
    
    # Priority Matrix
    report.append("## Priority Matrix\n")
    report.append("### High Impact, Easy Fix (Quick Wins)\n")
    quick_wins = []
    if thin_content['missing_h1']:
        quick_wins.append(("Add H1 tags to pages", len(thin_content['missing_h1']), "High"))
    if meta_issues['missing_meta']:
        quick_wins.append(("Add missing meta descriptions", len(meta_issues['missing_meta']), "High"))
    if redirects['temporary_redirects']:
        quick_wins.append(("Convert 302s to 301s", len(redirects['temporary_redirects']), "Medium"))
    
    for task, count, impact in quick_wins:
        report.append(f"- **{task}:** {count} pages - {impact} impact")
    
    report.append("\n### High Impact, Hard Fix (Strategic Priorities)\n")
    strategic = []
    if thin_content['low_word_count']:
        strategic.append(("Expand thin content pages", len(thin_content['low_word_count']), "High"))
    if duplicates['duplicate_titles']:
        strategic.append(("Fix duplicate page titles", len(duplicates['duplicate_titles']), "High"))
    if internal_links['orphaned_pages']:
        strategic.append(("Add internal links to orphaned pages", len(internal_links['orphaned_pages']), "Medium"))
    
    for task, count, impact in strategic:
        report.append(f"- **{task}:** {count} pages - {impact} impact")
    
    report.append("\n---\n")
    
    # Recommendations
    report.append("## Actionable Recommendations\n")
    report.append("### 1. Thin Content Fixes\n")
    report.append("- Expand pages with <300 words to at least 500-800 words")
    report.append("- Add H1 tags to all pages missing them")
    report.append("- Add 2-3 H2 tags to pages with sparse heading structure")
    report.append("- Improve text-to-code ratio by reducing unnecessary HTML/CSS")
    
    report.append("\n### 2. Duplicate Content Fixes\n")
    report.append("- Create unique, descriptive titles for each page")
    report.append("- Write unique meta descriptions for each page (120-160 characters)")
    report.append("- Review and fix canonical tags to point to correct URLs")
    
    report.append("\n### 3. Internal Linking Improvements\n")
    report.append("- Add internal links to orphaned pages from relevant pages")
    report.append("- Reduce outbound links on pages with >100 links")
    report.append("- Create hub pages to improve link depth for deep pages")
    report.append("- Add contextual internal links within content")
    
    report.append("\n### 4. Redirect Optimizations\n")
    report.append("- Convert all 302 redirects to 301 permanent redirects")
    report.append("- Consolidate redirect chains to single redirects")
    report.append("- Optimize redirect response times")
    
    report.append("\n### 5. Meta Description Optimization\n")
    report.append("- Add meta descriptions to all pages missing them")
    report.append("- Optimize meta descriptions to 120-160 characters")
    report.append("- Create unique meta descriptions for each page")
    report.append("- Include primary keywords and call-to-action")
    
    return "\n".join(report)

if __name__ == "__main__":
    all_data, html_pages = parse_csv('internal_all.csv')
    report = generate_report(all_data, html_pages)
    
    with open('seo-audit-report.md', 'w', encoding='utf-8') as f:
        f.write(report)
    
    print("SEO Audit Report generated: seo-audit-report.md")
    print(f"Analyzed {len(html_pages)} HTML pages")

