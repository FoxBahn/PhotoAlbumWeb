//package com.example.photoalbumweb.model;
//
//import javax.persistence.*;
//import javax.persistence.Id;
//import javax.persistence.Table;
//import java.io.Serializable;
//import java.util.Objects;
//
//
//@Entity
////@Table(name = "shared_photos", schema = "Phillip")
//public class SharedPhotos implements Serializable {
//
//    private static final long serialVersionUID = -6611774608928420761L;
//
//    @EmbeddedId
//    private SharedPhotosID id = new SharedPhotosID();
//
////    @JoinColumn(name = "idUser")
//    @ManyToOne(fetch = FetchType.LAZY)
//    @MapsId("idUser")
//    private User user;
//
////    @JoinColumn(name = "idPhoto")
//    @ManyToOne(fetch = FetchType.LAZY)
//    @MapsId("idPhoto")
//    private Photo photo;
//
//    public SharedPhotos(User user, Photo photo) {
//        this.user = user;
//        this.photo = photo;
//    }
//
//    public SharedPhotos() {
//
//    }
//
//    public User getUser() {
//        return user;
//    }
//
//    public void setUser(User user) {
//        this.user = user;
//    }
//
//    public Photo getPhoto() {
//        return photo;
//    }
//
//    public void setPhoto(Photo photo) {
//        this.photo = photo;
//    }
//
//    @Override
//    public boolean equals(Object o) {
//        if (this == o) return true;
//        if (!(o instanceof SharedPhotos)) return false;
//        SharedPhotos that = (SharedPhotos) o;
//        return Objects.equals(getUser(), that.getUser()) && Objects.equals(getPhoto(), that.getPhoto());
//    }
//
//    @Override
//    public int hashCode() {
//        return Objects.hash(getUser(), getPhoto());
//    }
////    @Override
////    public String toString() {
////        return "SharedPhotos{" +
////                "user=" + user +
////                ", photo=" + photo +
////                '}';
////    }
//}
