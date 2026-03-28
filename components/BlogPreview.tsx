'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Blog } from '@/types';

const cardImages = [
  '/db55462d-81d9-4621-a3e0-fbfbaaf05b5c.jpg',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  '/download.jpg',
  '/ind.jpg',
  '/deco.jpg',
  'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
];

function BlogCard({ image, title, slug, delay = 0 }: { image: string; title: string; slug?: string; delay?: number }) {
  return (
    <motion.a
      href={slug ? `/blogs/${slug}` : '/blogs'}
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay }}
      className="relative flex-1 overflow-hidden rounded group cursor-pointer block"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition-colors duration-300" />
      <div className="absolute bottom-4 left-4 right-4">
        <span className="text-white text-xs font-bold tracking-wide border border-white px-3 py-1.5 line-clamp-2">{title.toUpperCase()}</span>
      </div>
    </motion.a>
  );
}

export default function BlogPreview() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetch('/api/blogs')
      .then((res) => res.json())
      .then((data) => Array.isArray(data) && setBlogs(data))
      .catch(() => {});
  }, []);

  // Pad with fallback titles if fewer than 6 blogs
  const items = Array.from({ length: 6 }, (_, i) => ({
    title: blogs[i]?.title ?? `Blog Post ${i + 1}`,
    slug: blogs[i]?.slug,
    image: cardImages[i],
  }));

  return (
    <section className="pt-12 pb-8 px-6 bg-white">
      <div className="container mx-auto">
        <div className="flex gap-2 h-[600px]">

          {/* Left: title + tall card */}
          <div className="flex flex-col gap-2 w-[22%]">
            <div className="flex flex-col justify-center px-4 py-6 border-l-4 border-gold">
              <p className="text-2xl font-light text-primary tracking-widest uppercase">MAGIK</p>
              <p className="text-3xl font-black text-primary tracking-widest uppercase">BLOG</p>
            </div>
            <BlogCard image={items[0].image} title={items[0].title} slug={items[0].slug} />
          </div>

          {/* Middle: 2 stacked */}
          <div className="flex flex-col gap-2 w-[26%]">
            <BlogCard image={items[1].image} title={items[1].title} slug={items[1].slug} delay={0.06} />
            <BlogCard image={items[2].image} title={items[2].title} slug={items[2].slug} delay={0.1} />
          </div>

          {/* Right: 2 top side-by-side + 1 bottom full */}
          <div className="flex flex-col gap-2 flex-1">
            <div className="flex gap-2 flex-1">
              <BlogCard image={items[3].image} title={items[3].title} slug={items[3].slug} delay={0.12} />
              <BlogCard image={items[4].image} title={items[4].title} slug={items[4].slug} delay={0.16} />
            </div>
            <BlogCard image={items[5].image} title={items[5].title} slug={items[5].slug} delay={0.2} />
          </div>

        </div>
      </div>
    </section>
  );
}
