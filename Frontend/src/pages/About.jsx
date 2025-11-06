import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <section className="max-w-5xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold text-center text-[#a3632d] mb-10">
          About Centre for Indian Knowledge and Values (CIKV)
        </h1>

        <p className="text-lg leading-relaxed mb-6">
          The Centre for Indian Knowledge and Values (CIKV) is a movement dedicated to exploring
          and spreading the wealth of India’s ethical and cultural legacy. Our mission is to preserve
          and promote the timeless principles of Indian wisdom, blending the ancient with the modern.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3 text-[#a3632d]">Mission & Vision</h2>
        <ul className="list-disc ml-6 mb-6">
          <li>
            <strong>Mission:</strong> To serve as a beacon of knowledge, guiding people to rediscover the
            roots of Indian ethics and values.
          </li>
          <li>
            <strong>Vision:</strong> To share the universal relevance of Indian wisdom globally and inspire
            a world grounded in respect, honesty, and compassion.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3 text-[#a3632d]">Core Objectives</h2>
        <ul className="list-disc ml-6 mb-10 space-y-2">
          <li><strong>Awareness:</strong> Creating awareness about timeless principles from Indian traditions.</li>
          <li><strong>Education:</strong> Providing structured learning through workshops and seminars.</li>
          <li><strong>Practice:</strong> Encouraging individuals to incorporate these values into their daily lives.</li>
          <li><strong>Integration:</strong> Bridging ancient wisdom with contemporary life.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-[#a3632d]">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Dr. Kritika Nagdev", role: "Faculty Coordinator" },
            { name: "Arnav Verma", role: "President" },
          ].map((member, i) => (
            <div key={i} className="p-6 border rounded-xl shadow-sm text-center">
              <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-4" />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
