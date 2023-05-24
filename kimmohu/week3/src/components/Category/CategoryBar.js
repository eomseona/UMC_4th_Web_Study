import React, { useState } from "react";
import styles from "./CategoryBar.module.css";
import CategoryElement from "./CategoryElement";
import { useSelector } from "react-redux";

const categoryInfomation = [
  {
    categoryImgSrc:
      "https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg",
    categoryDescription: "인기 급상승",
  },
  {
    categoryImgSrc:
      "https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg",
    categoryDescription: "멋진 수영장",
  },
  {
    categoryImgSrc:
      "https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg",
    categoryDescription: "캐슬",
  },
  {
    categoryImgSrc:
      "https://a0.muscache.com/pictures/a4634ca6-1407-4864-ab97-6e141967d782.jpg",
    categoryDescription: "호수 근처",
  },
  {
    categoryImgSrc:
      "https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg",
    categoryDescription: "섬",
  },
  {
    categoryImgSrc:
      "https://a0.muscache.com/pictures/eb7ba4c0-ea38-4cbb-9db6-bdcc8baad585.jpg",
    categoryDescription: "개인실",
  },
  {
    categoryImgSrc:
      "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
    categoryDescription: "최고의 전망",
  },
  {
    categoryImgSrc:
      "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg",
    categoryDescription: "기상천외한 숙소",
  },
  {
    categoryImgSrc:
      "https://a0.muscache.com/pictures/51f5cf64-5821-400c-8033-8a10c7787d69.jpg",
    categoryDescription: "한옥",
  },
  {
    categoryImgSrc:
      "https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg",
    categoryDescription: "해변 바로 앞",
  },
  {
    categoryImgSrc:
      "https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg",
    categoryDescription: "한적한 시골",
  },
  {
    categoryImgSrc:
      "https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg",
    categoryDescription: "국립공원",
  },
  {
    categoryImgSrc:
      "https://a0.muscache.com/pictures/827c5623-d182-474a-823c-db3894490896.jpg",
    categoryDescription: "료칸",
  },
  {
    categoryImgSrc:
      "https://a0.muscache.com/pictures/5cdb8451-8f75-4c5f-a17d-33ee228e3db8.jpg",
    categoryDescription: "풍차",
  },
  {
    categoryImgSrc:
      "https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg",
    categoryDescription: "농장",
  },
  {
    categoryImgSrc:
      "https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg",
    categoryDescription: "캠핑장",
  },
  {
    categoryImgSrc:
      "https://a0.muscache.com/pictures/c0fa9598-4e37-40f3-b734-4bd0e2377add.jpg",
    categoryDescription: "신규",
  },
  {
    categoryImgSrc:
      "https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg",
    categoryDescription: "상징적 도시",
  },
  {
    categoryImgSrc:
      "https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg",
    categoryDescription: "통나무집",
  },
  {
    categoryImgSrc:
      "https://a0.muscache.com/pictures/60ff02ae-d4a2-4d18-a120-0dd274a95925.jpg",
    categoryDescription: "와인 농장",
  },
  {
    categoryImgSrc:
      "https://a0.muscache.com/pictures/c8bba3ed-34c0-464a-8e6e-27574d20e4d2.jpg",
    categoryDescription: "스키",
  },
];

const CategoryBar = () => {
  // const [chosenKey, setChosenKey] = useState(null);
  const chosenKey = useSelector((state) => state.key.chosenKey);
  console.log(chosenKey);

  return (
    <div className={styles.category}>
      <div className={styles.categoryMenu}>
        {categoryInfomation.map((info) => {
          const imgKeyProp = info.categoryImgSrc.split("/");
          return (
            <CategoryElement
              elementKey={imgKeyProp}
              imgSrc={info.categoryImgSrc}
              description={info.categoryDescription}
              chosenKey={chosenKey}
            />
          );
        })}
      </div>
      <div className={styles.filter}>
        <button id="btn-modal2" className={styles.filterButton}>
          <div className={styles.buttonContent}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.50008 12C9.45908 12 11.1271 13.2525 11.7451 15H21.0001V18H11.7436C11.4688 18.7783 10.9853 19.4661 10.346 19.9882C9.70665 20.5103 8.93607 20.8465 8.11852 20.9601C7.30097 21.0738 6.46791 20.9604 5.71043 20.6325C4.95295 20.3046 4.30022 19.7747 3.8236 19.1008C3.34699 18.4269 3.06484 17.6349 3.008 16.8115C2.95116 15.988 3.12183 15.1648 3.50134 14.4318C3.88085 13.6988 4.4546 13.0843 5.15984 12.6554C5.86508 12.2265 6.67466 11.9998 7.50008 12ZM7.50008 15C7.10225 15 6.72072 15.158 6.43942 15.4393C6.15811 15.7206 6.00008 16.1022 6.00008 16.5C6.00008 16.8978 6.15811 17.2794 6.43942 17.5607C6.72072 17.842 7.10225 18 7.50008 18C7.8979 18 8.27943 17.842 8.56074 17.5607C8.84204 17.2794 9.00008 16.8978 9.00008 16.5C9.00008 16.1022 8.84204 15.7206 8.56074 15.4393C8.27943 15.158 7.8979 15 7.50008 15ZM16.5001 3C17.325 3.00016 18.1341 3.22709 18.8388 3.65598C19.5435 4.08488 20.1167 4.69924 20.4958 5.43192C20.875 6.1646 21.0454 6.9874 20.9885 7.81039C20.9316 8.63338 20.6496 9.4249 20.1732 10.0984C19.6969 10.772 19.0445 11.3016 18.2875 11.6294C17.5305 11.9572 16.6979 12.0707 15.8808 11.9573C15.0636 11.8439 14.2934 11.5081 13.6542 10.9866C13.0151 10.465 12.5316 9.77778 12.2566 9H3.00008V6H12.2551C12.5656 5.12239 13.1406 4.36263 13.9008 3.82536C14.661 3.28809 15.5692 2.99973 16.5001 3ZM16.5001 6C16.1023 6 15.7207 6.15804 15.4394 6.43934C15.1581 6.72064 15.0001 7.10218 15.0001 7.5C15.0001 7.89783 15.1581 8.27936 15.4394 8.56066C15.7207 8.84196 16.1023 9 16.5001 9C16.8979 9 17.2794 8.84196 17.5607 8.56066C17.842 8.27936 18.0001 7.89783 18.0001 7.5C18.0001 7.10218 17.842 6.72064 17.5607 6.43934C17.2794 6.15804 16.8979 6 16.5001 6Z"
                fill="black"
              />
            </svg>
            <span>필터</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default CategoryBar;
