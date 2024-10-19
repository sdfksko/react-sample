package com.example.spring_react.restcontroller;

import com.example.spring_react.entity.Member;
import com.example.spring_react.service.ReactMemberRestService;
import org.apache.tomcat.util.http.parser.HttpParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ReactMemberRestController {

    @Autowired
    private ReactMemberRestService reactMemberRestService;

    @GetMapping("/memberData")
    public ResponseEntity<Page<Member>> memberData (@PageableDefault (size = 7, sort = "createDate", direction = Sort.Direction.DESC)Pageable pageable,
                                                    @RequestParam(name="idx", required = false) String idx,
                                                    @RequestParam(name="searchKey", required = false) String searchKey) {

        if(searchKey == null) {
            if(idx == null) {
                Page<Member> memberPage = reactMemberRestService.memberPage(pageable);

                if(memberPage == null) {
                    ResponseEntity.status(HttpStatus.CONFLICT).body(null);
                }

                return ResponseEntity.ok(memberPage);
            }

            Pageable newPageable = PageRequest.of(pageable.getPageNumber(), pageable.getPageSize(), Sort.by("createDate").ascending());

            Page<Member> memberPage = reactMemberRestService.memberPage(newPageable);

            if(memberPage == null) {
                ResponseEntity.status(HttpStatus.CONFLICT).body(null);
            }

            return ResponseEntity.ok(memberPage);
        }

        if(idx == null) {
            Page<Member> memberPage = reactMemberRestService.searchMemberPage(pageable, searchKey);

            if(memberPage == null) {
                ResponseEntity.status(HttpStatus.CONFLICT).body(null);
            }

            return ResponseEntity.ok(memberPage);
        }

        Pageable newPageable = PageRequest.of(pageable.getPageNumber(), pageable.getPageSize(), Sort.by("createDate").ascending());

        Page<Member> memberPage = reactMemberRestService.searchMemberPage(newPageable, searchKey);

        if(memberPage == null) {
            ResponseEntity.status(HttpStatus.CONFLICT).body(null);
        }

        return ResponseEntity.ok(memberPage);
    }

    @GetMapping("/searchMemberData")
    public ResponseEntity<Page<Member>> searchMemberData(@PageableDefault (size = 7, sort = "createDate", direction = Sort.Direction.DESC)Pageable pageable,
                                                         @RequestParam(name="searchKey", required = false)String searchKey) {

        Page<Member> memberPage = reactMemberRestService.searchMemberPage(pageable, searchKey);

        if(memberPage == null) {
            ResponseEntity.status(HttpStatus.CONFLICT).body(null);
        }

        return ResponseEntity.ok(memberPage);
    }
}
