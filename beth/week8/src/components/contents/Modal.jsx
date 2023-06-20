import React, { useState, useEffect } from "react";
import "./Modal.css";

const Modal = ({ onClose }) => {
  const handleClose = () => {
    onClose?.();
  };
  const [isClose, setIsClose] = useState(false);
  const handleClick = () => {
    setIsClose(true);
  };
  return (
    <div className={"modal" + (isClose ? " hidden" : "")}>
      <div className="bg"></div>
      <div className="modal-window">
        <div className="top-box">
          <button
            className="close-box"
            onClick={() => {
              handleClose();
            }}
          >
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={{
                display: "block",
                fill: "none",
                height: 16 + "px",
                width: 16 + "px",
                stroke: "currentcolor",
                strokeWidth: 3,
                overflow: "visible",
              }}
            >
              <path d="m6 6 20 20"></path>
              <path d="m26 6-20 20"></path>
            </svg>
          </button>
          <div className="title">위시리스트 이름 정하기</div>
        </div>
        <div className="mid-box">
          <div className="name-box">
            <div className="small-text">이름</div>
            <input type="text" class="name-input" />
          </div>
          <div className="small-text">최대 50자</div>
        </div>
        <div className="btm-box">
          <button
            className="make-btn"
            onClick={() => {
              handleClick();
            }}
          >
            새로 만들기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
