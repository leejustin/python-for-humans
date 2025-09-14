import time


def process_data(data: str) -> str:
    # timer logic inlined
    start = time.time()
    # main logic
    result = data.upper()
    # timer print mixed with logic
    print(f"Time: {time.time() - start:.2f}s")
    return result


