import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <button id="mapOpener" className="BlackRoundBtn">
        지도 표시하기
        <i className="fa-solid fa-map" style={{ marginLeft: 5 + "px" }}></i>
      </button>
      <div className="footer">
        <div className="footer_top">
          <div className="footer_left">
            <div className="footerBtn">© 2023 Airbnb, Inc. ·</div>
            <div className="footerBtn">개인정보 처리방침 ·</div>
            <div className="footerBtn">이용약관 ·</div>
            <div className="footerBtn">사이트맵 ·</div>
            <div className="footerBtn">한국의 변경된 환불 정책 ·</div>
            <div className="footerBtn">회사 세부정보</div>
          </div>
          <div className="footer_right">
            <i
              className="fa-solid fa-globe"
              style={{ marginRight: 10 + "px" }}
            ></i>
            <div className="BlackText">한국어 (KR)</div>
            <div className="BlackText">₩ KRW</div>
            <div className="BlackText">지원 및 참고 자료</div>
            <i className="fa-solid fa-angle-up"></i>
          </div>
        </div>

        <div className="footer_btm">
          웹사이트 제공자: Airbnb Ireland UC, private unlimited company, 8
          Hanover Quay Dublin 2, D02 DP23 Ireland | 이사: Dermot Clarke, Killian
          Pattwell, Andrea Finnegan | VAT 번호: IE9827384L | 사업자 등록 번호:
          IE 511825 | 연락처: terms@airbnb.com, 웹사이트, 080-822-0230 | 호스팅
          서비스 제공업체: 아마존 웹서비스 | 에어비앤비는 통신판매 중개자로
          에어비앤비 플랫폼을 통하여 게스트와 호스트 사이에 이루어지는
          통신판매의 당사자가 아닙니다. 에어비앤비 플랫폼을 통하여 예약된 숙소,
          체험, 호스트 서비스에 관한 의무와 책임은 해당 서비스를 제공하는
          호스트에게 있습니다.
        </div>
      </div>
    </>
  );
};

export default Footer;
