import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Write from "./pages/Write";
import Article from "./pages/Article";

function App() {
  // 1. 페이지 라우팅 - react-router-dom
  return (
    <>
      {/* Switch, exact 없어짐  */}
      {/* component -> element로 변경 */}
      {/* Switch -> Routes로 변경 */}
      <BrowserRouter>
        <Routes>
          <Route path="/write" element={<Write />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/article/edit/:id" element={<Article />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
