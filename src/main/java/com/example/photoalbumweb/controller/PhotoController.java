package com.example.photoalbumweb.controller;

import com.example.photoalbumweb.exception.ResourceNotFoundException;
import com.example.photoalbumweb.model.Photo;
import com.example.photoalbumweb.model.User;
import com.example.photoalbumweb.repository.PhotoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/photos")

public class PhotoController {

    @Autowired
    private PhotoRepository photoRepository;

    //get all photo
    @GetMapping("")
    public List<Photo> getAllPhotos() {
        List<Photo> photos = photoRepository.findAll();
        return photoRepository.findAll();
    }

    // create image metadata (postmappping)
    @PostMapping("")
    public Photo createPhoto(@RequestBody Photo photo){
        return photoRepository.save(photo);
    }

    //get image by id
    @GetMapping("/{id}")
    public ResponseEntity<Photo> getPhotoById(@PathVariable Long id) {
        Photo photo = photoRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Photo does not exist with ID: " + id));
        return ResponseEntity.ok(photo);
    }

    //delete images by id


    //delete images by url


    //get images by url?

    //get images by type?

    //update image by url?


}
