import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Import all pages
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Blogs from "./pages/Blogs";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        {/* ✅ Common Header */}
        <Header />

        {/* ✅ Page content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
        </main>

        {/* ✅ Common Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
