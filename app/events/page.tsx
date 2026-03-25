"use client";

import React, { useState, useEffect } from "react"; // Added hooks
import { client } from "@/sanity/lib/client";

type Event = {
  _id: string;
  title: string;
  description: string;
  timing: string;
};

const QUERY = `*[_type == "event"] | order(date asc)`;

export default function EventsPage() {
  // 1. Setup state for events and loading (just like Articles)
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  // 2. Fetch data inside useEffect
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await client.fetch(QUERY);
        setEvents(data);
      } catch (error) {
        console.error("Sanity fetch failed:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="relative pt-20 pb-24 px-6 md:px-12 bg-creme min-h-screen overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] z-[-1]" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-2">
            Sacred Gathering
          </h2>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-maroon mb-4">
            Temple Events 
          </h1>
          <div className="w-32 h-0.5 bg-primary mx-auto mt-6" />
        </div>

        {/* 3. Handle Loading State */}
        {loading ? (
          <div className="text-center py-20 opacity-50 font-serif italic animate-pulse">
            Loading sacred events...
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.length > 0 ? (
              events.map((event) => (
                <div
                  key={event._id}
                  className="event-card-glass p-8 flex flex-col border-t-4 border-t-primary bg-white shadow-sm transition-all hover:shadow-md"
                >
                  <h2 className="text-2xl font-serif font-bold text-maroon mb-3">
                    {event.title}
                  </h2>

                  <div className="inline-flex items-center gap-2 mb-5 px-3 py-1 bg-orange-50 border border-orange-100 rounded-full w-fit">
                    <p className="text-xs font-bold uppercase tracking-widest text-primary">
                      {event.timing}
                    </p>
                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                    {event.description}
                  </p>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-20 bg-white/50 rounded-3xl border border-dashed border-gray-300">
                <p className="text-gray-500 font-serif italic">
                  No upcoming events scheduled at this time.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
