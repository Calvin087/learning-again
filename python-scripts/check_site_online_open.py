import requests
import time
import webbrowser
# nouNoC0Da8X6eH

url = r"https://orangedigitalcenter.es/users/sign_in"

def url_is_reachable(site):
    dave = requests.get(site)
    
    while True:
        if dave.status_code == 200:
            print('Web site Live - opening!')
            webbrowser.open(site, new=2) 
            break
        else:
            print('Web site does not exist')
            time.sleep(3)

print(url_is_reachable(url))
