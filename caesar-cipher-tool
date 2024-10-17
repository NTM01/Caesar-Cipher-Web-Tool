def caesar_cipher(text, shift, mode='encrypt'):
    result = ""
    
    # Adjust shift for decryption
    if mode == 'decrypt':
        shift = -shift
    
    for char in text:
        if char.isalpha():  # Check if the character is a letter
            # Handle uppercase letters
            start = ord('A') if char.isupper() else ord('a')
            # Calculate the new character's position
            new_char = chr((ord(char) - start + shift) % 26 + start)
            result += new_char
        else:
            # Non-alphabetic characters remain unchanged
            result += char
            
    return result

def main():
    print("Caesar Cipher Program")
    mode = input("Type 'encrypt' to encrypt or 'decrypt' to decrypt: ").strip().lower()
    message = input("Enter your message: ")
    shift = int(input("Enter the shift value (0-25): "))
    
    if mode not in ['encrypt', 'decrypt']:
        print("Invalid mode selected. Please choose 'encrypt' or 'decrypt'.")
        return
    
    # Encrypt or decrypt the message based on the mode
    result = caesar_cipher(message, shift, mode)
    
    print(f"Result: {result}")

if __name__ == "__main__":
    main()
