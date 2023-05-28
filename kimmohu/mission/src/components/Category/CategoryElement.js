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
    <CategorySection
      onClickStyle={isClicked}
      key={props.elementKey[4]}
      onClick={() => onClickedElement(props.elementKey[4])}
    >
      <CategoryContent>
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
      </CategoryContent>
    </CategorySection>
  );
};

export default CategoryElement;

const CategorySection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  min-width: 56px;
  height: 5rem;
  opacity: ${(props) => (props.onClickStyle ? 1 : 0.6425339366515838)};
  padding-top: 4px;
  padding-bottom: 4px;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
  i {
    height: 24px;
    line-height: 24px;
  }
`;

const CategoryContent = styled.div`
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
