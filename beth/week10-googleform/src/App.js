import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Preview from "./pages/Preview";
import Result from "./pages/Result";
import { Provider } from "react-redux";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
