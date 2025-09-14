from typing import List, Optional


def send_email(
    to: str,
    subject: str,
    body: str = "",
    cc: Optional[List[str]] = None,
    priority: str = "normal",
) -> bool:
    if not to or not subject:
        raise ValueError("to and subject are required")
    # pretend send
    return True


