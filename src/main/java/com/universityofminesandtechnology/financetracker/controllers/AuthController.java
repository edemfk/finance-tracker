package com.universityofminesandtechnology.financetracker.controllers;

import com.universityofminesandtechnology.financetracker.dto.AuthRequestDTO;
import com.universityofminesandtechnology.financetracker.services.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody AuthRequestDTO request) {
        String message = userService.registerUser(request.getUsername(), request.getPassword());
        Map<String, String> response = new HashMap<>();
        response.put("message", message);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequestDTO request) {
        boolean authenticated = userService.authenticateUser(request.getUsername(), request.getPassword());
        Map<String, String> response = new HashMap<>();
        if (authenticated) {
            response.put("message", "Login successful");
            return ResponseEntity.ok(response);
        } else {
            response.put("message", "Invalid username or password");
            return ResponseEntity.status(401).body(response);
        }
    }
}
