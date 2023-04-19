import React from "react";
import styles from "./Category.css";
import CategoryBtn from "./CategoryBtn";

const Category = () => {
  return (
    <div id="category_bar">
      <div id="moveBtn">
        <svg
          className="arrowIcon"
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
      </div>
      <div className="menuContainer">
        <ul className="menuSlider">
          <li>
            <CategoryBtn
              image="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
              text="최고의 전망"
            />
          </li>
          <li>
            <CategoryBtn
              image="https://a0.muscache.com/pictures/51f5cf64-5821-400c-8033-8a10c7787d69.jpg"
              text="한옥"
            />
          </li>
          <li>
            <CategoryBtn
              image="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
              text="기상천외한 숙소"
            />
          </li>
          <li>
            <CategoryBtn
              image="https://a0.muscache.com/pictures/6b639c8d-cf9b-41fb-91a0-91af9d7677cc.jpg"
              text="골프장"
            />
          </li>
          <li>
            <CategoryBtn
              image="https://a0.muscache.com/pictures/5cdb8451-8f75-4c5f-a17d-33ee228e3db8.jpg"
              text="풍차"
            />
          </li>
          <li>
            <CategoryBtn
              image="https://a0.muscache.com/pictures/eb7ba4c0-ea38-4cbb-9db6-bdcc8baad585.jpg"
              text="개인실"
            />
          </li>
          <li>
            <CategoryBtn
              image="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg"
              text="해변 바로 앞"
            />
          </li>
          <li>
            <CategoryBtn
              image="https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg"
              text="한적한 시골"
            />
          </li>
          <li>
            <CategoryBtn
              image="https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg"
              text="인기급상승"
            />
          </li>
          <li>
            <CategoryBtn
              image="https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg"
              text="국립공원"
            />
          </li>
          <li>
            <CategoryBtn
              image="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg"
              text="멋진 수영장"
            />
          </li>
          <li>
            <CategoryBtn
              image="https://a0.muscache.com/pictures/827c5623-d182-474a-823c-db3894490896.jpg"
              text="료칸"
            />
          </li>
          <li>
            <CategoryBtn
              image="https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg"
              text="캐슬"
            />
          </li>
          <li>
            <CategoryBtn
              image="https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg"
              text="저택"
            />
          </li>
          <li>
            <CategoryBtn
              image="https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg"
              text="캠핑장"
            />
          </li>
          <li>
            <CategoryBtn
              image="https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg"
              text="초소형 주택"
            />
          </li>
          <li>
            <CategoryBtn
              image="https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg"
              text="농장"
            />
          </li>
          <li>
            <CategoryBtn
              image="https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg"
              text="디자인"
            />
          </li>
          <li>
            <CategoryBtn
              image="https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg"
              text="상징적 도시"
            />
          </li>
          <li>
            <CategoryBtn
              image="https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg"
              text="Luxe"
            />
          </li>
          <li>
            <CategoryBtn
              image="https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg"
              text="통나무 집"
            />
          </li>
        </ul>
      </div>
      <div id="moveBtn">
        <svg
          className="arrowIcon"
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
      </div>
      <div id="filterBtn">
        <svg
          className="filterIcon"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="presentation"
          focusable="false"
        >
          <path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
        </svg>
        필터
      </div>
    </div>
  );
};

export default Category;
