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

export default function MagikClients() {
  return (
    <section className="py-6 bg-white overflow-hidden">
      <h2 className="text-center text-2xl font-serif text-primary mb-8">Magik Clients</h2>
      <div className="relative flex">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...logos, ...logos].map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              src={src}
              alt="client logo"
              className="h-24 w-auto mx-10 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
