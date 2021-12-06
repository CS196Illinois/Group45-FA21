from random import randint
from app.models import User

class Affirmations():
    affirmations = []
    def __init__(self):
        with open('app/affirmationlist.txt') as entryData:
            self.affirmations = entryData.readlines()
    def getRandomAffirmation(self):
        return self.affirmations[randint(0, len(self.affirmations)-1)].strip()