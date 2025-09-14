from typing import Dict, List


def summarize_packing(items: List[Dict]) -> Dict:
    """Group steps inside a single function: validate → transform → return."""
    # validate
    if not items:
        return {"count": 0, "labels": []}

    # transform
    labels = [f"{i['name']} ×{i.get('qty', 1)}" for i in items]

    # return
    return {"count": len(items), "labels": labels}


