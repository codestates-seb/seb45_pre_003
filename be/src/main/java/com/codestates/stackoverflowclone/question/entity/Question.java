package com.codestates.stackoverflowclone.question.entity;

import com.codestates.stackoverflowclone.answer.entity.Answer;
import com.codestates.stackoverflowclone.audit.Auditable;
import com.codestates.stackoverflowclone.member.entity.Member;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.time.LocalDateTime;
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
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "MEMBER_ID", nullable = false)
    private Member member;
    @OneToMany(mappedBy = "question", cascade = CascadeType.REMOVE)
    private List<Answer> answers = new ArrayList<>();

    @Column(nullable = false)
    private Long answerCount;
    @Column(nullable = false)
    private Long visitCount;

    @Column(nullable = false)
    @ColumnDefault("false")
    private Boolean answered;

    @Column(name = "last_modified_at")
    private LocalDateTime modifiedAt;

    public Question(Long questionId, String title, String body, Member member,
                    Long answerCount, Long visitCount, Boolean answered) {
        this.questionId = questionId;
        this.title = title;
        this.body = body;
        this.member = member;
        this.answerCount = answerCount;
        this.visitCount = visitCount;
        this.answered = answered;
    }

    public void setAnswered(){
        answered = false;
        for(Answer answer : answers){
            if(answer.getIsBest())
                answered = true;
        }
    }


    public void setAnswers(Answer answer) {
        this.answers.add(answer);
        if (answer.getQuestion() != this) answer.setQuestion(this);
    }

}