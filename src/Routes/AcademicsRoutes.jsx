import React from "react";
import { Route } from "react-router-dom";
import Academics from "../pages/Academics";
import Message from "../page_content/academicsComponents/Message/Message";
import Faculty from "../page_content/academicsComponents/faculty/Faculty";
import Learning from "../page_content/academicsComponents/learning/Learning";
import Structure from "../page_content/academicsComponents/structure/Structure";
import Events from "../page_content/academicsComponents/events/Events";
import Recognitions from "../page_content/academicsComponents/recognitions/Recognitions";
import Placements from "../page_content/academicsComponents/placements/Placements";

export const AcademicsRoutes = (
  <Route path="academics" element={<Academics />}>
    <Route index element={<Message />} />
    <Route path="leadership-message" element={<Message />} />
    <Route path="faculty" element={<Faculty />} />
    <Route path="learning-resourses" element={<Learning />} />
    <Route path="academic-structure" element={<Structure />} />
    <Route path="event-workshops" element={<Events />} />
    <Route path="awards-recognitions" element={<Recognitions />} />
     <Route path="placements" element={<Placements />} />
  </Route>
);
