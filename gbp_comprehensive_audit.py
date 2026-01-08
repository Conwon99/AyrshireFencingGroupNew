#!/usr/bin/env python3
"""
Comprehensive GBP SEO Structure Audit
Analyzes both CSV data and codebase files
"""

import csv
import sys
import re
import os
from pathlib import Path
from typing import Dict, List, Set, Tuple

sys.stdout.reconfigure(encoding='utf-8')

# GBP Categories
GBP_CATEGORIES = {
    "PRIMARY": ["Fence contractor"],
    "SECONDARY": [
        "Contractor",
        "Deck builder",
        "Shed builder",
        "Garage builder",
        "General Contractor",
        "Landscape designer",
        "Landscape architect",
        "Construction Company"
    ]
}

# GBP Services by Category
GBP_SERVICES = {
    "Fence contractor": [
        "Aluminium fence installation", "Chain link fence installation", "Custom fence construction",
        "Deer fencing and ranch rail installation", "Dog fence installation", "Fence design",
        "Fence installation", "Iron fence installation", "Pool fence installation",
        "Privacy fence installation", "Security fencing and metal cage installation",
        "Vinyl fence installation", "Wood fence installation", "Fence repair",
        "Fence replacement", "Garden fence installation", "Composite fencing installation",
        "Concrete fence installation", "Decorative panels", "Domestic and commercial fencing",
        "Metal fencing", "Metal fence installation", "Gate installation"
    ],
    "Contractor": ["Deck construction", "Patio construction"],
    "Deck builder": [
        "Composite decks", "Deck cleaning", "Deck design", "Deck installation",
        "Deck painting", "Deck railing repair", "Deck refinishing", "Deck remodelling",
        "Deck repair", "Deck replacement", "Patio decks", "Timber decking"
    ],
    "Shed builder": [
        "Cabin design and building", "Custom shed design", "Shed installation",
        "Storage shed design and building"
    ],
    "Garage builder": [],
    "General Contractor": [],
    "Landscape designer": [
        "Landscape installations", "Outdoor step construction", "Patio design"
    ],
    "Landscape architect": [],
    "Construction Company": ["Repairs and maintenance"]
}

EXPECTED_CATEGORY_URLS = {
    "Fence contractor": "fence-contractor-irvine",
    "Contractor": "contractor-irvine",
    "Deck builder": "deck-builder-irvine",
    "Shed builder": "shed-builder-irvine",
    "Garage builder": "garage-builder-irvine",
    "General Contractor": "general-contractor-irvine",
    "Landscape designer": "landscape-designer-irvine",
    "Landscape architect": "landscape-architect-irvine",
    "Construction Company": "construction-company-irvine"
}

def parse_csv_file(filename: str) -> List[Dict]:
    """Parse CSV file"""
    data = []
    try:
        with open(filename, 'r', encoding='utf-8-sig') as f:
            reader = csv.DictReader(f)
            for row in reader:
                cleaned_row = {}
                for key, value in row.items():
                    clean_key = key.strip('\ufeff').strip('"').strip()
                    clean_value = value.strip('"').strip() if value else ""
                    cleaned_row[clean_key] = clean_value
                data.append(cleaned_row)
    except Exception as e:
        print(f"Note: {filename} not found or error: {e}", file=sys.stderr)
    return data

def normalize_url(url: str) -> str:
    """Normalize URL"""
    if not url:
        return ""
    url = url.replace("https://", "").replace("http://", "")
    url = url.replace("www.", "")
    url = url.replace("ayrshirefencinggroup.com", "")
    url = url.replace("ayrshirefencinggroup.com/", "")
    if url.startswith("/"):
        url = url[1:]
    if url.endswith("/"):
        url = url[:-1]
    if url.endswith(".html"):
        url = url[:-5]
    return url.lower().strip()

def check_codebase_files() -> Dict:
    """Check actual codebase files for category and service pages"""
    pages_dir = Path("src/pages")
    found_pages = {
        "categories": {},
        "services": {}
    }
    
    if not pages_dir.exists():
        return found_pages
    
    # Check category pages
    for category, expected_url in EXPECTED_CATEGORY_URLS.items():
        category_file = pages_dir / f"{expected_url}.astro"
        if category_file.exists():
            # Read title from file
            try:
                content = category_file.read_text(encoding='utf-8')
                title_match = re.search(r'title="([^"]+)"', content)
                title = title_match.group(1) if title_match else ""
                found_pages["categories"][category] = {
                    "url": f"/{expected_url}",
                    "title": title,
                    "file": str(category_file)
                }
            except:
                found_pages["categories"][category] = {
                    "url": f"/{expected_url}",
                    "title": "",
                    "file": str(category_file)
                }
    
    # Check service pages in [slug].astro
    service_file = pages_dir / "service" / "[slug].astro"
    if service_file.exists():
        try:
            content = service_file.read_text(encoding='utf-8')
            # Extract service slugs from getStaticPaths
            slug_matches = re.findall(r'params:\s*\{\s*slug:\s*"([^"]+)"', content)
            title_matches = re.findall(r'"([^"]+)":\s*"([^"]+)"', content)
            title_map = {}
            for key, value in title_matches:
                if "title" in key.lower() or len(value) > 30:  # Likely a title
                    slug_match = re.search(r'getTitle.*?(\w+).*?:', content)
                    # Parse title map more carefully
                    pass
            
            # Extract from titleMap
            title_map_pattern = r'"([^"]+)":\s*"([^"]+)"'
            matches = re.findall(title_map_pattern, content)
            for slug, title in matches:
                if len(title) > 20:  # Likely a title
                    found_pages["services"][slug] = {
                        "url": f"/service/{slug}",
                        "title": title
                    }
        except Exception as e:
            print(f"Error reading service file: {e}", file=sys.stderr)
    
    return found_pages

def analyze():
    """Main analysis"""
    
    # Parse CSV
    internal_data = parse_csv_file("internal_all.csv")
    
    # Build page database from CSV
    csv_pages = {}
    for row in internal_data:
        url = row.get("Address", "")
        if not url or "ayrshirefencinggroup.com" not in url:
            continue
        normalized = normalize_url(url)
        if normalized and row.get("Content Type", "").startswith("text/html"):
            csv_pages[normalized] = {
                "url": url,
                "title": row.get("Title 1", ""),
                "h1": row.get("H1-1", ""),
            }
    
    # Check codebase files
    codebase_pages = check_codebase_files()
    
    # Merge findings
    print("="*80)
    print("GBP SEO STRUCTURE AUDIT - COMPREHENSIVE ANALYSIS")
    print("="*80)
    
    # Category Analysis
    print("\n" + "="*80)
    print("CATEGORY PAGE AUDIT")
    print("="*80)
    
    category_gaps = []
    category_title_issues = []
    existing_categories = set()
    
    for category in GBP_CATEGORIES["SECONDARY"]:
        expected_url = EXPECTED_CATEGORY_URLS.get(category, "")
        found_in_codebase = category in codebase_pages["categories"]
        found_in_csv = False
        csv_title = ""
        
        # Check CSV
        for url, data in csv_pages.items():
            if expected_url in url:
                found_in_csv = True
                csv_title = data.get("title", "")
                break
        
        if found_in_codebase or found_in_csv:
            existing_categories.add(category)
            # Check title format
            title = codebase_pages["categories"].get(category, {}).get("title", csv_title)
            expected_pattern = f"{category} Irvine"
            if title and expected_pattern.lower() not in title.lower():
                category_title_issues.append({
                    "category": category,
                    "url": f"/{expected_url}",
                    "current_title": title,
                    "required_title": f"{category} Irvine | Professional Services | Ayrshire Fencing Group"
                })
        else:
            category_gaps.append({
                "category": category,
                "expected_url": f"/{expected_url}",
                "required_title": f"{category} Irvine | Professional Services | Ayrshire Fencing Group"
            })
    
    print(f"\n✓ Found {len(existing_categories)}/{len(GBP_CATEGORIES['SECONDARY'])} category pages")
    print(f"✗ Missing {len(category_gaps)} category pages")
    print(f"⚠ {len(category_title_issues)} category pages with incorrect title tags\n")
    
    if category_gaps:
        print("MISSING CATEGORY PAGES:")
        for gap in category_gaps:
            print(f"  - {gap['category']}")
            print(f"    Required URL: {gap['expected_url']}")
            print(f"    Required Title: {gap['required_title']}\n")
    
    if category_title_issues:
        print("CATEGORY TITLE TAG ISSUES:")
        for issue in category_title_issues:
            print(f"  - {issue['category']}")
            print(f"    Current: {issue['current_title']}")
            print(f"    Required: {issue['required_title']}\n")
    
    # Service Analysis
    print("\n" + "="*80)
    print("SERVICE PAGE AUDIT")
    print("="*80)
    
    all_services = []
    for category, services in GBP_SERVICES.items():
        for service in services:
            all_services.append((service, category))
    
    service_gaps = []
    service_title_issues = []
    existing_services = set()
    
    # Known service slugs from codebase
    known_service_slugs = {
        "fencing": "Fence installation",
        "fence-repairs": "Fence repair",
        "decking": "Deck installation",
        "gates": "Gate installation",
        "sheds": "Shed installation",
        "garden-rooms": "Garden room installation",
        "custom-fence-construction-irvine": "Custom fence construction",
        "wood-fence-installation-irvine": "Wood fence installation",
        "fence-replacement-irvine": "Fence replacement",
        "garden-fence-installation-irvine": "Garden fence installation",
        "composite-fencing-installation-irvine": "Composite fencing installation",
        "chainlink-fencing-installation-irvine": "Chain link fence installation",
        "timber-decking-irvine": "Timber decking",
        "composite-decking-irvine": "Composite decks",
        "wooden-decking-irvine": "Timber decking",
        "wooden-fencing-irvine": "Wood fence installation",
        "composite-fencing-irvine": "Composite fencing installation",
        "chainlink-fencing-irvine": "Chain link fence installation",
        "nylofor-fencing-irvine": "Privacy fence installation",
        "concrete-fencing-irvine": "Concrete fence installation",
    }
    
    for service, category in all_services:
        service_slug = service.lower().replace(" ", "-")
        found = False
        found_title = ""
        
        # Check known slugs
        for slug, known_service in known_service_slugs.items():
            if service.lower() in known_service.lower() or known_service.lower() in service.lower():
                found = True
                # Get title from CSV or codebase
                for url, data in csv_pages.items():
                    if slug in url:
                        found_title = data.get("title", "")
                        break
                existing_services.add(service)
                break
        
        # Check CSV
        if not found:
            for url, data in csv_pages.items():
                if "/service/" in url:
                    url_slug = url.split("/service/")[-1]
                    if service_slug.replace("-irvine", "") in url_slug or url_slug.replace("-irvine", "") in service_slug:
                        found = True
                        found_title = data.get("title", "")
                        existing_services.add(service)
                        break
        
        if not found:
            service_gaps.append({
                "service": service,
                "category": category,
                "required_url": f"/service/{service_slug}-irvine",
                "required_title": f"{service} Irvine | Professional Installation | Ayrshire Fencing Group"
            })
        else:
            # Check title format
            if found_title and "irvine" not in found_title.lower() and "ayrshire" not in found_title.lower():
                service_title_issues.append({
                    "service": service,
                    "current_title": found_title,
                    "required_title": f"{service} Irvine | Professional Installation | Ayrshire Fencing Group"
                })
    
    print(f"\n✓ Found {len(existing_services)}/{len(all_services)} service pages")
    print(f"✗ Missing {len(service_gaps)} service pages")
    print(f"⚠ {len(service_title_issues)} service pages with incorrect title tags\n")
    
    if service_gaps:
        print("MISSING SERVICE PAGES (Top 20):")
        for gap in service_gaps[:20]:
            print(f"  - {gap['service']} (Category: {gap['category']})")
            print(f"    Required URL: {gap['required_url']}")
            print(f"    Required Title: {gap['required_title']}\n")
        if len(service_gaps) > 20:
            print(f"    ... and {len(service_gaps) - 20} more missing services\n")
    
    # Generate report
    with open("gbp_seo_gap_report.md", "w", encoding="utf-8") as f:
        f.write("# GBP SEO Structure Gap Analysis Report\n\n")
        f.write("## Executive Summary\n\n")
        f.write(f"- **Category Pages**: {len(existing_categories)}/{len(GBP_CATEGORIES['SECONDARY'])} ({len(existing_categories)/len(GBP_CATEGORIES['SECONDARY'])*100:.1f}%)\n")
        f.write(f"- **Service Pages**: {len(existing_services)}/{len(all_services)} ({len(existing_services)/len(all_services)*100:.1f}%)\n")
        f.write(f"- **Total Gaps**: {len(category_gaps) + len(service_gaps)}\n")
        f.write(f"- **Title Tag Issues**: {len(category_title_issues) + len(service_title_issues)}\n\n")
        
        f.write("## Missing Category Pages\n\n")
        for gap in category_gaps:
            f.write(f"### {gap['category']}\n")
            f.write(f"- **Required URL**: `{gap['expected_url']}`\n")
            f.write(f"- **Required Title**: `{gap['required_title']}`\n\n")
        
        f.write("## Category Title Tag Issues\n\n")
        for issue in category_title_issues:
            f.write(f"### {issue['category']}\n")
            f.write(f"- **Current**: `{issue['current_title']}`\n")
            f.write(f"- **Required**: `{issue['required_title']}`\n")
            f.write(f"- **URL**: {issue['url']}\n\n")
        
        f.write("## Missing Service Pages\n\n")
        for gap in service_gaps:
            f.write(f"### {gap['service']}\n")
            f.write(f"- **Category**: {gap['category']}\n")
            f.write(f"- **Required URL**: `{gap['required_url']}`\n")
            f.write(f"- **Required Title**: `{gap['required_title']}`\n\n")
        
        f.write("## Service Title Tag Issues\n\n")
        for issue in service_title_issues:
            f.write(f"### {issue['service']}\n")
            f.write(f"- **Current**: `{issue['current_title']}`\n")
            f.write(f"- **Required**: `{issue['required_title']}`\n\n")
    
    print(f"\n✓ Detailed report saved to: gbp_seo_gap_report.md")

if __name__ == "__main__":
    analyze()


