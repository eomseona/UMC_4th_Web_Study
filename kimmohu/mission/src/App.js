import "./App.css";
import Main from "./pages/Main";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";
import KakaoAuth from "./components/login/KakaoAuth";
import KakaoRedirectHandler from "./api/KakaoRedirectHandler";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<KakaoAuth />} />
          <Route path="/kakao" element={<KakaoRedirectHandler />} />
        </Routes>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
