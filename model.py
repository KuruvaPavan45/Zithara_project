# model.py
import sys
import json
import random

# Placeholder: Replace with actual CNN logic
def match_jewellery(image_path):
    return [
        {"id": 1, "name": "Gold Ring", "similarity": random.uniform(0.8, 1)},
        {"id": 2, "name": "Diamond Necklace", "similarity": random.uniform(0.7, 0.95)}
    ]

if _name_ == "_main_":
    image_path = sys.argv[1]
    matches = match_jewellery(image_path)
    print(json.dumps(matches))