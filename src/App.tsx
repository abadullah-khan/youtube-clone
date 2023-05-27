import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import VideoPlayer from "./pages/VideoPlayer";
import { Context } from "./contextApi/Store";

import "./styles/App.css";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter basename="/youtube-clone">
        <Context>
          <Routes>
            <Route path={"/youtube-clone"} element={<Home />} />
            <Route path={"/videoPlayer/:post"} element={<VideoPlayer />} />
          </Routes>
        </Context>
      </BrowserRouter>
    </div>
  );
};

export default App;
