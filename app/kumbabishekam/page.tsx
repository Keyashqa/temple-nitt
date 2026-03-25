"use client";

import React from "react";
import Link from "next/link";

const webcastSchedule = [
  {
    date: "03 April 2026",
    tamilDate: "20th Panguni",
    day: "Friday",
    sessions: [
      {
        type: "Morning",
        time: "09:00 am - 12:30 pm",
        link: "https://youtube.com/live/link1",
      },
      {
        type: "Evening",
        time: "05:30 pm - 09:00 pm",
        link: "https://youtube.com/live/link2",
      },
    ],
  },
  {
    date: "04 April 2026",
    tamilDate: "21st Panguni",
    day: "Saturday",
    sessions: [
      {
        type: "Morning",
        time: "08:30 am - 12:30 pm",
        link: "https://youtube.com/live/link3",
      },
      {
        type: "Evening",
        time: "04:00 pm - 09:30 pm",
        link: "https://youtube.com/live/link4",
      },
    ],
  },
  {
    date: "05 April 2026",
    tamilDate: "22nd Panguni",
    day: "Sunday",
    sessions: [
      {
        type: "Morning",
        time: "08:30 am - 12:30 pm",
        link: "https://youtube.com/live/link5",
      },
      {
        type: "Evening",
        time: "04:00 pm - 09:30 pm",
        link: "https://youtube.com/live/link6",
      },
    ],
  },
  {
    date: "06 April 2026",
    tamilDate: "23rd Panguni",
    day: "Monday",
    sessions: [
      {
        type: "Morning",
        time: "05:00 am - 12:00 pm",
        link: "https://youtube.com/live/link7",
      },
    ],
  },
];

export default function KumbabishekamPage() {
  return (
    <main className="min-h-screen bg-[#fffcf7] overflow-x-hidden font-sans">
      {/* --- 1. THE GRAND HERO --- */}
      <section className="relative h-[90vh] flex items-center justify-center bg-maroon">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />

        {/* Sacred Glow Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] animate-pulse" />

        <div className="relative z-10 text-center px-6">
          <div className="inline-block mb-6 px-6 py-2 border border-accent/30 rounded-full backdrop-blur-sm">
            <p className="text-accent text-[10px] font-bold uppercase tracking-[0.5em]">
              Sacred Consecration Ceremony
            </p>
          </div>
          <h1 className="text-7xl md:text-[10rem] font-serif font-bold text-white tracking-tighter leading-none">
            Maha <br />
            <span className="italic text-accent font-light font-serif">
              Kumbabishekam
            </span>
          </h1>
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8">
            <Link
              href="/services"
              className="px-10 py-4 bg-accent text-maroon rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-all duration-500 shadow-xl shadow-black/30 active:scale-95"
            >
              Sponsor Pooja
            </Link>
            <p className="text-white/60 font-serif italic text-xl">
              Restoring the Divine Resonance
            </p>
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-px h-16 bg-gradient-to-b from-accent to-transparent" />
        </div>
      </section>

      {/* --- 2. VIDEO & WEBCAST SCHEDULE SECTION --- */}
      <section className="py-24 max-w-8xl mx-auto px-10">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left Column: Title, Video & Contact */}
          <div className="lg:col-span-5 space-y-10">
            <div className="sticky top-32">
              <h2 className="text-4xl md:text-5xl font-serif text-maroon leading-tight mb-8">
                Live <br />
                <span className="italic font-light text-gray-400">
                  Webcast Schedule
                </span>
              </h2>

              {/* Local Video Player */}
              <div className="relative group rounded-[2rem] overflow-hidden shadow-2xl bg-black aspect-video mb-10 border border-accent/10">
                <video
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                >
                  <source src="/Kumbabishekam_video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 pointer-events-none border-2 border-accent/20 rounded-[2rem] z-10" />
              </div>

              {/* Contact Card */}
              <div className="p-8 bg-white border border-accent/10 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow">
                <h5 className="font-bold text-[10px] uppercase tracking-widest text-accent mb-4">
                  Contact for Seva
                </h5>
                <p className="text-maroon font-serif text-xl font-bold">
                  Mrs. Karthika Panneerselvam
                </p>
                <p className="text-gray-500 mt-1 font-medium font-mono tracking-wider">
                  +91 90476 92112
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Webcast Table */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-[2.5rem] border border-accent/20 shadow-2xl bg-white">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-maroon text-accent">
                    <th className="p-6 font-serif text-lg font-bold border-b border-accent/20">
                      Date & Day
                    </th>
                    <th className="p-6 font-serif text-lg font-bold border-b border-accent/20">
                      Session
                    </th>
                    <th className="p-6 font-serif text-lg font-bold border-b border-accent/20">
                      Timing
                    </th>
                    <th className="p-6 font-serif text-lg font-bold border-b border-accent/20">
                      Webcast
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-800">
                  {webcastSchedule.map((row, idx) => (
                    <React.Fragment key={idx}>
                      {row.sessions.map((session, sIdx) => (
                        <tr
                          key={sIdx}
                          className="group hover:bg-accent/5 transition-colors border-b border-accent/10 last:border-0"
                        >
                          {/* Merged Cell for Date/Day Column */}
                          {sIdx === 0 && (
                            <td
                              className="p-6 border-r border-accent/10 bg-[#fffcf7]"
                              rowSpan={row.sessions.length}
                            >
                              <p className="font-bold text-maroon text-lg">
                                {row.date}
                              </p>
                              <p className="text-xs text-accent uppercase tracking-widest font-bold mt-1">
                                {row.tamilDate}
                              </p>
                              <p className="text-sm text-gray-500 italic mt-2">
                                {row.day}
                              </p>
                            </td>
                          )}

                          {/* Session Badge */}
                          <td className="p-6">
                            <span
                              className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter shadow-sm ${
                                session.type === "Morning"
                                  ? "bg-orange-100 text-orange-700"
                                  : "bg-blue-100 text-blue-700"
                              }`}
                            >
                              {session.type}
                            </span>
                          </td>

                          {/* Timing */}
                          <td className="p-6 font-medium text-sm text-gray-600 font-mono tracking-tight">
                            {session.time}
                          </td>

                          {/* Link Action */}
                          <td className="p-6">
                            <a
                              href={session.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-xs font-bold text-maroon hover:text-accent transition-all group/link"
                            >
                              WATCH LIVE
                              <span className="w-8 h-px bg-maroon group-hover/link:w-12 group-hover/link:bg-accent transition-all duration-300"></span>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div> 
          </div>
        </div>
      </section>

      {/* --- 3. INVITATION DOWNLOADS --- */}
      <section className="py-14 bg-creme/30 border-y border-accent/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-serif text-maroon">
              Official Invitations
            </h3>
            <div className="w-24 h-0.5 bg-accent mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "English Invitation",
                lang: "English Version",
                file: "/invitation-en.pdf",
              },
              {
                title: "Tamil Invitation",
                lang: "Tamil Version",
                file: "/invitation-ta.pdf",
              },
            ].map((pdf, idx) => (
              <a
                key={idx}
                href={pdf.file}
                download
                className="group flex items-center justify-between p-8 bg-white rounded-3xl border border-accent/5 hover:border-accent/30 hover:shadow-xl transition-all duration-500"
              >
                <div>
                  <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1">
                    {pdf.lang}
                  </p>
                  <h4 className="text-xl font-serif font-bold text-maroon">
                    {pdf.title}
                  </h4>
                </div>
                <div className="w-12 h-12 rounded-full bg-creme flex items-center justify-center text-maroon group-hover:bg-maroon group-hover:text-white transition-colors duration-300">
                  <span className="text-xl">↓</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. CALL TO DEVOTION --- */}
      <section className="py-32 px-6">
        <div className="relative max-w-6xl mx-auto overflow-hidden rounded-[4rem] bg-maroon p-12 md:p-24 text-center shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -mr-32 -mt-32" />

          <h2 className="relative z-10 text-4xl md:text-6xl font-serif text-white mb-8">
            Become a Part of <br />
            <span className="italic text-accent font-serif font-light">
              Temple History
            </span>
          </h2>

          <p className="relative z-10 text-white/70 max-w-xl mx-auto mb-12 font-light text-lg text-balance leading-relaxed">
            Contribution to a Kumbabishekam is considered the highest form of
            Charity (Danam), benefiting seven generations of one&apos;s lineage.
          </p>

          <div className="relative z-10 flex flex-wrap justify-center gap-6">
            <Link
              href="/services"
              className="px-12 py-5 bg-accent text-maroon rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl active:scale-95"
            >
              Sponsor Pooja
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
