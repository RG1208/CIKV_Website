import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="container mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Social Media */}
        <div className="flex items-center space-x-4">
          <a href="https://instagram.com/cikv" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} className="hover:text-red-600" />
          </a>
          <a href="https://linkedin.com/company/cikv" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} className="hover:text-red-600" />
          </a>
          <a href="mailto:info@cikv.org">
            <FaEnvelope size={24} className="hover:text-red-600" />
          </a>
        </div>

        {/* Quick Links */}
        <div className="space-y-2">
          <Link to="/" className="hover:text-red-600">Home</Link>
          <Link to="/about" className="hover:text-red-600">About Us</Link>
          <Link to="/contact" className="hover:text-red-600">Contact Us</Link>
        </div>

        {/* Affiliation & Copy */}
        <div className="text-sm">
          <p>A Central Society of Vivekananda Institute of Professional Studies - Technical Campus</p>
          <p className="mt-2">© 2025 Centre for Indian Knowledge and Values (CIKV). All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
