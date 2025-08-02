export default function FiltrationProducts() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-5xl font-extrabold text-[#1f1e21] mb-8 text-center">
        Filtration Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Image */}
        <div className="w-full flex justify-center">
          <img
            src="/filteraion-products/filter-assembly.png"
            alt="All Glass Filter Holder Assembly"
            className="w-full max-w-md rounded-xl shadow-lg border border-neutral-200"
          />
        </div>

        {/* Product Description */}
        <div>
          <h2 className="text-2xl font-bold mb-3 text-[#905636]">
            All Glass Filter Holder Assembly
          </h2>
          <p className="text-base text-neutral-700 leading-relaxed mb-4">
            <strong>PRODUCT DESCRIPTION:</strong> All Glass Filter Holder Assembly with I/C Joints. Manufactured from borosilicate glass particularly suitable for analysis of microscopic residues, particle and multipurpose filtration applications. Thick wall heavy base and reinforced rim prevent breakage during washing and transportation. Suitable to be used with 47/50 mm diameter membrane filters.
          </p>
          <p className="text-base text-neutral-700 leading-relaxed">
            Supplied complete with filter funnel of 300 ml volume capacity, support base with sintered disc, vacuum connection side arm, connecting clamp and vacuum flask of 1000 ml volume capacity.
          </p>
        </div>
      </div>

      {/* Table */}
      <div className="mt-12 overflow-x-auto bg-white rounded-lg border border-neutral-200 shadow">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-[#f8f7f6] text-xs uppercase text-neutral-500 font-bold">
            <tr>
              <th className="px-6 py-4">Cat No.</th>
              <th className="px-6 py-4">Filter (mm)</th>
              <th className="px-6 py-4">Flask (ml)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100 text-[#1f1e21]">
            {[
              ["1891A", "13", "250 B29"],
              ["1891B", "25", "500 B29"],
              ["1891C", "47", "1000 B40"],
              ["1891D", "47", "2000 B55"],
              ["1891E", "90", "5000 B40"],
              ["1891F", "Spare Flask", "1000 B40"],
              ["1891G", "Spare Flask", "2000 B55"],
              ["1891H", "Spare Flask", "300ml 47mm"],
              ["1891I", "Spare Cup", "500ml 47mm"],
              ["1891J", "Spare Cup", "1000ml 90mm"],
              ["1891K", "Spare Cup", "47mm B40"],
              ["1891L", "Spare Sintered Part", "90mm B55"],
              ["1891M", "Spare Sintered Part", "47mm"],
              ["1891N", "Spare Clamp", "90mm"],
              ["1891O", "Spare Clamp", "without Flask 47mm"],
            ].map(([cat, filter, flask]) => (
              <tr key={cat}>
                <td className="px-6 py-3">{cat}</td>
                <td className="px-6 py-3">{filter}</td>
                <td className="px-6 py-3">{flask}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
