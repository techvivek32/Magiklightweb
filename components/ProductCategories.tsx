'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const categories = [
  { title: 'LED Bulbs',     image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', href: '/products/led-bulbs' },
  { title: 'Panel Lights',  image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&q=80', href: '/products/panel-lights' },
  { title: 'Flood Lights',  image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&q=80', href: '/products/flood-lights' },
  { title: 'Street Lights', image: 'https://images.unsplash.com/photo-1542621334-a254cf47733d?w=800&q=80', href: '/products/street-lights' },
];

export default function ProductCategories() {
  return (
    <section className="py-12 px-6 bg-background">
      <div className="container mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-gold text-sm tracking-widest uppercase mb-2">Shop by Category</p>
          <h2 className="text-4xl md:text-5xl font-serif text-primary">Product Categories</h2>
        </motion.div>

        {/* 4 category tiles */}
        <div className="grid grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <Link href={cat.href} className="group relative block h-36 rounded-xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={cat.image} alt={cat.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/45 group-hover:bg-black/60 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-serif text-base tracking-wide drop-shadow">{cat.title}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
