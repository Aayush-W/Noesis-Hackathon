import os
path = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(__file__))), ".env")
print(f"Computed path: {path}")
print(f"Exists: {os.path.exists(path)}")
if os.path.exists(path):
    with open(path, 'r') as f:
        print(f"First line: {f.readline().strip()}")
