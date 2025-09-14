from typing import List, Tuple


def calculate_total(items: List[Tuple[int, int]]) -> int:
    total = 0
    for price, qty in items:
        total += price * qty
    return total


