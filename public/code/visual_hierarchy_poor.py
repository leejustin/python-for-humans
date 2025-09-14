from typing import Dict, List


def summarize_packing(items: List[Dict]) -> Dict:
    # everything mashed together: no spacing, no clear steps
    if not items: return {"count": 0, "labels": []}
    labels = []
    for i in items: labels.append(f"{i['name']} ×{i.get('qty', 1)}")
    return {"count": len(items), "labels": labels}


