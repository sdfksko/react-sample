package com.example.spring_react.config.service;

import com.example.spring_react.config.repository.MemberRepository;
import com.example.spring_react.dto.MemberDTO;
import com.example.spring_react.entity.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReactRestService {

    @Autowired
    private MemberRepository memberRepository;

    public Member getMemberList(String username, String userPassword) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        Member searchMember = new Member();
        Member member = memberRepository.findByUserId(username);

        if(encoder.matches(userPassword, member.getUserPassword())) {
            searchMember = member;
        }

        return searchMember;
    }
}
