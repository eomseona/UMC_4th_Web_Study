import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { selectKey } from "../../store";
import { styled } from "styled-components";

const CategoryElement = (props) => {
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
    <CategoryList
      isClicked={isClicked}
      key={props.elementKey[4]}
      onClick={() => onClickedElement(props.elementKey[4])}
    >
      <CategorySection>
        <img
          className="i1wps9q8 dir dir-ltr"
          src={props.imgSrc}
          alt="categoryImg"
          width="24"
          height="24"
        />
        <DesSection isClicked={isClicked}>
          <Description>{props.description}</Description>
        </DesSection>
      </CategorySection>
    </CategoryList>
  );
};

export default CategoryElement;

const CategoryList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-width: 4.5rem;
  height: 3rem;
  opacity: ${(props) => (props.isClicked ? 1 : 0.6425339366515838)};
  margin-left: 0.5rem;
  margin-right: 0.5rem;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
  i {
    height: 24px;
    line-height: 24px;
  }
`;

const CategorySection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
`;

const DesSection = styled.div`
  white-space: nowrap;

  &::after {
    content: "";
    position: absolute;
    inset-inline: 0;
    height: 2px;
    top: 53px;
    transition: opacity 0.2s ease;
    background-color: black;
    opacity: ${(props) => (props.isClicked ? 1 : 0)};
  }

  ${CategorySection}:hover &::after {
    opacity: ${(props) => (props.isClicked ? 1 : 0.1425339366515838)};
  }
`;

const Description = styled.div`
  font-size: 0.8rem;
  color: black;
`;
