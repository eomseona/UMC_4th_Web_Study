import "./App.css";
import Main from "./pages/Main";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
