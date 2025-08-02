const chemicals = [
  "ACES Buffer 5G",
  "Acetic Acid Glacial For HPLC 1L",
  "Acetone SuskaSol ™ (Dried) 500ML",
  "Acetamide SQ 500G",
  "Acetic Acid Glacial SQ 500ML",
  "Acetone HPLC 1L",
  "Acetanilide SQ 500G",
  "Acetocarmine For Microscopy",
  "Acetone SQ 2.5L",
  "Barium Acetate SQ 500G",
  "Barium Carbonate SQ 500G",
  "Barium Chloride ER 500G",
  "Barium Diphenyl Sufonate SQ 25G",
  "Barium Chloride SQ 5KG",
  "Barium Hydroxide SQ 500G",
  "Benedict's Reagent Qualitative 500ML",
  "Benzoyl Chloride SQ 500ML",
  "Cadmium Carbonate 100G",
  "Cadmium Chloride Dried SQ 100G",
  "Cadmium Nitrate SQ 250G",
  "Caffeine ER 100 G",
  "Calcium Chloride Dihydrate SQ 5KG",
  "Calcium Fluoride SQ 500G",
  "Calcium Hydroxide SQ 500G",
  "Calcium Chloride Fused SQ 5KG",
  "Iso Amyl Alcohol SQ 2.5L",
  "Iso Amyl Acetate SQ 500ML",
  "Iso Amyl Acetate SQ 2.5L",
  "Iso Amyl Alcohol SQ 500ML",
]

export default function LabGradeChemicals() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-5xl font-extrabold text-[#1f1e21] mb-8 text-center">
        Lab Grade Chemicals
      </h1>
      <p className="mb-8 text-lg text-neutral-700 text-center max-w-2xl mx-auto">
        A curated list of lab-grade chemicals available in various volumes and purities for analytical and industrial needs.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
        {chemicals.map((chem, idx) => (
          <div
            key={idx}
            className="bg-white border border-neutral-200 rounded-lg px-5 py-3 text-base text-[#1f1e21] shadow-sm hover:shadow transition"
          >
            {chem}
          </div>
        ))}
      </div>
    </div>
  )
}
