package com.example.photoalbumweb.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "photo", schema = "Phillip")
public class Photo implements Serializable {

    private static final long serialVersionUID = 6742731244607745540L;


    @Id
    @Column(name = "idPhoto")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idPhoto;

    @Column(name = "Type")
    private String type;

    @Column(name = "Url_Location")
    private String urlLocation;

    @Column(name = "Uploaded_IdUser")
    private Long uploadIdUser;

    @Column(name = "Photo_Name")
    private String photoName;

    public Photo(long idPhoto, String type, String urlLocation, Long uploadIdUser, String photoName) {
        this.idPhoto = idPhoto;
        this.type = type;
        this.urlLocation = urlLocation;
        this.uploadIdUser = uploadIdUser;
        this.photoName = photoName;
    }
    public Photo(String type, String urlLocation, Long uploadIdUser, String photoName) {
        this.type = type;
        this.urlLocation = urlLocation;
        this.uploadIdUser = uploadIdUser;
        this.photoName = photoName;
    }

    public Photo() {

    }

    public long getId() {
        return idPhoto;
    }

    public void setId(long id) {
        this.idPhoto = idPhoto;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getUrlLocation() {
        return urlLocation;
    }

    public void setUrlLocation(String urlLocation) {
        this.urlLocation = urlLocation;
    }

    public Long getUploadIdUser() {
        return uploadIdUser;
    }

    public void setUploadIdUser(Long uploadIdUser) {
        this.uploadIdUser = uploadIdUser;
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
        return getId() == photo.getId() && Objects.equals(getType(), photo.getType()) && Objects.equals(getUrlLocation(), photo.getUrlLocation()) && Objects.equals(getUploadIdUser(), photo.getUploadIdUser()) && Objects.equals(getPhotoName(), photo.getPhotoName());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getType(), getUrlLocation(), getUploadIdUser(), getPhotoName());
    }

    @Override
    public String toString() {
        return "Photo{" +
                "idPhoto=" + idPhoto +
                ", type='" + type + '\'' +
                ", urlLocation='" + urlLocation + '\'' +
                ", uploadIdUser=" + uploadIdUser +
                ", photoName='" + photoName + '\'' +
                '}';
    }
}
