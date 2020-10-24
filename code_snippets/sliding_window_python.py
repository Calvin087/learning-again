# https://www.codewars.com/kata/5c511d8877c0070e2c195faf/train/python

from math import ceil

def validate(username, password):
    if username == "" or password == "":
        return False
        # >> Cathes any empty files
    
    test = range(ceil(len(username) /2))
        # >> range(0, 4)

    for i in range(ceil(len(username) /2)):
        if username[i : i + ceil(len(username)/2)] in password:
            return False
        # >> user
        # >> sern
        # >> erna
        # >> rnam

    for i in range(ceil(len(password) /2)):
        if password[i : i + ceil(len(password)/2)] in username:
            return False
        # >> asdfg
        # >> sdfgh
        # >> dfghj
        # >> fghjk
        # >> ghjkl

    return True

print(validate("username", "myname")) #False)
print(validate("sword", "password")) #False)
print(validate("qwertyuiop", "asdfghjkl")) # True)
print(validate("MASH", "M*A*S*H")) # True)
print(validate("asdfghjkl", "lkjhgfdsa")) # True)