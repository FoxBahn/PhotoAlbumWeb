//package com.example.photoalbumweb.service;
//
//import com.example.photoalbumweb.model.Photo;
//import com.example.photoalbumweb.model.User;
//import com.example.photoalbumweb.repository.PhotoRepository;
//import com.example.photoalbumweb.repository.UserRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import org.springframework.web.bind.annotation.PathVariable;
//
//import java.util.List;
//import java.util.Set;
//
//@Service
//public class PhotoService {
//
//    @Autowired
//    private UserRepository userRepository;
//
//    @Autowired
//    private PhotoRepository photoRepository;
//
//    public List<Photo> getAllPhotos(){
//        return photoRepository.findAll();
//    }
//
//
//    public Photo createPhoto(Photo photo) {
//        User user = userRepository.findById(photo.getUsers().getId()).orElse(null);
//        if (null == user) {
//            user = new User();
//        }
//        user.setFirstName(photo.getUsers().getFirstName());
//        user.setLastName(photo.getUsers().getLastName());
//        user.setCell(photo.getUsers().getCell());
//        user.setEmail(photo.getUsers().getEmail());
//        user.setType(photo.getUsers().getType());
//        user.setPassword(photo.getUsers().getPassword());
//
//        photo.setUsers(user);
//        return photoRepository.save(photo);
//    }
//
//
//    public Photo editPhotos(Photo entity) {
//        return photoRepository.save(entity);
//    }
//
//    public void deletePhotos(Long id) {
//        photoRepository.deleteById(id);
//    }
//}
