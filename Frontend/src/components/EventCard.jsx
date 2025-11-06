import { Link } from "react-router-dom";
import React from "react";

export default function EventCard({ title, date, image, excerpt, link }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all">
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h4 className="text-xl font-semibold text-gray-800 mb-2">{title}</h4>
        <p className="text-sm text-gray-500 mb-2">{new Date(date).toDateString()}</p>
        <p className="text-gray-700 mb-4">{excerpt}</p>
        <Link
          to={link}
          className="inline-block bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
