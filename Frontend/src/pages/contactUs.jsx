import React, { useState } from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { HiLocationMarker, HiMail } from 'react-icons/hi';

export default function ContactPage() {
  // State for the contact form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      // TODO: replace with real API call
      await new Promise(resolve => setTimeout(resolve, 800));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (err) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- 2. Form & Details Section ---
  return (
    <main>
    <section className="container mx-auto px-6 py-20">
    <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
      
      {/* --- Left Column: Contact Form --- */}
      <div>
        <h2 className="text-4xl font-bold text-amber-900 mb-6 font-serif">
          Send Us a Message
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-lg font-semibold text-gray-700">Full Name</label>
            <input 
              type="text" 
              id="name" 
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full mt-2 p-3 rounded-md border border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500" 
            />
          </div>
          
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-lg font-semibold text-gray-700">Email Address</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full mt-2 p-3 rounded-md border border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500" 
            />
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-lg font-semibold text-gray-700">Subject</label>
            <input 
              type="text" 
              id="subject" 
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              className="w-full mt-2 p-3 rounded-md border border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500" 
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-lg font-semibold text-gray-700">Message</label>
            <textarea 
              id="message" 
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleInputChange}
              required
              className="w-full mt-2 p-3 rounded-md border border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
            ></textarea>
          </div>

          {/* Submit Button & Status */}
          <div className="flex items-center space-x-4">
            <button 
              type="submit"
              disabled={isSubmitting}
              className="inline-block bg-amber-600 text-white px-8 py-3 rounded-md shadow-lg hover:bg-amber-700 text-lg font-semibold transition duration-300 ease-in-out disabled:bg-gray-400"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {isSubmitting && <LoadingSpinner />}
          </div>
          
          {/* Submission Status Message */}
          {submitStatus === 'success' && (
            <p className="text-green-600 font-semibold">Message sent successfully! We will get back to you soon.</p>
          )}
          {submitStatus === 'error' && (
            <p className="text-red-600 font-semibold">An error occurred. Please try again later.</p>
          )}

        </form>
      </div>

      {/* --- Right Column: Contact Details --- */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-amber-900 mb-8 font-serif">
          Contact Details
        </h2>
        <div className="space-y-6">
          {/* Address */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 text-amber-800 pt-1">
              <HiLocationMarker size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-amber-800 font-serif">Our Location</h3>
              <p className="text-lg text-gray-700 mt-1">
                A Central Society of VIPS-TC
              </p>
              <p className="text-lg text-gray-700">
                AU Block, Outer Ring Road, Pitampura
              </p>
              <p className="text-lg text-gray-700">
                New Delhi - 110034
              </p>
            </div>
          </div>
          
          {/* Email */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 text-amber-800 pt-1">
              <HiMail size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-amber-800 font-serif">Email Us</h3>
              <p className="text-lg text-gray-700 mt-1">
                For inquiries and collaborations:
              </p>
              <a 
                href="mailto:info@cikv.org" 
                className="text-lg text-amber-600 hover:text-amber-800 font-semibold"
              >
                info@cikv.org
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 text-amber-800 pt-1">
              {/* Placeholder icon, e.g., a "connect" icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-amber-800 font-serif">Follow Us</h3>
              <p className="text-lg text-gray-700 mt-1">
                Stay connected on our social platforms.
              </p>
              <div className="flex space-x-4 mt-3">
                <a href="https://instagram.com/cikv" target="_blank" rel="noopener noreferrer" 
                   className="p-2 rounded-full text-amber-800 hover:bg-amber-100 transition duration-200" aria-label="Instagram">
                  <FaInstagram size={24} />
                </a>
                <a href="https://linkedin.com/company/cikv" target="_blank" rel="noopener noreferrer"
                   className="p-2 rounded-full text-amber-800 hover:bg-amber-100 transition duration-200" aria-label="LinkedIn">
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>

  {/* --- 3. Map Section --- */}
  <section className="container mx-auto px-6 pb-20">
    <h2 className="text-4xl font-bold text-center text-amber-900 mb-8 font-serif">
      Our Location
    </h2>
    <div className="rounded-lg shadow-xl overflow-hidden h-96">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.980486244799!2d77.1352156150839!3d28.69022138239324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03b0a7364d17%3A0x8e83f25c8f2b15e4!2sVivekananda%20Institute%20of%20Professional%20Studies!5e0!3m2!1sen!2sin!4v1678888888888!5m2!1sen!2sin" 
        width="100%" 
        height="100%" 
        style={{ border:0 }} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="VIPS Campus Location"
      ></iframe>
    </div>
  </section>
</main>
);
}

// --- Helper: Page Banner ---
// (Re-used from other pages for consistency)
function PageBanner({ title, subtitle }) {
return (
<section 
  className="relative bg-cover bg-center h-[30vh]" 
  style={{ backgroundImage: "url('/assets/about-banner-scrolls.jpg')" }} // Re-using a fitting banner
>
  <div className="absolute inset-0 bg-black opacity-40"></div>
  <div className="container relative z-10 mx-auto px-6 h-full flex flex-col justify-center">
    <h1 className="text-5xl md:text-6xl font-bold text-white font-serif shadow-sm">
      {title}
    </h1>
    {subtitle && (
      <p className="text-2xl text-white mt-2 shadow-sm">
        {subtitle}
      </p>
    )}
  </div>
</section>
);
}

// --- Helper: Loading Spinner ---
function LoadingSpinner() {
return (
<div className="w-8 h-8 border-4 border-amber-200 border-t-amber-800 rounded-full animate-spin"></div>
);
}