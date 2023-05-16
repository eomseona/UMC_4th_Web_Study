import React from "react";

const CategoryBtn = (props) => {
  return (
    <button className="categoryBtn">
      <img src={props.image} alt="" width={23} height={23} />
      <div className="categoryText">{props.text}</div>
    </button>
  );
};

export default CategoryBtn;
