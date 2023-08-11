package com.codestates.stackoverflowclone.member.mapper;

import com.codestates.stackoverflowclone.member.dto.MemberDto;
import com.codestates.stackoverflowclone.member.entity.Member;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface MemberMapper {
    Member postToMember(MemberDto.Post request);

    MemberDto.Response memberToResponse(Member created);

    Member patchToMember(MemberDto.Patch request);
}
