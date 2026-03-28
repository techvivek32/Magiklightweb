'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const industries = [
  {
    title: 'Home Solutions',
    description: 'Beautiful, energy-saving LED solutions for every room in your home.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
    href: '/industries/home',
  },
  {
    title: 'Retail Solutions',
    description: 'Accent and display lighting that makes products shine and drives conversions.',
    image: '/retail-solutions.jpg',
    href: '/industries/retail',
  },
  {
    title: 'Office Solutions',
    description: 'Elegant panel lights and track lighting for offices and workspaces.',
    image: '/office-solutions.jpg',
    href: '/industries/office',
  },
  {
    title: 'Industry Solutions',
    description: 'High-bay LED fixtures engineered for factories, warehouses and heavy-duty industrial environments.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    href: '/industries/industry',
  },
  {
    title: 'Outdoor Solutions',
    description: 'Durable, weatherproof lighting for outdoor spaces and public areas.',
    image: '/outdoor-solutions.jpg',
    href: '/industries/outdoor',
  },
  {
    title: 'Hospitality Solutions',
    description: 'Warm, ambient lighting that creates the perfect atmosphere for hotels and restaurants.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    href: '/industries/hospitality',
  },
  {
    title: 'Road Solutions',
    description: 'High-performance street lights for roads, highways and urban infrastructure.',
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=80',
    href: '/industries/road',
  },
  {
    title: 'Areal Solutions',
    description: 'Powerful area lighting for large open spaces, parking lots and campuses.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    href: '/industries/areal',
  },
  {
    title: 'Landscape Solutions',
    description: 'Decorative and functional lighting to enhance gardens, parks and landscapes.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    href: '/industries/landscape',
  },
  {
    title: 'Commercial Solutions',
    description: 'Comprehensive lighting solutions for commercial buildings and complexes.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    href: '/industries/commercial',
  },
];

const doubled = [...industries, ...industries];

export default function IndustrySolutions() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const posRef = useRef(0);
  const rafRef = useRef<number>(0);
  const speed = 0.5;

  const scroll = (dir: 'left' | 'right') => {
    posRef.current = Math.max(0, posRef.current + (dir === 'right' ? 320 : -320));
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const step = () => {
      if (!paused) {
        posRef.current += speed;
        const halfWidth = track.scrollWidth / 2;
        if (posRef.current >= halfWidth) posRef.current = 0;
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [paused]);

  return (
    <section className="py-12 bg-section overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-gold text-sm tracking-widest uppercase mb-2">What We Serve</p>
          <h2 className="text-4xl md:text-5xl font-serif text-primary">Magik Solutions</h2>
        </motion.div>
      </div>

      {/* Carousel wrapper */}
      <div className="relative w-full overflow-hidden">

        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-gold flex items-center justify-center shadow-md transition-all duration-200 group"
        >
          <svg className="w-5 h-5 text-primary group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-gold flex items-center justify-center shadow-md transition-all duration-200 group"
        >
          <svg className="w-5 h-5 text-primary group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-gradient-to-r from-[#E8E1D6] to-transparent" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-gradient-to-l from-[#E8E1D6] to-transparent" />

        {/* Track */}
        <div
          ref={trackRef}
          className="flex gap-6 will-change-transform"
          style={{ width: 'max-content' }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {doubled.map((industry, index) => (
            <div
              key={index}
              className="group relative flex-shrink-0 h-[460px] rounded-2xl overflow-hidden cursor-pointer"
              style={{ width: 'calc((100vw - 48px) / 3)' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={industry.image}
                alt={industry.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                <div className="w-8 h-0.5 bg-gold mb-3 transition-all duration-300 group-hover:w-16" />
                <h3 className="text-2xl font-serif mb-2">{industry.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-5 max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500">
                  {industry.description}
                </p>
                <Link
                  href={industry.href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-white border border-gold/60 hover:bg-gold px-5 py-2 rounded-lg transition-all duration-300"
                >
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
