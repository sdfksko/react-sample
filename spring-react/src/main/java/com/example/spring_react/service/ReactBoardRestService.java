package com.example.spring_react.service;

import com.example.spring_react.entity.Board;
import com.example.spring_react.repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReactBoardRestService {

    @Autowired
    private BoardRepository boardRepository;


    public Page<Board> createBoardPage(Pageable pageable) {
        return boardRepository.findAll(pageable);
    }
}
