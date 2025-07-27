export default function MissionVision() {
  return (
    <div>
      {/* --- Hero Background Section --- */}
      <div
        className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/mission-vision-hero.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <h1 className="relative z-10 text-white text-4xl md:text-6xl font-extrabold">
          Our Mission & Vision
        </h1>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-[#905636] mb-4">Empowering Success through Our Mission</h2>
          <ul className="ml-5 space-y-2 list-disc text-neutral-700">
            <li>To provide integral products and exceptional service to the chemical industry while sustaining a stable and consistent reputation through innovative intelligence.</li>
            <li>Setting benchmarks for client service with comprehensive chemical solutions tailored for their success.</li>
            <li>Distributing and trading the highest quality chemicals and laboratory products, with a commitment to market needs, employee welfare, and environmental stewardship.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-[#905636] mb-4">Visioning Our Business Future</h2>
          <ul className="ml-5 space-y-2 list-disc text-neutral-700">
            <li>To be a leader in the laboratory and industrial chemical sector, both locally and globally, by continually advancing our products and service.</li>
            <li>Achieve customer satisfaction and offer experiences that exceed expectations.</li>
            <li>Sustain strong, ethical growth for our organization and partners.</li>
          </ul>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center bg-white rounded-2xl border border-neutral-200 shadow p-6">
            <img src="https://ext.same-assets.com/2448843916/1770462248.png" alt="Experience" className="h-10 mb-3" />
            <span className="font-bold text-base text-[#905636] mb-2">25+ Years Experience</span>
          </div>
          <div className="flex flex-col items-center bg-white rounded-2xl border border-neutral-200 shadow p-6">
            <img src="https://ext.same-assets.com/2448843916/3402285612.png" alt="Authentic Products" className="h-10 mb-3" />
            <span className="font-bold text-base text-[#905636] mb-2">100% Authentic Products</span>
          </div>
          <div className="flex flex-col items-center bg-white rounded-2xl border border-neutral-200 shadow p-6">
            <img src="https://ext.same-assets.com/2448843916/2501930290.png" alt="Channel Partners" className="h-10 mb-3" />
            <span className="font-bold text-base text-[#905636] mb-2">20+ Channel Partners</span>
          </div>
          <div className="flex flex-col items-center bg-white rounded-2xl border border-neutral-200 shadow p-6">
            <img src="https://ext.same-assets.com/2448843916/1123032058.png" alt="ISO Certified" className="h-10 mb-3" />
            <span className="font-bold text-base text-[#905636] mb-2">ISO 9001:2015 Certified</span>
          </div>
        </section>
      </div>
    </div>
  );
}
