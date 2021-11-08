import urlopen
import json
import requests

url = "https://www.affirmations.dev"
response = requests.get(url)


def print_affirmation():
    print(response.json())

