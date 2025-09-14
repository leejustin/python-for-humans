import time
from functools import wraps


def with_timer(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        print(f"Time: {time.time() - start:.2f}s")
        return result
    return wrapper


@with_timer
def process_data(data: str) -> str:
    return data.upper()


