import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Home from "../pages/home/Home";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default Router;
