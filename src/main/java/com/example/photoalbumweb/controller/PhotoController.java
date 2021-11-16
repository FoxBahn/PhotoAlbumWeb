package com.example.photoalbumweb.controller;

import com.example.photoalbumweb.exception.ResourceNotFoundException;
import com.example.photoalbumweb.model.Photo;
import com.example.photoalbumweb.model.User;
import com.example.photoalbumweb.repository.PhotoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
        return photos;
    }

    // create image metadata (postmappping)
    @PostMapping("")
    public Photo createPhoto(@RequestBody Photo photoDetails) {

        return photoRepository.save(photoDetails);
    }

    //get image by id
    @GetMapping("{id}")
    public ResponseEntity<Photo> getPhotoById(@PathVariable Long id) {
        Photo photo = new Photo();

        photo = photoRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Photo does not exist with ID: " + id));

 return ResponseEntity.ok(photo);
}


    //////native query test get by id
//    @GetMapping("{id}")
//    public String getPhotoById(@PathVariable Long id) {
//        User user = new User();
//        return photoRepository.getPhotoUrlNative(id);
//    }

    //delete images by id

    @DeleteMapping("{id}")
    public ResponseEntity<String> deletePhoto(@PathVariable(name = "id") Long id){
        photoRepository.deleteById(id);
        return new ResponseEntity<>("Photo with ID :" + id + " was deleted successfully", HttpStatus.OK);
    }

    //delete images by url


    //update image by id
    @PutMapping("{id}")
    public ResponseEntity<Photo> updatePhoto(@PathVariable Long id, @RequestBody Photo photoDetails) {
        Photo photo = photoRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Photo does not exist with ID: " + id));
        photo.setUrlLocation(photoDetails.getUrlLocation());
        photo.setUsers(photoDetails.getUsers());
        photo.setPhotoName(photoDetails.getPhotoName());


        Photo updatedPhoto = photoRepository.save(photo);
        return ResponseEntity.ok(updatedPhoto);
    }

}
