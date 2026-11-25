#!/usr/bin/env python3
"""
sync_catalog.py — Optional helper to auto-discover new HTML study files
in top-level folders and regenerate data/catalog.js.

Usage:
    python3 scripts/sync_catalog.py
"""
import html
import json
import os
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
IGNORED_FILES = {"index.html", "study.html"}
IGNORED_DIRS = {"assets", "data", "scripts", "styles", ".git", ".github"}

SECTION_DEFAULTS = {
    "System Design": {
        "id": "system-design",
        "title": "تصميم الأنظمة",
        "titleEn": "System Design",
        "subtitle": "من خادم واحد إلى أنظمة تخدم ملايين المستخدمين",
        "description": "سلسلة عملية متكاملة تشرح أساسيات تصميم الأنظمة القابلة للتوسع وقواعد البيانات والموثوقية.",
        "icon": "🏗️",
        "accent": "#2563eb",
        "gradient": "linear-gradient(135deg, #1e3a8a, #2563eb 60%, #10b981)",
        "level": "متوسط إلى متقدم",
        "language": "العربية + Python",
    },
    "English": {
        "id": "english",
        "title": "اللغة الإنجليزية",
        "titleEn": "English",
        "subtitle": "دروس تفاعلية مع النطق والبطاقات والتمارين",
        "description": "دروس لغة إنجليزية تفاعلية تشمل القواعد، النطق الصوتي، البطاقات التعليمية، والتمارين.",
        "icon": "🗣️",
        "accent": "#4f46e5",
        "gradient": "linear-gradient(135deg, #312e81, #4f46e5 55%, #06b6d4)",
        "level": "B1 / B2",
        "language": "العربية + English",
    },
    "Problem Solving": {
        "id": "problem-solving",
        "title": "حل المشكلات البرمجية",
        "titleEn": "Problem Solving",
        "subtitle": "من منهجية الحل إلى البرمجة الديناميكية والرسوم البيانية",
        "description": "سلسلة عملية من 8 دروس لتعلم مهارات حل المشكلات البرمجية والخوارزميات بلغة Python.",
        "icon": "🧩",
        "accent": "#2563eb",
        "gradient": "linear-gradient(135deg, #1e3a8a, #2563eb 60%, #10b981)",
        "level": "متوسط",
        "language": "العربية + Python",
    },
}


def strip_tags(raw: str) -> str:
    return re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", "", raw))).strip()


def extract_meta(path: Path) -> dict:
    text = path.read_text(encoding="utf-8", errors="ignore")[:15000]
    h1_m = re.search(r"<h1[^>]*>(.*?)</h1>", text, re.S | re.I)
    title_m = re.search(r"<title[^>]*>(.*?)</title>", text, re.S | re.I)
    desc_m = re.search(r'<header[^>]*class="hero"[^>]*>.*?<p[^>]*>(.*?)</p>', text, re.S | re.I)
    badges = [strip_tags(b) for b in re.findall(r'<span[^>]*class="badge[^"]*"[^>]*>(.*?)</span>', text, re.S | re.I)]

    full_h1 = strip_tags(h1_m.group(1)) if h1_m else (strip_tags(title_m.group(1)) if title_m else path.stem)
    # Split Arabic & English parts when formatted with (...) or —
    title_ar = full_h1
    title_en = ""
    if "—" in full_h1:
        parts = full_h1.split("—", 1)
        title_ar, title_en = parts[0].strip(), parts[1].strip()
    elif "(" in full_h1 and full_h1.endswith(")"):
        idx = full_h1.rfind("(")
        title_ar, title_en = full_h1[:idx].strip(), full_h1[idx + 1 : -1].strip()

    duration = "30 دقيقة"
    duration_min = 30
    level = "عام"
    tags = []
    for b in badges:
        if "دقيقة" in b:
            m = re.search(r"(\d+)", b)
            if m:
                duration_min = int(m.group(1))
                duration = f"{duration_min} دقيقة"
        elif "المستوى:" in b:
            level = b.split(":", 1)[1].strip()
        else:
            tags.append(b)

    return {
        "title": title_ar,
        "titleEn": title_en,
        "description": strip_tags(desc_m.group(1)) if desc_m else "",
        "duration": duration,
        "durationMinutes": duration_min,
        "level": level,
        "tags": tags,
    }


def natural_sort_key(path: Path):
    return [int(c) if c.isdigit() else c.lower() for c in re.split(r"(\d+)", str(path))]


def main():
    sections = []
    for entry in sorted(ROOT.iterdir()):
        if not entry.is_dir() or entry.name in IGNORED_DIRS or entry.name.startswith("."):
            continue

        html_files = sorted(entry.rglob("*.html"), key=natural_sort_key)
        if not html_files:
            continue

        slug = re.sub(r"[^a-z0-9]+", "-", entry.name.lower()).strip("-")
        defaults = SECTION_DEFAULTS.get(
            entry.name,
            {
                "id": slug,
                "title": entry.name,
                "titleEn": entry.name,
                "subtitle": f"مواد {entry.name}",
                "description": f"مجموعة دروس وملفات {entry.name}.",
                "icon": "📚",
                "accent": "#0284c7",
                "gradient": "linear-gradient(135deg, #0f172a, #0284c7 60%, #10b981)",
                "level": "متنوع",
                "language": "العربية",
            },
        )

        items = []
        for idx, file_path in enumerate(html_files, start=1):
            rel = file_path.relative_to(ROOT).as_posix()
            rel_inside = file_path.relative_to(entry).parent.as_posix()
            subfolder = "" if rel_inside == "." else rel_inside
            meta = extract_meta(file_path)
            if subfolder and subfolder not in meta["tags"]:
                meta["tags"].append(subfolder)
            items.append(
                {
                    "id": f"{defaults['id']}-{idx}",
                    "order": idx,
                    "subfolder": subfolder,
                    "file": rel,
                    **meta,
                }
            )

        sections.append({"id": defaults["id"], "folder": entry.name, **defaults, "items": items})

    output = "// Auto-generated by scripts/sync_catalog.py\nwindow.STUDY_CATALOG = " + json.dumps(
        sections, ensure_ascii=False, indent=2
    ) + ";\n"
    (ROOT / "data" / "catalog.js").write_text(output, encoding="utf-8")
    print(f"Synced {len(sections)} sections and {sum(len(s['items']) for s in sections)} lessons to data/catalog.js")


if __name__ == "__main__":
    main()
