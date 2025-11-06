import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Left: CIKV Logo + Name */}
        <div className="flex items-center space-x-4">
          <img src="Frontend/src/assets/cikv_logo.jpeg" alt="CIKV Logo" className="h-10 w-auto" />
          <h1 className="text-xl font-semibold text-gray-800">
            Centre for Indian Knowledge and Values (CIKV)
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-red-600">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-red-600">About Society</Link>
          <Link to="/events" className="text-gray-700 hover:text-red-600">Events</Link>
          <Link to="/gallery" className="text-gray-700 hover:text-red-600">Gallery</Link>
          <div className="relative group">
            <button className="text-gray-700 hover:text-red-600">Blogs/Reviews</button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded-md">
              <Link to="/blogs" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Blogs</Link>
              <Link to="/reviews" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Reviews</Link>
            </div>
          </div>
          <Link to="/forms" className="text-gray-700 hover:text-red-600">Forms</Link>
          <Link to="/contact" className="text-gray-700 hover:text-red-600">Contact Us</Link>
          <Link to="/login" className="text-gray-700 hover:text-red-600">Core Team Login</Link>
        </nav>

        {/* Right: VIPS Logo */}
        <div className="hidden md:block">
          <img src="/assets/vips_logo.png" alt="VIPS Logo" className="h-10 w-auto" />
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
          {mobileNavOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileNavOpen && (
        <nav className="md:hidden bg-white shadow-inner">
          <Link to="/" className="block px-6 py-2 text-gray-700 hover:bg-gray-100">Home</Link>
          <Link to="/about" className="block px-6 py-2 text-gray-700 hover:bg-gray-100">About Society</Link>
          <Link to="/events" className="block px-6 py-2 text-gray-700 hover:bg-gray-100">Events</Link>
          <Link to="/gallery" className="block px-6 py-2 text-gray-700 hover:bg-gray-100">Gallery</Link>
          <Link to="/blogs" className="block px-6 py-2 text-gray-700 hover:bg-gray-100">Blogs</Link>
          <Link to="/reviews" className="block px-6 py-2 text-gray-700 hover:bg-gray-100">Reviews</Link>
          <Link to="/forms" className="block px-6 py-2 text-gray-700 hover:bg-gray-100">Forms</Link>
          <Link to="/contact" className="block px-6 py-2 text-gray-700 hover:bg-gray-100">Contact Us</Link>
          <Link to="/login" className="block px-6 py-2 text-gray-700 hover:bg-gray-100">Core Team Login</Link>
          <div className="px-6 py-4">
            <img src="/assets/vips_logo.png" alt="VIPS Logo" className="h-8 w-auto mx-auto" />
          </div>
        </nav>
      )}
    </header>
);
}
