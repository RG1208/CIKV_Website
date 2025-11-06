import { Link } from 'react-router-dom';
import React from 'react';
import cikvLandingBanner from '../assets/cikv_landing_banner.png';

// Updated event data to match the 3-card layout from the screenshots
const sampleEvents = [
  {
    id: 1,
    title: "Yoga & Wellness Workshop",
    date: "2025-11-20",
    image: "/assets/event-yoga.jpg", // Make sure you have this image
    excerpt: "Antarsh sharira mane sthira hove toh manas shant hota hai."
  },
  {
    id: 2,
    title: "Essence of Ethics Conclave",
    date: "2025-12-05",
    image: "/assets/event-ethics.jpg", // Make sure you have this image
    excerpt: "The timeless essence of Indian ethics in today's modern world."
  },
  {
    id: 3,
    title: "Rashtra Nritya Utsav",
    date: "2025-12-18",
    image: "/assets/event-dance.jpg", // Make sure you have this image
    excerpt: "Celebrating India's diverse and rich classical dance forms."
  }
];

export default function LandingPage() {
  return (
    // Use a cream/parchment background for the whole page
    <main className="bg-[#FFFBEB]">
      
      {/* Hero Section - Styled like Screenshot 1 */}
      <section className="relative bg-cover bg-center h-[100vh] md:h-[76vh]" style={{ backgroundImage: `url(${cikvLandingBanner})` }}>
        {/* Semi-transparent overlay for text readability */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
        
        {/* <div className="container relative z-10 mx-auto px-6 h-full flex flex-col justify-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white max-w-2xl shadow-sm">
            An endeavor to preserve, promote, and imbibe timeless Indian principles and teachings.
          </h2>
          <Link 
            to="/about" 
            className="mt-6 inline-block bg-yellow-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-yellow-600 w-max font-semibold"
          >
            Read More
          </Link>
        </div> */}
      </section>

      {/* Welcome Introduction - Styled like Screenshots */}
      <section className="container mx-auto px-6 py-16 text-gray-700 text-center">
        <h3 className="text-4xl font-semibold mb-6 text-gray-800">
          Welcome to CIKV
        </h3>
        <p className="leading-relaxed max-w-3xl mx-auto text-lg">
          The Centre of Indian Knowledge and Values (CIKV) is a central society under dedicated to exploring the
          rich callinaal Instititaag and laula... [Your full welcome text goes here]
        </p>
        
        {/* Lotus Divider - As seen in Screenshot 2 */}
        <div className="text-5xl text-yellow-700 my-10" aria-hidden="true">
          🪷
        </div>
      </section>

      {/* Events Section - Styled like Screenshot 2 (Maroon Background) */}
      <section className="bg-[#6D2828] py-16"> {/* Dark Maroon Background */}
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-semibold mb-10 text-center text-white">
            Upcoming Events
          </h3>
          
          {/* 3-Column Grid */}
          <div className="grid gap-8 md:grid-cols-3">
            {sampleEvents.map(event => (
              
              // --- Inlined Event Card Component ---
              // Since EventCard.jsx was not provided, this styles the card directly.
              <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-48 object-cover" 
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-2xl font-semibold mb-2 text-gray-800">{event.title}</h4>
                  <p className="text-gray-600 mb-4 flex-grow">{event.excerpt}</p>
                  <Link 
                    to={`/events/${event.id}`} 
                    className="inline-block bg-yellow-500 text-white px-5 py-2 rounded-md shadow-md hover:bg-yellow-600 text-center font-semibold w-max"
                  >
                    Read More
                  </Link>
                </div>
              </div>
              // --- End of Inlined Event Card ---

            ))}
          </div>
        </div>
      </section>

      {/* Footer Call-to-Action - Styled like Screenshot 1 */}
      <footer className="bg-yellow-100 border-t border-yellow-300 py-6">
        <div className="container mx-auto px-6 text-center text-yellow-800">
          <p className="font-semibold text-lg">Join our growing community</p>
        </div>
      </footer>
      
    </main>
  );
}