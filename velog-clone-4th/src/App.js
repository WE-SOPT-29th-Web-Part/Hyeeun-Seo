import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Write from "./pages/Write";
import SeriesCategory from "./pages/SeriesCategory";

function App() {
  // 1. 페이지 라우팅 - react-router-dom
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route exact path="/write" component={() => <Write />} />
          <Route exact path="/series" component={() => <SeriesCategory />} />
          <Route component={() => <div>Page Not Found</div>} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
