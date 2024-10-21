package com.example.spring_react.dto;

import com.example.spring_react.entity.Member;
import lombok.Data;

@Data
public class NoticeDTO {
    private Long id;
    private String title;
    private String content;
    private Member uploader;
    private String createDate;
    private Integer readCount;
}
