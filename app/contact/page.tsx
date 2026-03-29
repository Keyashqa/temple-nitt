export default function ContactPage() {
  return (
    <main className="relative min-h-screen pt-12 pb-24 px-6 bg-[#fffdfa] overflow-x-hidden">
      {/* Decorative Background Glows */}
      <div className="absolute top-0 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-primary/5 rounded-full blur-[80px] md:blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Contact Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.5em] font-bold text-primary mb-4">
            Connect With Us
          </h2>
          <h1 className="text-4xl md:text-7xl font-serif font-bold text-gray-900 tracking-tighter">
            Get in <span className="italic text-primary/80">Touch</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Contact Details Column */}
          <div className="lg:col-span-1 space-y-4 order-2 lg:order-1">
            {/* Address Card */}
            <div className="group divine-glass p-6 rounded-[2rem] border border-white hover:border-primary/20 transition-all duration-500 shadow-sm hover:shadow-xl bg-white/50">
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-orange-100 flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-500 shadow-inner">
                  📍
                </div>
                <div className="flex-1">
                  <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary/60 mb-2">
                    Temple Location
                  </h4>
                  <p className="text-gray-800 font-serif text-sm md:text-base leading-relaxed">
                    Shri Vidya Ganapathi Temple,
                    <br />
                    National Institute of Technology,
                    <br />
                    Tiruchirappalli, Tamil Nadu, 620015
                  </p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="group divine-glass p-6 rounded-[2rem] border border-white hover:border-primary/20 transition-all duration-500 shadow-sm hover:shadow-xl bg-white/50">
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-orange-100 flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-500 shadow-inner">
                  📩
                </div>
                <div className="flex-1">
                  <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary/60 mb-2">
                    Email
                  </h4>
                  <p className="text-gray-800 font-medium break-all text-sm md:text-base border-b border-dashed border-gray-200 pb-1">
                    srividyaganapathitemplenitt@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="relative h-[350px] md:h-[500px] w-full rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl border-[6px] md:border-[12px] border-white group transition-all duration-700">
              <iframe
                title="Google Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3893.364421118671!2d78.8179439!3d10.7554331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa8dfe097c1435%3A0xe009909c8f6ffc0a!2sNIT+Trichy+Temple!5e0!3m2!1sen!2sin!4v1709400000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[0.1] contrast-[1.05] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              />
              {/* Subtle Gradient Overlay for Map */}
              <div className="absolute inset-0 pointer-events-none border-[1px] border-black/5 rounded-[2rem] md:rounded-[3rem]"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
