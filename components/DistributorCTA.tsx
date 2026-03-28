'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function DistributorCTA() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <Image
        src="/ind.jpg"
        alt="Become a Distributor"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-primary/80" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative container mx-auto text-center text-white"
      >
        <h2 className="text-4xl md:text-5xl font-serif mb-6">
          Join Our Distributor Network
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Partner with India's leading lighting brand and grow your business with premium products and support
        </p>
        <motion.a
          href="/distributor"
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-gold hover:bg-goldHover text-white px-10 py-4 rounded-lg text-lg transition-all duration-300"
        >
          Become a Distributor
        </motion.a>
      </motion.div>
    </section>
  );
}
