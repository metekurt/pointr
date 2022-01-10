import React from "react";
import "./index.css";
import App from "./App";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WeatherPage from "./routes/WeatherPage";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="weatherPage" element={<WeatherPage />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
