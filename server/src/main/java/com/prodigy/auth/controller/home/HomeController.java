package com.prodigy.auth.controller.home;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author badreddine
 **/
@RestController
public class HomeController {

    @GetMapping("/")
    public String home(){
        return "Welcome to the home page";
    }
}
