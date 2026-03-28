'use client';

import { useState } from 'react';
import Link from 'next/link';

const COLUMNS = [
  {
    title: 'ABOUT MAGIK',
    links: [
      { label: 'Company Profile', href: '/about/company-profile' },
      { label: 'The Brand', href: '/about/brand' },
      { label: 'Mission/ Vision statements', href: '/about/mission-vision' },
      { label: 'Magik Pillars', href: '/about/pillars' },
    ],
  },
  {
    title: 'MAGIK SOLUTIONS',
    links: [
      { label: 'Home Solutions', href: '/solutions/home' },
      { label: 'Retail Solutions', href: '/solutions/retail' },
      { label: 'Office Solutions', href: '/solutions/office' },
      { label: 'Industry Solutions', href: '/solutions/industry' },
      { label: 'Outdoor Solutions', href: '/solutions/outdoor' },
      { label: 'Hospitality Solutions', href: '/solutions/hospitality' },
      { label: 'Road Solutions', href: '/solutions/road' },
      { label: 'Areal Solutions', href: '/solutions/areal' },
      { label: 'Landscape Solutions', href: '/solutions/landscape' },
      { label: 'Commercial Solutions', href: '/solutions/commercial' },
    ],
  },
  {
    title: 'MAGIK DELIGHTS',
    links: [
      { label: 'Magik Promises', href: '/delights/promises' },
      { label: 'Quality Focus', href: '/delights/quality' },
      { label: 'Certifications', href: '/delights/certifications' },
      { label: 'Manufacturing Excellence', href: '/delights/manufacturing' },
    ],
  },
  {
    title: 'IN FOCUS',
    links: [
      { label: 'Press Releases', href: '/focus/press' },
      { label: 'News and Events', href: '/focus/news' },
      { label: 'Media Kit', href: '/focus/media-kit' },
      { label: 'Magik Brochure', href: '/focus/brochure' },
      { label: "C'nnect", href: '/focus/connect' },
    ],
  },
  {
    title: 'OTHER LINK',
    links: [
      { label: 'Retailer Locator', href: '/retailer-locator' },
      { label: 'SAVE with Magik', href: '/save' },
      { label: 'Careers', href: '/careers' },
      { label: 'Magik Touch', href: '/magik-touch' },
      { label: 'Enquire Now', href: '/enquire' },
      { label: 'Feedback', href: '/feedback' },
    ],
  },
];

export default function Footer() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <>
      <footer className="bg-primary text-white font-sans">
        <div className="container mx-auto px-6 py-12">
        <div className="flex gap-12">
          {/* Newsletter - Left */}
          <div className="w-80 shrink-0 -ml-6">
            <h2 className="text-4xl font-serif text-white mb-1">Subscribe for</h2>
            <h2 className="text-4xl font-serif text-white mb-3">Lightning Updates</h2>
            <p className="text-white/60 mb-6 text-sm">Keep up-to-date with the latest in lighting.</p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email here..."
                className="flex-1 bg-black text-white placeholder-gray-500 px-5 py-3 rounded-full focus:outline-none text-sm"
              />
              <button className="border border-gray-500 text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition-colors duration-200 text-sm font-medium whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>

          {/* Columns - Right */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="text-sm font-bold text-white mb-3 pb-2 border-b-2 border-gold">
                  {col.title}
                </h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-sm text-white/70 hover:text-gold transition-colors duration-200">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Info */}
            <div>
              <h4 className="text-sm font-bold text-white mb-3 pb-2 border-b-2 border-gold">
                CONTACT INFO.
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 text-gold shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  <div className="text-sm text-white/70">
                    <p>Info@magiklights.com</p>
                    <p>helpdesk@magiklights.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gold shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  <p className="text-sm text-white/70">Toll Free Number: 18003451345</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 bg-primary">
          <div className="container mx-auto px-6 py-3 flex items-center justify-between">
            <p className="text-sm text-white/50">© Copyright 2026 Magik LED | | <Link href="/terms" className="hover:text-gold">Term of Use</Link> | <Link href="/sitemap" className="hover:text-gold">Sitemap</Link></p>
          </div>
        </div>
      </footer>

      {/* Quick Enquiry */}
      <div className="fixed bottom-0 right-0 z-50">
        <button
          onClick={() => setEnquiryOpen((v) => !v)}
          className="flex items-center gap-3 bg-primary text-white px-6 py-3 font-semibold text-sm"
        >
          Quick Enquiry
          <svg className={`w-4 h-4 transition-transform ${enquiryOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6"/></svg>
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

      {/* WhatsApp */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-14 right-6 w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-50"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    </>
  );
}
