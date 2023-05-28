import React from "react";
import { styled } from "styled-components";

const KakaoAuth = () => {
  const kakaoAuth = () => {
    const Redirect_URI = "http://localhost:3000/kakao";
    const Client_ID = `${process.env.REACT_APP_KAKAO_AUTH_API_KEY}`;

    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${Client_ID}&redirect_uri=${Redirect_URI}&response_type=code`;
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <SectionContainer>
      <ButtonContainer>
        <KakaoAuthButton onClick={kakaoAuth}>
          카카오로 로그인하기
        </KakaoAuthButton>
      </ButtonContainer>
    </SectionContainer>
  );
};

export default KakaoAuth;

const SectionContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
  width: 200px;
  height: 50px;
`;

const KakaoAuthButton = styled.button`
  width: 100%;
  height: 100%;
  background-color: #ffeb00;
  border-radius: 15px;
  color: #000;
`;
