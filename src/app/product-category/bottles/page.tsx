export default function BottlesCategory() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-5xl font-extrabold text-[#1f1e21] mb-6 text-center">Bottles</h1>
      <p className="mb-10 text-lg text-neutral-700 text-center max-w-2xl mx-auto">
        Explore our high-quality bottle selection including reagent bottles, B.O.D. bottles, and screw cap containers. Designed for lab reliability and performance.
      </p>

      {/* Reagent Bottle Stopper */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <img
            src="/bottles/j-sil-reagent.png"
            alt="Reagent Bottle Stopper"
            className="w-full max-w-sm mx-auto md:mx-0 scale-90"
          />
          <div>
            <h2 className="text-2xl font-bold text-[#905636] mb-4">Reagent Bottle Stopper</h2>
            <p className="text-neutral-700 mb-4">
              Amber color, narrow mouth with PE stopper. Made from 3.3 borosilicate glass with solid glass flat head stopper.
            </p>
            <table className="w-full text-sm border border-neutral-300 rounded overflow-hidden">
              <thead className="bg-neutral-100 text-[#cb3d1f]">
                <tr>
                  <th className="p-2 border">Cat No.</th>
                  <th className="p-2 border">Cap. (ml)</th>
                  <th className="p-2 border">Joint Size</th>
                  <th className="p-2 border">O.D. x Height (mm)</th>
                  <th className="p-2 border">Pack/Box</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["1161A", "30", "14/19", "36x82", "6 Pc"],
                  ["1161B", "60", "14/23", "45x97", "6 Pc"],
                  ["1161C", "125", "19/26", "55x120", "6 Pc"],
                  ["1161D", "250", "19/26", "70x140", "6 Pc"],
                  ["1161E", "500", "24/29", "86x177", "2 Pc"],
                  ["1161F", "1000", "29/32", "101x220", "1 Pc"],
                  ["1161G", "2000", "34/35", "136x260", "1 Pc"],
                ].map(([cat, cap, joint, size, pack]) => (
                  <tr key={cat} className="text-center border-t">
                    <td className="p-2 border">{cat}</td>
                    <td className="p-2 border">{cap}</td>
                    <td className="p-2 border">{joint}</td>
                    <td className="p-2 border">{size}</td>
                    <td className="p-2 border">{pack}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* B.O.D Bottle */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <img
            src="/bottles/j-sil-BOD.png"
            alt="B.O.D Bottle"
            className="w-full max-w-sm mx-auto md:mx-0 scale-90"
          />
          <div>
            <h2 className="text-2xl font-bold text-[#905636] mb-4">B.O.D Bottle</h2>
            <p className="text-neutral-700 mb-4">
              Comes with interchangeable penny head glass stopper. Individually numbered. Made from 3.3 borosilicate glass.
            </p>
            <table className="w-full text-sm border border-neutral-300 rounded overflow-hidden">
              <thead className="bg-neutral-100 text-[#cb3d1f]">
                <tr>
                  <th className="p-2 border">Cat No.</th>
                  <th className="p-2 border">Cap. (ml)</th>
                  <th className="p-2 border">Joint Size</th>
                  <th className="p-2 border">O.D. x Height (mm)</th>
                  <th className="p-2 border">Pack/Box</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["1163A", "125", "19/20", "55x120", "2 Pc"],
                  ["1163B", "300", "19/20", "70x143", "2 Pc"],
                ].map(([cat, cap, joint, size, pack]) => (
                  <tr key={cat} className="text-center border-t">
                    <td className="p-2 border">{cat}</td>
                    <td className="p-2 border">{cap}</td>
                    <td className="p-2 border">{joint}</td>
                    <td className="p-2 border">{size}</td>
                    <td className="p-2 border">{pack}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Reagent Bottle with P.P. Cap */}
      <section className="mb-10">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <img
            src="/bottles/j-sil-PP.png"
            alt="Reagent Bottle with PP Cap"
            className="w-full max-w-sm mx-auto md:mx-0 scale-90"
          />
          <div>
            <h2 className="text-2xl font-bold text-[#905636] mb-4">Reagent Bottle With P.P. Screw Cap (Blue)</h2>
            <p className="text-neutral-700 mb-4">
              Wide mouth, graduated borosilicate bottle with linerless blue polypropylene screw cap and pour ring. Autoclavable to 140℃.
            </p>
            <table className="w-full text-sm border border-neutral-300 rounded overflow-hidden">
              <thead className="bg-neutral-100 text-[#cb3d1f]">
                <tr>
                  <th className="p-2 border">Cat No.</th>
                  <th className="p-2 border">Cap. (ml)</th>
                  <th className="p-2 border">Neck Spec.</th>
                  <th className="p-2 border">O.D. x Height (mm)</th>
                  <th className="p-2 border">Pack/Box</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["1166A", "10", "GL 25", "36x50", "10 Pc"],
                  ["1166B", "25", "GL 25", "36x50", "10 Pc"],
                  ["1166C", "50", "GL 45", "46x87", "6 Pc"],
                  ["1166D", "100", "GL 45", "56x100", "6 Pc"],
                  ["1166E", "150", "GL 45", "60x120", "6 Pc"],
                  ["1166F", "250", "GL 45", "70x138", "6 Pc"],
                  ["1166G", "500", "GL 45", "86x176", "2 Pc"],
                  ["1166H", "1000", "GL 45", "101x225", "1 Pc"],
                  ["1166I", "2000", "GL 45", "136x260", "1 Pc"],
                  ["1166J", "5000", "GL 45", "183x323", "1 Pc"],
                ].map(([cat, cap, neck, size, pack]) => (
                  <tr key={cat} className="text-center border-t">
                    <td className="p-2 border">{cat}</td>
                    <td className="p-2 border">{cap}</td>
                    <td className="p-2 border">{neck}</td>
                    <td className="p-2 border">{size}</td>
                    <td className="p-2 border">{pack}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
