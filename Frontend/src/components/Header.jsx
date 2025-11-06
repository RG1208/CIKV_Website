import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import cikvLogo from '../assets/cikv_logo.jpeg';
import vipsLogo from '../assets/vips_logo.png';

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // Close mobile menu on link click
  const closeMobileMenu = () => {
    setMobileNavOpen(false);
  };

  return (
    // Updated header color to match the golden-brown from the screenshot
    <header className="bg-amber-800 text-amber-100 shadow-md sticky top-0 z-50">
      <div className="w-full flex items-center justify-between py-4 relative">
        {/* Left: CIKV Logo + Name */}
        <Link to="/" className="flex items-center space-x-4 flex-shrink-0 ml-5" onClick={closeMobileMenu}>
          <img src={cikvLogo} alt="CIKV Logo" className="h-12 w-auto rounded-full" />
          <h1 className="text-xl font-semibold text-amber-100 hidden sm:block">
            Centre for Indian Knowledge and Values (CIKV)
          </h1>
        </Link>

        {/* Right: Desktop Navigation + VIPS Logo */}
        <div className="hidden md:flex items-center space-x-6 flex-shrink-0 mr-5">
          {/* Desktop Navigation */}
          <nav className="flex space-x-6">
            <Link to="/" className="hover:text-white font-medium">Home</Link>
            <Link to="/about" className="hover:text-white font-medium">About Society</Link>
            <Link to="/events" className="hover:text-white font-medium">Events</Link>
            <Link to="/gallery" className="hover:text-white font-medium">Gallery</Link>
            <div className="relative group">
              <button className="hover:text-white font-medium flex items-center">
                Blogs/Reviews
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              {/* Dropdown Menu */}
              <div className="absolute hidden group-hover:block bg-amber-800 shadow-lg mt-2 rounded-md border border-amber-700 z-50">
                <Link to="/blogs" className="block px-4 py-2 hover:bg-amber-700 hover:text-white">Blogs</Link>
                <Link to="/reviews" className="block px-4 py-2 hover:bg-amber-700 hover:text-white">Reviews</Link>
              </div>
            </div>
            <Link to="/forms" className="hover:text-white font-medium">Forms</Link>
            <Link to="/contact" className="hover:text-white font-medium">Contact Us</Link>
            {/* <Link to="/login" className="hover:text-white font-medium">Core Team Login</Link> */}
          </nav>
          {/* VIPS Logo */}
          <div className="flex items-center pl-4 border-l border-amber-600">
            <img src={vipsLogo} alt="VIPS Logo" className="h-12 w-auto" />
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-amber-100 focus:outline-none mr-5"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          aria-label="Toggle menu"
        >
          {mobileNavOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer (Colors updated) */}
      {mobileNavOpen && (
        <nav className="md:hidden bg-amber-800 shadow-inner absolute top-full left-0 w-full z-40">
          <Link to="/" onClick={closeMobileMenu} className="block px-6 py-3 text-amber-100 hover:bg-amber-700">Home</Link>
          <Link to="/about" onClick={closeMobileMenu} className="block px-6 py-3 text-amber-100 hover:bg-amber-700">About Society</Link>
          <Link to="/events" onClick={closeMobileMenu} className="block px-6 py-3 text-amber-100 hover:bg-amber-700">Events</Link>
          <Link to="/gallery" onClick={closeMobileMenu} className="block px-6 py-3 text-amber-100 hover:bg-amber-700">Gallery</Link>
          <Link to="/blogs" onClick={closeMobileMenu} className="block px-6 py-3 text-amber-100 hover:bg-amber-700">Blogs</Link>
          <Link to="/reviews" onClick={closeMobileMenu} className="block px-6 py-3 text-amber-100 hover:bg-amber-700">Reviews</Link>
          <Link to="/forms" onClick={closeMobileMenu} className="block px-6 py-3 text-amber-100 hover:bg-amber-700">Forms</Link>
          <Link to="/contact" onClick={closeMobileMenu} className="block px-6 py-3 text-amber-100 hover:bg-amber-700">Contact Us</Link>
          {/* <Link to="/login" onClick={closeMobileMenu} className="block px-6 py-3 text-amber-100 hover:bg-amber-700">Core Team Login</Link> */}
          <div className="px-6 py-4 border-t border-amber-700">
            <img src={vipsLogo} alt="VIPS Logo" className="h-10 w-auto mx-auto" />
          </div>
        </nav>
      )}
    </header>
  );
}