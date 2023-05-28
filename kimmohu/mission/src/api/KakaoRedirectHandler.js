import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const KakaoRedirectHandler = () => {
  const [user, setUser] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("code"));

  useEffect(() => {
    const Client_ID = `${process.env.REACT_APP_KAKAO_AUTH_API_KEY}`;
    const Redirect_URI = "http://localhost:3000/kakao";

    const Redirect = async () => {
      try {
        const res = await axios.post(
          `https://kauth.kakao.com/oauth/token`,
          {
            grant_type: "authorization_code",
            client_id: `${Client_ID}`,
            redirect_uri: `${Redirect_URI}`,
            code: `${searchParams.get("code")}`,
            client_secret: `MZb8w89EE21AhQPQotMZg4cpkXDsEEen`,
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
            },
          }
        );
        const userInfo = await axios.get(`https://kapi.kakao.com/v2/user/me`, {
          headers: {
            Authorization: `Bearer ${res.data.access_token}`,
          },
        });
        setUser(userInfo);
        console.log(userInfo);
      } catch (err) {
        console.error(err);
      }
    };

    Redirect();
  }, []);
  return (
    <div>
      {user === null ? null : (
        <>
          <div>{user.data.kakao_account.profile.nickname}</div>
          <div>{user.data.kakao_account.gender}</div>
          <div>{user.data.kakao_account.birthday}</div>
          <div>{user.data.kakao_account.email}</div>
        </>
      )}
    </div>
  );
};

export default KakaoRedirectHandler;
