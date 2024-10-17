package com.example.spring_react.restcontroller;

import com.example.spring_react.service.ReactRestService;
import com.example.spring_react.dto.MemberDTO;
import com.example.spring_react.entity.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class ReactRestController {

    @Autowired
    private ReactRestService reactRestService;

    // 로그인 처리
    @PostMapping("/react/login")
    public ResponseEntity<Member> login(@RequestBody MemberDTO memberDTO) {
        String userId = memberDTO.getUserId();
        String userPassword = memberDTO.getUserPassword();
        System.out.println(userId);
        System.out.println(userPassword);
        Member member = reactRestService.getMemberList(userId, userPassword);
        if(member.getUserId() == null) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(member);
        }
        return ResponseEntity.ok(member);
    }
}
