package com.example.spring_react.dto;

import com.example.spring_react.entity.Member;
import lombok.Data;
import lombok.ToString;

import java.sql.Timestamp;

@Data
@ToString
public class MemberDTO {
    private String userId;
    private String userPassword;
    private String username;
    private String nickname;
    private String email;
    private String phoneNumber;
    private Integer postalAddress;
    private String address;
    private String detailedAddress;
    private String provider;
    private String role;
    private Timestamp createDate;

    public Member createMemberEntity(MemberDTO memberDTO) {
        return new Member(userId, userPassword, username, nickname, email, phoneNumber, postalAddress, address, detailedAddress, provider, role, createDate);
    }
}
