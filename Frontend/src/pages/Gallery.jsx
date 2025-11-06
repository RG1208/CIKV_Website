import React from "react";
import GalleryAlbum from "../components/GalleryAlbum";

const Gallery = () => {
  const albums = [
    { title: "Cultural Fest 2025", images: ["/images/gallery1.jpg", "/images/gallery2.jpg"] },
    { title: "Workshop Series", images: ["/images/gallery3.jpg", "/images/gallery4.jpg"] },
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-[#a3632d]">Gallery</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {albums.map((album, i) => (
          <GalleryAlbum key={i} album={album} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
