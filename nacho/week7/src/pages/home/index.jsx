import React from 'react';
import { useNavigate } from "react-router-dom";

export default function home() {
    const movePage = useNavigate();

    function gohome(){
      movePage('/');
    }
  return (
    
    <div className="home">
        빈 화면입니다.
        <br></br>
      <button onClick={gohome}>메인으로 이동</button>
      </div>
  );
}
