import React from "react";
import BlogCard from "../components/BlogCard";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "The Relevance of Dharma in Modern Life",
      author: "Arnav Verma",
      date: "Oct 15, 2025",
      summary:
        "Exploring how the ancient Indian concept of Dharma continues to shape our ethical understanding in the modern world.",
      image: "/images/blog1.jpg",
    },
    {
      id: 2,
      title: "Vasudhaiva Kutumbakam: The World is One Family",
      author: "Dr. Kritika Nagdev",
      date: "Nov 2, 2025",
      summary:
        "A reflection on the timeless wisdom of Indian philosophy emphasizing unity, compassion, and global brotherhood.",
      image: "/images/blog2.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-[#a3632d]">Blogs & Articles</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
