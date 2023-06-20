import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const GoogleLogin = () => {
  const ClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const AuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=token&client_id=${ClientId}&redirect_uri=http://localhost:3000&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile`;
  const [data, setData] = useState({});
  const loginHandler = () => {
    window.location.assign(AuthUrl);
  };

  useEffect(() => {
    const url = new URL(window.location.href);
    const hash = url.hash;
    if (hash) {
      const accessToken = hash.split("=")[1].split("&")[0];
      axios
        .get(
          "https://www.googleapis.com/oauth2/v2/userinfo?access_token=" +
            accessToken,
          {
            headers: {
              authorization: `token ${accessToken}`,
              accept: "application/json",
            },
          }
        )
        .then((data) => {
          setData(data);
          console.log(data);
        })
        .catch((e) => console.log("oAuth token expired"));
    }
  }, []);

  return (
    <ProfileBtn>
      <BarIconBox>
        <BarIcon
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="presentation"
          focusable="false"
        >
          <g fill="none" fillRule="nonzero">
            <path d="m2 16h28"></path>
            <path d="m2 24h28"></path>
            <path d="m2 8h28"></path>
          </g>
        </BarIcon>
      </BarIconBox>
      {!data.picture ? (
        <ProfileIcon
          onClick={loginHandler}
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="presentation"
          focusable="false"
        >
          <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
        </ProfileIcon>
      ) : (
        <ProfileIcon>
          <img src={data.picture} alt="userimg" />
        </ProfileIcon>
      )}
    </ProfileBtn>
  );
};

export default GoogleLogin;

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
