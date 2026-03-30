'use client';

import { useState } from 'react';
import Link from 'next/link';

const QUICK_LINKS = [
  { label: 'Brochures', href: '/brochures' },
  { label: 'Ledpedia', href: '/ledpedia' },
  { label: 'Become a Distributor', href: '/distributor' },
  { label: 'News & Media', href: '/news-media' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Career', href: '/career' },
  { label: 'Contact Us', href: '/contact' },
];

const SOCIAL = [
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <>
      <footer className="bg-primary text-white font-sans">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Brand + Social */}
            <div>
              <h2 className="text-3xl font-serif text-white mb-2">Magik Lighting</h2>
              <p className="text-white/60 text-sm mb-6">Illuminating spaces with premium LED solutions.</p>
              <div className="flex gap-3">
                {SOCIAL.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:text-gold hover:border-gold transition-colors duration-200"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-bold text-white mb-3 pb-2 border-b-2 border-gold">QUICK LINKS</h4>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                {QUICK_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-white/70 hover:text-gold transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact + Newsletter */}
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-bold text-white mb-3 pb-2 border-b-2 border-gold">CONTACT</h4>
                <div className="space-y-2 text-sm text-white/70">
                  <p>📧 Info@magiklights.com</p>
                  <p>📧 helpdesk@magiklights.com</p>
                  <p>📞 Toll Free: 18003451345</p>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-3 pb-2 border-b-2 border-gold">NEWSLETTER</h4>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email..."
                    className="flex-1 bg-black text-white placeholder-gray-500 px-4 py-2 rounded-full focus:outline-none text-sm"
                  />
                  <button className="border border-gray-500 text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-200 text-sm font-medium whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20">
          <div className="container mx-auto px-6 py-3 flex items-center justify-between flex-wrap gap-2">
            <p className="text-sm text-white/50">© 2026 Magik LED | <Link href="/terms" className="hover:text-gold">Terms of Use</Link> | <Link href="/sitemap" className="hover:text-gold">Sitemap</Link></p>
          </div>
        </div>
      </footer>

      {/* Quick Enquiry + WhatsApp stacked */}
      <div className="fixed bottom-0 right-0 z-50 flex flex-col items-end">
        {/* WhatsApp */}
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 mr-3 mb-2"
          aria-label="Chat on WhatsApp"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
        </a>

        {/* Quick Enquiry */}
        <div className="w-full">
          <button
            onClick={() => setEnquiryOpen((v) => !v)}
            className="flex items-center gap-3 bg-primary text-white px-6 py-3 font-semibold text-sm w-full"
          >
            Quick Enquiry
            <svg className={`w-4 h-4 transition-transform ${enquiryOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6" /></svg>
          </button>
          {enquiryOpen && (
            <div className="bg-white shadow-xl p-6 w-80 border border-gray-200">
              <h3 className="font-bold text-primary mb-4">Quick Enquiry</h3>
              <div className="space-y-3">
                <input type="text" placeholder="Your Name" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary" />
                <input type="email" placeholder="Email Address" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary" />
                <input type="tel" placeholder="Phone Number" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary" />
                <textarea placeholder="Message" rows={3} className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary resize-none" />
                <button className="w-full bg-primary text-white py-2 rounded text-sm font-medium hover:bg-secondary transition-colors">Submit</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
