"use client";

import React, { useState } from "react";
import Image from "next/image";

// Placeholder data for the 56 saints. 
// You can populate this list with the actual names and bios.
const saintsData = [
  {
    id: 1,
    name: "Vyasar",
    image: "/vyasar.jpeg", 
    bio: "The Sage of Arunachala who taught the path of Self-Enquiry ('Who am I?'). He embodied the silence that speaks louder than words. He taught that Guru's Grace is always there and realization is the result of that Grace.",
    region: "Tamil Nadu",
  },
  {
    id: 2,
    name: "Adi Sankara",
    image: "/sankara.jpeg",
    bio: "The great philosopher and theologian from India who consolidated the doctrine of Advaita Vedanta. He established four mathas in the four corners of India to preserve and propagate the Vedas.",
    region: "Kerala / All India",
  },
  // Add remaining saints here...
];

const slokas = [
  {
    sanskrit: "गुरुर्ब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः। गुरुः साक्षात्परं ब्रह्म तस्मै श्रीगुरवे नमः।।",
    translation: "Salutations to that Guru who is himself Brahma, Vishnu, Maheshwara and the ultimate Brahmam!",
  },
  {
    sanskrit: "गुशब्दस्त्वन्धकारः स्यात् रुशब्दस्तन्निरोधकः। अन्धकार निरोधित्वात् गुरुरित्यभिधीयते।।",
    translation: "The letter 'gu' stands for darkness/ignorance; and 'ru' stands for dispeller. He is called a Guru, since he dispels the ignorance of the students.",
  },
  {
    sanskrit: "अज्ञानतिमिरान्धस्य ज्ञानाञ्जन शलाकया। चक्षुरुन्मीलितं येन तस्मै श्रीगुरवे नमः।।",
    translation: "Salutations to that Guru who has opened the eyes blinded by ignorance by applying the divine Kajal (collyrium) of knowledge.",
  },
  {
    sanskrit: "न गुरोरधिकं तत्त्वं न गुरोरघिकं तपः। तत्तंवज्ञानात् परं नास्ति तस्मै श्रीगुरवे नमः।।",
    translation: "Salutations to the guru beyond whom there is no truth; nor is there any meditation.",
  },
];

export default function SaraswatiHall() {
  const [selectedSaint, setSelectedSaint] = useState<null | typeof saintsData[0]>(null);

  return (
    <main className="min-h-screen bg-[#fffcf7] text-slate-900 overflow-x-hidden font-sans">
      {/* --- 1. HERO SECTION --- */}
      <section className="relative py-28 bg-maroon overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px] animate-pulse" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-accent font-bold uppercase tracking-[0.5em] text-[10px] mb-6">NIT Trichy Sannidhi</h2>
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mb-8 tracking-tight">
            Saraswati <span className="italic text-accent font-light">Mandapam</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto italic">
            "A sanctuary of Spiritual Art, Divine Learning, and the eternal breeze of Guru's Grace."
          </p>
        </div>
      </section>

      {/* --- 2. ABOUT THE MANDAPAM --- */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <div className="inline-block px-4 py-1 rounded-full bg-orange-50 border border-orange-100 text-maroon text-[10px] font-bold uppercase tracking-widest">
            The Multi-Purpose Hall
          </div>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
            A Cradle for <span className="text-primary italic">Heritage & Art</span>
          </h3>
          <p className="text-gray-600 leading-relaxed font-light text-lg italic">
            Amidst the serene environs of the temple, the Saraswati Mandapam stands as a center for Spiritual art. Adorned with paintings of Ma Saraswati by dedicated students, it hosts:
          </p>
          
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-sm font-medium text-gray-700">
            {[
              "Origami & Painting classes",
              "Navaratri & Margazhi Festivals",
              "Sloka Chanting & Bhajans",
              "Sanskrit & Bhagavad Gita classes",
              "Religious Reading Room",
              "Dance & Music Performances"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 group">
                <span className="w-2 h-2 rounded-full bg-accent group-hover:scale-125 transition-transform" /> {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="relative h-[550px] rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-white group">
          <div className="absolute inset-0 bg-maroon/10 z-10 group-hover:bg-transparent transition-colors duration-700" />
          <Image 
            src="/mandapam.jpeg" 
            alt="Saraswati Mandapam" 
            fill 
            className="object-contain transition-transform duration-1000 group-hover:scale-105"
          />
        </div>
      </section>

      {/* --- 3. GURU TATTVA SLOKAS --- */}
      <section className="py-24 bg-creme/40 border-y border-accent/10 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-6xl mb-12 block opacity-10 font-serif">ॐ</span>
          <div className="space-y-16">
            {slokas.map((s, i) => (
              <div key={i} className="group">
                <p className="text-2xl md:text-4xl font-serif text-maroon mb-6 leading-relaxed tracking-wide">
                  {s.sanskrit}
                </p>
                <p className="text-gray-500 italic font-light max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
                  {s.translation}
                </p>
                {i !== slokas.length - 1 && <div className="w-12 h-px bg-accent/20 mx-auto mt-16" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. THE GALLERY OF 56 SAINTS --- */}
      <section className="py-28 max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h3 className="text-5xl font-serif font-bold text-gray-950 mb-6">Gallery of <span className="italic text-primary">Grace</span></h3>
          <p className="text-gray-500 font-light max-w-2xl mx-auto italic leading-relaxed text-lg">
            This Mandapam houses pictures of 56 Saints, Sages, and revered Gurus from across Bharat Mata—embodying the full Grace of Guru Tattva.
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8">
          {saintsData.map((saint) => (
            <div 
              key={saint.id}
              onClick={() => setSelectedSaint(saint)}
              className="group cursor-pointer text-center"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 border-2 border-transparent group-hover:border-accent transition-all duration-500 shadow-sm group-hover:shadow-2xl group-hover:-translate-y-3">
                <Image 
                  src={saint.image} 
                  alt={saint.name} 
                  fill 
                  className="object-contain group-hover:grayscale-0 transition-all duration-700 brightness-95 group-hover:brightness-100"
                />
              </div>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400 group-hover:text-maroon transition-colors px-2 leading-tight">
                {saint.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- 5. RAMANA QUOTE SECTION --- */}
      <section className="py-32 bg-maroon relative overflow-hidden">
        <div className="absolute left-[-5%] bottom-[-10%] opacity-5 select-none">
           <span className="text-[50rem] leading-none font-serif text-white">"</span>
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h4 className="text-accent uppercase tracking-[0.4em] font-bold text-[10px] mb-10">Bhagavan Ramana Maharshi</h4>
          <blockquote className="text-3xl md:text-6xl font-serif text-white italic leading-[1.1] mb-12">
            "A Guru is not the physical form. Hence His contact remains even after the physical form of the Guru vanishes."
          </blockquote>
          <div className="w-20 h-px bg-accent/30 mx-auto mb-10" />
          <p className="text-accent/80 font-light text-xl italic tracking-wide">
            "Guru's silence is the loudest Instruction."
          </p>
        </div>
      </section>

      {/* --- 6. SAINT DETAIL MODAL (OVERLAY) --- */}
      {selectedSaint && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 backdrop-blur-xl bg-maroon/40 animate-in fade-in duration-500">
          <div className="absolute inset-0" onClick={() => setSelectedSaint(null)} />
          
          <div className="relative w-full max-w-4xl bg-white rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col md:flex-row animate-in zoom-in-95 duration-500">
            <button 
              onClick={() => setSelectedSaint(null)}
              className="absolute top-8 right-8 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-maroon hover:text-white transition-all z-20 shadow-sm"
            >
              ✕
            </button>
            
            <div className="relative w-full md:w-1/2 h-[350px] md:h-auto bg-gray-200">
              <Image 
                src={selectedSaint.image} 
                alt={selectedSaint.name} 
                fill 
                className="object-cover"
              />
            </div>
            
            <div className="w-full md:w-1/2 p-10 md:p-20 flex flex-col justify-center bg-gradient-to-br from-white to-orange-50/30">
              <span className="text-[10px] font-bold tracking-[0.4em] text-accent uppercase mb-4">
                {selectedSaint.region}
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-950 mb-8 tracking-tight">
                {selectedSaint.name}
              </h2>
              <div className="h-1 w-16 bg-accent mb-10" />
              <p className="text-gray-600 leading-relaxed text-lg font-light italic whitespace-pre-line">
                "{selectedSaint.bio}"
              </p>
              
              <div className="mt-16 pt-8 border-t border-gray-100 flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full border border-accent/20 flex items-center justify-center text-accent font-serif italic text-xl">ॐ</div>
                 <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Embodies Guru Tattva</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- 7. FINAL SATSANG SECTION --- */}
      <section className="py-32 text-center px-6">
        <h3 className="text-4xl font-serif italic text-maroon mb-8">Dwelling in Quietude</h3>
        <p className="text-gray-500 max-w-2xl mx-auto mb-16 font-light leading-relaxed text-lg italic">
          Come, sit quietly and soak in the gentle breeze of Guru's Grace. This is a Satsang where one can leave all the problems out and get rejuvenated and imbued with Peace and Tranquility.
        </p>
        <div className="text-6xl opacity-10 select-none hover:opacity-30 transition-opacity cursor-default">ॐ</div>
      </section>
    </main>
  );
}