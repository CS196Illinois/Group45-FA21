from app import db
from random import *
class Journal():
    entries = []
    def __init__(self):
        with open('entry.txt') as entryData:
            entries = entryData.readlines()
    def getRandomEntry(self):
        return self.entries[random.randint(0, self.entries.length()-1)]
    def submitEntry(self, body, prompt, user):
        entry = User(user_id=user.get_id(), prompt=prompt, body=body)
        db.session.add(entry)
        db.session.commit()


