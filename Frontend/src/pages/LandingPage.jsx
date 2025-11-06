import { Link } from 'react-router-dom';
import EventCard from '../components/EventCard';
import React from 'react';

const sampleEvents = [
  {
    id: 1,
    title: "Workshop on Indian Ethics",
    date: "2025-11-20",
    image: "/assets/event1.jpg",
    excerpt: "Explore timeless Indian values through interactive sessions."
  },
  {
    id: 2,
    title: "Seminar: Wisdom of the Upanishads",
    date: "2025-10-15",
    image: "/assets/event2.jpg",
    excerpt: "Dive into the teachings of ancient Indian scriptures."
  }
];

export default function LandingPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[60vh]" style={{ backgroundImage: "url('/assets/hero-banner.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container relative z-10 mx-auto px-6 py-20 text-white text-center">
          <h2 className="text-4xl md:text-6xl font-bold">An endeavor to preserve, promote, and imbibe timeless Indian principles</h2>
          <p className="mt-4 text-lg md:text-2xl">Bridging ancient wisdom with the modern world.</p>
        </div>
      </section>

      {/* Quick Introduction */}
      <section className="container mx-auto px-6 py-12 text-gray-700">
        <h3 className="text-3xl font-semibold mb-4">About CIKV</h3>
        <p className="leading-relaxed">
          The Centre for Indian Knowledge and Values (CIKV) is a movement dedicated to exploring India’s ethical and cultural legacy...
        </p>
      </section>

      {/* Recent Events Highlights */}
      <section className="container mx-auto px-6 py-12">
        <h3 className="text-3xl font-semibold mb-8 text-center">Recent Events</h3>
        <div className="grid gap-8 md:grid-cols-2">
          {sampleEvents.map(event => (
            <EventCard key={event.id} title={event.title} date={event.date} image={event.image} excerpt={event.excerpt} link={`/events/${event.id}`} />
          ))}
        </div>
      </section>

      {/* Upcoming Events CTA */}
      <section className="bg-red-50 py-12">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold mb-4">Upcoming Workshops & Seminars</h3>
          <p className="mb-6">Stay tuned for our next upcoming event. Join us and be part of the movement.</p>
          <Link to="/forms" className="inline-block bg-red-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-red-700">Join CIKV</Link>
        </div>
      </section>
    </main>
  );
}
