"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";

// Image Builder Setup
const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

type GalleryImage = {
  _id: string;
  title: string;
  tag: string;
  category: string;
  image: any;
};

const QUERY = `*[_type == "gallery"] | order(_createdAt desc)`;
const categories = ["Kumbabishekam", "Temple"];

export default function TempleBackgroundGallery() {
  const [allImages, setAllImages] = useState<GalleryImage[]>([]);
  const [activeCategory, setActiveCategory] = useState("Temple");
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // 1. Fetch Data from Sanity
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const data = await client.fetch(QUERY);
        setAllImages(data);
      } catch (error) {
        console.error("Gallery fetch failed:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchGallery();
  }, []);

  // 2. Filter images based on category
  const filteredImages = useMemo(() => {
    return allImages.filter((img) => img.category === activeCategory);
  }, [activeCategory, allImages]);

  // 3. Carousel Navigation
  const next = () => setIndex((i) => (i + 1) % filteredImages.length);
  const prev = () =>
    setIndex((i) => (i - 1 + filteredImages.length) % filteredImages.length);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setIndex(0);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#1a1612] flex items-center justify-center">
        <p className="text-accent font-serif italic animate-pulse">
          Loading...
        </p>
      </div>
    );
  }

  return (
    <main className="relative min-h-screen pt-12 pb-24 px-6 overflow-hidden bg-[#1a1612]">
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <header className="text-center mb-8">
          <h2 className="text-[10px] uppercase tracking-[0.6em] font-bold text-accent/80 mb-2">
            Darshan Gallery
          </h2>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white tracking-tighter">
            Sacred <span className="italic text-accent">Visions</span>
          </h1>
        </header>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 text-xs uppercase tracking-widest font-bold ${
                activeCategory === cat
                  ? "bg-accent border-accent text-[#1a1612] shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                  : "bg-transparent border-white/20 text-white/60 hover:border-accent/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Carousel Stage */}
        <div className="relative flex items-center justify-center h-[500px] md:h-[650px]">
          {filteredImages.length > 0 ? (
            <>
              {/* Navigation Arrows */}
              {filteredImages.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-0 md:-left-12 z-50 w-14 h-14 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white flex items-center justify-center hover:bg-accent hover:text-black transition-all"
                  >
                    ←
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-0 md:-right-12 z-50 w-14 h-14 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white flex items-center justify-center hover:bg-accent hover:text-black transition-all"
                  >
                    →
                  </button>
                </>
              )}

              <div className="relative w-full flex items-center justify-center">
                {filteredImages.map((img, i) => {
                  const isActive = i === index;
                  const isPrev =
                    i ===
                    (index - 1 + filteredImages.length) % filteredImages.length;
                  const isNext = i === (index + 1) % filteredImages.length;

                  let posStyle = "opacity-0 scale-50 pointer-events-none";
                  if (isActive)
                    posStyle =
                      "opacity-100 scale-100 z-30 shadow-[0_0_100px_rgba(212,175,55,0.15)]";
                  if (isPrev && filteredImages.length > 1)
                    posStyle = "opacity-20 scale-75 -translate-x-[60%] blur-sm";
                  if (isNext && filteredImages.length > 1)
                    posStyle = "opacity-20 scale-75 translate-x-[60%] blur-sm";

                  return (
                    <div
                      key={img._id}
                      className={`absolute w-full max-w-[320px] md:max-w-[850px] h-[450px] md:h-[550px] transition-all duration-1000 ease-[cubic-bezier(0.2,1,0.2,1)] ${posStyle}`}
                    >
                      <div className="relative w-full h-full rounded-[2.5rem] bg-[#2a241e] border-[1px] border-accent/30 p-4 md:p-6 shadow-2xl">
                        <div className="relative w-full h-full rounded-[1.8rem] overflow-hidden bg-black">
                          <Image
                            src={urlFor(img.image).width(1200).url()}
                            alt={img.title}
                            fill
                            className="object-contain"
                            priority={isActive}
                          />
                        </div>
                      </div>

                      <div
                        className={`mt-8 text-center transition-all duration-700 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                      >
                        <span className="text-[15px] font-bold text-accent uppercase tracking-[0.2em]">
                          {img.tag}
                        </span>
                        <h3 className="text-3xl font-serif font-bold text-white mt-1">
                          {img.title}
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <div className="text-center text-white/40 italic font-serif">
              No images found in this category.
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
