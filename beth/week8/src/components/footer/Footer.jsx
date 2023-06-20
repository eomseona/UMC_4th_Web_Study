import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <BlackRoundBtn>
        지도 표시하기
        <i className="fa-solid fa-map" style={{ marginLeft: 5 + "px" }}></i>
      </BlackRoundBtn>
      <StyledFooter>
        <FooterTop>
          <FooterLeft>
            <FooterBtn>© 2023 Airbnb, Inc. ·</FooterBtn>
            <FooterBtn>개인정보 처리방침 ·</FooterBtn>
            <FooterBtn>이용약관 ·</FooterBtn>
            <FooterBtn>사이트맵 ·</FooterBtn>
            <FooterBtn>한국의 변경된 환불 정책 ·</FooterBtn>
            <FooterBtn>회사 세부정보</FooterBtn>
          </FooterLeft>
          <FooterRight>
            <i
              className="fa-solid fa-globe"
              style={{ marginRight: 10 + "px" }}
            ></i>
            <BlackText>한국어 (KR)</BlackText>
            <BlackText>₩ KRW</BlackText>
            <BlackText>지원 및 참고 자료</BlackText>
            <i className="fa-solid fa-angle-up"></i>
          </FooterRight>
        </FooterTop>

        <FooterBtm>
          웹사이트 제공자: Airbnb Ireland UC, private unlimited company, 8
          Hanover Quay Dublin 2, D02 DP23 Ireland | 이사: Dermot Clarke, Killian
          Pattwell, Andrea Finnegan | VAT 번호: IE9827384L | 사업자 등록 번호:
          IE 511825 | 연락처: terms@airbnb.com, 웹사이트, 080-822-0230 | 호스팅
          서비스 제공업체: 아마존 웹서비스 | 에어비앤비는 통신판매 중개자로
          에어비앤비 플랫폼을 통하여 게스트와 호스트 사이에 이루어지는
          통신판매의 당사자가 아닙니다. 에어비앤비 플랫폼을 통하여 예약된 숙소,
          체험, 호스트 서비스에 관한 의무와 책임은 해당 서비스를 제공하는
          호스트에게 있습니다.
        </FooterBtm>
      </StyledFooter>
    </>
  );
};

export default Footer;

const StyledFooter = styled.div`
  height: 80px;
  display: grid;
  grid-template-rows: 55% 45%;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 0 65px;
  @media all and (max-width: 767px) {
    display: none;
  }
`;

const FooterTop = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.1px solid rgb(185, 185, 185);
`;

const FooterLeft = styled.div`
  display: flex;
`;

const FooterRight = styled(FooterLeft)`
  font-size: 12px;
`;

const FooterBtn = styled.button`
  font-size: 13px;
  color: #6b6b6b;
  margin: 0 4px;
`;

const FooterBtm = styled.div`
  display: flex;
  align-items: center;
  font-size: 6px;
  color: #8b8989;
`;

const BlackRoundBtn = styled.button`
  height: 42px;
  width: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 100px;
  left: 46%;
  background-color: #222222;
  color: white;
  border-radius: 30px;
  font-size: 12px;
  cursor: pointer;
`;

const BlackText = styled.div`
  font-size: 13px;
`;
