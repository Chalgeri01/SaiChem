export default function Instruments() {
  const instruments = [
    {
      title: "Rectangular Vacuum Oven",
      image: "/instruments/rectangular-vacuum-oven.png",
      description: `Rectangular Vacuum Ovens are made from heavy gauge material and feature a full toughened glass window to view samples. Ideal for microscopic residue analysis and multipurpose filtration.
      
• Inside chamber: Stainless Steel 304
• Outer body: Powder-coated mild steel
• Insulated with high-grade glass wool
• Temp range: 50°C to 200°C ±2°C accuracy
• Digital temp controller and analogue vacuum gauge
• Fitted with vacuum valves and gauge
• Multiple size variants from 12L to 190L capacity`,
      sizeChart: [
        ["8\"x8\"x12\"", "12 LTR", "2 Shelves", "1600W"],
        ["12\"x12\"x16\"", "37 LTR", "2 Shelves", "1750W"],
        ["14\"x14\"x20\"", "63 LTR", "3 Shelves", "2000W"],
        ["18\"x18\"x24\"", "125 LTR", "3 Shelves", "2250W"],
        ["20\"x20\"x30\"", "190 LTR", "4 Shelves", "2500W"]
      ]
    },
    {
      title: "Muffle Furnace",
      image: "/instruments/muffle-furnace.png",
      description: `Lightweight and fast-heating equipment used for ashing, ignition, and heat treatment of small parts in labs and industrial settings.
      
• Outer body: Powder-coated heavy gauge MS/ GI
• Max Temp: 1000°C / 1200°C (Working: 930°C / 1130°C)
• Digital temperature controller
• Heating via Kanthal wire
• Uniform heat from 4 sides
• Built-in protection with solid-state fuse
• Works on 230V AC`,
      sizeChart: [
        ["(9\"x4\"x4\")", "1500W", "2000W"],
        ["(10\"x5\"x5\")", "2000W", "2500W"],
        ["(12\"x6\"x6\")", "3300W", "3500W"],
        ["(18\"x9\"x9\")", "6000W", "7000W"]
      ]
    },
    {
      title: "Bacteriological Incubator",
      image: "/instruments/bacterological-incubator.png",
      description: `Sturdy double-walled incubators with stainless steel inner chambers and powder-coated mild steel exterior.
      
• Temperature range: Ambient +5°C to 60°C (±2°C accuracy)
• Chrome-plated nichrome wire heating
• Thermostat-based control
• Top air ventilation for fume release
• Control panel on front
• Trays with GI wire mesh`,
      sizeChart: [
        ["1", "12\" X12\" X12\"", "(30 x 30 x 30 Cm.)"],
        ["2", "14\" X14\"X14\"", "(35 x 35 x 35 Cm.)"],
        ["3", "18\" X18\"X18\"", "(45 x 45 x 45 Cm.)"],
        ["4", "18\" X18\"X24\"", "(45 x 45 x 60 Cm.)"],
        ["5", "24\" X24\"X24\"", "(60 x 60 x 60 Cm.)"],
        ["6", "18\" X24\"X36\"", "(45 x 60 x 90 Cm.)"],
        ["7", "24\" X24\"X36\"", "(60 x 60 x 90 Cm.)"]
      ]
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-5xl font-extrabold text-[#1f1e21] mb-10 text-center">
        Instruments
      </h1>

      <div className="grid gap-12 grid-cols-1">
        {instruments.map(({ title, image, description, sizeChart }) => (
          <div
            key={title}
            className="bg-white border border-neutral-200 rounded-xl shadow p-6 flex flex-col md:flex-row gap-6"
          >
            <img
              src={image}
              alt={title}
              className="w-full md:w-56 max-w-[256px] rounded-lg border border-neutral-100 shadow-sm object-contain"
            />
            <div>
              <h2 className="text-2xl font-bold text-[#905636] mb-3">{title}</h2>
              <p className="text-base text-neutral-700 leading-relaxed whitespace-pre-line mb-4">
                {description}
              </p>
              {Array.isArray(sizeChart[0]) ? (
                <div>
                  <h3 className="text-sm font-bold text-neutral-600 mb-2">Available Sizes:</h3>
                  <table className="min-w-full text-sm text-left border border-neutral-200">
                    <tbody>
                      {sizeChart.map((row, index) => (
                        <tr key={index} className="border-t border-neutral-200">
                          {row.map((cell, i) => (
                            <td key={i} className="px-3 py-2 text-neutral-700 whitespace-nowrap">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
