'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [brandLogos, setBrandLogos] = useState<string[]>([ // initial order for SSR
    "/whatman.png",
    "/millipore.png",
    "/pall.png",
    "/riviera.png",
    "/j-sil.png",
    "/hamilton.png",
    "/borosil-logo.png",
    "/thermo-fisher.png",
  ])

  useEffect(() => {
    const shuffled = [...brandLogos].sort(() => 0.5 - Math.random())
    setBrandLogos(shuffled)
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white min-h-[450px] sm:min-h-[550px] flex items-center px-6"
        style={{ backgroundImage: "url('/molecule-bg.png')" }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight uppercase text-left text-white" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}>
            Welcome to Shree Sai Chemicals
          </h1>
          <div className="mt-3 text-lg md:text-xl text-orange-400 font-semibold text-left">
            Your Trusted Partner in Chemical Distribution
          </div>
          <p className="text-base md:text-lg mt-3 text-neutral-200 leading-relaxed text-left">
            With years of expertise in the chemical distribution industry, Shree Sai Chemicals is committed to delivering high-quality industrial chemicals and building lasting relationships with our valued customers and partners.
          </p>
          <div className="text-left">
            <a
              href="/contact-us"
              className="inline-block mt-6 bg-[hsl(20,75%,52%)] hover:bg-[hsl(20,66%,44%)] text-white py-3 px-7 rounded-full font-bold shadow-lg transition-colors text-base uppercase"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center bg-[#fefcf9] rounded-xl shadow-sm">
        <div className="flex flex-col gap-6">
          <span className="uppercase text-sm font-medium tracking-widest text-[hsl(173,58%,39%)]">About Us</span>
          <h2 className="text-2xl md:text-4xl font-bold text-[hsl(0,0%,15%)] mb-2">
            At Shree Sai Chemicals, We Specialize in Premium Industrial Chemicals
          </h2>
          <p className="text-neutral-700 text-base leading-relaxed">
            Shree Sai Chemicals is your reliable source for high-quality industrial chemicals, serving a wide array of industries. Our dedication focuses on trust, client satisfaction, and providing solutions tailored to your needs.
          </p>
          <div className="flex gap-6 mt-4">
            {[
              { img: "4251606200.png", label: "Cutting-edge Solutions" },
              { img: "1409615417.png", label: "Sustainable Practices" },
              { img: "3480980740.png", label: "Health & Safety" },
            ].map(({ img, label }) => (
              <div className="flex flex-col items-center" key={label}>
                <img src={`https://ext.same-assets.com/2448843916/${img}`} alt={label} className="h-12 w-12" />
                <span className="mt-2 text-sm font-semibold">{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <img
            src="/about-us.png"
            alt="About Shree Sai Chemicals"
            className="h-auto max-h-[450px] w-full max-w-xl rounded-xl shadow-xl object-cover"
          />
        </div>
      </section>

      {/* Service Capabilities */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-[hsl(0,0%,15%)] mb-8 text-center">Discovering Our Service Capabilities</h2>
        <div className="grid gap-8 grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {[
            { label: "Laboratory Chemicals", img: "264998860.png", desc: "Authorized Distributor of Popular Brands." },
            { label: "Industrial Chemicals", img: "3260168738.png", desc: "Wide range of solvents, specialty chemicals, imported and more." },
            { label: "Glassware", img: "1344819550.png", desc: "Deals in worldclass glasswares and custom solutions." },
            { label: "Labware Plasticware", img: "1555883550.png", desc: "Wide range of premium laboratory consumables and materials." },
            { label: "Instruments", img: "806549490.png", desc: "Precision instruments to ensure high accuracy and reliability." },
            { label: "Filtration", img: "2916663379.png", desc: "Leading supplier of high-quality filter paper and systems." },
          ].map(({ label, img, desc }) => (
            <div key={label} className="flex flex-col items-center p-6 bg-white rounded-2xl drop-shadow border border-neutral-200">
              <img src={`https://ext.same-assets.com/2448843916/${img}`} alt={label} className="h-12 mb-4" />
              <span className="font-bold text-base mb-2 text-[hsl(27,87%,38%)] text-center">{label}</span>
              <span className="text-xs text-neutral-600 text-center">{desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Top Selling Products */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-2xl md:text-3xl font-bold text-[hsl(0,0%,15%)] mb-8 text-center">Top Selling Products</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {[
            { label: "2 Ethyl Hexanol", img: "268682370.png" },
            { label: "Benzyl Alcohol", img: "3637698964.svg" },
            { label: "Di Acetone Alcohol", img: "1018213667.jpeg" },
            { label: "Ethanol All Grades", img: "2938315583.png" },
          ].map(({ label, img }) => (
            <div key={label} className="flex flex-col items-center p-5 bg-white rounded-2xl shadow hover:shadow-lg border border-neutral-200 transition">
              <img src={`https://ext.same-assets.com/2448843916/${img}`} alt={label} className="h-24 mb-4 object-contain" />
              <span className="text-lg font-semibold text-[hsl(27,87%,38%)] text-center mb-1">{label}</span>
              <span className="text-xs text-neutral-700 mb-2">Alcohol</span>
              <a href="#" className="text-[hsl(20,75%,52%)] font-medium text-xs hover:underline">Read more</a>
            </div>
          ))}
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-2xl md:text-3xl font-bold text-[hsl(0,0%,15%)] mb-8 text-center">Industries We Serve</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {[
            "Pharmaceutical",
            "Biotechnology & Life Sciences",
            "Education & Research",
            "Chemical Manufacturing",
            "Environmental Testing",
            "Food & Beverage",
          ].map((industry, idx) => (
            <div key={industry} className="flex flex-col items-center p-5 bg-white rounded-2xl border border-neutral-200 shadow h-full">
              <img
                src={`https://ext.same-assets.com/2448843916/${1793596385 + idx * 10000000}.png`}
                alt={industry}
                className="h-12 mb-4"
              />
              <span className="text-base font-semibold text-[hsl(27,87%,38%)] text-center">{industry}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Our Brands */}
      <section className="max-w-7xl mx-auto px-6 pb-24 overflow-hidden">
        <h2 className="text-2xl md:text-3xl font-bold text-[hsl(0,0%,15%)] mb-8 text-center">Our Brands</h2>
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee gap-14 w-max">
            {[...brandLogos, ...brandLogos, ...brandLogos].map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Brand ${i + 1}`}
                className="h-28 w-auto grayscale hover:grayscale-0 transition rounded-md shadow bg-white px-8 py-6"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
