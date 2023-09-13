import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Weather from "./pages/Weather/Weather.jsx";
import News from "./pages/News/News.jsx";
import Alert from "./pages/Alert/Alert";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Weather />} />
        <Route path="/news" element={<News />} />
        <Route path="/alert" element={<Alert />} />
      </Routes>
    </Router>
  );
};

export default App;
