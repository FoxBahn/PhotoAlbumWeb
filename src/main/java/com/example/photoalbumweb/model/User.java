package com.example.photoalbumweb.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.*;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;
import org.jetbrains.annotations.NotNull;


@Entity
@Table(name = "user", schema = "Phillip")
public class User implements Serializable {

    private static final long serialVersionUID = 6496069050984258296L;

    @Id
    @Column(name = "idUser")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idUser;

    @NotNull
    @Column(name = "FName")
    private String firstName;

    @NotNull
    @Column(name = "LName")
    private String lastName;

    @NotNull
    @Column(name = "Cell")
    private String cell;

    @NotNull
    @Column(name = "Email")
    private String email;

    @NotNull
    @Column(name = "Type")
    private String type;

    @NotNull
    @Column(name = "Password")
    private String password;

//    @JsonIgnore
    @JsonManagedReference
    @OneToMany(mappedBy = "users",cascade = CascadeType.PERSIST,fetch = FetchType.LAZY)
    private Set<Photo> photos = new HashSet<Photo>();



    public User(String firstName, String lastName, String cell, String email, String type, String password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.cell = cell;
        this.email = email;
        this.type = type;
        this.password = password;
    }

    public User(long idUser, @NotNull String firstName, @NotNull String lastName, @NotNull String cell, @NotNull String email, @NotNull String type, @NotNull String password, Set<Photo> photos) {
        this.idUser = idUser;
        this.firstName = firstName;
        this.lastName = lastName;
        this.cell = cell;
        this.email = email;
        this.type = type;
        this.password = password;
        this.photos = photos;
    }

    public User(long idUser, @NotNull String firstName, @NotNull String lastName, @NotNull String cell, @NotNull String email, @NotNull String type, @NotNull String password) {
        this.idUser = idUser;
        this.firstName = firstName;
        this.lastName = lastName;
        this.cell = cell;
        this.email = email;
        this.type = type;
        this.password = password;
    }

    public User() {
    }


    public long getId() {
        return idUser;
    }

    public void setId(long idUser) {
        this.idUser = idUser;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getCell() {
        return cell;
    }

    public void setCell(String cell) {
        this.cell = cell;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Set<Photo> getPhotos() {
        return photos;
    }

    public void setPhotos(Set<Photo> photos) {
        this.photos = photos;
        for(Photo p : photos)
        {
            p.setUsers(this);
        }
    }



    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof User)) return false;
        User user = (User) o;
        return Objects.equals(getId(), user.getId()) && getFirstName().equals(user.getFirstName()) && getLastName().equals(user.getLastName()) && getCell().equals(user.getCell()) && getEmail().equals(user.getEmail()) && getType().equals(user.getType()) && getPassword().equals(user.getPassword());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getFirstName(), getLastName(), getCell(), getEmail(), getType(), getPassword());
    }

    @Override
    public String toString() {
        return "User{" +
                "idUser=" + idUser +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", cell='" + cell + '\'' +
                ", email='" + email + '\'' +
                ", type='" + type + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
