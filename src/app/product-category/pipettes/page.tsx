export default function Pipettes() {
  const pipettes = [
    {
      title: "Volumetric Pipette Class B ASTM",
      image: "/pipettes/volumetric-pipettes.png",
      description: `Volumetric Pipettes, Transfer, Class B, Accuracy as per ASTME-969 Calibration@20℃

Manufactured from 3.3 Low Expansion Borosilicate glass
They have precision forced jets and beval ground ends to resist chipping
All pipettes are individually measured and then marked
Transfer (Volumetric) pipettes are manufactured from specially selected, heavy wall machine drawn borosilicate accurate bore glass tubing`,
      tableHead: ["Cat No.", "Cap ml.", "Tol±ml", "Color Code", "Pack per Box"],
      tableData: [
        ["317A", "1", "0.012", "Blue", "1 Pc"],
        ["317B", "2", "0.012", "Orange", "1 Pc"],
        ["317C", "3", "0.02", "Black", "1 Pc"],
        ["317D", "4", "0.02", "2 Red", "1 Pc"],
        ["317E", "5", "0.02", "White", "1 Pc"],
        ["317F", "6", "0.03", "2 Orange", "1 Pc"],
        ["317G", "7", "0.03", "2 Green", "1 Pc"],
        ["317H", "8", "0.04", "Blue", "1 Pc"],
        ["317I", "9", "0.04", "Black", "1 Pc"],
        ["317J", "10", "0.04", "Red", "1 Pc"],
        ["317K", "15", "0.06", "Green", "1 Pc"],
        ["317L", "20", "0.06", "Yellow", "1 Pc"],
        ["317M", "25", "0.06", "Blue", "1 Pc"],
        ["317N", "50", "0.10", "Red", "1 Pc"],
        ["317O", "100", "0.16", "Yellow", "1 Pc"]
      ]
    },
    {
      title: "Pipette (Mohr Type) Class A ASTM",
      image: "/pipettes/pipettes-measuring.png",
      description: `Pipettes, Measuring (Mohr Type), Class A Accuracy as per ASTM 1293, Calibration@20℃

Manufactured from specially selected heavy wall machine drawn Borosilicate 3.3 accurate bore glass tubing
They have precision forced jets and beval ground ends to resist chipping
All pipettes are individually measured and then marked
The graduation marks are in durable amber stain
Mohr type pipette delivers from zero mark to the last graduation mark
Each pipette has a unique serial number & individual work certificate`,
      tableHead: ["Cat No.", "Cap ml.", "Sub.Div.ml", "Tol±ml", "Color Code", "Pack per Box"],
      tableData: [
        ["348A", "1", "0.1", "0.01", "Red", "1 Pc"],
        ["348B", "1", "0.1", "0.01", "Yellow", "1 Pc"],
        ["348C", "2", "0.1", "0.01", "Green", "1 Pc"],
        ["348D", "5", "0.1", "0.02", "Blue", "1 Pc"],
        ["348E", "10", "0.1", "0.03", "Orange", "1 Pc"],
        ["348F", "25", "0.1", "0.05", "White", "1 Pc"]
      ]
    },
    {
      title: "Pipette Stand (94 Pipettes-Rotary)",
      image: "/pipettes/pipettes-satnd.png",
      description: `Pipette Stand (94 Pipettes-Rotary), Polypropylene

Holds up to 94 pipettes and rotates on a central vertical axis for easy selection
Liquids draining off the pipettes are retained at the base by an outer ring
Easy disassembling & reassembling`,
      tableHead: ["Cat No.", "Capacity", "Pack per Box"],
      tableData: [["373A", "For 94 pipettes", "1 Pc"]]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-5xl font-extrabold text-[#1f1e21] mb-10 text-center">
        Pipettes
      </h1>

      <div className="grid gap-16 grid-cols-1">
        {pipettes.map(({ title, image, description, tableHead, tableData }) => (
          <div
            key={title}
            className="bg-white border border-neutral-200 rounded-xl shadow p-6 flex flex-col md:flex-row gap-6"
          >
            <img
              src={image}
              alt={title}
              className="w-full md:w-[240px] max-w-[280px] rounded-lg border border-neutral-100 shadow-sm object-contain"
            />
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-[#905636] mb-3">{title}</h2>
              <p className="text-base text-neutral-700 leading-relaxed whitespace-pre-line mb-4">
                {description}
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full border text-sm">
                  <thead className="bg-red-600 text-white">
                    <tr>
                      {tableHead.map((th, i) => (
                        <th key={i} className="border px-3 py-2 text-left">
                          {th}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((row, i) => (
                      <tr key={i} className="odd:bg-white even:bg-neutral-50">
                        {row.map((cell, j) => (
                          <td key={j} className="border px-3 py-2">
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
    </div>
  );
}
