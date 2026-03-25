"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function HomePage() {
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    // 1. Logic to show only between April 6th and May 24th (48 days)
    const now = new Date();
    const startDate = new Date("2026-03-06T00:00:00");
    const endDate = new Date("2026-05-24T23:59:59");

    if (now >= startDate && now <= endDate) {
      // Check if user has already closed it in this session to avoid annoyance
      const isClosed = sessionStorage.getItem("mandalaOverlayClosed");
      if (!isClosed) {
        // Small delay for better UX
        const timer = setTimeout(() => setShowOverlay(true), 1200);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  const closeOverlay = () => {
    setShowOverlay(false);
    sessionStorage.setItem("mandalaOverlayClosed", "true");
  };

  return (
    <main className="relative">
      {/* --- MANDALA POOJA OVERLAY --- */}
      {showOverlay && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-6 backdrop-blur-md bg-maroon/20 animate-in fade-in duration-500">
          {/* Backdrop Click to Close */}
          <div className="absolute inset-0" onClick={closeOverlay} />

          <div className="relative w-full max-w-2xl bg-white rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden animate-in zoom-in-95 duration-500">
            {/* Close Button */}
            <button
              onClick={closeOverlay}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition-all z-20"
            >
              ✕
            </button>

            {/* Content Link */}
            <Link href="/services" className="block p-1">
              <div className="p-8 md:p-12 border-4 border-dashed border-orange-100 rounded-[2.8rem] text-center hover:border-orange-300 transition-colors">
                <span className="inline-block px-4 py-1 rounded-full bg-orange-100 text-orange-700 text-[10px] font-bold uppercase tracking-widest mb-6">
                  Upcoming Event
                </span>

                <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-950 mb-4">
                  Mandala <span className="italic text-primary">Poojai</span>
                </h2>

                <p className="text-gray-600 mb-8 font-light italic">
                  Commencing from the evening of 6th April. Join us for divine
                  grace and celebration.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="p-4 bg-orange-50 rounded-2xl">
                    <p className="text-[10px] font-bold uppercase text-orange-400">
                      Flowers
                    </p>
                    <p className="font-bold text-gray-900">₹500</p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-2xl">
                    <p className="text-[10px] font-bold uppercase text-orange-400">
                      Abishegam
                    </p>
                    <p className="font-bold text-gray-900">₹1000</p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-2xl">
                    <p className="text-[10px] font-bold uppercase text-orange-400">
                      Full Seva
                    </p>
                    <p className="font-bold text-gray-900">₹1500</p>
                  </div>
                </div>

                <div className="inline-block px-8 py-4 bg-maroon text-white font-bold rounded-full text-xs tracking-widest hover:bg-primary transition-all shadow-lg">
                  VIEW DETAILS & SPONSOR
                </div>
              </div>
            </Link>
          </div>
        </div>
      )}

      {/* --- EXISTING HOME CONTENT --- */}
      <section className="relative py-20 bg-[#faf7f2] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
          <div className="z-10">
            <h2 className="text-[var(--primary)] font-bold uppercase tracking-widest text-sm mb-4">
              Sri Vidya Ganapathi Temple
            </h2>
            <h1 className="text-5xl md:text-6xl font-serif text-gray-900 leading-tight mb-6">
              Preserving our <br />
              <span className="italic">Dharma & Heritage</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
              Established in 1968, the temple stands as a guardian of the
              campus, removing obstacles and fostering spiritual peace through
              Veda Rakshanam and traditional Seva.
            </p>
            <div className="flex gap-1">
              <Link
                href="/about"
                className="border border-gray-300 px-8 py-4 font-bold rounded-sm hover:bg-gray-50 transition cursor-pointer"
              >
                VIEW MORE
              </Link>
              <Link
                href="/kumbabishekam"
                className="border border-gray-300 px-8 py-4 font-bold rounded-sm hover:bg-gray-50 transition cursor-pointer"
              >
                KUMBABISHEKAM
              </Link>
              <Link
                href="/services"
                className="border border-gray-300 px-8 py-4 font-bold rounded-sm hover:bg-gray-50 transition cursor-pointer"
              >
                MANDALA POOJA
              </Link>
            </div>
          </div>

          <div className="relative h-[500px] w-full bg-gray-200 rounded-tr-[100px] rounded-bl-[100px] overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('/temple.jpg')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-orange-900/10 mix-blend-multiply" />
          </div>
        </div>
      </section>

      {/* Narrative History Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-gray-400 mb-2">
              The Genesis
            </h2>
            <h3 className="text-3xl font-serif font-bold text-gray-900">
              A Legacy Since 1968
            </h3>
          </div>
          <div className="prose prose-lg text-gray-600 font-light leading-relaxed italic">
            <p className="mb-6">
              Way back in 1968, when the first batch of then Regional
              Engineering College, Trichy (RECT) was still studying, a mishap
              occurred that highlighted the need to install the deity of
              <span className="text-gray-900 font-medium"> Ganapathi</span>, the
              remover of all obstacles...
            </p>
            {/* Rest of your content remains here */}
          </div>
        </div>
      </section>

      {/* Quick Stats/Services */}
      <section className="py-16 bg-[#faf7f2] border-t border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl font-serif font-bold text-[var(--primary)]">
              1968
            </p>
            <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mt-2">
              Established
            </p>
          </div>
          <div>
            <p className="text-3xl font-serif font-bold text-[var(--primary)]">
              2026
            </p>
            <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mt-2">
              Upcoming Events
            </p>
          </div>
          <div>
            <p className="text-3xl font-serif font-bold text-[var(--primary)]">
              Gau
            </p>
            <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mt-2">
              Samrakshanam
            </p>
          </div>
          <div>
            <p className="text-3xl font-serif font-bold text-[var(--primary)]">
              Dharma
            </p>
            <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mt-2">
              Seva
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
