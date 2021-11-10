//package com.example.photoalbumweb.controller;
//
//import com.example.photoalbumweb.exception.ResourceNotFoundException;
//import com.example.photoalbumweb.model.SharedPhotos;
//import com.example.photoalbumweb.repository.SharedPhotosRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@CrossOrigin(origins = "http://localhost:3000")
//@RestController
//@RequestMapping("/api/shared_photos")
//
//public class SharedPhotosController {
//
//    @Autowired
//    private SharedPhotosRepository sharedPhotosRepository;
//
//    //get allSharedPhotos
//    @GetMapping("")
//    public List<SharedPhotos> getAllSharedPhotos() {
//        return sharedPhotosRepository.findAll();
//    }
//
//    // create entry For shared Photo(Use when photo is being shard with another user) (postmappping)
//    @PostMapping("")
//    public SharedPhotos createSharedPhotos(@RequestBody SharedPhotos sharedPhotos){
//        return sharedPhotosRepository.save(sharedPhotos);
//    }
//
//    //get Shared photo by id??????  not sure if working and what pk wil be used
//    @GetMapping("{id}")
//    public ResponseEntity<SharedPhotos> getSharedPhotosById(@PathVariable Long id) {
//        SharedPhotos sharedPhotos = sharedPhotosRepository.findById(id)
//                .orElseThrow(() -> new ResourceNotFoundException("Photo does not exist with ID: " + id));
//        return ResponseEntity.ok(sharedPhotos);
//    }
//
//
//}
//
