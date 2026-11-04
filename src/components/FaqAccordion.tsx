/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

export const FaqAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'When is the best time to visit the Dolomites?',
      answer:
        'Mid-June to mid-September is the prime hiking season when lifts, trails, and high-altitude mountain rifugios are fully open. July and August bring peak crowds and afternoon thunderstorms. Late September to mid-October offers quieter trails, crisp air, and golden larch foliage, though some lifts begin closing. December to March is the winter ski season for Dolomiti Superski, when summer trails are closed. November and early spring are low seasons with most lifts and huts shut.',
    },
    {
      question: 'How many days do you need in the Dolomites?',
      answer:
        'Allow 4 to 5 nights if staying in one valley to comfortably hike without rushing. If you want to experience both western peaks (Seceda, Alpe di Siusi) and eastern landmarks (Tre Cime, Braies, Sorapis), plan a full week (7 days) split between two bases. If you only have 3 days, base strictly in Cortina d\'Ampezzo or Dobbiaco and focus only on eastern highlights.',
    },
    {
      question: 'Do you need a car in the Dolomites?',
      answer:
        'A car helps most for flexibility and early trailhead arrivals before shuttle buses start running. However, travelling without a car works well during peak season if you base in Ortisei or Dobbiaco. In Ortisei, cable cars to Seceda and Alpe di Siusi depart right from town. In Dobbiaco, dedicated bus shuttles run to Tre Cime di Lavaredo and Lago di Braies.',
    },
    {
      question: 'Where is the best base: Cortina or Val Gardena?',
      answer:
        'Choose Val Gardena (Ortisei) for Seceda, Alpe di Siusi, Puez-Odle, and an all-rounder base with excellent car-free connections. Choose Cortina d\'Ampezzo for Tre Cime di Lavaredo, Lago di Sorapis, Cinque Torri, and Passo Giau in the eastern valleys. With a week, split between both; with 3 days, pick one side because driving between them takes 2 hours or more across high mountain passes.',
    },
    {
      question: 'What should you book in advance?',
      answer:
        'Book accommodation and rifugios well ahead (months in advance for July and August). In peak season, advance online reservations are required for the Tre Cime Rifugio Auronzo toll road parking and the Dobbiaco Line 444 shuttle bus. Lago di Braies also enforces vehicle access restrictions and requires pre-booked parking or shuttle tickets during summer peak hours.',
    },
    {
      question: 'Can you go wingsuit flying in the Dolomites?',
      answer:
        'Only as a trained, qualified professional within strict local aviation and safety rules. Wingsuit proximity flying is an extreme, regulated sport and is not an activity for regular tourists or hikers. This travel guide is written strictly for visitors experiencing the Dolomites on foot.',
    },
  ];

  return (
    <div className="border border-[#1A1A1A] my-8">
      <div className="bg-[#1A1A1A] text-[#F5F0E8] p-4 border-b border-[#1A1A1A]">
        <h3 className="font-display font-extrabold text-lg uppercase tracking-tight">
          Frequently Asked Questions
        </h3>
        <p className="text-xs text-[#F5F0E8]/70 mt-0.5">
          Real logistical answers for field planning
        </p>
      </div>

      <div className="divide-y divide-[#1A1A1A]/15">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="p-4 sm:p-5">
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full text-left flex items-start justify-between gap-4 focus:outline-none group"
              >
                <span className="font-display font-bold text-base sm:text-lg text-[#1A1A1A] group-hover:text-[#e62117] transition-colors">
                  {faq.question}
                </span>
                <span className="text-xs text-[#e62117] font-semibold shrink-0 mt-1">
                  {isOpen ? 'Close' : 'Open'}
                </span>
              </button>

              {isOpen && (
                <div className="mt-3 pt-3 border-t border-[#1A1A1A]/10 text-sm text-[#1A1A1A] font-normal leading-relaxed">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
