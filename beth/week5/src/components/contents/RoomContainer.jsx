import React, { useEffect, useState } from "react";
import "./Contents.css";
import RoomData from "../../roomData";
import Modal from "./Modal";

function RoomContainer() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(true);
  };
  const [btnActive, setBtnActive] = useState("");
  const toggleActive = () => {
    setBtnActive(true);
  };
  useEffect(() => {
    console.log("modal open condition changed");
  }, [isOpen]);

  let Data = RoomData.rooms.map((item, index) => {
    return (
      <div className="roomCard" key={index}>
        <div className="roomImg">
          <ul className="slides">
            <li>
              <img src={item.url1} alt="" />
            </li>
            <li>
              <img src={item.url2} alt="" />
            </li>
            <li>
              <img src={item.url3} alt="" />
            </li>
            <li>
              <img src={item.url4} alt="" />
            </li>
            <li>
              <img src={item.url5} alt="" />
            </li>
          </ul>
          <button
            value={index}
            className={"likesBtn " + ({ index } === btnActive ? " active" : "")}
            onClick={() => {
              handleClick();
              toggleActive();
            }}
          >
            <svg
              className="likesSvg"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
            >
              <path
                stroke="white"
                d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"
              ></path>
            </svg>
          </button>
          {isOpen && (
            <Modal
              onClose={() => {
                setIsOpen(false);
              }}
            />
          )}
          <button className={"prevBtn " + { index }}>
            <svg
              className="arrowSvg"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
            >
              <g fill="none">
                <path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path>
              </g>
            </svg>
          </button>
          <button className={"nextBtn " + { index }}>
            <svg
              className="arrowSvg"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
            >
              <g fill="none">
                <path d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932"></path>
              </g>
            </svg>
          </button>
        </div>
        <div className="roomInfo">
          <div className="BoldText">{item.location}</div>
          <svg
            className="starSvg"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
          >
            <path
              d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
              fill-rule="evenodd"
            ></path>
          </svg>
          <div className="BlackText">{item.score}</div>
        </div>
        <div className="GreyText">{item.view}</div>
        <div className="GreyText">{item.date}</div>
        <div className="BoldText">{item.price}</div>
      </div>
    );
  });

  return <>{Data}</>;
}

export default RoomContainer;
