package com.example.photoalbumweb.repository;

import com.example.photoalbumweb.model.SharedPhotos;
import com.example.photoalbumweb.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface SharedPhotosRepository extends JpaRepository<SharedPhotos, Long> {


    @Query(value = "SELECT " +
            "       u" +
            "   FROM " +
            "       SharedPhotos u " +
            "WHERE u.id.idUser = :idUser")
    SharedPhotos getSharedPhotosByNativeIDUser(Long idUser);

    @Query(value = "SELECT " +
            "       u" +
            "   FROM " +
            "       SharedPhotos u " +
            "WHERE u.id.idPhoto = :idPhoto")
    SharedPhotos getSharedPhotosByNativeIDPhoto(Long idPhoto);

}
