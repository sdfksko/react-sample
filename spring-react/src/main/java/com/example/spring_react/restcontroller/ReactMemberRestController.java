package com.example.spring_react.restcontroller;

import com.example.spring_react.entity.Member;
import com.example.spring_react.service.ReactMemberRestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ReactMemberRestController {

    @Autowired
    private ReactMemberRestService reactMemberRestService;

    @GetMapping("/memberData")
    public ResponseEntity<Page<Member>> memberData (@PageableDefault (size = 7, sort = "createDate", direction = Sort.Direction.DESC)Pageable pageable) {
        Page<Member> memberPage = reactMemberRestService.memberPage(pageable);

        if(memberPage == null) {
            ResponseEntity.status(HttpStatus.CONFLICT).body(null);
        }

        return ResponseEntity.ok(memberPage);
    }
}
