"use client";

import React from "react";

const ScheduleItem = ({
  time,
  title,
  desc,
}: {
  time: string;
  title: string;
  desc: string;
}) => (
  <div className="group relative pl-12 pb-12 border-l border-accent/20 last:border-0">
    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent border-4 border-[#fffcf7] group-hover:scale-150 transition-transform duration-500 shadow-[0_0_15px_rgba(212,175,55,0.4)]" />
    <span className="text-[10px] font-bold tracking-[0.4em] text-accent uppercase">
      {time}
    </span>
    <h4 className="text-2xl font-serif font-bold text-maroon mt-1 group-hover:text-accent transition-colors duration-300">
      {title}
    </h4>
    <p className="text-gray-500 mt-2 font-light leading-relaxed max-w-md italic">
      {desc}
    </p>
  </div>
);

export default function KumbabishekamPage() {
  return (
    <main className="min-h-screen bg-[#fffcf7] overflow-x-hidden">
      {/* --- 1. THE GRAND HERO --- */}
      <section className="relative h-[90vh] flex items-center justify-center bg-maroon">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] animate-pulse" />

        <div className="relative z-10 text-center px-6">
          <div className="inline-block mb-6 px-6 py-2 border border-accent/30 rounded-full backdrop-blur-sm">
            <p className="text-accent text-[10px] font-bold uppercase tracking-[0.5em]">
              Sacred Consecration Ceremony
            </p>
          </div>
          <h1 className="text-7xl md:text-[10rem] font-serif font-bold text-white tracking-tighter leading-none">
            Maha <br />
            <span className="italic text-accent font-light">Kumbabishekam</span>
          </h1>
          <div className="mt-12 flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-accent/50" />
            <p className="text-white/60 font-serif italic text-xl">
              Restoring the Divine Resonance
            </p>
            <div className="h-[1px] w-12 bg-accent/50" />
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-px h-16 bg-gradient-to-b from-accent to-transparent" />
        </div>
      </section>

      {/* --- 2. THE SACRED TIMELINE & VIDEO --- */}
      <section className="py-12 max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-16">
        <div className="md:col-span-5 sticky top-32 h-fit">
          <h2 className="text-4xl md:text-6xl font-serif text-maroon leading-tight">
            The Journey <br />
            <span className="italic font-light text-gray-400">of Rituals</span>
          </h2>

          {/* Sample Video Container */}
          <div className="mt-10 relative group rounded-[2rem] overflow-hidden shadow-2xl bg-black aspect-video">
            {/* Replace the src with your actual video link (YouTube embed or local file) */}
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/PYILjs9VA2c"
              title="Kumbabishekam Sample Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="absolute inset-0 pointer-events-none border-2 border-accent/20 rounded-[2rem]" />
          </div>

          <div className="mt-12 p-8 bg-creme rounded-[2rem] border border-accent/10">
            <h5 className="font-bold text-xs uppercase tracking-widest text-accent mb-4">
              Contact for Seva
            </h5>
            <p className="text-maroon font-serif text-xl font-bold">
              Mrs. Dummy
            </p>
            <p className="text-gray-500 mt-1">+91 123456789</p>
          </div>
        </div>

        <div className="md:col-span-7 pt-8">
          <ScheduleItem
            time="Morning • 06:00 AM"
            title="Anugraha Sangalpam"
            desc="The formal resolution to undertake the sacred task, seeking divine permission."
          />
          <ScheduleItem
            time="Afternoon • 04:30 PM"
            title="Kala Karshana"
            desc="Transferring the power from the idols to the sacred pots (Kumbas) via gold threads."
          />
          <ScheduleItem
            time="The Muhurtham"
            title="Maha Samprokshanam"
            desc="The climactic moment where sanctified water is poured over the temple towers."
          />
          <ScheduleItem
            time="Evening"
            title="Maha Deeparadhana"
            desc="The first grand arati to the newly energized deity, followed by Annadanam."
          />
        </div>
      </section>

      {/* --- 3. INVITATION DOWNLOADS --- */}
      <section className="py-12 bg-creme/30 border-y border-accent/10">
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
                lang: "English",
                file: "/invitation-en.pdf",
              },
              {
                title: "Tamil Invitation",
                lang: "Tamil",
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
                <div className="w-12 h-12 rounded-full bg-creme flex items-center justify-center text-maroon group-hover:bg-maroon group-hover:text-white transition-colors">
                  <span className="text-xl">↓</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. CALL TO DEVOTION --- */}
      <section className="py-32 px-6">
        <div className="relative max-w-6xl mx-auto overflow-hidden rounded-[4rem] bg-maroon p-12 md:p-24 text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <h2 className="relative z-10 text-4xl md:text-6xl font-serif text-white mb-8">
            Become a Part of <br />
            <span className="italic text-accent">Temple History</span>
          </h2>
          <p className="relative z-10 text-white/70 max-w-xl mx-auto mb-12 font-light text-lg">
            Contribution to a Kumbabishekam is considered the highest form of
            Charity (Danam), benefiting seven generations of one&apos;s lineage.
          </p>
          <div className="relative z-10 flex flex-wrap justify-center gap-6">
            <button className="px-12 py-5 bg-accent text-maroon rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl">
              Sponsor a Kalasam
            </button>
            <button className="px-12 py-5 border border-white/20 text-white rounded-full font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
              Volunteer Registration
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
