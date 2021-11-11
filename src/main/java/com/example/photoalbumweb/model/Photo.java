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
    private long idPhoto;

    @NotNull
    @Column(name = "Url_Location")
    private String urlLocation;

//define that FK is fetched from idUser in user
    @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(foreignKey = @ForeignKey(name = "idUser"),name = "idUser"/*,referencedColumnName ="idUser"*/)
//    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    private User users;


    @NotNull
    @Column(name = "Photo_Name")
    private String photoName;

//    @JsonIgnore
//    private long userParentId;

    public Photo( String urlLocation, User users, String photoName) {
        this.urlLocation = urlLocation;
        this.users = users;
        this.photoName = photoName;
    }

    public Photo() {
    }



    public long getIdPhoto() {
        return idPhoto;
    }

    public void setIdPhoto(long idPhoto) {
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

//    @JsonIgnore
//    public Long getUserParentId (){
//        return this.users.getId();
//    }

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
        return getIdPhoto() == photo.getIdPhoto() && getUrlLocation().equals(photo.getUrlLocation()) && getPhotoName().equals(photo.getPhotoName());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getIdPhoto(), getUrlLocation(), getPhotoName());
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
