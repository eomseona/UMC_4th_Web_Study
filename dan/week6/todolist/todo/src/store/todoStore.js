import { configureStore, createSlice } from "@reduxjs/toolkit";


let contents = createSlice({ //state들
  name: "content",
  initialState: [
    { id: 0, name: "커피 마시기", p: "커피를 마셔야한다.", 날짜: '2023-05-15', completed: false },
    { id: 1, name: "운동하기", p: "팔굽 30개, 윗몸30개", 날짜: '2023-05-15', completed: false },
    { id: 2, name: "책 읽기", p: "베르나르 베르베르", 날짜: '2023-05-15', completed: false },
  ],
  reducers: {
    addproduct(state, a) {
      console.log(a.payload)
      state.push(a.payload);
    },
    deleteproduct(state, a) {
      let index = state.findIndex((obj) => obj.id === a.payload);
      console.log(index);
      state.splice(index, 1);

    },
    checkproduct(state, a) {

      state[a.payload].completed = !state[a.payload].completed;
      console.log(state[a.payload].completed)
    }
  }
});
export let { addproduct, deleteproduct, checkproduct } = contents.actions;
export default configureStore({ // reducer로 등록
  reducer: {
    contents: contents.reducer,
  },
});
