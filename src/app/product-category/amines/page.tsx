export default function Amines() {
  const amines = [
    {
      title: "Triethanolamine",
      image: "/amines/triethanolamine.png",
      description: `Triethanolamine (TEA or TEOA) is a viscous organic compound that functions as both a tertiary amine and a triol, containing three alcohol groups. It's a strong base and commonly appears colorless, though it can look yellow due to impurities. Around 150,000 tonnes were produced globally in 1999.`,
    },
    {
      title: "Triethylamine",
      image: "/amines/triethylamine.png",
      description: `Triethylamine (TEA, Et3N) is an aliphatic amine widely used in MALDI mass spectrometric imaging, where it improves resolution by creating transparent liquid matrices. It’s also analyzed using gas chromatography for quality control in pharmaceuticals. The viscosity of its vapor has been studied extensively across temperature ranges.`,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-5xl font-extrabold text-[#1f1e21] mb-8 text-center">
        Amines
      </h1>

      <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
        {amines.map(({ title, image, description }) => (
          <div
            key={title}
            className="bg-white border border-neutral-200 rounded-xl shadow p-6 flex flex-col md:flex-row gap-6 items-start"
          >
            <img
              src={image}
              alt={title}
              className="w-full md:w-40 max-w-[160px] rounded-lg border border-neutral-100 shadow-sm object-contain"
            />
            <div>
              <h2 className="text-xl font-semibold text-[#905636] mb-2">{title}</h2>
              <p className="text-base text-neutral-700 leading-relaxed">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
