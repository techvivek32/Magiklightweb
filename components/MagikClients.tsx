'use client';

import { motion } from 'framer-motion';

const logos = [
  '/logos/Adani.jpg',
  '/logos/centuryply.png',
  '/logos/Cricket Association of Bengal.png',
  '/logos/hdfc.jpg',
  '/logos/IISER.jpg',
  '/logos/manyavar.png',
  '/logos/pharma.png',
  '/logos/rbi.jpg',
  '/logos/reliance.jpg',
  '/logos/sbi.jpg',
  '/logos/tata medical.png',
  '/logos/zydus.png',
];

const row1 = logos.slice(0, 6);
const row2 = logos.slice(6);

function LogoCard({ src }: { src: string }) {
  return (
    <div className="flex-shrink-0 mx-3 w-36 h-20 rounded-xl bg-white border border-border flex items-center justify-center px-4 hover:border-gold/40 transition-all duration-300">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt="client logo"
        className="max-h-10 w-auto object-contain"
      />
    </div>
  );
}

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="flex overflow-hidden">
      <div
        className="flex"
        style={{
          animation: `marquee${reverse ? 'Reverse' : ''} ${reverse ? 22 : 28}s linear infinite`,
        }}
      >
        {doubled.map((src, i) => (
          <LogoCard key={i} src={src} />
        ))}
        {doubled.map((src, i) => (
          <LogoCard key={`d-${i}`} src={src} />
        ))}
      </div>
    </div>
  );
}

export default function MagikClients() {
  return (
    <section className="py-20 bg-white overflow-hidden relative">


      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left mb-14"
        >
          <p className="text-gold text-xs tracking-widest uppercase mb-3">Trusted By The Best</p>
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">
            Our Magik <span className="font-bold">Clients</span>
          </h2>
          <p className="text-secondary/60 text-sm max-w-md">
            From Fortune 500 corporations to iconic institutions — powering India's most prestigious spaces.
          </p>
        </motion.div>
      </div>

      {/* Marquee rows */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="relative space-y-4"
      >
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, white, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, white, transparent)' }} />

        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </motion.div>



    </section>
  );
}
