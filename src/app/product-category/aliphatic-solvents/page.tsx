export default function AliphaticSolvents() {
  const solvents = [
    {
      title: "Formaldehyde",
      image: "/aliphatic-solvents/formaldehyde.png",
      description: `Formaldehyde (methanal) is an organic compound with the formula CH2O. It's a pungent, colourless gas that polymerizes into paraformaldehyde and is stored as formalin. As the simplest aldehyde, it is a key precursor in producing resins for particle boards and coatings. Formaldehyde is a classified carcinogen and can cause respiratory and skin irritation.`,
    },
    {
      title: "Heptane",
      image: "/aliphatic-solvents/heptane.png",
      description: `Heptane or n-heptane is a straight-chain alkane (C7H16) used in anti-knock engine testing. It represents the zero point in the octane rating scale. This chemical is key in determining fuel performance and is globally used for evaluating gasoline combustion properties.`,
    },
    {
      title: "Phenol",
      image: "/aliphatic-solvents/phenol.png",
      description: `Phenol (C6H5OH), also called carbolic acid, is a white crystalline solid with a hydroxy group bonded to a phenyl group. Volatile and mildly acidic, it's primarily used in synthesizing plastics, detergents, herbicides, and pharmaceuticals. Originally extracted from coal tar, modern phenol is petroleum-derived.`,
    },
    {
      title: "Glycerine",
      image: "/aliphatic-solvents/glycerine.png",
      description: `Glycerol (glycerine) is a simple triol that's colorless, odorless, viscous, and sweet-tasting. It's widely used for food, pharmaceuticals, skincare, and medical treatments due to its antimicrobial and hydrating properties. Glycerol is miscible with water and serves as a key compound in lipid chemistry.`,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-5xl font-extrabold text-[#1f1e21] mb-8 text-center">
        Aliphatic Solvents
      </h1>

      <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
        {solvents.map(({ title, image, description }) => (
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
