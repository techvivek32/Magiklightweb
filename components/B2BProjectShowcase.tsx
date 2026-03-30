'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Star Cement Plant',
    industry: 'Industrial',
    location: 'Meghalaya',
    image: '/Star Cement Plant, Meghalaya.jpg',
  },
  {
    title: 'The Agri Horticulture',
    industry: 'Agriculture',
    location: 'Kolkata',
    image: '/The Agri Horticulture, Kolkata.jpg',
  },
  {
    title: 'Kolkata Airport',
    industry: 'Infrastructure',
    location: 'Kolkata',
    image: '/Kolkata Airport.jpg',
  },
  {
    title: 'Durgapur Steel Plant',
    industry: 'Industrial',
    location: 'West Bengal',
    image: '/Durgapur Steel Plant, West Bengal.jpg',
  },
  {
    title: 'Eden Gardens Club House',
    industry: 'Sports & Recreation',
    location: 'Kolkata',
    image: '/Eden Gardens Club House, Kolkata.jpg',
  },
  {
    title: 'Air Traffic Control',
    industry: 'Infrastructure',
    location: 'Bhubaneswar',
    image: '/Air Traffic Controll Bhubaneswar.jpg',
    objectPosition: '[object-position:center_15%]',
  },
];

const badges = ['Bulk Orders', 'Custom Branding', 'Dedicated Account Manager', 'Pan India Delivery', 'After-Sales Support'];

export default function B2BProjectShowcase() {
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-10"
        >
          <p className="text-gold text-sm tracking-widest uppercase mb-3">B2B Solutions</p>
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">
            B2B Project Showcase
          </h2>
          <p className="text-secondary text-base leading-relaxed">
            Trusted by builders, contractors, and enterprises across India. From large-scale commercial fit-outs to industrial installations — we deliver end-to-end lighting solutions.
          </p>
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group relative h-64 rounded-xl overflow-hidden cursor-pointer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.image}
                alt={project.title}
                style={'objectPosition' in project ? { objectPosition: 'center 15%' } : {}}
                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />

              {/* Gold left accent */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Industry badge */}
              <div className="absolute top-4 right-4 bg-gold/90 text-white text-xs tracking-widest uppercase px-3 py-1 rounded-full">
                {project.industry}
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <h3 className="text-xl font-serif mb-1">{project.title}</h3>
                <p className="text-white/70 text-sm">{project.location}</p>
                <div className="mt-3 w-8 h-0.5 bg-gold group-hover:w-16 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* B2B badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-8"
        >
          {badges.map((badge) => (
            <span
              key={badge}
              className="text-xs tracking-widest uppercase border border-gold/40 text-gold px-5 py-2 rounded-full"
            >
              {badge}
            </span>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
        >
          <a
            href="#contact"
            className="inline-block bg-gold hover:bg-goldHover text-white text-sm tracking-widest uppercase px-8 py-3 rounded-lg transition-colors duration-300"
          >
            Enquire for B2B Projects
          </a>
        </motion.div>

      </div>
    </section>
  );
}
