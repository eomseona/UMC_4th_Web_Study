import React, { useEffect, useState } from "react";
import RoomData from "../../roomData";
import Modal from "./Modal";
import styled from "styled-components";

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
    if (isOpen === true) {
      console.log("modal open");
    } else {
      console.log("close");
    }
  }, [isOpen]);

  let Data = RoomData.rooms.map((item, index) => {
    return (
      <RoomCard key={index}>
        <RoomImg>
          <Slides>
            <List>
              <Image src={item.url1} alt="" />
            </List>
            <List>
              <Image src={item.url2} alt="" />
            </List>
            <List>
              <Image src={item.url3} alt="" />
            </List>
            <List>
              <Image src={item.url4} alt="" />
            </List>
            <List>
              <Image src={item.url5} alt="" />
            </List>
          </Slides>
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
          <MoveBtn>
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
          </MoveBtn>
          <MoveBtn>
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
          </MoveBtn>
        </RoomImg>
        <RoomInfo>
          <BoldText>{item.location}</BoldText>
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
          <BlackText>{item.score}</BlackText>
        </RoomInfo>
        <GreyText>{item.view}</GreyText>
        <GreyText>{item.date}</GreyText>
        <BoldText>{item.price}</BoldText>
      </RoomCard>
    );
  });

  return <>{Data}</>;
}

export default RoomContainer;

const RoomCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
`;

const RoomImg = styled.div`
  width: 95%;
  height: 280px;
  border-radius: 10px;
  padding-bottom: 10px;
  overflow: hidden;
  margin-bottom: 10px;
  position: relative;
`;

const RoomInfo = styled.div`
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 3px;
`;

const BoldText = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

const GreyText = styled(BoldText)`
  color: #717171;
  font-weight: normal;
`;

const BlackText = styled.div`
  font-size: 13px;
`;

const MoveBtn = styled.button`
  width: 25px;
  height: 25px;
  border: 0.2px solid lightgray;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  position: absolute;
  top: 47%;
  right: 10px;
  opacity: 0;
  transition: 0.3s all;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

const Slides = styled.ul`
  position: absolute;
  left: 0;
  top: 0;
  transition: left 0.3s ease-out;
`;

const List = styled.li`
  display: inline-block;
  float: left;
`;

const Image = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
`;
