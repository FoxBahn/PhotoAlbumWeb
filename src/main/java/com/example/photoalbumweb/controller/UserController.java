package com.example.photoalbumweb.controller;

import com.example.photoalbumweb.exception.ResourceNotFoundException;
import com.example.photoalbumweb.model.User;
import com.example.photoalbumweb.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/users")

public class UserController {

    @Autowired
    private UserRepository userRepository;

    //get all user
    @GetMapping("")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }



    // create employee (postmappping)
    @PostMapping("")
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    // get user by id REST(getmapping)
//    @GetMapping("{id}")
//    public ResponseEntity<User> getUserById(@PathVariable Long id) {
//        User user = userRepository.findById(id)
//                .orElseThrow(() -> new ResourceNotFoundException("User does not exist with ID: " + id));
//        return ResponseEntity.ok(user);
//    }

    //native query test
    @GetMapping("{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        User user = userRepository.getUserByIDNative(id);
//                .orElseThrow(() -> new ResourceNotFoundException("User does not exist with ID: " + id));
        return ResponseEntity.ok(user);
    }


    // update user by id REST(PutMapping)
    @PutMapping("{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User userDetails) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User does not exist with ID: " + id));
        user.setFirstName(userDetails.getFirstName());
        user.setLastName(userDetails.getLastName());
        user.setCell(userDetails.getCell());
        user.setEmail(userDetails.getEmail());
        user.setType(userDetails.getType());
        user.setPassword(userDetails.getPassword());

        User updatedUser = userRepository.save(user);
        return ResponseEntity.ok(updatedUser);
    }

    //delete user by id
//    @DeleteMapping("{id}")
//    public ResponseEntity<String> deleteUserBy(@PathVariable Long id){
//        userRepository.deleteById(id);
//        return new ResponseEntity<>("User with ID :" + id + " was deleted successfully", HttpStatus.OK);
//    }

    @DeleteMapping("{id}")
    public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable(name = "id") Long id){
        User user = userRepository.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("User with ID :" + id + " was deleted successfully"));

        userRepository.delete(user);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

}


