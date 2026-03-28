'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CenturyHouse() {
  return (
    <section className="relative w-full">
      <Image
        src="/century house.jpeg"
        alt="Century House"
        width={1920}
        height={1080}
        sizes="100vw"
        className="w-full h-auto"
        priority
      />
      <div className="absolute top-24 left-36 max-w-sm text-left">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-serif font-bold text-white drop-shadow-lg mb-4"
        >
          Century House
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white text-base md:text-lg leading-relaxed drop-shadow-md"
        >
          We are always reinventing our lighting solutions to make sure that you get the best! Check out the latest additions to our Magikal LED family.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white text-base md:text-lg font-semibold mt-3"
        >
          Manufacturing | Marketing | Monitoring
        </motion.p>
      </div>
    </section>
  );
}
