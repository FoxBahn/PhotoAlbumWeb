package com.example.photoalbumweb.model;

import org.springframework.transaction.annotation.Transactional;

import javax.persistence.*;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.Objects;


@Entity
@Table(name = "shared_photos", schema = "Phillip")
public class SharedPhotos implements Serializable {

    private static final long serialVersionUID = -6611774608928420761L;

    @EmbeddedId

    private SharedPhotosID id;


    public SharedPhotos(SharedPhotosID id) {
        this.id = id;
    }

    public SharedPhotos() {
    }

    public SharedPhotosID getId() {
        return id;
    }

    public void setId(SharedPhotosID id) {
        this.id = id;
    }

//    @Override
//    public String toString() {
//        return "SharedPhotos{" +
//                "id=" + id +
//                '}';
//    }
}
