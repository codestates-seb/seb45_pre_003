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

    private int weekSinceRegistration;

    //TODO vote, tag 미구현으로 임시용 랜덤 숫자 생성
    //이하의 변수들은 아직 미구현. 구현 예정
    //특히 updatable! 값을 고정하기 위해 넣었지만, 구현 이후에는 필히 삭제할 것
    @Column(nullable = false, updatable = false)
    private int vote = (int)(Math.random() * 1000);

    @Column(nullable = false, updatable = false)
    private int tag = (int)(Math.random() * 100);


    private int visitCount = 1;
    private int continuousVisitCount = 1;

    private int questionCount = 1;

    private int answerCount = 1;

    @OneToMany
    private List<Question> questions;

    @OneToMany
    private List<Answer> answers;



    @PostLoad
    private void caculateweekSinceRegistration() {
        this.weekSinceRegistration = (int) ChronoUnit.WEEKS.between(getCreatedAt(), LocalDateTime.now());
    }

}
