package com.honeywell.controller;

import org.springframework.web.bind.annotation.*;
import com.honeywell.service.EncryptionService;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000") // Allow frontend requests
public class EncryptionController {
    
    private final EncryptionService encryptionService;

    public EncryptionController(EncryptionService encryptionService) {
        this.encryptionService = encryptionService;
    }

    @PostMapping("/encrypt")
    public ResponseEntity<String> encrypt(@RequestBody RequestData requestData) { 
        String encryptedText = encryptionService.encrypt(requestData.getText());
        return ResponseEntity.ok(encryptedText);
    }

    @PostMapping("/decrypt")
    public ResponseEntity<String> decrypt(@RequestBody RequestData requestData) { 
        String decryptedText = encryptionService.decrypt(requestData.getText());
        return ResponseEntity.ok(decryptedText);
    }

    // DTO class for request data
    public static class RequestData {
        private String text;

        public String getText() { return text; }
        public void setText(String text) { this.text = text; }
    }
}
