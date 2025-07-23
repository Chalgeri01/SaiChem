const chemicals = [
  { name: "ACES Buffer", cas: "7365824", code: "Q10011" },
  { name: "Acetamide SQ", cas: "60355", code: "Q21045" },
  { name: "Acetanilide SQ", cas: "1038445", code: "Q21035" },
  { name: "Acetic Acid Glacial For HPLC", cas: "64197", code: "Q43007" },
  { name: "Acetonitrile ER", cas: "750508", code: "Q11037" },
  { name: "Alizarin Red PH Indicator", cas: "130223", code: "Q39162" },
  { name: "Ammonia Solution 25% SQ", cas: "1336216", code: "Q16228" },
  { name: "Ammonium Acetate HPLC", cas: "631618", code: "Q11155" },
];

export default function LabGradeChemicals() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-5xl font-extrabold text-[#1f1e21] mb-8 text-center">Lab Grade Chemicals</h1>
      <p className="mb-8 text-lg text-neutral-700 text-center max-w-2xl mx-auto">
        A curated listing of lab-grade chemicals, with CAS numbers and product codes for precise selection and reliable ordering.
      </p>
      <div className="overflow-x-auto rounded-lg shadow bg-white border border-neutral-200">
        <table className="min-w-full divide-y divide-neutral-200">
          <thead className="bg-[#f8f7f6]">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold text-neutral-500 uppercase">Name</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-neutral-500 uppercase">CAS No.</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-neutral-500 uppercase">Product Code</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {chemicals.map((chem) => (
              <tr key={chem.code}>
                <td className="px-6 py-3 text-base text-[#1f1e21] whitespace-nowrap">{chem.name}</td>
                <td className="px-6 py-3 text-base text-[#905636] whitespace-nowrap">{chem.cas}</td>
                <td className="px-6 py-3 text-base text-neutral-700 whitespace-nowrap">{chem.code}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
// ... existing code ... <end of file> ...
