/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';

interface GearItem {
  id: string;
  label: string;
  detail: string;
}

export const GearChecklist: React.FC = () => {
  const items: GearItem[] = [
    {
      id: 'boots',
      label: 'Sturdy broken-in hiking boots',
      detail: 'Limestone scree and rocky trails require ankle support and rigid traction.',
    },
    {
      id: 'layers',
      label: 'Layers plus waterproof shell',
      detail: 'Sudden temperature drops and afternoon squalls are frequent above 2,000m.',
    },
    {
      id: 'sun_water',
      label: 'Sun protection, water, high-energy snacks',
      detail: 'High UV index on exposed rock; carry 1.5–2L minimum per person.',
    },
    {
      id: 'maps',
      label: 'Offline map / GPS backup',
      detail: 'Cellular signals fail inside narrow dolomite valleys and high cirques.',
    },
    {
      id: 'first_aid',
      label: 'Basic first-aid kit',
      detail: 'Blister treatment, emergency foil blanket, disinfectant, bandage.',
    },
    {
      id: 'ferrata_kit',
      label: 'Helmet and via ferrata set (only if planning a protected route)',
      detail: 'Climbing harness, helmet, and certified energy-absorbing lanyard (EN 958).',
    },
  ];

  // Must start blank: 0 of 6 packed, no items pre-checked
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const toggle = (id: string) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const packedCount = Object.values(checked).filter(Boolean).length;

  return (
    <div className="border border-[#1A1A1A] bg-transparent my-8 p-6">
      <div className="border-b border-[#1A1A1A] pb-3 mb-4 flex items-center justify-between">
        <h4 className="font-display text-lg font-bold uppercase tracking-tight text-[#1A1A1A]">
          Gear Checklist
        </h4>
        <span className="text-xs font-semibold text-[#e62117]">
          {packedCount} of {items.length} packed
        </span>
      </div>

      <div className="space-y-3 text-xs">
        {items.map((item) => {
          const isDone = !!checked[item.id];
          return (
            <div
              key={item.id}
              onClick={() => toggle(item.id)}
              className="cursor-pointer flex items-start space-x-3 p-2 hover:bg-black/5 transition-colors border-b border-[#1A1A1A]/10"
            >
              <span className="w-4 h-4 border border-[#1A1A1A] flex items-center justify-center shrink-0 mt-0.5 text-[#e62117] font-bold text-xs bg-transparent">
                {isDone ? '✓' : ''}
              </span>
              <div className="flex-1">
                <span className={`font-semibold text-sm ${isDone ? 'line-through text-[#6B6B6B]' : 'text-[#1A1A1A]'}`}>
                  {item.label}
                </span>
                <p className="text-xs text-[#6B6B6B] mt-0.5 font-normal leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
