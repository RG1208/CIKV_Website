import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
// (You’ll later add About, Events, Gallery, Blogs, Contact, Login pages.)

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/events" element={<Events />} /> */}
            {/* <Route path="/gallery" element={<Gallery />} /> */}
            {/* <Route path="/blogs" element={<Blogs />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
            {/* <Route path="/login" element={<Login />} /> */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
