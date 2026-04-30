import React from "react";
import { Route } from "react-router-dom";
import BscFilmmaking from "../pages/BscFilmmaking";
import MscFilmmaking from "../pages/MscFilmmaking";
import BaScreenacting from "../pages/BaScreenacting";

export const CoursesRoutes = (
  <>
    <Route path="/courses/ba-screen-acting" element={<BaScreenacting />} />
    <Route path="/courses/bsc-filmmaking" element={<BscFilmmaking />} />
    <Route path="/courses/msc-filmmaking" element={<MscFilmmaking />} />
  </>
);
