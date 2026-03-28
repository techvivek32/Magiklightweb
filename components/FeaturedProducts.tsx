'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Product } from '@/types';

const categories = [
  { title: 'Home Lighting',  image: '/db55462d-81d9-4621-a3e0-fbfbaaf05b5c.jpg', href: '/products/indoor' },
  { title: 'Outdoor Lighting', image: '/download.jpg', href: '/products/outdoor' },
  { title: 'Industrial Lighting', image: '/ind.jpg', href: '/products/industrial' },
  { title: 'Hospitality Lighting', image: '/deco.jpg', href: '/products/decorative' },
];

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/api/products?featured=true')
      .then((res) => res.json())
      .then((data) => Array.isArray(data) && setProducts(data))
      .catch(() => {});
  }, []);

  return (
    <section className="py-12 px-6 bg-background">
      <div className="container mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-8"
        >
          <Link href="/products" className="hidden md:inline-flex items-center gap-2 text-sm text-secondary hover:text-gold transition-colors duration-300">
            View All Products →
          </Link>
        </motion.div>

        {/* Top 2 wide category cards */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {categories.slice(0, 2).map((cat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
              <Link href={cat.href} className="group relative block h-[512px] rounded-xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={cat.image} alt={cat.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-serif text-2xl tracking-wide drop-shadow">{cat.title}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* 4 product cards */}
        {products.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
            {products.slice(0, 4).map((product, index) => (
              <motion.div
                key={product._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group cursor-pointer"
              >
                <div className="relative h-96 overflow-hidden rounded-xl mb-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" />
                  {index === 0 && <img src="/645e4cb7-d43f-4a45-9e61-674ab2270b91.png" alt={product.name} className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500" />}
                  {index === 1 && <img src="/e21b77da-9a77-4fa5-99f4-642ab231fa32.png" alt={product.name} className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500" />}
                  {index === 2 && <img src="/c7874199-9114-45cb-b308-4d5ce048ff4a.png" alt={product.name} className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500" />}
                  {index === 3 && <img src="/90861035-9cf0-4a80-abb9-3e956e1e5d1a.png" alt={product.name} className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500" />}
                </div>
                <h3 className="font-serif text-primary text-sm text-center uppercase tracking-wide mb-1 leading-snug">{product.name}</h3>
                <div className="flex items-center justify-center gap-1 mb-1">
                  {[1,2,3,4,5].map((s) => (
                    <svg key={s} xmlns="http://www.w3.org/2000/svg" className={`w-3 h-3 ${s <= Math.round(product.rating ?? 5) ? 'text-gold' : 'text-border'}`} viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  {product.reviewCount && <span className="text-secondary text-xs ml-1">({product.reviewCount})</span>}
                </div>
                {product.price && (
                  <p className="text-center text-sm text-primary">
                    <span className="font-medium">from ₹{product.price.toLocaleString()}</span>
                    {product.originalPrice && <span className="text-secondary line-through ml-2 text-xs">₹{product.originalPrice.toLocaleString()}</span>}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        )}

        {/* View all link */}
        <div className="text-center py-3 mb-8">
          <Link href="/products" className="text-xs tracking-widest uppercase text-secondary hover:text-gold transition-colors duration-300">
            More Products &rsaquo;
          </Link>
        </div>

        {/* Bottom 2 wide category cards */}
        <div className="grid grid-cols-2 gap-4">
          {categories.slice(2, 4).map((cat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
              <Link href={cat.href} className="group relative block h-[512px] rounded-xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={cat.image} alt={cat.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-serif text-2xl tracking-wide drop-shadow">{cat.title}</span>
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
