import React from "react";
import EventCard from "../components/EventCard";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Workshop on Indian Philosophy",
      date: "Oct 10, 2025",
      description:
        "An insightful session on the foundational ideas of Indian philosophy and ethics.",
      image: "/images/event1.jpg",
      category: "Workshop",
    },
    {
      id: 2,
      title: "Gita Jayanti Celebration",
      date: "Dec 22, 2025",
      description:
        "A celebration of the teachings of the Bhagavad Gita with discussions and performances.",
      image: "/images/event2.jpg",
      category: "Cultural",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-[#a3632d]">
        Our Events
      </h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
