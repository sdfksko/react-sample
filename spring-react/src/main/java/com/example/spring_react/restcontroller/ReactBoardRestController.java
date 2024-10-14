package com.example.spring_react.restcontroller;

import com.example.spring_react.entity.Board;
import com.example.spring_react.service.ReactBoardRestService;
import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ReactBoardRestController {

    @Autowired
    private ReactBoardRestService reactBoardRestService;

    @GetMapping("/boardData")
    public ResponseEntity<Page<Board>> boardData(@PageableDefault(size = 10, sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {

        Page<Board> boardPage = reactBoardRestService.createBoardPage(pageable);

        if(boardPage == null) {
            ResponseEntity.status(HttpStatus.CONFLICT).body("데이터 조회 실패");
        }

        return ResponseEntity.ok(boardPage);
    }


}
