import React from "react";
import airbnbLogo from "../../images/Airbnb.png";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderLayout>
      <Logo>
        <img src={airbnbLogo} width={100} height={30} alt="" />
      </Logo>
      <HeaderContent>
        <RoundBar>
          <SearchBtnMobile>
            <SearchIcon
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
            >
              <g fill="none">
                <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path>
              </g>
            </SearchIcon>
          </SearchBtnMobile>
          <Desktop>
            <MenuBtn>
              <MenuText>어디든지</MenuText>
            </MenuBtn>
            <MenuBtn>
              <MenuText>언제든 일주일</MenuText>
            </MenuBtn>
            <MenuBtn>
              <AddGuest>게스트 추가</AddGuest>
            </MenuBtn>
          </Desktop>
          <Mobile>
            <MenuBtn>
              <MenuText>어디든지</MenuText>
              <AddGuest>언제든 일주일 | 게스트 추가</AddGuest>
            </MenuBtn>
          </Mobile>
          <SearchBtn>
            <SearchIcon
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
            >
              <g fill="none">
                <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path>
              </g>
            </SearchIcon>
          </SearchBtn>
        </RoundBar>
      </HeaderContent>
      <HeaderRight>
        <TextBtn>당신의 공간을 에어비앤비하세요</TextBtn>
        <GlobeBtn>
          <GlobeIcon
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
          >
            <path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z"></path>
          </GlobeIcon>
        </GlobeBtn>
        <ProfileBtn>
          <BarIconBox>
            <BarIcon
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
            >
              <g fill="none" fill-rule="nonzero">
                <path d="m2 16h28"></path>
                <path d="m2 24h28"></path>
                <path d="m2 8h28"></path>
              </g>
            </BarIcon>
          </BarIconBox>
          <ProfileIcon
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
          >
            <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
          </ProfileIcon>
        </ProfileBtn>
      </HeaderRight>
    </HeaderLayout>
  );
};

export default Header;

const HeaderLayout = styled.div`
  height: 80px;
  padding: 0px 70px;
  display: flex;
  flex-direction: row;
  border-bottom: 0.2px solid lightgray;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const Logo = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media all and (min-width: 768px) and (max-width: 1140px) {
    width: 20%;
  }
  @media all and (max-width: 767px) {
    display: none;
  }
`;

const HeaderContent = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
`;

const HeaderRight = styled(HeaderContent)`
  justify-content: flex-end;
  @media all and (max-width: 767px) {
    display: none;
  }
`;

const RoundBar = styled.div`
  height: 40.11px;
  width: 290px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 0.1px solid lightgray;
  border-radius: 30px;
  padding-left: 10px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  @media all and (max-width: 767px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

const Desktop = styled.div`
  @media all and (max-width: 767px) {
    display: none;
  }
`;

const Mobile = styled.div`
  display: none;
  @media all and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const MenuBtn = styled.button`
  height: 100%;
`;

const MenuText = styled.div`
  height: 22px;
  display: flex;
  align-items: center;
  border-right: 0.2px solid lightgray;
  padding: 0px 10px;
  font-size: 13px;
  font-weight: 500;
  @media all and (max-width: 767px) {
    border-right: 0;
  }
`;

const AddGuest = styled(MenuText)`
  border: 0;
  color: #717171;
  @media all and (max-width: 767px) {
    font-size: 12px;
  }
`;

const SearchBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-size: 11px;
  background-color: #ff385c;
  color: white;
  margin-right: 7px;
  @media all and (max-width: 767px) {
    display: none;
  }
`;

const SearchBtnMobile = styled(SearchBtn)`
  display: none;
  background-color: white;
  color: lightgray;
  @media all and (max-width: 767px) {
    display: flex;
  }
`;

const SearchIcon = styled.svg`
  display: block;
  fill: none;
  height: 12px;
  width: 12px;
  stroke: currentcolor;
  stroke-width: 5.33333;
  overflow: visible;
`;

const TextBtn = styled.button`
  padding: 10px;
  border-radius: 30px;
  font-weight: 500;
`;

const GlobeBtn = styled.button`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GlobeIcon = styled.svg`
  display: block;
  height: 16px;
  width: 16px;
  fill: currentcolor;
`;

const ProfileBtn = styled.button`
  height: 42px;
  width: 76.1px;
  border: 0.3px solid lightgray;
  border-radius: 30px;
  font-size: 27px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const BarIconBox = styled.div`
  font-size: 20px;
  height: 15px;
  color: #6b6b6b;
  margin-left: 5px;
`;

const BarIcon = styled.svg`
  display: block;
  fill: none;
  height: 16px;
  width: 16px;
  stroke: currentcolor;
  stroke-width: 3;
  overflow: visible;
`;

const ProfileIcon = styled.svg`
  display: block;
  height: 30px;
  width: 30px;
  fill: currentcolor;
  color: #717171;
`;
