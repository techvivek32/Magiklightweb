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
      <h2 className="text-center text-4xl font-serif text-primary mb-8">Magik Clients</h2>
      <div className="relative flex overflow-hidden">
        <div className="flex animate-marquee">
          {logos.map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={`a-${i}`} src={src} alt="client logo" className="h-14 w-auto mx-8 object-contain flex-shrink-0" />
          ))}
          {logos.map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={`b-${i}`} src={src} alt="client logo" className="h-14 w-auto mx-8 object-contain flex-shrink-0" />
          ))}
        </div>
      </div>
    </section>
  );
}
