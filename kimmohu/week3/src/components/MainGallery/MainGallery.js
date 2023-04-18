import React from "react";
import styles from "./MainGallery.module.css";

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
  const imgStyle = { borderRadius: "1rem" };

  return (
    <div>
      <main>
        <div className={styles.mainContentContainer}>
          <div>
            <div className={styles.travelContainer}>
              {destinationInformation.map((info) => {
                const [distance, schedule] =
                  info.destinationDescription.split("/");
                const imgKey = info.imgSrc.split("/");
                return (
                  <div key={imgKey[5]}>
                    <img
                      src={info.imgSrc}
                      style={imgStyle}
                      width="310px"
                      height="295px"
                      alt="destinationImg"
                    />
                    <div style={{ marginTop: "0.5rem" }}>
                      <div className={styles.destination}>
                        {info.destination}
                      </div>
                      <div className={styles.destinationDescription}>
                        {distance}
                      </div>
                      <div className={styles.destinationDescription}>
                        {schedule}
                      </div>
                      <div className={styles.price}>{info.price}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      <div id="modal" className={styles.modalOverlay}>
        <div className={styles.modalWindow}>
          <button className={styles.closeArea}></button>
          <div className={styles.modalTitle}>
            <div>필터</div>
          </div>
          <div className={styles.content}></div>
        </div>
      </div>
    </div>
  );
};

export default MainGallery;
