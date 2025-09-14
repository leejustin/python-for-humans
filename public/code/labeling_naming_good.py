from datetime import date
from typing import List


def add_item_to_list(items: List[str], item_name: str) -> List[str]:
    """Add a packing item by its clear name."""
    return items + [item_name]


def trip_length_days(start: date, end: date) -> int:
    """Calculate trip duration from dates."""
    return (end - start).days


def is_valid_item_name(name: str) -> bool:
    """Very basic validity check for a packing item label."""
    return len(name.strip()) > 0 and "," not in name


def format_item_label(name: str, qty: int = 1) -> str:
    """Human-friendly label for a packing list row."""
    return f"{name} ×{qty}"


