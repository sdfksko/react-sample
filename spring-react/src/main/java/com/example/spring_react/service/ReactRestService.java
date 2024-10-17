package com.example.spring_react.service;

import com.example.spring_react.repository.MemberRepository;
import com.example.spring_react.entity.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class ReactRestService {

    @Autowired
    private MemberRepository memberRepository;

    public Member getMemberList(String userId, String userPassword) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        Member searchMember = new Member();
        Member member = memberRepository.findByUserId(userId);

        if(encoder.matches(userPassword, member.getUserPassword())) {
            searchMember = member;
        }

        return searchMember;
    }
}
