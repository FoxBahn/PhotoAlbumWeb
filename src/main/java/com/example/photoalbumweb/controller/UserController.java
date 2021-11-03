package com.example.photoalbumweb.controller;

import com.example.photoalbumweb.model.User;
import com.example.photoalbumweb.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/")

public class UserController {

    @Autowired
    private UserRepository userRepository;

    //get all user
    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // create employee (postmappping)
    @PostMapping("/users")
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }
}


