package com.prodigy.auth.controller;

import com.prodigy.auth.model.TokenResponse;
import com.prodigy.auth.model.User;
import com.prodigy.auth.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**
 * @author badreddine
 **/

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public User register(@RequestBody User user){
        return userService.register(user);
    }

    @PostMapping("/login")
    public TokenResponse login(@RequestBody User user){

        return userService.verify(user);
    }

    @PostMapping("/refresh")
    public TokenResponse refresh(@RequestBody Map<String, String> requestBody){
        String refreshToken = requestBody.get("refreshToken");
        return userService.refresh(refreshToken);
    }
}
