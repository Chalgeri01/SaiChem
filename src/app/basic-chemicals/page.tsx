import Link from "next/link";

const categories = [
  {
    name: "Acids",
    image: "https://ext.same-assets.com/2448843916/4192924095.jpeg",
    link: "/product-category/acids",
  },
  {
    name: "Alcohols",
    image: "https://ext.same-assets.com/2448843916/2234586241.jpeg",
    link: "/product-category/alcohols",
  },
  {
    name: "Aliphatic Solvents",
    image: "https://ext.same-assets.com/2448843916/1460563118.jpeg",
    link: "/product-category/aliphatic-solvents",
  },
  {
    name: "Amines",
    image: "https://ext.same-assets.com/2448843916/3925043721.jpeg",
    link: "/product-category/amines",
  },
  {
    name: "Bottles",
    image: "https://ext.same-assets.com/2448843916/621113612.jpeg",
    link: "/product-category/bottles",
  },
  {
    name: "Beakers",
    image: "https://ext.same-assets.com/2448843916/2328290564.webp",
    link: "/product-category/beakers",
  },
  {
    name: "Filter Papers",
    image: "https://ext.same-assets.com/2448843916/1064979296.jpeg",
    link: "/product-category/filter-papers",
  },
  {
    name: "Filtration Products",
    image: "https://ext.same-assets.com/2448843916/3519618401.png",
    link: "/product-category/filtration-products",
  },
];

export default function BasicChemicals() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-5xl font-extrabold text-[#1f1e21] mb-6 text-center">Basic Chemicals</h1>
      <p className="mb-10 text-lg text-neutral-700 text-center max-w-2xl mx-auto">
        Explore our range of basic chemicals—acids, alcohols, solvents, and more—delivered with reliability to every industry.
      </p>
      <div className="grid gap-10 grid-cols-1 xs:grid-cols-2 md:grid-cols-4">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            href={cat.link}
            className="flex flex-col items-center p-5 bg-white rounded-2xl border border-neutral-200 shadow hover:shadow-xl transition"
          >
            <img src={cat.image} alt={cat.name} className="h-24 mb-4 object-contain rounded-lg bg-neutral-50" />
            <span className="text-lg font-bold text-[#905636] text-center">{cat.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
// ... existing code ... <end of file> ...
