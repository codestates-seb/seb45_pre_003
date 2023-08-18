package com.codestates.stackoverflowclone.member.entity;
import com.codestates.stackoverflowclone.answer.entity.Answer;
import com.codestates.stackoverflowclone.audit.Auditable;
import com.codestates.stackoverflowclone.question.entity.Question;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Member extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false, length = 30)
    private String name;

    @Column(nullable = false, unique = true, updatable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();

    @Setter
    private int visitCount = 0;

    @Setter
    private int continuousVisitCount = 0;

    @Setter
    private LocalDateTime lastLoginTime;

    @OneToMany(mappedBy = "member")
    private List<Question> questions = new ArrayList<>();

    @OneToMany(mappedBy = "member")
    private List<Answer> answers = new ArrayList<>();

    private int questionCount = 0;

    private int answerCount = 0;

    public int getQuestionCount () {
        return this.questions.size();
    }

    public int getAnswerCount() {
        return this.answers.size();
    }

//    @PostLoad
//    private void caculateweekSinceRegistration() {
//        this.weekSinceRegistration = (int) ChronoUnit.WEEKS.between(getCreatedAt(), LocalDateTime.now());
//    }

}
