package com.example.photoalbumweb.repository;

import com.example.photoalbumweb.model.User;
import org.hibernate.mapping.Collection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {



    @Query(value = "SELECT " +
            "       u" +
            "   FROM " +
            "       User u" +
            "   WHERE u.idUser = :idUser ")
    User getUserByIDNative(Long idUser);

}
