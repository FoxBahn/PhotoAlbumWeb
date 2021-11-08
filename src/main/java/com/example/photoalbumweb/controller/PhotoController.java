package com.example.photoalbumweb.controller;

import com.example.photoalbumweb.model.Photo;
import com.example.photoalbumweb.model.User;
import com.example.photoalbumweb.repository.PhotoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/")

public class PhotoController {

    @Autowired
    private PhotoRepository photoRepository;

    //get all photo
    @GetMapping("/photos")
    public List<Photo> getAllPhotos() {
        return photoRepository.findAll();
    }

    // create image metadata (postmappping)
    @PostMapping("/photos")
    public Photo createPhoto(@RequestBody Photo photo){
        return photoRepository.save(photo);
    }

}
