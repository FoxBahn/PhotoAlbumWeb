package com.example.photoalbumweb.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.*;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.jetbrains.annotations.NotNull;
import lombok.*;


@Entity
@Table(name = "photo", schema = "Phillip")
public class Photo implements Serializable {

    private static final long serialVersionUID = 6742731244607745540L;

    @Id
    @Column(name = "idPhoto")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idPhoto;

    @JsonIgnore
    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "idPhoto", referencedColumnName = "idPhoto")
    private Set<SharedPhotos> sharedPhotos;



    @Column(name = "Url_Location")
    private String urlLocation;

//define that FK is fetched from idUser in user

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL, optional = false)
    @JoinColumn(name = "idUser", referencedColumnName = "idUser", nullable = false)
    private User users;



    @Column(name = "Photo_Name")
    private String photoName;


    public Photo( String urlLocation, User users, String photoName) {
        this.urlLocation = urlLocation;
        this.users = users;
        this.photoName = photoName;
    }

    public Photo() {
    }


    public Long getIdPhoto() {
        return idPhoto;
    }

    public void setIdPhoto(Long idPhoto) {
        this.idPhoto = idPhoto;
    }

    public String getUrlLocation() {
        return urlLocation;
    }

    public void setUrlLocation(String urlLocation) {
        this.urlLocation = urlLocation;
    }

    public User getUsers() {
        return users;
    }

    public void setUsers(User users) {
        this.users = users;
    }

    public Set<SharedPhotos> getSharedPhotos() {
        return sharedPhotos;
    }

    public void setSharedPhotos(Set<SharedPhotos> sharedPhotos) {
        this.sharedPhotos = sharedPhotos;
    }

    public String getPhotoName() {
        return photoName;
    }

    public void setPhotoName(String photoName) {
        this.photoName = photoName;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Photo)) return false;
        Photo photo = (Photo) o;
        return
                idPhoto != null &&
                idPhoto.equals(((Photo) o).getIdPhoto());
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }

    @Override
    public String toString() {
        return "Photo{" +
                "urlLocation='" + urlLocation + '\'' +
                ", users=" + users + '\'' +
                ", photoName='" + photoName + '\'' +
                '}';
    }
}
