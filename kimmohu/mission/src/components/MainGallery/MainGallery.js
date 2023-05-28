import React from "react";
import styled from "styled-components";

const destinationInformation = [
  {
    imgSrc:
      "https://a0.muscache.com/im/pictures/d6880d5f-2d42-49eb-b3d3-366b9d285d6c.jpg?im_w=720",
    destination: "Mù Cang Chải, 베트남",
    destinationDescription: "2,805km 거리/4월 11일~16일",
    price: "₩52,742 /박",
  },
  {
    imgSrc:
      "https://a0.muscache.com/im/pictures/3f02bdf7-cbb7-41b5-9968-05e04b779961.jpg?im_w=720",
    destination: "Mù Cang Chải, 베트남",
    destinationDescription: "2,805km 거리/4월 11일~18일",
    price: "₩52,741 /박",
  },
  {
    imgSrc:
      "https://a0.muscache.com/im/pictures/miso/Hosting-28527704/original/16517dd6-dc86-47dd-aaa9-5bbe6cabaa7d.jpeg?im_w=720",
    destination: "성신읍, 서귀포시, 한국",
    destinationDescription: "468km 거리/5월 7일~12일",
    price: "₩321,812 /박",
  },
  {
    imgSrc:
      "https://a0.muscache.com/im/pictures/3905c51e-f365-4987-974a-1d1c4122c909.jpg?im_w=720",
    destination: "Hallim-eub, Cheju, 한국",
    destinationDescription: "471km 거리/5월 8일~13일",
    price: "₩171,177 /박",
  },
  {
    imgSrc:
      "https://a0.muscache.com/im/pictures/d998628a-25c1-4ce0-8a64-3609adf37431.jpg?im_w=720",
    destination: "Street, 베트남",
    destinationDescription: "2,788km 거리/11월 1일~6일",
    price: "₩91,919 /박",
  },
  {
    imgSrc:
      "https://a0.muscache.com/im/pictures/e5edf914-f50b-4a0b-a3ef-b00d7e084c62.jpg?im_w=720",
    destination: "Shiiba, Higashiusuki District, 일본",
    destinationDescription: "691km 거리/4월 17일~22일",
    price: "₩68,842 /박",
  },
  {
    imgSrc:
      "https://a0.muscache.com/im/pictures/df279066-a025-4907-af5f-0df2410ff146.jpg?im_w=720",
    destination: "Gingoog, 필리핀",
    destinationDescription: "3,205km 거리/4월 13일~20일",
    price: "₩98,416 /박",
  },
  {
    imgSrc:
      "https://a0.muscache.com/im/pictures/cf0f50c0-3e66-428b-9fbc-f01e4de54568.jpg?im_w=720",
    destination: "Thành phố Hội An, 베트남",
    destinationDescription: "3,028km 거리/4월 21일~26일",
    price: "₩32,748/박",
  },
];

const MainGallery = () => {
  return (
    <MainContentContainer>
      <TravelContainer>
        {destinationInformation.map((info) => {
          const [distance, schedule] = info.destinationDescription.split("/");
          const imgKey = info.imgSrc.split("/");
          return (
            <ElementContainer key={imgKey[5]}>
              <ImgContainer>
                <ImgElement src={info.imgSrc} alt="destinationImg" />
              </ImgContainer>
              <div>
                <Bold>{info.destination}</Bold>
                <DestinationDescription>{distance}</DestinationDescription>
                <DestinationDescription>{schedule}</DestinationDescription>
                <Bold>{info.price}</Bold>
              </div>
            </ElementContainer>
          );
        })}
      </TravelContainer>
    </MainContentContainer>
  );
};

export default MainGallery;

const MainContentContainer = styled.main`
  padding: 0 2.5rem 0 2.5rem;
  margin-top: 1rem;

  grid-column: 1 / 4;
  grid-row: 3 / 4;
`;

const TravelContainer = styled.div`
  display: grid;
  grid-gap: 100px 25px;
  grid-template-columns: repeat(
    var(--breakpoint-grid_columns, 1),
    minmax(0, 1fr)
  );

  grid-auto-rows: minmax(0, 1fr);

  @media (min-width: 550px) {
    --breakpoint-grid_columns: 2;
  }

  @media (min-width: 949px) {
    --breakpoint-grid_columns: 3;
  }

  @media (min-width: 1127px) {
    --breakpoint-grid_columns: 4;
  }
`;

const ElementContainer = styled.div`
  width: 100%;
  height: 118%;
  display: flex;
  flex-direction: column;
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 80%;
  margin-bottom: 12px;
`;
const ImgElement = styled.img`
  border-radius: 1rem;
  width: 100%;
  height: 100%;

  object-fit: cover;
`;

const Bold = styled.div`
  font-weight: bold;
`;

const DestinationDescription = styled.div`
  font-size: 0.9rem;
  color: #6d6d6d;
`;
