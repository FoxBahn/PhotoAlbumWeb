package com.example.photoalbumweb.repository;

import com.example.photoalbumweb.model.Photo;
import com.example.photoalbumweb.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface PhotoRepository extends JpaRepository<Photo, Long> {

//    @Query(value = "SELECT u.idUser FROM Photo u WHERE u.idPhoto = :idPhoto ")
//    String getPhotoUrlNative(Long idPhoto);


}
