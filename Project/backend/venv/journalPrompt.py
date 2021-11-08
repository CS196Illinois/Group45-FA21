import urlopen
import json
import requests
url = "https://api.xero.com/api.xro/2.0/Journals"

response = requests.get(url)
print(response.json())

