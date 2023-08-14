package com.codestates.stackoverflowclone.member.event;

import lombok.Getter;

@Getter
public class MemberEvent {
    private long memberId;

    public MemberEvent(long memberId) {
        this.memberId = memberId;
    }
}
