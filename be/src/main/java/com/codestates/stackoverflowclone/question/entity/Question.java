package com.codestates.stackoverflowclone.question.entity;

import com.codestates.stackoverflowclone.answer.entity.Answer;
import com.codestates.stackoverflowclone.audit.Auditable;
import com.codestates.stackoverflowclone.member.entity.Member;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter@Setter@NoArgsConstructor@AllArgsConstructor
@Entity
public class Question extends Auditable {
    @Id@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;
    @Column(nullable = false)
    private String title;
    @Column(nullable = false)
    private String body;
    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;
    @OneToMany(mappedBy = "question", cascade = CascadeType.REMOVE)
    private List<Answer> answers = new ArrayList<>();

    public void setAnswers(Answer answer) {
        this.answers.add(answer);
        if (answer.getQuestion() != this) answer.setQuestion(this);
    }

}