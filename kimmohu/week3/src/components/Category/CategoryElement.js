import React, { useEffect, useState } from "react";
import styles from "./CategoryElement.module.css";
import { useDispatch } from "react-redux";
import { selectKey } from "../../store";

const CategoryElement = (props) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (props.chosenKey === props.elementKey[4]) {
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }
  }, [props.chosenKey, props.elementKey]);

  const dispatch = useDispatch();

  const onClickedElement = (key) => {
    dispatch(selectKey(key));
  };
  return (
    <div
      className={`${styles.ufoList} ${
        isHovering ? styles.hoverChangeColor : ""
      } ${isClicked ? styles.clickedChangeColor : ""}`}
      key={props.elementKey[4]}
      onMouseOver={() => {
        setIsHovering(true);
      }}
      onMouseLeave={() => {
        setIsHovering(false);
      }}
      onClick={() => onClickedElement(props.elementKey[4])}
    >
      <div className={styles.categorySection}>
        <img
          className="i1wps9q8 dir dir-ltr"
          src={props.imgSrc}
          alt="categoryImg"
          width="24"
          height="24"
        />
        <div className={styles.desSection}>
          <div className={styles.description}>{props.description}</div>
        </div>
      </div>
    </div>
  );
};

export default CategoryElement;
