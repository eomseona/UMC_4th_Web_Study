import QUESTION_TYPES from "./QuestionTypes";
import shortid from "shortid";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [
    {
      id: shortid(),
      type: QUESTION_TYPES,
      questionContent: "제목없는 질문",
      isNecessary: false,
      narrativeAnswer: "",
      options: [
        {
          id: 1,
          option: "옵션 1",
        },
      ],
      answers: [],
    },
  ],
  form: {
    title: "제목 없는 설문지",
    detail: "",
  },
};

const getNewOption = (newId) => ({
  id: newId,
  option: `옵션 ${newId}`,
});

const { actions: questionActions, reducer: questionReducer } = createSlice({
  name: "question",
  initialState: initialState.questions,
  reducers: {
    changeType: (state, action) => {
      const { id, type } = action.payload;
      const question = state.find((item) => item.id === id);
      question && (question.type = type);
      question && (question.answers = []);
    },

    setNecessary: (state, action) => {
      const id = action.payload;
      const question = state.find((item) => item.id === id);
      question && (question.isNecessary = !question.isNecessary);
    },

    setQuestionContent: (state, action) => {
      const { id, questionContent } = action.payload;
      const question = state.find((item) => item.id === id);
      question && (question.questionContent = questionContent);
    },

    addQuestion: (state, action) => {
      const newQuestion = action.payload;
      state.push(newQuestion);
    },

    deleteQuestion: (state, action) => {
      const id = action.payload;
      return state.filter((item) => item.id !== id);
    },

    addOption: (state, action) => {
      const { id, optionId } = action.payload;
      const questionId = state.findIndex((item) => item.id === String(id));
      if (questionId === -1) return;
      const question = state[questionId];
      if (!question.options) question.options = [];
      state[questionId].options.push(getNewOption(optionId));
    },

    setOptionContent: (state, action) => {
      const { id, optionId, optionContent } = action.payload;
      const questionId = state.findIndex((item) => item.id === String(id));
      const optionIdx = state[questionId].options.findIndex(
        (item) => item.id === Number(optionId)
      );
      state[questionId].options[optionIdx].option = optionContent;
    },

    setNarrativeAnswer: (state, action) => {
      const { id, narrativeContent } = action.payload;
      const questionId = state.findIndex((item) => item.id === String(id));
      state[questionId].narrativeAnswer = narrativeContent;
    },

    markOneAnswer: (state, action) => {
      const { id, optionId, isAnswer } = action.payload;
      const question = state.find((item) => item.id === id);
      if (!question) return;
      question.answers.length > 0 && question.answers.splice(-1, 1); // 한개만 저장하기 위함
      if (!isAnswer) {
        question.answers.push(optionId);
      }
    },

    markMultipleAnswer: (state, action) => {
      const { id, optionId, isAnswer } = action.payload;
      const question = state.find((item) => item.id === id);
      if (!question) return;
      const answerIdx = question.answers.findIndex((item) => item === optionId);

      if (!isAnswer) {
        question.answers.push(optionId);
      } else {
        if (answerIdx === 0) question.answers.shift();
        else question.answers.splice(answerIdx, 1);
      }
    },

    resetAnswer: (state) => {
      state.map((item) => {
        item.answers = [];
        item.narrativeAnswer = "";
      });
    },

    reorderQuestion: (state, action) => {
      const { firstIdx, secondIdx } = action.payload;
      const [removed] = state.splice(firstIdx, 1);
      state.splice(secondIdx, 0, removed);
    },
  },
});
const { actions: formActions, reducer: formReducer } = createSlice({
  name: "form",
  initialState: initialState.form,
  reducers: {
    addForm: (state, action) => {
      const { title, detail } = action.payload;
      state.title = title;
      state.detail = detail;
    },
  },
});

const store = configureStore({
  reducer: {
    questionReducer,
    formReducer,
  },
});

export const {
  changeType,
  setNecessary,
  setQuestionContent,
  addQuestion,
  deleteQuestion,
  addOption,
  setOptionContent,
  setNarrativeAnswer,
  markOneAnswer,
  markMultipleAnswer,
  resetAnswer,
  reorderQuestion,
} = questionActions;

export const { addForm } = formActions;
export default store;
