const acids = [
  {
    name: "Acetic Acid",
    image: "https://ext.same-assets.com/2448843916/3093929325.svg",
  },
  {
    name: "Acrylic Acid",
    image: "https://ext.same-assets.com/2448843916/885045879.svg",
  },
  {
    name: "Benzoic Acid",
    image: "https://ext.same-assets.com/2448843916/1459212959.svg",
  },
  {
    name: "Citric Acid",
    image: "https://ext.same-assets.com/2448843916/252455912.svg",
  },
  {
    name: "Formic Acid",
    image: "https://ext.same-assets.com/2448843916/2584429582.svg",
  },
  {
    name: "Hydro Chloric Acid",
    image: "https://ext.same-assets.com/2448843916/1462612905.svg",
  },
  {
    name: "Lactic Acid",
    image: "https://ext.same-assets.com/2448843916/2431217940.svg",
  },
  {
    name: "Perchloric Acid",
    image: "https://ext.same-assets.com/2448843916/2535288088.svg",
  },
];

export default function AcidsCategory() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-5xl font-extrabold text-[#1f1e21] mb-6 text-center">Acids</h1>
      <p className="mb-10 text-lg text-neutral-700 text-center max-w-2xl mx-auto">
        Discover our top-quality Acids, perfect for laboratory and industrial uses. Safe, certified, and dependable for your needs.
      </p>
      <div className="grid gap-10 grid-cols-1 xs:grid-cols-2 md:grid-cols-4">
        {acids.map((a) => (
          <div key={a.name} className="flex flex-col items-center p-5 bg-white rounded-2xl border border-neutral-200 shadow hover:shadow-xl transition">
            <img src={a.image} alt={a.name} className="h-20 mb-4 object-contain rounded-lg bg-neutral-50" />
            <span className="text-base font-bold text-[#905636] text-center mb-2">{a.name}</span>
            <a href="#" className="mt-2 text-xs font-semibold text-[#cb3d1f] hover:underline">Read more</a>
          </div>
        ))}
      </div>
    </div>
  );
}
// ... existing code ... <end of file> ...
