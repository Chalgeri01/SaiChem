export default function AboutUs() {
  return (
    <div>
      {/* --- Hero Background Section --- */}
      <div
        className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/about-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <h1 className="relative z-10 text-white text-4xl md:text-6xl font-extrabold">
          About Us
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* --- Hero Section with Image and Intro --- */}
        <div className="bg-[#f9f6f6] rounded-xl shadow p-6 md:p-10 mb-12">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left text */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#cb3d1f] mb-4">
                Welcome To Shree Sai Chemicals
              </h2>
              <p className="text-gray-800 mb-4">
                At Shree Sai Chemicals, we specialize in the distribution of high-quality industrial chemicals, catering to a wide range of industries. With years of experience, we have built a solid reputation for reliability, trust, and unwavering commitment to our clients.
              </p>
              <p className="text-gray-800">
                Shree Sai Chemicals is more than just a supplier; we are your partners in success. Our vast network of manufacturers and suppliers, combined with our expertise in the chemical market, allows us to deliver premium products tailored to your specific needs.
              </p>
            </div>

            {/* Right image */}
            <div>
              <img
                src="/about-us.png"
                alt="Shree Sai Chemicals Lab"
                className="w-full h-auto rounded-xl object-contain"
              />
            </div>
          </div>
        </div>

        {/* --- Section Title & Introduction --- */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#1f1e21] mb-6 text-center">
          About Shree Sai Chemicals
        </h2>
        <p className="mb-8 text-lg text-neutral-700 text-center max-w-2xl mx-auto">
          Founded in 1999, Shree Sai Chemicals has grown to become one of the region's most trusted distributors of chemicals, glassware, and equipment. We provide an extensive range of industrial & laboratory chemicals, customized solutions, and a steadfast commitment to client satisfaction and service excellence.
        </p>

        {/* --- Our Story Section --- */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-6 order-2 md:order-1">
            <span className="uppercase text-sm font-bold tracking-widest text-[#39d3c6]">
              Our Story
            </span>
            <div className="text-base text-neutral-800">
              <p className="mb-4">
                With over two decades of excellence, we’ve developed partnerships with top brands and an expansive supply network—delivering reliable chemical solutions to industries such as pharmaceuticals, manufacturing, education, research, environmental testing, food & beverages, and more.
              </p>
              <ul className="list-disc ml-5 text-neutral-700 space-y-2">
                <li>
                  Direct distributor and importer of high-quality chemical products for the laboratory and industrial sector
                </li>
                <li>
                  Diversified supply: solvents, acids, specialty, glassware, labware, and precision instruments
                </li>
                <li>
                  Focus on service, warehousing, prompt delivery, and technical support
                </li>
                <li>
                  Trusted by leading corporations, government, and academic institutions
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <img
              src="/about-us.png"
              alt="Team at SSC"
              className="h-80 rounded-2xl shadow object-cover w-full max-w-xs"
            />
          </div>
        </div>

        {/* --- Features Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="flex flex-col items-center bg-white rounded-2xl border border-neutral-200 shadow p-6">
            <img
              src="https://ext.same-assets.com/2448843916/4251606200.png"
              alt="Innovation icon"
              className="h-12 mb-3"
            />
            <span className="font-bold text-lg text-[#905636] mb-2">Innovation</span>
            <span className="text-xs text-neutral-600 text-center">
              Advanced solutions & cutting-edge R&D ingredients.
            </span>
          </div>
          <div className="flex flex-col items-center bg-white rounded-2xl border border-neutral-200 shadow p-6">
            <img
              src="https://ext.same-assets.com/2448843916/1409615417.png"
              alt="Sustainability icon"
              className="h-12 mb-3"
            />
            <span className="font-bold text-lg text-[#905636] mb-2">Sustainability</span>
            <span className="text-xs text-neutral-600 text-center">
              Eco-friendly practices & responsible sourcing.
            </span>
          </div>
          <div className="flex flex-col items-center bg-white rounded-2xl border border-neutral-200 shadow p-6">
            <img
              src="https://ext.same-assets.com/2448843916/3480980740.png"
              alt="Reliability icon"
              className="h-12 mb-3"
            />
            <span className="font-bold text-lg text-[#905636] mb-2">Quality & Reliability</span>
            <span className="text-xs text-neutral-600 text-center">
              Delivering excellence, safety, and trust for our clients.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
