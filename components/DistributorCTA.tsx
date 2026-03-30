'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function DistributorCTA() {
  return (
    <section className="py-16 px-6 bg-[#F8F6F2]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-sm mx-auto rounded-2xl overflow-hidden shadow-xl bg-primary"
      >
        {/* Image on top */}
        <div className="relative w-full h-64">
          <Image
            src="/spotlights%20bd.png"
            alt="Spotlight"
            fill
            className="object-cover"
          />
        </div>

        {/* Content below */}
        <div className="p-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Join Our Distributor Network
          </h2>
          <p className="text-base mb-6 text-white/80">
            Partner with India's leading lighting brand and grow your business with premium products and support
          </p>
          <motion.a
            href="/distributor"
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-gold hover:bg-goldHover text-white px-8 py-3 rounded-lg text-base transition-all duration-300"
          >
            Become a Distributor
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
