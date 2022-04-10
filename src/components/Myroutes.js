import { Routes, Route } from "react-router-dom";
import HomeDisplay from "./HomeDisplay";
import Home from "./Home";
import Song from "./Song";

import React from "react";

const Myroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeDisplay />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/song/:id" element={<Song />}></Route>
    </Routes>
  );
};

export default Myroutes;
