package com.example.spring_react.config.repository;

import com.example.spring_react.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.ArrayList;
import java.util.List;

public interface MemberRepository extends JpaRepository<Member, String> {
    public Member findByNickname(String nickname);

    public Member findByUserId(String userId);

    public Member findByUsername(String username);

    public Member findByPhoneNumber(String phoneNumber);

    public Member findByProvider(String provider);

    public Member findByEmail(String Email);

    public List<Member> findAllByUserPassword(String userPassword);

    public List<Member> findAllByUsername(String username);

    public List<Member> findAllByProvider(String provider);

    @Override
    ArrayList<Member> findAll();
}
