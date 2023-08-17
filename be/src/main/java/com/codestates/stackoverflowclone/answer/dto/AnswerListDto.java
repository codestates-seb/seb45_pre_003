package com.codestates.stackoverflowclone.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter@Setter@AllArgsConstructor@NoArgsConstructor
public class AnswerListDto<T> {
    List<T> data;
}
