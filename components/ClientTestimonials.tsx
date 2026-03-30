'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const videoTestimonials = [
  {
    ytId: 'Io-YXYDhuqE',
    label: '"Quality Meets Innovation."',
    tag: 'COMMERCIAL PROJECT · 2024',
  },
  {
    ytId: 'yohC4LkGKVI',
    label: '"Lighting That Transforms Spaces."',
    tag: 'INTERIOR DESIGN · 2024',
  },
  {
    ytId: '879Pi-2lFHA',
    label: '"Energy Savings Beyond Expectations."',
    tag: 'HOSPITALITY SECTOR · 2024',
  },
];

const photoTestimonials = [
  {
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80',
    name: 'Suresh Nair',
    role: 'CEO, NAIR RETAIL GROUP',
    rating: 5,
    quote: 'Outstanding product quality and on-time delivery across all 80 of our stores. Highly recommended for bulk B2B orders.',
  },
  {
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80',
    name: 'Anita Desai',
    role: 'ARCHITECT, DESAI & ASSOCIATES',
    rating: 5,
    quote: 'The design flexibility and colour temperature options helped us achieve exactly the mood we envisioned for our clients.',
  },
  {
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
    name: 'Vikram Singh',
    role: 'PLANT HEAD, SINGH INDUSTRIES',
    rating: 4,
    quote: 'Industrial-grade high-bay LEDs running flawlessly for 2 years. Zero maintenance calls so far.',
  },
  {
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80',
    name: 'Neha Joshi',
    role: 'PURCHASE MANAGER, JOSHI HOSPITALS',
    rating: 5,
    quote: 'BIS certified products gave us confidence for our healthcare facility. The team was professional throughout.',
  },
  {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    name: 'Rajesh Mehta',
    role: 'DIRECTOR, MEHTA CONSTRUCTIONS',
    rating: 5,
    quote: 'Magik Lighting transformed our entire commercial complex. The quality and after-sales support is unmatched.',
  },
  {
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    name: 'Priya Sharma',
    role: 'INTERIOR DESIGNER, STUDIO PRIYA',
    rating: 5,
    quote: 'I recommend Magik to all my clients. The range of products and the finish quality is truly premium.',
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} className={`w-4 h-4 ${i <= count ? 'text-gold' : 'text-border'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ClientTestimonials() {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [videoIdx, setVideoIdx] = useState(0);
  const [photoIdx, setPhotoIdx] = useState(0);

  const video = videoTestimonials[videoIdx];
  const pair = [photoTestimonials[photoIdx % photoTestimonials.length], photoTestimonials[(photoIdx + 1) % photoTestimonials.length]];

  function prevSlide() {
    setPlayingId(null);
    setVideoIdx((v) => (v - 1 + videoTestimonials.length) % videoTestimonials.length);
    setPhotoIdx((p) => (p - 2 + photoTestimonials.length) % photoTestimonials.length);
  }
  function nextSlide() {
    setPlayingId(null);
    setVideoIdx((v) => (v + 1) % videoTestimonials.length);
    setPhotoIdx((p) => (p + 2) % photoTestimonials.length);
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">

        {/* Header — centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left mb-12"
        >
          <p className="text-gold text-xs tracking-widest uppercase mb-3">Client Love</p>
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">
            Magik Voices
          </h2>
          <p className="text-secondary text-base max-w-xl">
            Hear from the visionaries who have transformed their spaces with Magik Lighting.
          </p>
        </motion.div>

        {/* Main layout: video left, cards right */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-6 items-stretch"
        >
          {/* Left — Video */}
          <div className="lg:w-1/2 relative rounded-2xl overflow-hidden bg-white/5 border border-white/10" style={{ minHeight: 380 }}>
            {playingId === video.ytId ? (
              <iframe
                src={`https://www.youtube.com/embed/${video.ytId}?autoplay=1&rel=0`}
                title={video.label}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full absolute inset-0"
              />
            ) : (
              <button
                onClick={() => setPlayingId(video.ytId)}
                className="w-full h-full absolute inset-0 group cursor-pointer text-left"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://img.youtube.com/vi/${video.ytId}/maxresdefault.jpg`}
                  alt={video.label}
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                    <svg className="w-6 h-6 ml-1 text-gold" viewBox="0 0 10 10" fill="currentColor">
                      <polygon points="2,1 9,5 2,9" />
                    </svg>
                  </div>
                </div>

                {/* Bottom label */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white text-xl font-serif mb-1">{video.label}</p>
                  <p className="text-gold text-xs tracking-widest uppercase">{video.tag}</p>
                </div>
              </button>
            )}
          </div>

          {/* Right — 2 stacked photo testimonial cards */}
          <div className="lg:w-1/2 flex flex-col gap-4">
            {pair.map((t, i) => (
              <div
                key={i}
                className="flex-1 bg-section border border-border rounded-2xl p-6 flex flex-col justify-between"
              >
                {/* Avatar + name */}
                <div className="flex items-center gap-3 mb-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-gold/40"
                  />
                  <div>
                    <p className="text-primary font-serif font-semibold">{t.name}</p>
                    <p className="text-secondary text-xs tracking-widest uppercase">{t.role}</p>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-secondary text-sm italic leading-relaxed mb-4">"{t.quote}"</p>

                {/* Stars */}
                <Stars count={t.rating} />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Navigation dots + arrows */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-secondary hover:border-gold hover:text-gold transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex gap-2">
            {videoTestimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setPlayingId(null); setVideoIdx(i); setPhotoIdx(i * 2); }}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === videoIdx ? 'w-8 bg-gold' : 'w-2 bg-border'}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-secondary hover:border-gold hover:text-gold transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
