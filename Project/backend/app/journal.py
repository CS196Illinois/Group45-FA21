from app import db
from random import randint
from app.models import User

class Journal():
    entries = []
    def __init__(self):
        with open('app/entry.txt') as entryData:
            self.entries = entryData.readlines()
    def getRandomEntry(self):
        return self.entries[randint(0, len(self.entries)-1)]
    def submitEntry(self, body, prompt, user):
        entry = User(user_id=user.get_id(), prompt=prompt, body=body)
        db.session.add(entry)
        db.session.commit()