import "./App.css";
import { BrowserRouter, Route, Switch, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Write from "./pages/Write";
import Article from "./pages/Article";

function App() {
  // 1. 페이지 라우팅 - react-router-dom
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/write" element={<Write />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/article/edit/:id" element={<Article />} />
          <Route path="/*" element={<Home />} />
          {/* <Route exact path="/" component={() => <Home />} />
          <Route exact path="/write" component={() => <Write />} />
          <Route exact path="/series" component={() => <SeriesCategory />} />
          <Route component={() => <div>Page Not Found</div>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
