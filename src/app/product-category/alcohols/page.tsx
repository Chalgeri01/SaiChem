'use client';

import { useEffect, useState } from 'react';

type Alcohol = {
  name: string;
  chemicalProperties: string;
  physicalCharacteristics: string;
  commonUses: string;
};

export default function AlcoholsCategory() {
  const [alcohols, setAlcohols] = useState<Alcohol[]>([]);

  useEffect(() => {
    fetch('/Alcohol_Product_Table.csv')
      .then((res) => res.text())
      .then((csv) => {
        const lines = csv.split('\n').filter(line => line.trim() !== '');
        const headers = lines[0].split(',').map(h => h.trim());
        const data = lines.slice(1).map((line) => {
          const cells = line.split(',').map(c => c.trim());
          return {
            name: cells[0],
            chemicalProperties: cells[1],
            physicalCharacteristics: cells[2],
            commonUses: cells[3],
          };
        });
        setAlcohols(data);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-5xl font-extrabold text-[#1f1e21] mb-6 text-center">Alcohols</h1>
      <p className="mb-10 text-lg text-neutral-700 text-center max-w-2xl mx-auto">
        Explore our premium range of Alcohols — ideal for industrial, laboratory, and pharmaceutical applications.
      </p>

      <div className="overflow-x-auto rounded-xl shadow border border-neutral-200 bg-white">
        <table className="min-w-full divide-y divide-neutral-200 text-sm text-left">
          <thead className="bg-[#f3f4f6] text-[#905636] uppercase text-xs">
            <tr>
              <th className="px-6 py-4 font-bold">Alcohol Name</th>
              <th className="px-6 py-4 font-bold">Chemical Properties</th>
              <th className="px-6 py-4 font-bold">Physical Characteristics</th>
              <th className="px-6 py-4 font-bold">Common Uses</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100 text-neutral-800">
            {alcohols.map((alcohol, index) => (
              <tr key={index} className="hover:bg-neutral-50 transition">
                <td className="px-6 py-4 font-medium">{alcohol.name}</td>
                <td className="px-6 py-4">{alcohol.chemicalProperties}</td>
                <td className="px-6 py-4">{alcohol.physicalCharacteristics}</td>
                <td className="px-6 py-4">{alcohol.commonUses}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
