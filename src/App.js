import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from "./components/topbar/topbar.js";
import Footer from "./components/footer/Footer";
import MainRoutes from "./Routes/MainRoutes.jsx";
import LandingPage from "./Routes/LandingPage.js";
import AccessibilityWidget from "./components/accessibility/AccessibilityWidget.jsx";

function App() {
  return (
    <BrowserRouter>
      <AccessibilityWidget />
      <Routes>
        {/* Website layout WITH header & footer */}
        <Route
          path="/*"
          element={
            <div className="App">
              <Topbar />
              <MainRoutes />
              <Footer />
            </div>
          }
        />

        {/* Landing page WITHOUT header & footer */}
        <Route path="/apply-now" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
