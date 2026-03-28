'use client';

import { useState } from 'react';

const videos = [
  { id: 'jhpxzG74XOM', category: 'BRAND', title: 'Magik Brand Story', subtitle: 'Our Journey', duration: '3:42' },
  { id: 'tNFuuZqOto0', category: 'FACTORY', title: 'Manufacturing Excellence', subtitle: 'Behind the Scenes', duration: '5:18' },
  { id: 'vwPxVQ6_1og', category: 'TECHNOLOGY', title: 'Smart LED Technology', subtitle: 'Innovation', duration: '4:07' },
  { id: 'atZ1rTuyxfE', category: 'PRODUCT', title: 'CONNECT — IoT Lighting', subtitle: 'Smart Solutions', duration: '2:55' },
  { id: 'dOPRrnumq9w', category: 'B2B', title: 'B2B Solutions Overview', subtitle: 'Partner With Us', duration: '6:12' },
];

export default function CorporateVideos() {
  const [playing, setPlaying] = useState<string | null>(null);
  const [featured, setFeatured] = useState(videos[0]);

  return (
    <section className="py-10 px-6 bg-primary">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-6">
          <p className="text-gold text-xs tracking-widest uppercase font-sans mb-1">Watch & Explore</p>
          <h2 className="text-white text-3xl md:text-4xl font-bold font-serif uppercase tracking-wide">
            Corporate Videos
          </h2>
        </div>



        <div className="flex flex-col lg:flex-row gap-4">
          {/* Featured Main Video */}
          <div className="flex-1 rounded-2xl overflow-hidden" style={{ minHeight: 380, position: 'relative' }}>
            {playing === featured.id ? (
              <iframe
                src={`https://www.youtube.com/embed/${featured.id}?autoplay=1&rel=0`}
                title={featured.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full"
                style={{ height: 380, display: 'block' }}
              />
            ) : (
              <button
                onClick={() => setPlaying(featured.id)}
                className="w-full h-full absolute inset-0 group cursor-pointer text-left"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://img.youtube.com/vi/${featured.id}/maxresdefault.jpg`}
                  alt={featured.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                    style={{ background: '#de3e82' }}
                  >
                    <svg className="w-8 h-8 ml-1" viewBox="0 0 10 10" fill="white">
                      <polygon points="2,1 9,5 2,9" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs tracking-widest uppercase font-sans mb-1" style={{ color: '#de3e82' }}>
                    {featured.category}
                  </p>
                  <h3 className="text-white text-2xl font-bold font-serif mb-1">{featured.title}</h3>
                  <p className="text-white/60 text-sm font-sans">
                    {featured.subtitle} &bull; {featured.duration}
                  </p>
                </div>
              </button>
            )}
          </div>

          {/* Playlist */}
          <div className="lg:w-96 flex flex-col gap-3">
            {videos.map((v) => {
              const isActive = v.id === featured.id;
              return (
                <button
                  key={v.id}
                  onClick={() => { setFeatured(v); setPlaying(null); }}
                  className={`flex items-center gap-3 rounded-xl p-3 text-left transition-all duration-200 ${
                    isActive
                      ? 'border border-gold bg-white/10'
                      : 'border border-white/10 bg-white/5 hover:bg-white/10'
                  }`}
                >
                  {/* Thumbnail */}
                  <div className="relative w-28 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`}
                      alt={v.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center"
                        style={{ background: isActive ? '#de3e82' : 'rgba(255,255,255,0.85)' }}
                      >
                        <svg className="w-3 h-3 ml-0.5" viewBox="0 0 10 10" fill={isActive ? 'white' : '#0f2035'}>
                          <polygon points="2,1 9,5 2,9" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="text-xs tracking-widest uppercase font-sans mb-0.5" style={{ color: '#de3e82' }}>
                      {v.category}
                    </p>
                    <p className="text-white text-sm font-semibold font-sans truncate">{v.title}</p>
                    <p className="text-white/50 text-xs font-sans mt-0.5">{v.duration}</p>
                  </div>

                  {/* Active indicator */}
                  {isActive && <div className="w-1 h-10 rounded-full flex-shrink-0" style={{ background: '#de3e82' }} />}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
