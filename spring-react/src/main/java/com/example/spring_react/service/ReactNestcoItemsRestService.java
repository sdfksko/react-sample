package com.example.spring_react.service;

import com.example.spring_react.entity.NestcoItems;
import com.example.spring_react.repository.NestcoItemsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ReactNestcoItemsRestService {

    @Autowired
    private NestcoItemsRepository nestcoItemsRepository;

    public Page<NestcoItems> nestcoItemsPage(Pageable pageable) {
        Page<NestcoItems> nestcoItemsPage = nestcoItemsRepository.findAll(pageable);

        return nestcoItemsPage;
    }
}
