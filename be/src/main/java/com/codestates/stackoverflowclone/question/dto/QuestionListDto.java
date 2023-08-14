package com.codestates.stackoverflowclone.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.domain.Page;

import java.util.List;

@Getter@Setter@AllArgsConstructor@NoArgsConstructor
public class QuestionListDto<T> {
    private List<T> data;
    private PageInfo pageInfo;

    public QuestionListDto(List<T> data, Page page) {
        this.data = data;
        this.pageInfo = new PageInfo(page.getNumber() + 1,
                page.getSize(), page.getTotalElements(), page.getTotalPages());
    }
}
