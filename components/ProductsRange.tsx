'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const CATEGORIES = ['All', 'LED Bulb', 'LED Battens', 'LED Panel & Spotlights', 'LED Downlights', 'LED Bulkheads', 'LED Flood Lights', 'LED Strip Lights'];

const RANGES = [
  { title: 'LED Bulb Classic', category: 'LED Bulb', image: '/bulbone1.jpg', href: '/products/consumer' },
  { title: 'Liliput', category: 'LED Bulb', image: '/bulbone2.jpg', href: '/products/consumer' },
  { title: 'T-LITE', category: 'LED Bulb', image: '/bulbone3.jpg', href: '/products/consumer' },
  { title: 'POWER PLUS', category: 'LED Bulb', image: '/bulbone4.png', href: '/products/consumer' },
  { title: 'FLASH LED BULB', category: 'LED Bulb', image: '/bulbone5.jpg', href: '/products/consumer' },
  { title: 'Spectrum', category: 'LED Bulb', image: '/bulbone6.jpg', href: '/products/consumer' },
  { title: 'Dia', category: 'LED Bulb', image: '/bulbone7.jpg', href: '/products/consumer' },
  { title: 'Ultima Line', category: 'LED Battens', image: '/LEDbatten1.jpg', href: '/products/consumer' },
  { title: 'Prism Plus', category: 'LED Battens', image: '/Led batten2.jpg', href: '/products/consumer', objectFit: 'contain' },
  { title: 'PRISM LINE', category: 'LED Battens', image: '/ledbatten3.jpg', href: '/products/consumer', objectFit: 'contain' },
  { title: 'Ultra Line', category: 'LED Battens', image: '/ledbatten4.jpg', href: '/products/consumer', objectFit: 'contain' },
  { title: 'Spectra Line', category: 'LED Battens', image: '/ledbatten5.jpg', href: '/products/consumer', objectFit: 'contain' },
  { title: 'Helio Slim', category: 'LED Panel & Spotlights', image: '/LEDPANEL1.jpg', href: '/products/consumer' },
  { title: 'SHEEN', category: 'LED Downlights', image: '/LEDDOwnlights1.jpg', href: '/products/consumer' },
  { title: 'SPARKLE', category: 'LED Downlights', image: '/leddownlights2.jpg', href: '/products/consumer' },
  { title: 'AURA SLIM', category: 'LED Downlights', image: '/leddownlights3.jpg', href: '/products/consumer' },
  { title: 'DELTA SLIM PANEL', category: 'LED Downlights', image: '/leddownlights4.jpg', href: '/products/consumer' },
  { title: 'BRIGHTO', category: 'LED Downlights', image: '/leddownlights5.png', href: '/products/consumer' },
  { title: 'Aura Slim Plus RD', category: 'LED Downlights', image: '/leddownlights6.jpg', href: '/products/consumer' },
  { title: 'Jade', category: 'LED Downlights', image: '/leddownlights7.jpg', href: '/products/consumer' },
  { title: 'ARENA', category: 'LED Bulkheads', image: '/ledbulkheads1.jpg', href: '/products/consumer' },
  { title: 'Pinnacle', category: 'LED Flood Lights', image: '/LED Flood Lights1.jpg', href: '/products/consumer', objectFit: 'contain' },
  { title: 'Zenith Plus', category: 'LED Flood Lights', image: '/LED Flood Lights2.jpg', href: '/products/consumer', objectFit: 'contain' },
  { title: 'Atlantis', category: 'LED Flood Lights', image: '/LED Flood Lights3.jpg', href: '/products/consumer', objectFit: 'contain' },
  { title: 'Stream', category: 'LED Strip Lights', image: '/LED Strip Lights1.jpg', href: '/products/consumer', objectFit: 'contain' },
];

export default function ProductsRange() {
  const [active, setActive] = useState('All');
  const scrollRef = useRef<HTMLDivElement>(null);

  const filtered = active === 'All'
    ? Object.values(
        RANGES.reduce((acc, item) => {
          if (!acc[item.category]) acc[item.category] = [];
          if (acc[item.category].length < 2) acc[item.category].push(item);
          return acc;
        }, {} as Record<string, typeof RANGES>)
      ).flat()
    : RANGES.filter((r) => r.category === active);

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === 'right' ? 300 : -300, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <p className="text-gold text-sm tracking-widest uppercase mb-2">Explore Our Range</p>
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">Products Range</h2>
          <p className="text-secondary max-w-xl">
            From everyday home lighting to industrial-grade solutions — discover the full Magik Lighting range.
          </p>
        </motion.div>

        {/* Category Pills */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-start gap-3 mb-10"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold tracking-wide border transition-all duration-250 ${
                active === cat
                  ? 'bg-gradient-to-r from-[#de3e82] to-[#5da9dd] text-white border-transparent shadow-md'
                  : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-700'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </motion.div>

        {/* Slider */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors"
            aria-label="Scroll left"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"/></svg>
          </button>

          {/* Scrollable row */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scroll-smooth pb-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filtered.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="flex-shrink-0 w-80"
              >
                <Link href={item.href} className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-black">
                  {/* Image */}
                  <div className="h-64 overflow-hidden bg-gray-50">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${'objectFit' in item && item.objectFit === 'contain' ? 'object-contain' : 'object-cover'}`}
                    />
                  </div>
                  {/* Name */}
                  <div className="px-4 py-3 bg-black">
                    <p className="text-base font-semibold tracking-widest text-white uppercase text-center">{item.title}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors"
            aria-label="Scroll right"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-right mt-10"
        >
          <Link
            href="/products"
            className="inline-block border border-gray-300 hover:border-gray-500 text-primary px-10 py-3 rounded-full font-semibold tracking-widest uppercase text-sm transition-all duration-300 hover:shadow-md"
          >
            View All Products →
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
