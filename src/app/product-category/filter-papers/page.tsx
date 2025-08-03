export default function FilterPapers() {
  const filterPaperData = [
    {
      title: "Qualitative Filter Papers - Grade No. 1",
      image: "/filter-papers/filter-paper1.png",
      imageSize: "w-full md:w-[400px] max-w-[500px]",
      table: [
        ["CODE", "GRADE REF", "TYPE", "SIZE IN MM", "HSN CODE"],
        ["101-55", "NO 1", "QUALITATIVE (100 CIRCLES / PACK)", "55", "48232000"],
        ["101-70", "NO 1", "QUALITATIVE (100 CIRCLES / PACK)", "70", "48232000"],
        ["101-90", "NO 1", "QUALITATIVE (100 CIRCLES / PACK)", "90", "48232000"],
        ["101-110", "NO 1", "QUALITATIVE (100 CIRCLES / PACK)", "110", "48232000"],
        ["101-125", "NO 1", "QUALITATIVE (100 CIRCLES / PACK)", "125", "48232000"],
        ["101-150", "NO 1", "QUALITATIVE (100 CIRCLES / PACK)", "150", "48232000"],
        ["101-185", "NO 1", "QUALITATIVE (100 CIRCLES / PACK)", "185", "48232000"],
        ["101-240", "NO 1", "QUALITATIVE (100 CIRCLES / PACK)", "240", "48232000"],
        ["101-320", "NO 1", "QUALITATIVE (100 CIRCLES / PACK)", "320", "48232000"],
        ["101-SH1", "NO 1 - SHEETS", "QUALITATIVE (100 SHEETS / PACK)", "460 x 570", "48054000"],
        ["101-SH5", "NO 1 - SHEETS", "QUALITATIVE (500 SHEETS / PACK)", "460 x 570", "48054000"]
      ]
    },
    {
      title: "Ashless Quantitative Filter Papers - Grade No. 40",
      image: "/filter-papers/filter-paper40.png",
      imageSize: "w-full md:w-[400px] max-w-[500px]",
      table: [
        ["CODE", "GRADE REF", "TYPE", "SIZE IN MM", "HSN CODE"],
        ["440-12.7", "NO 40", "ASHLESS QUANTITATIVE (100 CIRCLES / PACK)", "12.7", "48232000"],
        ["440-70", "NO 40", "ASHLESS QUANTITATIVE (100 CIRCLES / PACK)", "70", "48232000"],
        ["440-90", "NO 40", "ASHLESS QUANTITATIVE (100 CIRCLES / PACK)", "90", "48232000"],
        ["440-110", "NO 40", "ASHLESS QUANTITATIVE (100 CIRCLES / PACK)", "110", "48232000"],
        ["440-125", "NO 40", "ASHLESS QUANTITATIVE (100 CIRCLES / PACK)", "125", "48232000"],
        ["440-150", "NO 40", "ASHLESS QUANTITATIVE (100 CIRCLES / PACK)", "150", "48232000"],
        ["440-185", "NO 40", "ASHLESS QUANTITATIVE (100 CIRCLES / PACK)", "185", "48232000"],
        ["440-240", "NO 40", "ASHLESS QUANTITATIVE (100 CIRCLES / PACK)", "240", "48232000"],
        ["440-SH1", "NO 40", "ASHLESS QUANTITATIVE (100 CIRCLES / PACK)", "460 x 570", "48054000"]
      ]
    },
    {
      title: "Molychem Cellulose Extraction Thimbles",
      image: "/filter-papers/filter-paper-cellulose.png",
      imageSize: "w-full md:w-[400px] max-w-[500px]",
      table: [
        ["CODE", "GRADE REF", "TYPE", "SIZE IN MM", "HSN CODE"],
        ["METH2280", "603", "MOLYCHEM CELLULOSE EXTRACTION THIMBLES (25 pcs)", "22 x 80", "48237090"],
        ["METH2580", "603", "MOLYCHEM CELLULOSE EXTRACTION THIMBLES (25 pcs)", "25 x 80", "48237090"],
        ["METH2880", "603", "MOLYCHEM CELLULOSE EXTRACTION THIMBLES (25 pcs)", "28 x 80", "48237090"],
        ["METH3080", "603", "MOLYCHEM CELLULOSE EXTRACTION THIMBLES (25 pcs)", "30 x 80", "48237090"],
        ["METH3380", "603", "MOLYCHEM CELLULOSE EXTRACTION THIMBLES (25 pcs)", "33 x 80", "48237090"],
        ["METH25100", "603", "MOLYCHEM CELLULOSE EXTRACTION THIMBLES (25 pcs)", "25 x 100", "48237090"],
        ["METH28100", "603", "MOLYCHEM CELLULOSE EXTRACTION THIMBLES (25 pcs)", "28 x 100", "48237090"],
        ["METH30100", "603", "MOLYCHEM CELLULOSE EXTRACTION THIMBLES (25 pcs)", "30 x 100", "48237090"]
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {filterPaperData.map(({ title, image, table, imageSize = "w-full md:w-[320px] max-w-[400px]" }) => (
        <div key={title} className="mb-16">
          <h2 className="text-3xl font-bold text-[#1f1e21] mb-6 text-center">{title}</h2>
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <img
              src={image}
              alt={title}
              className={`${imageSize} border border-neutral-200 shadow rounded-md object-contain`}
            />

            <div className="overflow-auto w-full">
              <table className="min-w-full border border-neutral-300">
                <thead>
                  <tr className="bg-[#d71920] text-white text-left">
                    {table[0].map((head, i) => (
                      <th key={i} className="px-4 py-2 text-sm font-semibold border-r border-white last:border-r-0">
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {table.slice(1).map((row, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-white" : "bg-neutral-100 text-neutral-800"}
                    >
                      {row.map((cell, j) => (
                        <td key={j} className="px-4 py-2 text-sm border-r border-neutral-200 last:border-r-0">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
