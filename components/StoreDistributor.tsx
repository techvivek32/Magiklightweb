'use client';

import { motion } from 'framer-motion';

export default function StoreDistributor() {
  return (
    <section className="flex flex-col md:flex-row border-t border-white/30">

      {/* Left — Store Locator */}
      <div
        className="relative flex-1 flex items-center justify-center overflow-hidden"
        style={{ minHeight: 320 }}
      >
        {/* Map background */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=900&q=80"
          alt="map"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-slate-800/70" />

        {/* Pin icons */}
        <span className="absolute top-8 left-12 text-gold text-2xl">📍</span>
        <span className="absolute bottom-10 left-1/3 text-gold text-xl">📍</span>
        <span className="absolute top-1/2 right-16 text-gold text-2xl">📍</span>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative z-10 px-10 py-8"
        >
          {/* Corner brackets */}
          <div className="relative inline-block mb-3">
            <span className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-gold" />
            <p className="text-white/70 text-xs tracking-widest uppercase mb-1 font-sans">Find a</p>
            <h2 className="text-white text-3xl md:text-4xl font-bold uppercase tracking-wide font-serif">
              Store Near You
            </h2>
            <span className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-gold" />
          </div>
          <p className="text-white/70 text-sm mt-4 mb-6 font-sans">Find out a retailer nearby your location.</p>
          <a
            href="/store-locator"
            className="inline-block border border-white text-white text-xs tracking-widest uppercase px-6 py-3 hover:bg-white hover:text-slate-900 transition-colors duration-300 font-sans"
          >
            Find Store
          </a>
        </motion.div>
      </div>

      {/* Right — Newsletter */}
      <div
        className="relative flex-1 flex items-center justify-center overflow-hidden"
        style={{ background: '#de3e82', minHeight: 320 }}
      >
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative z-10 px-6 py-8 w-full max-w-xl text-left ml-0"
        >
          <p className="text-white/80 text-xs tracking-widest uppercase mb-2 font-sans">Partner with us</p>
          <div className="relative inline-block mb-3">
            <span className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-white/60" />
            <h2 className="text-white font-bold uppercase tracking-wide font-serif">
              <span className="text-3xl md:text-4xl">Join Our Distributor Network</span>
            </h2>
            <span className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-white/60" />
          </div>
          <p className="text-white/80 text-sm mt-4 mb-6 font-sans">Partner with India's leading lighting brand and grow your business with premium products and support.</p>
          <a
            href="/become-distributor"
            className="inline-block border border-white text-white text-xs tracking-widest uppercase px-6 py-3 hover:bg-white hover:text-pink-600 transition-colors duration-300 font-sans"
          >
            Become a Distributor
          </a>
        </motion.div>
      </div>

    </section>
  );
}
