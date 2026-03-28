'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const NAV = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    image: '/about-preview.jpg',
    tagline: 'LIGHTING UP BILLIONS OF LIVES WITH MAGIK.',
    children: [
      { label: 'Company Profile', href: '/about/company-profile' },
      { label: 'The Brand', href: '/about/brand' },
      { label: 'Mission/ Vision statements', href: '/about/mission-vision' },
      { label: 'Magik Pillars', href: '/about/pillars' },
    ],
  },
  {
    label: 'Products',
    children: [
      { label: 'For Consumer', href: '/products/consumer' },
      { label: 'For Professionals', href: '/products/professionals' },
      { label: 'CONNECT', href: '/products/connect' },
    ],
  },
  { label: 'Contact Us', href: '/contact' },
  {
    label: 'More',
    children: [
      { label: 'Projects', href: '/projects' },
      { label: 'Distributor', href: '/distributor' },
      { label: 'Blogs', href: '/blogs' },
    ],
  },
];

function MegaDropdown({ items, image, tagline }: { items: { label: string; href: string }[]; image: string; tagline: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.18 }}
      className="fixed left-0 right-0 bg-white shadow-xl z-50 border-t-2 border-primary"
      style={{ top: '80px' }}
    >
      <div className="container mx-auto px-6 py-8">
        <div className="flex gap-12">
          <div className="flex-1 space-y-5">
            {items.map((item) => (
              <Link key={item.href} href={item.href} className="flex items-center gap-3 text-secondary hover:text-primary transition-colors duration-200 font-medium">
                <span className="w-3 h-3 rounded-full bg-primary shrink-0" />
                {item.label}
              </Link>
            ))}
          </div>
          <div className="w-80 shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image} alt="About" className="w-full h-56 object-cover rounded" />
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-primary font-bold italic text-lg">{tagline}</p>
        </div>
      </div>
    </motion.div>
  );
}

function DropdownMenu({ items }: { items: { label: string; href: string }[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.18 }}
      className="absolute top-full left-0 mt-2 w-52 bg-white shadow-lg rounded-lg py-1 z-50"
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="block px-4 py-2.5 text-sm text-secondary hover:bg-section hover:text-gold transition-colors duration-200"
        >
          {item.label}
        </Link>
      ))}
    </motion.div>
  );
}

function NavItem({ item }: { item: typeof NAV[number] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  if (!item.children) {
    return (
      <Link href={item.href!} className="text-secondary hover:text-gold transition-colors duration-300 font-medium">
        {item.label}
      </Link>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 text-secondary hover:text-gold transition-colors duration-300 font-medium"
      >
        {item.label}
        <svg className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
      </button>
      <AnimatePresence>
        {open && ('image' in item && item.image
          ? <MegaDropdown items={item.children} image={item.image as string} tagline={item.tagline as string} />
          : <DropdownMenu items={item.children} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/95'}`}
    >
      <div className="container mx-auto px-6 py-1">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-serif font-bold text-primary">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/companylogo.png" alt="Magik Lighting" className="h-20 w-auto object-contain" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV.map((item) => <NavItem key={item.label} item={item} />)}
            <div className="flex items-center gap-1">
              <Link
                href="/distributor"
                className="bg-gold hover:bg-goldHover text-white px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 text-sm font-medium"
              >
                Become Distributor
              </Link>
              <img src="/centurtply .png" alt="CenturyPly" className="h-14 w-auto object-contain" />
              <button className="p-2 text-secondary hover:text-gold transition-colors duration-200" aria-label="Search">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
              </button>
              <Link href="/account" className="p-2 text-secondary hover:text-gold transition-colors duration-200" aria-label="Account">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
              </Link>
              <Link href="/cart" className="p-2 text-secondary hover:text-gold transition-colors duration-200" aria-label="Cart">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              </Link>
            </div>
          </nav>

          <div className="flex items-center gap-3">

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 text-primary"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                {mobileOpen ? <path d="M6 18 18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
          >
            <div className="px-6 py-4 space-y-1">
              {NAV.map((item) =>
                !item.children ? (
                  <Link
                    key={item.label}
                    href={item.href!}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2.5 text-secondary hover:text-gold font-medium"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div key={item.label}>
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                      className="flex items-center justify-between w-full py-2.5 text-secondary hover:text-gold font-medium"
                    >
                      {item.label}
                      <svg className={`w-4 h-4 transition-transform ${mobileExpanded === item.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                    </button>
                    {mobileExpanded === item.label && (
                      <div className="pl-4 pb-1 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block py-2 text-sm text-secondary hover:text-gold"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              )}
              <Link
                href="/distributor"
                onClick={() => setMobileOpen(false)}
                className="block mt-3 text-center bg-gold text-white px-6 py-2.5 rounded-lg font-medium"
              >
                Become Distributor
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
