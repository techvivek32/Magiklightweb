'use client';

import { motion } from 'framer-motion';

export default function AboutPreview() {
  return (
    <section className="py-12 px-6 bg-background">
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
              src="https://www.youtube.com/embed/3mE6jT6zgj4"
              title="Magik Lighting Video"
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
              Illuminating India Since 2010
            </h2>
            <p className="text-secondary text-lg mb-6 leading-relaxed">
              Magik Lighting has been at the forefront of the LED revolution in India, 
              providing premium quality lighting solutions to homes, offices, and industries 
              across the nation.
            </p>
            <p className="text-secondary text-lg mb-8 leading-relaxed">
              With a commitment to innovation, quality, and customer satisfaction, we have 
              established ourselves as a trusted name in the lighting industry.
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
