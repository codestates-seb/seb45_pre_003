package com.codestates.stackoverflowclone.member.entity;
import com.codestates.stackoverflowclone.audit.Auditable;
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

    //TODO vote, tag 미구현으로 임시용 랜덤 숫자 생성
    @Column(nullable = false, updatable = false)
    private int vote = (int)(Math.random() * 1000);

    @Column(nullable = false, updatable = false)
    private int tag = (int)(Math.random() * 100);

    private int week;

    @JsonDeserialize(using = LocalDateDeserializer.class)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyyMMddHHmmss")
    public LocalDateTime getCreatedAt() {
        return super.getCreatedAt();
    }



    @PostLoad
    private void caculateWeek() {
        this.week = (int) ChronoUnit.WEEKS.between(getCreatedAt(), LocalDateTime.now());
    }

}
