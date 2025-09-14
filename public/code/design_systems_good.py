from datetime import datetime


class BaseModel:
    def __init__(self, id: str):
        self.id = id
        self.created_at = datetime.now()

    def save(self) -> bool:
        return True

    def delete(self) -> bool:
        return True

    def to_dict(self) -> dict:
        return {"id": self.id, "created_at": self.created_at.isoformat()}


class User(BaseModel):
    def __init__(self, id: str, email: str):
        super().__init__(id)
        self.email = email

    def to_dict(self) -> dict:
        d = super().to_dict()
        d["email"] = self.email
        return d


