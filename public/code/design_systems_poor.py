import time


class User:
    def __init__(self, user_id, email):
        self.user_id = user_id
        self.email = email
        self.timestamp = time.time()

    def store(self):
        return True

    def serialize(self):
        return {"user_id": self.user_id, "email": self.email}


