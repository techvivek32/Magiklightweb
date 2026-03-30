'use client';

import { useRef } from 'react';

const reels = [
  'https://www.instagram.com/reel/DViyiJHj0nM/?igsh=enM4MjNyYmtzeGc0',
  'https://www.instagram.com/reel/DTu4n6vD7nm/?igsh=ZzZxanhsbXF4eDNk',
  'https://www.instagram.com/reel/DTc3BVOlHIA/?igsh=MWxzamljbW5oNzUyeQ==',
  'https://www.instagram.com/reel/DSXVfzAiMus/?igsh=MXJzaWZkaWl4N3FqNg==',
  'https://www.instagram.com/reel/DPin2xPjnZA/?igsh=MW91MDNyMHdkeTF2ag==',
  'https://www.instagram.com/reel/DSNCZFZlKxI/?igsh=MXR2OG8xM2F5bGVycA==',
];

function getReelId(url: string) {
  const match = url.match(/reel\/([^/?]+)/);
  return match ? match[1] : '';
}

const InstagramIcon = ({ size = 28, color = 'white' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} fill={color} viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

export default function InstagramReels() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'right' ? 320 : -320, behavior: 'smooth' });
  };

  return (
    <section className="py-16 px-6 bg-section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 items-start">

          {/* Left Text */}
          <div className="lg:w-64 flex-shrink-0 lg:pt-4">
            <h2 className="text-primary text-5xl font-serif leading-tight mb-6">
              Stay inspired with us on Instagram
            </h2>
            <a
              href="https://www.instagram.com/magiklighting?igsh=ZDNpYnRmZGtxa3N3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-primary text-primary px-5 py-2.5 rounded-full text-sm hover:bg-primary hover:text-white transition-all duration-200 mb-8"
            >
              <InstagramIcon size={16} color="currentColor" />
              Follow us
            </a>


          </div>

          {/* Reels Carousel */}
          <div className="flex-1 relative">
            <button
              onClick={() => scroll('left')}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-all"
            >
              <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-all"
            >
              <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div
              ref={scrollRef}
              className="flex gap-3 overflow-x-auto scroll-smooth"
              style={{ scrollbarWidth: 'none' }}
            >
              {reels.map((url) => {
                const id = getReelId(url);
                return (
                  <a
                    key={id}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 relative rounded-2xl overflow-hidden block"
                    style={{ width: 220, height: 390 }}
                  >
                    {/* Scale up iframe to crop out Instagram UI */}
                    <div className="absolute" style={{ top: '80%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                      <iframe
                        src={`https://www.instagram.com/reel/${id}/embed/captioned/`}
                        width="300"
                        height="700"
                        allowFullScreen
                        scrolling="no"
                        style={{ border: 'none', pointerEvents: 'none', transform: 'scale(1.1)', transformOrigin: 'center center' }}
                      />
                    </div>
                    {/* Transparent clickable overlay to block embed UI interactions */}
                    <div className="absolute inset-0 z-10" />
                    {/* Bottom Instagram icon */}
                    <div className="absolute bottom-3 right-3 z-20 pointer-events-none">
                      <InstagramIcon size={26} color="white" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
