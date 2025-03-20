package com.honeywell.service;

import org.springframework.security.crypto.encrypt.Encryptors;
import org.springframework.security.crypto.encrypt.TextEncryptor;
import org.springframework.stereotype.Service;

@Service
public class EncryptionService {
    private static final String SECRET_KEY = "mySecretKey"; // Change this to a secure key
    private static final String SALT = "12345678"; // Use a randomly generated salt

    private final TextEncryptor encryptor = Encryptors.text(SECRET_KEY, SALT);

    public String encrypt(String data) {
        return encryptor.encrypt(data);
    }

    public String decrypt(String encryptedData) {
        return encryptor.decrypt(encryptedData);
    }
}
