import Image from "next/image";
import Link from "next/link";

const VelIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="w-8 h-8 md:w-10 md:h-10 drop-shadow-[0_0_5px_rgba(180,83,9,0.3)]"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* The Spear Head (Vel) */}
    <path
      d="M12 2C10 2 6 6 6 11C6 13.5 8 15 12 16C16 15 18 13.5 18 11C18 6 14 2 12 2Z"
      fill="url(#goldGradient)"
    />
    {/* The Shaft */}
    <rect x="11.2" y="16" width="1.6" height="6" fill="url(#goldGradient)" />
    {/* The Base */}
    <path d="M9 22H15L16 23H8L9 22Z" fill="#B45309" />

    <defs>
      <linearGradient
        id="goldGradient"
        x1="6"
        y1="2"
        x2="18"
        y2="22"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FDE68A" />
        <stop offset="0.5" stopColor="#F59E0B" />
        <stop offset="1" stopColor="#B45309" />
      </linearGradient>
    </defs>
  </svg>
);

const GadaIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="w-8 h-8 md:w-10 md:h-10 drop-shadow-[0_0_8px_rgba(180,83,9,0.3)]"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="gadaGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FDE68A" />
        <stop offset="50%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#B45309" />
      </linearGradient>
    </defs>

    {/* Top Point (Shikhara) */}
    <path d="M12 2L13.5 4.5H10.5L12 2Z" fill="url(#gadaGold)" />

    {/* Tiered Head - Capturing the rounded, ornate bulb */}
    <ellipse cx="12" cy="7.5" rx="3.5" ry="1.5" fill="url(#gadaGold)" />
    <path
      d="M12 5.5C8 5.5 6 8.5 6 11C6 13.5 8 15.5 12 15.5C16 15.5 18 13.5 18 11C18 8.5 16 5.5 12 5.5Z"
      fill="url(#gadaGold)"
      stroke="#92400E"
      strokeWidth="0.2"
    />

    {/* Decorative horizontal bands on the head */}
    <line
      x1="6.5"
      y1="9"
      x2="17.5"
      y2="9"
      stroke="#92400E"
      strokeWidth="0.1"
      opacity="0.5"
    />
    <line
      x1="6.1"
      y1="11"
      x2="17.9"
      y2="11"
      stroke="#92400E"
      strokeWidth="0.1"
      opacity="0.5"
    />
    <line
      x1="6.5"
      y1="13"
      x2="17.5"
      y2="13"
      stroke="#92400E"
      strokeWidth="0.1"
      opacity="0.5"
    />

    {/* Long ornate Shaft */}
    <rect x="11.3" y="15.5" width="1.4" height="6.5" fill="url(#gadaGold)" />

    {/* Bottom Diamond Base */}
    <path d="M12 23L14 21.5H10L12 23Z" fill="url(#gadaGold)" />
  </svg>
);

export default function AboutPage() {
 const sannidhis = [
   { name: "Shri Vidya Ganapathi", icon: "🕉️", symbol: "Modakam" },
   { name: "Shri Chandramouleeswarar", icon: "🔱", symbol: "Trisulam" },
   { name: "Shri Tripurasundari", icon: "💠", symbol: "Sri Yantra" },
   {
     name: "Shri Valli Devasena sametha Subramanyar",
     icon: <VelIcon />,
     symbol: "Sacred Vel",
   },
   { name: "Shri Hanuman", icon: <GadaIcon />, symbol: "Mace (Gada)" },
   { name: "Navagraham", icon: "☀️", symbol: "Surya" },
 ];

  const parivaraDevathas = [
    "Dakshinamurthy",
    "Durgai",
    "Lingodbhavar",
    "Brahma",
    "Chandikeshwarar",
  ];

  return (
    <main className="relative min-h-screen pt-20 pb-24 px-6 bg-creme">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] z-[-1]" />

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-primary mb-3">
            Our Heritage
          </h2>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-950 tracking-tighter">
            NIT Trichy <br />
            <span className="italic text-primary/80 font-medium text-4xl md:text-6xl tracking-normal">
              Shri Vidya Ganapathi
            </span>
          </h1>
        </div>

        {/* Top Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative group">
            <div className="absolute -inset-4 bg-accent/30 rounded-2xl blur-2xl group-hover:bg-accent/50 transition duration-500"></div>
            <div className="relative overflow-hidden rounded-2xl border border-white/50 shadow-2xl">
              <Image
                src="/temple.jpg"
                alt="Shri Vidya Ganapathi Temple"
                width={800}
                height={1000}
                className="object-cover hover:scale-105 transition duration-700 ease-in-out"
                priority
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="divine-glass p-8 md:p-12 rounded-3xl space-y-6">
              <h3 className="text-3xl font-serif text-gray-900 border-b border-accent pb-4">
                A Legacy of Faith
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Born in 1968 from the devotion of the first batch of REC Trichy
                students, this temple stands as a spiritual beacon on campus.
                What began as a simple ₹300 Ganapathi idol has grown into a
                magnificent Sannidhi housing the rare Banalingam, serving as a
                sanctuary of peace for generations of students and faculty.
              </p>
              <Link href="/history">
                <button className="px-8 py-3 bg-primary text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-primary/90 transition-all cursor-pointer">
                  View Temple History
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* --- NEW SECTION: Sannidhis & Deities --- */}
        <section className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-primary mb-3">
              Sacred Abodes
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
              Current Sannidhis{" "}
              <span className="italic text-primary/80">& Deities</span>
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Primary Deities */}
            {sannidhis.map((s, i) => (
              <div key={i} className="flex flex-col items-center bg-white/50 border border-primary/10 rounded-2xl p-6 shadow-sm  hover:border-primary hover:transition-all cursor-default">
                <div className="w-16 h-16 flex items-center justify-center">
                  {typeof s.icon === "string" ? (
                    <span className="text-3xl">{s.icon}</span>
                  ) : (
                    s.icon
                  )}
                </div>
                <p>{s.name}</p>
              </div>
            ))}

            {/* Specialized Card for Sivan Sannidhi Parivara Devathas */}
            <div className="md:col-span-2 lg:col-span-3 mt-4">
              <div className="divine-glass p-8 rounded-[2.5rem] relative overflow-hidden group">
                {/* Decorative Pattern Background */}
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                  <svg
                    width="120"
                    height="120"
                    viewBox="0 0 100 100"
                    fill="currentColor"
                    className="text-primary"
                  >
                    <path d="M50 0 L100 50 L50 100 L0 50 Z" />
                  </svg>
                </div>

                <div className="flex flex-col md:flex-row gap-10 items-center">
                  <div className="flex-shrink-0 text-center md:text-left">
                    <p className="text-primary font-bold text-[10px] uppercase tracking-widest mb-2">
                      Sivan Sannidhi
                    </p>
                    <h4 className="text-3xl font-serif font-bold text-gray-950">
                      Parivara Devathas
                    </h4>
                  </div>

                  <div className="flex-grow flex flex-wrap justify-center md:justify-start gap-4">
                    {parivaraDevathas.map((name, idx) => (
                      <div
                        key={idx}
                        className="px-5 py-2 rounded-full bg-white/50 border border-primary/10 text-primary font-bold text-xs uppercase tracking-tighter shadow-sm hover:bg-primary hover:text-white transition-all cursor-default"
                      >
                        {name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* --- END OF NEW SECTION --- */}
      </div>
    </main>
  );
}
