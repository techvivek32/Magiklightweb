export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-black" style={{ height: 'calc(100vh - 120px)' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/light-ka-captain1.jpg"
        alt="Hero Banner"
        className="w-full h-full object-cover object-right"
      />
    </section>
  );
}
