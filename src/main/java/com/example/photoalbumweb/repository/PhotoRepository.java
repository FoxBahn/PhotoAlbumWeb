package com.example.photoalbumweb.repository;

import com.example.photoalbumweb.model.Photo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PhotoRepository extends JpaRepository<Photo, Long> {

//    @Query(value = "SELECT u.idUser FROM Photo u WHERE u.idPhoto = :idPhoto ")
//    String getPhotoUrlNative(Long idPhoto);

    @Query(value = "SELECT p FROM Photo p WHERE p.photoName LIKE '%name%' " )
    List<Photo> findByTitleLike(String name);
}
