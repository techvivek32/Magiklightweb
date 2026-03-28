'use client';

import { motion } from 'framer-motion';

export default function AboutMagikLED() {
  return (
    <section className="py-12 px-6 bg-section">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden bg-black"
          >
            <iframe
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
              style={{ aspectRatio: '16/9', minWidth: '100%', minHeight: '100%' }}
              src="https://www.youtube.com/embed/3mE6jT6zgj4?si=wEKHroB5FybqQR_b"
              title="About Magik LED Lights"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">
              About Magik LED Lights
            </h2>
            <p className="text-secondary text-lg mb-6 leading-relaxed">
              LED lights are the latest choice for smart and sustainable functioning.
            </p>
            <p className="text-secondary text-lg mb-8 leading-relaxed">
              With LED being the new technology, LED lights are now available in a wide range
              to suit your home as well as outdoor needs. Explore how Magik enhances the power
              of LED lights that illuminates your world with its smart solutions — the solutions
              empowered with innovative thinking.
            </p>
            <motion.a
              href="/about"
              whileHover={{ scale: 1.05 }}
              className="inline-block bg-gold hover:bg-goldHover text-white px-8 py-3 rounded-lg transition-all duration-300"
            >
              Read More
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
