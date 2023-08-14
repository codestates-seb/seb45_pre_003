package com.codestates.stackoverflowclone.answer.entity;

import com.codestates.stackoverflowclone.audit.Auditable;
import com.codestates.stackoverflowclone.member.entity.Member;
import com.codestates.stackoverflowclone.question.entity.Question;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;

@Getter@Setter@AllArgsConstructor@NoArgsConstructor
@Entity
public class Answer extends Auditable {
    @Id@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;
    @Column(nullable = false)
    private String body;
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name="MEMBER_ID", nullable = false)
    private Member member;
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name="QUESTION_ID", nullable = false)
    private Question question;

    @Column(nullable = false)
    @ColumnDefault("false")
    private Boolean isBest;

}