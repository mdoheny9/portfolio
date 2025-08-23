import datetime as dt
import requests

BASE_URL = "https://api.openweathermap.org/data/2.5/weather?lat="
LAT = "48.464876"
LON = "-123.3078814"
API_KEY = "11435d4edf38aaa7523ec41cc83544c8"

url = BASE_URL + LAT + "&lon=" + LON + "&appid=" + API_KEY

response = requests.get(url).json()

print(response)