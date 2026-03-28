'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Testimonial } from '@/types';

const videos = [
  'https://www.youtube.com/embed/Io-YXYDhuqE',
  'https://www.youtube.com/embed/yohC4LkGKVI',
  'https://www.youtube.com/embed/879Pi-2lFHA',
];

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('/api/testimonials')
      .then((res) => res.json())
      .then((data) => Array.isArray(data) && setTestimonials(data))
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (testimonials.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [testimonials.length]);

  if (testimonials.length === 0) return null;

  return (
    <section className="py-12 px-6 bg-section">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="relative min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row"
            >
              {/* Left: YouTube video */}
              <div className="md:w-2/5 w-full aspect-video md:aspect-auto min-h-[220px]">
                <iframe
                  className="w-full h-full"
                  src={videos[currentIndex % videos.length]}
                  title="Client Review"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Right: testimonial text */}
              <div className="md:w-3/5 w-full p-10 flex flex-col justify-center">
                <p className="text-lg text-secondary mb-6 italic leading-relaxed">
                  {testimonials[currentIndex].quote}
                </p>
                <div>
                  <p className="text-primary font-serif text-xl">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-secondary">
                    {testimonials[currentIndex].role}
                    {testimonials[currentIndex].company && `, ${testimonials[currentIndex].company}`}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-gold w-8' : 'bg-border'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
