package com.example.spring_react.service;

import com.example.spring_react.entity.Member;
import com.example.spring_react.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ReactMemberRestService {

    @Autowired
    private MemberRepository memberRepository;

    public Page<Member> memberPage(Pageable pageable) {
        Page<Member> memberPage = memberRepository.findAll(pageable);

        return memberPage;
    }
}
