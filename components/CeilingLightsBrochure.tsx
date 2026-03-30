'use client';

import { motion } from 'framer-motion';

export default function CeilingLightsBrochure() {
  return (
    <section className="relative w-full overflow-hidden">
      <img
        src="/ceiling lights.jpg"
        alt="Ceiling Lights"
        className="w-full h-auto block"
      />

      <div className="absolute inset-0 z-10 flex flex-col items-end justify-center pr-0 text-center px-6">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="/brochure.pdf"
            download
            className="inline-flex items-center gap-2 text-white text-xs tracking-widest uppercase px-3 py-2 transition-colors duration-300"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', backgroundColor: '#de3e82' }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download Brochure
          </a>
        </motion.div>
      </div>
    </section>
  );
}
