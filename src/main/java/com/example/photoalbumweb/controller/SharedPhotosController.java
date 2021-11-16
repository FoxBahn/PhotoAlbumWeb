package com.example.photoalbumweb.controller;

import com.example.photoalbumweb.model.Photo;
import com.example.photoalbumweb.model.SharedPhotos;
import com.example.photoalbumweb.model.SharedPhotosID;
import com.example.photoalbumweb.model.User;
import com.example.photoalbumweb.repository.SharedPhotosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/shared_photos")

public class SharedPhotosController {

    @Autowired
    private SharedPhotosRepository sharedPhotosRepository;

//    get allSharedPhotos
    @GetMapping("")
    public List<SharedPhotos> getAllSharedPhotos() {return sharedPhotosRepository.findAll();
    }


    // create entry For shared Photo(Use when photo is being shard with another user) (postmappping)
    @PostMapping("")
    public SharedPhotos createSharedPhotos(@RequestBody Long idP, Long idU){

//        Long idP = photo.getIdPhoto();
//        Long idU = user.getId();
        SharedPhotos sharedPhotos = new SharedPhotos();
        try {
            SharedPhotosID sharedPhotosID = new SharedPhotosID(idP, idU);
            sharedPhotos = new SharedPhotos(sharedPhotosID);
        }catch (Exception e) {

            throw new RuntimeException("Unable to create sharedPhoto from photoId: "+idP+"  and userId: "+idU , e);
        }

        return sharedPhotosRepository.save(sharedPhotos);
    }


    @GetMapping("/users/{id}")
    public ResponseEntity<List<SharedPhotos>> getAllSharedPhotosByUserID(@PathVariable Long id) {
        List<SharedPhotos> sharedPhotos = sharedPhotosRepository.getSharedPhotosByNativeIDUser(id);
        return ResponseEntity.ok(sharedPhotos);
    }

    @GetMapping("/photos/{id}")
    public ResponseEntity<List<SharedPhotos>> getAllSharedPhotosByPhotoID(@PathVariable Long id) {
        List<SharedPhotos> sharedPhotos = sharedPhotosRepository.getSharedPhotosByNativeIDPhoto(id);
        return ResponseEntity.ok(sharedPhotos);
    }

    @DeleteMapping("{idP}/{idU}")
    public ResponseEntity<String> deleteSharedPhoto(@PathVariable Long idP ,@PathVariable Long idU ){

        sharedPhotosRepository.deleteSpecificSharedPhotos(idP,idU);
        return new ResponseEntity<>("Photo Share with PhotoID :" + idP+ " and UserID: "+idU+" was deleted successfully", HttpStatus.OK);
    }


}

