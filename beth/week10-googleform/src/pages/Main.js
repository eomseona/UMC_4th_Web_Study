import { styled } from "styled-components";
import TitleBox from "../components/TitleBox";
import SideMenu from "../components/SideMenu";
import QuestionContainer from "../components/QuestionContainer";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { reorderQuestion } from "../store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { theme } from "../styles/theme";

const Main = () => {
  const form = useSelector((state) => state.formReducer);
  const questions = useSelector((state) => state.questionReducer);
  const dispatch = useDispatch();

  const [info, setInfo] = useState({
    title: form.title,
    detail: "",
  });

  const handleInfo = (name, value) => {
    setInfo({
      ...info,
      [name]: value,
    });
  };

  const getQuestionList = () => {
    return questions.map((question, idx) => (
      <Draggable key={question.id} draggableId={question.id} index={idx}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.draggableProps}>
            <QuestionContainer
              key={question.id}
              questionId={question.id}
              provided={provided}
            />
          </div>
        )}
      </Draggable>
    ));
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    dispatch(
      reorderQuestion({
        firstIdx: result.source.index,
        secondIdx: result.destination.index,
      })
    );
  };
  return (
    <>
      <Header>
        <img
          src="https://cdn-icons-png.flaticon.com/512/324/324126.png"
          alt="icon"
          style={{ height: 45 + "px", marginRight: 30 + "px" }}
        />
        <Text>Google Form by Beth</Text>
      </Header>
      <Wrapper>
        <div className="question">
          <TitleBox
            title={info.title}
            detail={info.detail}
            handleChange={handleInfo}
          />
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided) => (
                <div ref={provided.innerRef}>
                  {getQuestionList()}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
        <SideMenu title={info.title} detail={info.detail} />
      </Wrapper>
    </>
  );
};

export default Main;

export const Wrapper = styled.div`
  height: 1000px;
  ${theme.flexCenter};
  background: ${theme.color.background};
  margin: 0 auto;
  max-width: 1440px;
  align-items: flex-start;
  padding-top: 30px;
`;

const Header = styled.div`
  background: ${theme.color.white};
  height: 140px;
  display: flex;
  align-items: center;
  padding-left: 280px;
`;

const Text = styled.div`
  font-size: 40px;
`;
