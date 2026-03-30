'use client';

import { motion } from 'framer-motion';

const FEATURES = [
  {
    icon: (
      <svg width="64" height="64" viewBox="0 0 48 48" fill="none" stroke="black" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 8c-4 0-8 4-8 9 0 3 1.5 5.5 4 7v4h8v-4c2.5-1.5 4-4 4-7 0-5-4-9-8-9z"/>
        <path d="M20 28h8M22 32h4M16 20c-2 1-4 3-4 6M32 20c2 1 4 3 4 6"/>
        <circle cx="24" cy="40" r="1.5" fill="black"/>
        <path d="M12 14c1-4 5-7 8-8M36 14c-1-4-5-7-8-8"/>
      </svg>
    ),
    title: 'Electricity Saving\nTechnology',
    desc: 'Efficient designs that reduce energy consumption without compromising performance.',
  },
  {
    icon: (
      <svg width="64" height="64" viewBox="0 0 48 48" fill="none" stroke="black" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="3"/>
        <line x1="24" y1="8" x2="24" y2="14"/>
        <line x1="24" y1="34" x2="24" y2="40"/>
        <line x1="18" y1="16" x2="14" y2="12"/>
        <line x1="30" y1="16" x2="34" y2="12"/>
        <line x1="18" y1="32" x2="14" y2="36"/>
        <line x1="30" y1="32" x2="34" y2="36"/>
        <line x1="8" y1="24" x2="14" y2="24"/>
        <line x1="34" y1="24" x2="40" y2="24"/>
      </svg>
    ),
    title: 'Smart\nControls',
    desc: 'Intuitive technology for effortless control and convenience.',
  },
  {
    icon: (
      <svg width="64" height="64" viewBox="0 0 48 48" fill="none" stroke="black" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="18" width="28" height="18" rx="2"/>
        <path d="M16 18v-4a8 8 0 0 1 16 0v4"/>
        <circle cx="24" cy="27" r="3"/>
        <line x1="24" y1="30" x2="24" y2="33"/>
      </svg>
    ),
    title: 'Advanced\nFinishes',
    desc: 'Durable finishes that maintain beauty and long-lasting quality.',
  },
  {
    icon: (
      <svg width="64" height="64" viewBox="0 0 48 48" fill="none" stroke="black" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="14"/>
        <path d="M24 10c-4 4-6 9-6 14s2 10 6 14"/>
        <path d="M24 10c4 4 6 9 6 14s-2 10-6 14"/>
        <line x1="10" y1="24" x2="38" y2="24"/>
        <path d="M12 17h24M12 31h24"/>
      </svg>
    ),
    title: 'Sustainable\nManufacturing',
    desc: 'Responsible processes focused on minimizing environmental impact.',
  },
];

export default function InnovationSection() {
  return (
    <section className="w-full bg-white py-10 px-6 md:px-12">
      <div className="w-full flex flex-col md:flex-row items-center gap-0">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-black text-3xl md:text-4xl font-serif font-light leading-tight w-full md:w-1/5 md:pr-8"
        >
          Innovation<br />That Enhances<br />Everyday Living
        </motion.h2>
        <div className="flex flex-col md:flex-row flex-1 divide-y md:divide-y-0 md:divide-x divide-black/20 w-full md:w-4/5">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex-1 flex flex-col items-center text-center px-4 py-4"
            >
              <div className="mb-3">{f.icon}</div>
              <h3 className="text-black font-bold text-lg md:text-xl mb-2 leading-snug whitespace-pre-line">{f.title}</h3>
              <p className="text-black/60 text-sm md:text-base leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
