/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export const ItineraryTables: React.FC = () => {
  return (
    <div className="space-y-10 my-8">
      {/* 3-day highlights */}
      <div>
        <div className="mb-2">
          <span className="text-xs uppercase tracking-wider text-[#e62117] font-semibold block">
            Itinerary 1
          </span>
          <h4 className="font-display font-extrabold text-xl sm:text-2xl text-[#1A1A1A] tracking-tight">
            3-day highlights, east, one base
          </h4>
          <p className="text-xs text-[#6B6B6B] mt-1 font-medium">
            Recommended base: Cortina d'Ampezzo or Dobbiaco
          </p>
        </div>

        <div className="w-full overflow-x-auto border border-[#1A1A1A]">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#1A1A1A] text-[#F5F0E8] border-b border-[#1A1A1A] font-semibold">
              <tr>
                <th className="p-3 w-20">Day</th>
                <th className="p-3">Route and locations</th>
                <th className="p-3">Operational notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1A1A1A]/20 text-[#1A1A1A]">
              <tr>
                <td className="p-3 font-semibold text-[#e62117]">Day 1</td>
                <td className="p-3 font-medium">Lago di Braies sunrise, loop trail</td>
                <td className="p-3 text-[#6B6B6B]">Early start avoids peak crowds and road closures</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-[#e62117]">Day 2</td>
                <td className="p-3 font-medium">Tre Cime di Lavaredo classic loop</td>
                <td className="p-3 text-[#6B6B6B]">Pre-book toll road parking or shuttle bus line 444</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-[#e62117]">Day 3</td>
                <td className="p-3 font-medium">Lago di Sorapis (early) OR Cinque Torri and Passo Giau</td>
                <td className="p-3 text-[#6B6B6B]">Sorapis for turquoise water, Cinque Torri for WWI history</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 5-day classic */}
      <div>
        <div className="mb-2">
          <span className="text-xs uppercase tracking-wider text-[#e62117] font-semibold block">
            Itinerary 2
          </span>
          <h4 className="font-display font-extrabold text-xl sm:text-2xl text-[#1A1A1A] tracking-tight">
            5-day classic, west to east
          </h4>
          <p className="text-xs text-[#6B6B6B] mt-1 font-medium">
            Recommended bases: Ortisei (2 nights) + Cortina d'Ampezzo (2–3 nights)
          </p>
        </div>

        <div className="w-full overflow-x-auto border border-[#1A1A1A]">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#1A1A1A] text-[#F5F0E8] border-b border-[#1A1A1A] font-semibold">
              <tr>
                <th className="p-3 w-20">Day</th>
                <th className="p-3">Route and locations</th>
                <th className="p-3">Operational notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1A1A1A]/20 text-[#1A1A1A]">
              <tr>
                <td className="p-3 font-semibold text-[#e62117]">Day 1</td>
                <td className="p-3 font-medium">Arrive Ortisei, Seceda afternoon light</td>
                <td className="p-3 text-[#6B6B6B]">Cable car direct from town, dramatic Odle ridgeline</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-[#e62117]">Day 2</td>
                <td className="p-3 font-medium">Alpe di Siusi meadow walk</td>
                <td className="p-3 text-[#6B6B6B]">Wide trails, Sciliar views, traditional mountain alms</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-[#e62117]">Day 3</td>
                <td className="p-3 font-medium">Drive east via mountain passes to Cortina, visit Cinque Torri</td>
                <td className="p-3 text-[#6B6B6B]">Passo Gardena or Falzarego route (~2+ hours driving)</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-[#e62117]">Day 4</td>
                <td className="p-3 font-medium">Tre Cime di Lavaredo loop</td>
                <td className="p-3 text-[#6B6B6B]">Full day above 2,300 m, mandatory early start or shuttle</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-[#e62117]">Day 5</td>
                <td className="p-3 font-medium">Lago di Braies early morning, then depart</td>
                <td className="p-3 text-[#6B6B6B]">Sunrise reflection before tour buses arrive</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 7-day two-valley */}
      <div>
        <div className="mb-2">
          <span className="text-xs uppercase tracking-wider text-[#e62117] font-semibold block">
            Itinerary 3
          </span>
          <h4 className="font-display font-extrabold text-xl sm:text-2xl text-[#1A1A1A] tracking-tight">
            7-day two-valley
          </h4>
          <p className="text-xs text-[#6B6B6B] mt-1 font-medium">
            Recommended bases: Ortisei (3 nights) + Cortina d'Ampezzo or Dobbiaco (3–4 nights)
          </p>
        </div>

        <div className="w-full overflow-x-auto border border-[#1A1A1A]">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#1A1A1A] text-[#F5F0E8] border-b border-[#1A1A1A] font-semibold">
              <tr>
                <th className="p-3 w-20">Day</th>
                <th className="p-3">Route and locations</th>
                <th className="p-3">Operational notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1A1A1A]/20 text-[#1A1A1A]">
              <tr>
                <td className="p-3 font-semibold text-[#e62117]">Day 1</td>
                <td className="p-3 font-medium">Arrive Ortisei, easy Alpe di Siusi walk</td>
                <td className="p-3 text-[#6B6B6B]">Acclimatise on gentle undulating paths</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-[#e62117]">Day 2</td>
                <td className="p-3 font-medium">Seceda ridgeline and Puez-Odle trails</td>
                <td className="p-3 text-[#6B6B6B]">Spectacular knife-edge views, afternoon light</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-[#e62117]">Day 3</td>
                <td className="p-3 font-medium">Buffer day: beginner via ferrata or Bolzano museum</td>
                <td className="p-3 text-[#6B6B6B]">Flexible day for weather buffer or cultural visit</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-[#e62117]">Day 4</td>
                <td className="p-3 font-medium">Transfer east via Passo Falzarego, explore Cinque Torri</td>
                <td className="p-3 text-[#6B6B6B]">WWI open-air trenches, Passo Giau sunset</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-[#e62117]">Day 5</td>
                <td className="p-3 font-medium">Tre Cime di Lavaredo loop</td>
                <td className="p-3 text-[#6B6B6B]">Signature 9–10 km circuit above 2,300 m</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-[#e62117]">Day 6</td>
                <td className="p-3 font-medium">Lago di Sorapis glacial hike</td>
                <td className="p-3 text-[#6B6B6B]">Early departure from Passo Tre Croci to avoid bottlenecks</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-[#e62117]">Day 7</td>
                <td className="p-3 font-medium">Lago di Braies sunrise, final valley exploration, departure</td>
                <td className="p-3 text-[#6B6B6B]">Quietest morning hours before outward journey</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
