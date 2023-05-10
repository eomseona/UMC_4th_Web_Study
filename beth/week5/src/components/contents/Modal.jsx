import React from "react";
import "./Modal.css";

const Modal = ({ onClose }) => {
  const handleClose = () => {
    onClose?.();
  };
  return (
    <div class="modal">
      <div class="bg"></div>
      <div class="modal-window">
        <div class="top-box">
          <button
            class="close-box"
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
          <div class="title">위시리스트 이름 정하기</div>
        </div>
        <div class="mid-box">
          <div class="name-box">
            <div class="small-text">이름</div>
            <input type="text" class="name-input" />
          </div>
          <div class="small-text">최대 50자</div>
        </div>
        <div class="btm-box">
          <button class="make-btn">새로 만들기</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
