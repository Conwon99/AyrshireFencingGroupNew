#!/usr/bin/env python3
"""
GBP SEO Structure Audit & Gap Analysis
Analyzes website structure against Google Business Profile categories and services
"""

import csv
import sys
import re
from collections import defaultdict
from typing import Dict, List, Set, Tuple

# Configure output encoding
sys.stdout.reconfigure(encoding='utf-8')

# GBP Categories from cleaned file
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

# GBP Services by Category (from cleaned file)
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
    "Contractor": [
        "Deck construction", "Patio construction"
    ],
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
    "Construction Company": [
        "Repairs and maintenance"
    ]
}

# Expected URL patterns
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
    """Parse CSV file and return list of dictionaries"""
    data = []
    try:
        with open(filename, 'r', encoding='utf-8-sig') as f:
            reader = csv.DictReader(f)
            for row in reader:
                # Clean up the row data
                cleaned_row = {}
                for key, value in row.items():
                    # Remove BOM and quotes
                    clean_key = key.strip('\ufeff').strip('"').strip()
                    clean_value = value.strip('"').strip() if value else ""
                    cleaned_row[clean_key] = clean_value
                data.append(cleaned_row)
    except Exception as e:
        print(f"Error reading {filename}: {e}", file=sys.stderr)
    return data

def normalize_url(url: str) -> str:
    """Normalize URL for comparison"""
    url = url.replace("https://", "").replace("http://", "")
    url = url.replace("www.", "")
    url = url.replace("ayrshirefencinggroup.com/", "")
    url = url.replace("ayrshirefencinggroup.com", "")
    if url.startswith("/"):
        url = url[1:]
    if url.endswith("/"):
        url = url[:-1]
    if url.endswith(".html"):
        url = url[:-5]
    return url.lower()

def extract_category_from_url(url: str) -> str:
    """Extract category name from URL"""
    url = normalize_url(url)
    # Check for exact matches first
    for category, expected_url in EXPECTED_CATEGORY_URLS.items():
        expected_normalized = expected_url.replace("-", "")
        url_clean = url.replace("-", "").replace("/", "")
        if expected_url == url or expected_normalized in url_clean:
            return category
    # Check for partial matches
    for category, expected_url in EXPECTED_CATEGORY_URLS.items():
        if expected_url.replace("-", "") in url.replace("-", ""):
            return category
    return None

def extract_service_from_url(url: str) -> str:
    """Extract service name from URL"""
    url = normalize_url(url)
    if "/service/" in url:
        service_slug = url.split("/service/")[-1]
        # Remove city suffixes
        service_slug = re.sub(r'-(irvine|ayrshire|glasgow)$', '', service_slug, flags=re.IGNORECASE)
        return service_slug.replace("-", " ").title()
    return None

def check_title_format(title: str, expected_pattern: str) -> bool:
    """Check if title matches expected format"""
    if not title:
        return False
    # Basic check - title should contain key terms
    title_lower = title.lower()
    pattern_lower = expected_pattern.lower()
    key_terms = pattern_lower.split()
    return any(term in title_lower for term in key_terms if len(term) > 3)

def analyze_structure():
    """Main analysis function"""
    
    # Parse CSV files
    print("Parsing CSV files...")
    internal_data = parse_csv_file("internal_all.csv")
    links_data = parse_csv_file("links_all.csv")
    
    # Build page database
    pages = {}
    for row in internal_data:
        url = row.get("Address", "")
        if not url or url.startswith("http") and "ayrshirefencinggroup.com" not in url:
            continue
        normalized = normalize_url(url)
        if normalized:
            pages[normalized] = {
                "url": url,
                "title": row.get("Title 1", ""),
                "h1": row.get("H1-1", ""),
                "content_type": row.get("Content Type", ""),
                "status": row.get("Status Code", ""),
            }
    
    # Build link database
    links = defaultdict(set)
    for row in links_data:
        source = normalize_url(row.get("Address", ""))
        if source and source in pages:
            # Extract outlinks (would need to parse from Outlinks column or use internal_all)
            pass
    
    # Analyze categories
    print("\n" + "="*80)
    print("CATEGORY PAGE AUDIT")
    print("="*80)
    
    category_gaps = []
    category_title_issues = []
    existing_categories = set()
    
    for category in GBP_CATEGORIES["SECONDARY"]:
        expected_url = EXPECTED_CATEGORY_URLS.get(category, "")
        found = False
        found_url = None
        found_title = None
        
        for page_url, page_data in pages.items():
            # Check for exact URL match
            if expected_url in page_url or page_url == expected_url:
                found = True
                found_url = page_data["url"]
                found_title = page_data["title"]
                existing_categories.add(category)
                break
            # Check for category name in URL
            category_slug = category.lower().replace(" ", "-")
            if category_slug in page_url:
                found = True
                found_url = page_data["url"]
                found_title = page_data["title"]
                existing_categories.add(category)
                break
        
        if not found:
            category_gaps.append({
                "category": category,
                "expected_url": f"/{EXPECTED_CATEGORY_URLS.get(category, '')}",
                "required_title": f"{category} Irvine | Professional Services | Ayrshire Fencing Group"
            })
        else:
            # Check title format
            expected_title_pattern = f"{category} Irvine"
            if not check_title_format(found_title, expected_title_pattern):
                category_title_issues.append({
                    "category": category,
                    "url": found_url,
                    "current_title": found_title,
                    "required_title": f"{category} Irvine | Professional Services | Ayrshire Fencing Group"
                })
    
    # Print category findings
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
    
    # Analyze services
    print("\n" + "="*80)
    print("SERVICE PAGE AUDIT")
    print("="*80)
    
    service_gaps = []
    service_title_issues = []
    existing_services = set()
    
    all_services = []
    for category, services in GBP_SERVICES.items():
        for service in services:
            all_services.append((service, category))
    
    for service, category in all_services:
        service_slug = service.lower().replace(" ", "-")
        found = False
        found_url = None
        found_title = None
        
        for page_url, page_data in pages.items():
            if "/service/" in page_url:
                page_slug = page_url.split("/service/")[-1]
                # Remove city suffixes for comparison
                page_slug_clean = re.sub(r'-(irvine|ayrshire|glasgow)$', '', page_slug, flags=re.IGNORECASE)
                service_slug_clean = re.sub(r'-(irvine|ayrshire|glasgow)$', '', service_slug, flags=re.IGNORECASE)
                
                if service_slug_clean in page_slug_clean or page_slug_clean in service_slug_clean:
                    found = True
                    found_url = page_data["url"]
                    found_title = page_data["title"]
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
            # Check title format - should include service name and city
            if "irvine" not in found_title.lower() and "ayrshire" not in found_title.lower():
                service_title_issues.append({
                    "service": service,
                    "url": found_url,
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
    
    if service_title_issues:
        print("SERVICE TITLE TAG ISSUES (Top 10):")
        for issue in service_title_issues[:10]:
            print(f"  - {issue['service']}")
            print(f"    Current: {issue['current_title']}")
            print(f"    Required: {issue['required_title']}\n")
        if len(service_title_issues) > 10:
            print(f"    ... and {len(service_title_issues) - 10} more title issues\n")
    
    # Generate summary report
    print("\n" + "="*80)
    print("EXECUTIVE SUMMARY")
    print("="*80)
    
    total_categories = len(GBP_CATEGORIES["SECONDARY"])
    total_services = len(all_services)
    
    category_compliance = (len(existing_categories) / total_categories) * 100
    service_compliance = (len(existing_services) / total_services) * 100
    
    print(f"\nCategory Pages: {len(existing_categories)}/{total_categories} ({category_compliance:.1f}%)")
    print(f"Service Pages: {len(existing_services)}/{total_services} ({service_compliance:.1f}%)")
    print(f"\nTotal Gaps Identified: {len(category_gaps) + len(service_gaps)}")
    print(f"Total Title Tag Issues: {len(category_title_issues) + len(service_title_issues)}")
    
    # Write detailed report to file
    with open("gbp_seo_gap_report.md", "w", encoding="utf-8") as f:
        f.write("# GBP SEO Structure Gap Analysis Report\n\n")
        f.write("## Executive Summary\n\n")
        f.write(f"- **Category Pages**: {len(existing_categories)}/{total_categories} ({category_compliance:.1f}%)\n")
        f.write(f"- **Service Pages**: {len(existing_services)}/{total_services} ({service_compliance:.1f}%)\n")
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
            f.write(f"- **Required**: `{issue['required_title']}`\n")
            f.write(f"- **URL**: {issue['url']}\n\n")
    
    print(f"\n✓ Detailed report saved to: gbp_seo_gap_report.md")

if __name__ == "__main__":
    analyze_structure()

