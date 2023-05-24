import "./App.css";
import Header from "./components/UI/Header";
import Main from "./pages/Main";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Provider>
  );
}

export default App;
