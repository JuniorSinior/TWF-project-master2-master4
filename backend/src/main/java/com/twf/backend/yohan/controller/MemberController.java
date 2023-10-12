package com.twf.backend.yohan.controller;

import com.twf.backend.yohan.dto.MemberDTO;
import com.twf.backend.yohan.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class MemberController {
    final private MemberService memberService;

    @PostMapping("/signup")
    public ResponseEntity<String> MemberData(@RequestBody MemberDTO memberDTO){
        System.out.println("회원가입 요청 = " + memberDTO);
        memberService.save(memberDTO);
        return ResponseEntity.ok("회원가입이 성공적으로 진행되었습니다");
    }

    @PostMapping("/login")
    public ResponseEntity<MemberDTO> MemberLogin(@RequestBody MemberDTO memberDTO, HttpSession session){
        MemberDTO requestLogin = memberService.login(memberDTO);
        if(requestLogin != null) {
            session.setAttribute("loginEmail", requestLogin.getEmail());
            return ResponseEntity.ok(requestLogin); // 사용자 정보를 응답에 포함
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null); // 로그인 실패 시 null 반환
        }
    }

    @GetMapping("/user-info")
    public ResponseEntity<MemberDTO> getUserInfo(HttpSession session) {
        String loginEmail = (String) session.getAttribute("loginEmail");
        if (loginEmail != null) {
            // 세션에 저장된 이메일을 기반으로 사용자 정보를 가져옵니다.
            MemberDTO userInfo = memberService.getUserInfoByEmail(loginEmail);
            if (userInfo != null) {
                return ResponseEntity.ok(userInfo);
            }
        }
        return ResponseEntity.badRequest().build();
    }
}
