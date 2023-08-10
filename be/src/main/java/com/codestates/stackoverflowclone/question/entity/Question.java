package com.codestates.stackoverflowclone.question.entity;

import com.codestates.stackoverflowclone.audit.Auditable;
import com.codestates.stackoverflowclone.member.entity.Member;
import lombok.*;

import javax.persistence.*;

@Getter@Setter
@NoArgsConstructor@AllArgsConstructor@Builder
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

}
