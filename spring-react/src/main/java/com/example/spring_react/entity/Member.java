package com.example.spring_react.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.hibernate.annotations.CreationTimestamp;

import java.sql.Timestamp;
import java.util.Objects;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@ToString
public class Member {
    @Id
    private String userId;

    @Column
    private String userPassword;

    @Column
    private String username;

    @Column
    private String nickname;

    @Column
    private String email;

    @Column
    private String phoneNumber;

    @Column
    private Integer postalAddress;

    @Column
    private String address;

    @Column
    private String detailedAddress;

    @Column
    private String provider;

    @Column
    private String role;

    @CreationTimestamp
    private Timestamp createDate;

    public void update(Member member) {
        if(!Objects.isNull(member)) {
            if(member.userPassword != null) {
                this.userPassword = member.userPassword;
            }
            if(member.nickname != null) {
                this.nickname = member.nickname;
            }
            if(member.phoneNumber != null) {
                this.phoneNumber = member.phoneNumber;
            }
            if(member.postalAddress != null) {
                this.postalAddress = member.postalAddress;
            }
            if(member.address != null) {
                this.address = member.address;
            }
            if(member.detailedAddress != null) {
                this.detailedAddress = member.detailedAddress;
            }
        }
    }
}
