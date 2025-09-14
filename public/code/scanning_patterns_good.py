"""Packing app for saving items to my PyCon packing list.

Used for creating and saving to a packing list.
"""

import os
import json

TRIP = "PyCon"


class PackingList:
    def __init__(self, items):
        self.items = items

    def pack(self):
        return f"Packing {self.items} for {TRIP}"


def default_items():
    return ["passport", "laptop"]


if __name__ == "__main__":
    plist = PackingList(default_items())
    print(plist.pack())


