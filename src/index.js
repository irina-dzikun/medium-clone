import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalFeed from "pages/GlobalFeed";
import Article from "pages/Article";
import Authentication from "pages/Authentication";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GlobalFeed />} />
        <Route path="/login" element={<Authentication login />} />
        <Route path="/register" element={<Authentication />} />
        <Route path="/articles/:slug" element={<Article />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
