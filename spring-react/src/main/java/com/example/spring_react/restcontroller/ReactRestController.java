package com.example.spring_react.restcontroller;

import com.example.spring_react.config.service.ReactRestService;
import com.example.spring_react.dto.MemberDTO;
import com.example.spring_react.entity.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ReactRestController {

    @Autowired
    private ReactRestService reactRestService;

    @PostMapping("/react/login")
    public ResponseEntity<Member> login(@RequestBody MemberDTO memberDTO) {
        String username = memberDTO.getUsername();
        String userPassword = memberDTO.getUserPassword();
        System.out.println(username);
        System.out.println(userPassword);
        Member member = reactRestService.getMemberList(username, userPassword);
        if(member.getUserId() == null) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(member);
        }
        return ResponseEntity.ok(member);
    }
}
