'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const blogs = [
  {
    title: 'How LED Lighting Cuts Commercial Energy Bills by 70%',
    description: 'Discover how modern LED technology is transforming energy consumption in offices, malls, and industrial spaces across India.',
    category: 'Energy Saving',
    date: 'Mar 15, 2024',
    readTime: '5 min read',
    image: '/db55462d-81d9-4621-a3e0-fbfbaaf05b5c.jpg',
    slug: 'led-energy-savings',
    featured: true,
  },
  {
    title: 'Top 5 Lighting Trends for Luxury Hospitality in 2024',
    description: 'From warm tunable whites to architectural accent lighting — what top hotels are choosing this year.',
    category: 'Trends',
    date: 'Feb 28, 2024',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    slug: 'hospitality-lighting-trends',
    featured: false,
  },
  {
    title: 'BIS Certification: Why It Matters for Your LED Purchase',
    description: 'Understanding quality certifications and why BIS-certified LEDs are the only safe choice for Indian consumers.',
    category: 'Quality',
    date: 'Feb 10, 2024',
    readTime: '3 min read',
    image: '/download.jpg',
    slug: 'bis-certification-guide',
    featured: false,
  },
  {
    title: 'Industrial Lighting: High-Bay LEDs for Maximum Output',
    description: 'A complete guide to choosing the right high-bay LED fixtures for warehouses, factories, and large industrial spaces.',
    category: 'Industrial',
    date: 'Jan 22, 2024',
    readTime: '6 min read',
    image: '/ind.jpg',
    slug: 'industrial-high-bay-leds',
    featured: false,
  },
  {
    title: 'Smart Lighting Controls: Dimming & Automation Guide',
    description: 'How smart dimming systems and automation can reduce energy waste and improve ambiance in modern buildings.',
    category: 'Trends',
    date: 'Jan 10, 2024',
    readTime: '5 min read',
    image: '/office-solutions.jpg',
    slug: 'smart-lighting-controls',
    featured: false,
  },
  {
    title: 'Outdoor LED Flood Lights: Selection & Installation Tips',
    description: 'Everything you need to know about choosing and installing outdoor LED flood lights for security and aesthetics.',
    category: 'Industrial',
    date: 'Dec 18, 2023',
    readTime: '4 min read',
    image: '/outdoor-solutions.jpg',
    slug: 'outdoor-flood-lights',
    featured: false,
  },
];

const categories = ['All', 'Energy Saving', 'Trends', 'Quality', 'Industrial'];

const categoryColors: Record<string, string> = {
  'Energy Saving': 'bg-emerald-100 text-emerald-700',
  Trends: 'bg-purple-100 text-purple-700',
  Quality: 'bg-blue-100 text-blue-700',
  Industrial: 'bg-orange-100 text-orange-700',
};

export default function BlogPreview() {
  const [activeCategory, setActiveCategory] = useState('All');
  const scrollRef = useRef<HTMLDivElement>(null);

  const featured = blogs[0];
  const filtered = blogs
    .slice(1)
    .filter((b) => activeCategory === 'All' || b.category === activeCategory);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === 'right' ? 320 : -320, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <p className="text-gold text-xs tracking-widest uppercase mb-2">Our Journal</p>
            <h2 className="text-4xl md:text-5xl font-serif text-primary leading-tight">
              Magik <span className="font-black">Blog</span>
            </h2>
          </div>
          <a
            href="/blogs"
            className="hidden md:inline-flex items-center gap-2 text-sm tracking-widest uppercase text-secondary border-b border-secondary pb-0.5 hover:text-gold hover:border-gold transition-colors duration-200"
          >
            View All
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>


        {/* Category Tabs + Scroll Controls */}
        <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs tracking-widest uppercase px-4 py-2 rounded-full border transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white text-secondary border-border hover:border-primary hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Arrow controls */}
          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Cards */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {filtered.map((post, i) => (
            <motion.a
              key={post.slug}
              href={`/blogs/${post.slug}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group flex-shrink-0 w-80 bg-white rounded-xl overflow-hidden border border-border hover:border-gold/40 hover:shadow-md transition-all duration-300"
            >
              {/* Card Image */}
              <div className="relative h-48 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3">
                  <span className={`text-xs tracking-widest uppercase px-2.5 py-1 rounded-full font-medium ${categoryColors[post.category]}`}>
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4">
                <h3 className="text-primary font-serif text-base leading-snug mb-2 line-clamp-2 group-hover:text-secondary transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-secondary/70 text-sm leading-relaxed line-clamp-2 mb-3">
                  {post.description}
                </p>
                <div className="flex items-center justify-between text-secondary/50 text-sm">
                  <div className="flex items-center gap-2">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <svg className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 text-center md:hidden">
          <a href="/blogs" className="inline-block border border-gold text-gold text-sm tracking-widest uppercase px-8 py-3 rounded-lg hover:bg-gold hover:text-white transition-colors duration-300">
            View All Posts
          </a>
        </div>

      </div>
    </section>
  );
}
