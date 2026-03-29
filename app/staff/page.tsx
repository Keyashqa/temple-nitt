"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";

export default function StaffPage() {
  const [committee, setCommittee] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        // Fetching staff and sorting by priority
        const query = `*[_type == "staff"] | order(priority asc) {
          name,
          role,
          desc,
          "image": image.asset->url
        }`;
        const data = await client.fetch(query);
        setCommittee(data);
      } catch (error) {
        console.error("Error fetching staff:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStaff();
  }, []);

  return (
    <main className="relative min-h-screen pt-10 pb-24 px-6 bg-creme">
      {/* Divine background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[140px] z-[-1]" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-primary mb-3">
            Our Guardians
          </h2>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 tracking-tighter text-center leading-tight">
            Temple
            <br />
            <span className="italic text-primary/80 font-medium text-4xl md:text-5xl">
              Committee Members
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6"></div>
        </div>

        {loading ? (
          <div className="text-center py-20 italic animate-pulse text-gray-500">
            Loading the committee details...
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {committee.map((member, index) => (
              <div
                key={index}
                className="group divine-glass rounded-3xl p-4 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 relative"
              >
                {/* Profile Image Wrapper */}
                <div className="relative h-80 w-full overflow-hidden rounded-2xl mb-6">
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <div className="w-full h-full bg-accent/40 animate-pulse absolute inset-0 -z-10" />{" "}
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content Area */}
                <div className="px-4 pb-6 text-center">
                  <h3 className="text-2xl font-serif font-bold text-gray-950 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-bold text-xs uppercase tracking-widest mb-4">
                    {member.role}
                  </p>
                  <div className="w-12 h-0.5 bg-accent mx-auto mb-4" />
                  <p className="text-gray-600 text-sm leading-relaxed px-2 italic">
                    {member.desc}
                  </p>
                </div>

                {/* Subtle Decorative Corner */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 border-t-2 border-r-2 border-primary rounded-tr-lg" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
