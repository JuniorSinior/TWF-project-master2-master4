package com.twf.backend.yohan.service;

import com.twf.backend.yohan.dto.MemberDTO;
import com.twf.backend.yohan.entity.MemberEntity;
import com.twf.backend.yohan.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;

    public void save(MemberDTO memberDTO) {
        MemberEntity memberEntity = MemberEntity.toMemberEntity(memberDTO);
        memberRepository.save(memberEntity);
    }

    public MemberDTO login(MemberDTO memberDTO) {
        Optional<MemberEntity> byEmail = memberRepository.findByEmail(memberDTO.getEmail());
        if (byEmail.isPresent()) {
            MemberEntity memberEntity = byEmail.get();
            if (memberDTO.getPassword().equals(memberEntity.getPassword())) {
                // 모든 사용자 정보를 포함한 MemberDTO 반환
                return MemberDTO.toMemberDTO(memberEntity);
            } else {
                return null;
            }
        }
        return null;
    }

    public MemberDTO getUserInfoByEmail(String email) {
        Optional<MemberEntity> byEmail = memberRepository.findByEmail(email);
        if (byEmail.isPresent()) {
            MemberEntity memberEntity = byEmail.get();
            return MemberDTO.toMemberDTO(memberEntity);
        }
        return null;
    }
}