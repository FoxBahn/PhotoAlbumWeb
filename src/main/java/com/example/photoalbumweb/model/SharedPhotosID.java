package com.example.photoalbumweb.model;

import javax.persistence.*;
import javax.persistence.Embeddable;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class SharedPhotosID implements Serializable {

    @Column(name = "idPhoto")
    private Long idPhoto;


    @Column(name = "idUser")
    private Long idUser;

    public SharedPhotosID() {
    }

    public SharedPhotosID(Long idPhoto, Long idUser) {
        this.idPhoto = idPhoto;
        this.idUser = idUser;
    }

    public Long getIdPhoto() {
        return idPhoto;
    }

    public void setIdPhoto(Long idPhoto) {
        this.idPhoto = idPhoto;
    }

    public Long getIdUser() {
        return idUser;
    }

    public void setIdUser(Long idUser) {
        this.idUser = idUser;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof SharedPhotosID)) return false;
        SharedPhotosID that = (SharedPhotosID) o;
        return Objects.equals(getIdPhoto(), that.getIdPhoto()) && Objects.equals(getIdUser(), that.getIdUser());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getIdPhoto(), getIdUser());
    }

//    @Override
//    public String toString() {
//        return "SharedPhotosID{" +
//                "idPhoto=" + idPhoto +
//                ", idUser=" + idUser +
//                '}';
//    }
}
