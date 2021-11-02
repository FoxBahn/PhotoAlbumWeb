package com.example.photoalbumweb.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "user", schema = "Phillip")
public class User implements Serializable {

    private static final long serialVersionUID = 6496069050984258296L;


    @Id
    @Column(name = "idUser")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idUser;

    @Column(name = "FName")
    private String firstName;

    @Column(name = "LName")
    private String lastName;

    @Column(name = "Cell")
    private String cell;

    @Column(name = "Email")
    private String email;

    @Column(name = "Type")
    private String type;

    @Column(name = "Password")
    private String password;

    public User(String firstName, String lastName, String cell, String email, String type, String password) {
//        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.cell = cell;
        this.email = email;
        this.type = type;
        this.password = password;
    }

    public User(long idUser, String firstName, String lastName, String cell, String email, String type, String password) {
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof User)) return false;
        User user = (User) o;
        return getId() == user.getId() && Objects.equals(getFirstName(), user.getFirstName()) && Objects.equals(getLastName(), user.getLastName()) && Objects.equals(getCell(), user.getCell()) && Objects.equals(getEmail(), user.getEmail()) && Objects.equals(getType(), user.getType()) && Objects.equals(getPassword(), user.getPassword());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getFirstName(), getLastName(), getCell(), getEmail(), getType(), getPassword());
    }

    @Override
    public String toString() {
        return "User{" +
                "idUser =" + idUser +
                "firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", cell='" + cell + '\'' +
                ", email='" + email + '\'' +
                ", type='" + type + '\'' +
                '}';
    }
}
