package com.example.spring_react.repository;

import com.example.spring_react.entity.NestcoItems;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NestcoItemsRepository extends JpaRepository<NestcoItems, Long> {

}
