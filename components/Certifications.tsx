'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Certification } from '@/types';

export default function Certifications() {
  const [certifications, setCertifications] = useState<Certification[]>([]);

  useEffect(() => {
    fetch('/api/certifications')
      .then((res) => res.json())
      .then((data) => Array.isArray(data) && setCertifications(data))
      .catch(() => {});
  }, []);

  return (
    <section className="py-12 px-6 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">
            Certifications & Standards
          </h2>
          <p className="text-secondary text-lg">
            Quality assured by international standards
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert._id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative w-32 h-32 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={cert.image}
                alt={cert.name}
                fill
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
