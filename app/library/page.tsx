"use client";

import React from "react";

export default function TempleLibrary() {
  return (
    <main className="min-h-screen bg-[#fffcf7] text-slate-900 font-sans selection:bg-orange-100 selection:text-maroon">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-24 pb-16 bg-[#5a1f1f] text-center overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-400/20 blur-[120px] rounded-full" />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="inline-block mb-4 px-4 py-1 border border-orange-300/30 rounded-full backdrop-blur-sm">
            <h2 className="text-orange-300 font-bold uppercase tracking-[0.4em] text-[9px] md:text-[10px]">
              Shri Vidya Ganapathi Temple
            </h2>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white tracking-tight leading-none mb-6">
            Spiritual{" "}
            <span className="italic text-orange-200 font-light">Library</span>
          </h1>
        </div>
      </section>

      {/* --- MAIN CONTENT SECTION --- */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: Narrative */}
          <div className="lg:col-span-7 relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-200 via-transparent to-orange-200 opacity-50" />

            <div className="space-y-8 pl-6">
              <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed italic text-justify first-letter:text-6xl first-letter:font-serif first-letter:text-[#5a1f1f] first-letter:mr-3 first-letter:float-left first-letter:leading-none">
                A spiritual library will be operating from the Temple premises.
                This library will have spiritual books which are expected to
                kindle the quest for the inner journey.
              </p>

              <div className="p-8 bg-white border border-orange-100 rounded-[2.5rem] shadow-xl shadow-orange-900/5 relative group transition-all">
                <div className="absolute top-4 right-4 text-3xl opacity-5">
                  ॐ
                </div>
                <p className="text-gray-700 leading-relaxed text-[16px]">
                  These books include{" "}
                  <span className="font-semibold text-gray-900">
                    Vedantic texts
                  </span>
                  ,{" "}
                  <span className="italic underline decoration-orange-200 decoration-2 underline-offset-4">
                    Bhagavad Gita
                  </span>
                  ,{" "}
                  <span className="italic underline decoration-orange-200 decoration-2 underline-offset-4">
                    Upanishads
                  </span>
                  , and such other thought-provoking literature. It will also
                  have books of saints and sages, books of deeply devotional
                  Bhakti.
                </p>
              </div>

              <div className="flex items-center gap-4 pl-2">
                <div className="w-10 h-px bg-orange-200" />
              </div>
            </div>
          </div>

          {/* Right: Timing Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative overflow-hidden bg-gray-950 text-white p-10 rounded-[3rem] shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-3xl" />
              <p className="text-[10px] uppercase tracking-[0.3em] text-orange-400 font-bold mb-6">
                Hours of Wisdom
              </p>
              <div className="space-y-1">
                <p className="text-2xl font-serif font-bold">Every Sunday</p>
                <p className="text-4xl font-serif italic text-orange-200">
                  2:30pm — 4:00pm
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-[11px] text-gray-400 italic leading-relaxed">
                  * A separate reading section for children operates from the{" "}
                  <span className="text-orange-100">Saraswati Mandapam</span>.
                  <br />* Books may be borrowed based on registration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SIMPLE CONTACT SECTION --- */}
      <section className="py-1 border-t border-orange-100 bg-[#fffcf7]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[17px] uppercase tracking-[0.1em] font-bold text-orange-500 mb-4">
            Contact
          </p>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-2">
            Dr. Pavan Kumar
          </h3>
          <div className="text-2xl font-mono font-medium text-[#5a1f1f]  ">
            9492877987
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 text-center relative overflow-hidden">
        <div className="text-6xl text-red-900 opacity-70 select-none   cursor-default  ">
          ॐ
        </div>
        <p className="mt-4 text-[9px] uppercase tracking-[0.4em] font-bold text-gray-300">
          Inner Peace Through Knowledge
        </p>
      </footer>
    </main>
  );
}
