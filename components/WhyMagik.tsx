'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const stepTime = 16;
    const steps = duration / stepTime;
    const increment = target / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, stepTime);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const features = [
  {
    title: 'Premium Quality',
    description: 'Industry-leading LED lighting solutions built with superior components for lasting performance.',
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&q=80',
    color: 'from-slate-900/85 to-slate-700/60',
  },
  {
    title: 'Energy Efficient',
    description: 'Save up to 80% on electricity bills with our advanced LED technology and maximum lumen output.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80',
    color: 'from-orange-900/80 to-orange-700/60',
  },
  {
    title: 'BIS & ISO Certified',
    description: 'All products certified by BIS, ISO 9001 and international quality standards for safety.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
    color: 'from-stone-900/85 to-stone-700/60',
  },
  {
    title: 'Easy Installation',
    description: 'Plug-and-play design with universal fittings engineered for quick, hassle-free setup.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80',
    color: 'from-neutral-900/85 to-neutral-700/60',
  },
  {
    title: 'Pan India Network',
    description: 'Distributor and dealer network spanning 500+ cities for fast delivery and local support.',
    image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&q=80',
    color: 'from-teal-900/80 to-teal-700/60',
  },
  {
    title: 'B2B Solutions',
    description: 'Customised bulk lighting for builders, contractors and enterprises with dedicated support.',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80',
    color: 'from-stone-900/85 to-stone-700/60',
  },
];

const stats = [
  { value: 10000, suffix: '+', label: 'Happy Clients' },
  { value: 500,   suffix: '+', label: 'Cities Covered' },
  { value: 50,    suffix: '+', label: 'Product Range' },
  { value: 15,    suffix: '+', label: 'Years Experience' },
];

export default function WhyMagik() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-8"
        >
          <p className="text-gold text-sm tracking-widest uppercase mb-3">Why Choose Us</p>
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">
            Why Choose Magik Lighting
          </h2>
          <p className="text-secondary text-base leading-relaxed">
            LED lights are the latest choice for smart and sustainable functioning. Magik enhances the power of LED lights that illuminates your world with smart solutions empowered by innovative thinking.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border mb-8 rounded-xl overflow-hidden"
        >
          {stats.map((stat, i) => (
            <div key={i} className="bg-white px-8 py-6 text-center">
              <p className="text-3xl font-serif text-gold mb-1">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-secondary text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Feature grid — image cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group relative h-56 rounded-xl overflow-hidden cursor-pointer"
            >
              {/* Background image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={feature.image}
                alt={feature.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Color overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} transition-opacity duration-300`} />

              {/* Gold top-left accent bar */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <h3 className="text-xl font-serif mb-2 drop-shadow">{feature.title}</h3>
                <p className="text-white/75 text-sm leading-relaxed max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500">
                  {feature.description}
                </p>
                {/* Gold underline */}
                <div className="mt-3 w-8 h-0.5 bg-gold group-hover:w-16 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom badges — breathing animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          {['Manufacturing', 'Marketing', 'Monitoring', 'Consumer Safety', 'Pre-Tested Lumen', 'BIS Certified'].map((badge, i) => (
            <motion.span
              key={badge}
              animate={{
                scale: [1, 1.07, 1],
                opacity: [0.6, 1, 0.6],
                borderColor: ['#c8dff0', '#de3e82', '#c8dff0'],
                color: ['#1e5a8a', '#de3e82', '#1e5a8a'],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: i * 0.8,
                ease: 'easeInOut',
              }}
              className="text-xs tracking-widest uppercase border px-5 py-2 rounded-full cursor-default"
              style={{ borderColor: '#c8dff0', color: '#1e5a8a' }}
            >
              {badge}
            </motion.span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
