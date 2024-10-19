package com.example.spring_react.restcontroller;

import com.example.spring_react.entity.NestcoItems;
import com.example.spring_react.service.ReactNestcoItemsRestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ReactNestcoItemsRestController {

    @Autowired
    private ReactNestcoItemsRestService reactNestcoItemsRestService;

    @GetMapping("/nestCoData")
    public ResponseEntity<Page<NestcoItems>> nestcoItemsPage(@PageableDefault(size = 8, sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {

        Page<NestcoItems> nestcoItemsPage = reactNestcoItemsRestService.nestcoItemsPage(pageable);

        if(nestcoItemsPage == null) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(null);
        }

        return ResponseEntity.ok(nestcoItemsPage);
    }

}
