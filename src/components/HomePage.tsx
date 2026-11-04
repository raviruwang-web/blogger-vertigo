/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Region } from '../types';
import { ARTICLE_PHOTOS } from './ArticleImage';

interface HomePageProps {
  onOpenArticle: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenArticle }) => {
  const [selectedRegion, setSelectedRegion] = useState<Region>('Europe');

  const regions: Region[] = ['Europe', 'Asia', 'Americas', 'Oceania', 'Africa'];
  const heroPhoto = ARTICLE_PHOTOS[1];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12 sm:py-16">
      {/* Editorial Title Block */}
      <div className="border-b border-[#1A1A1A] pb-8 mb-10">
        <div className="text-xs text-[#e62117] font-semibold mb-2 flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-[#e62117] rec-pulse" />
          <span>Vertigo POV Archive</span>
        </div>
        <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tight uppercase text-[#1A1A1A] leading-[0.98]">
          Wings Over <br />
          <span className="text-[#e62117]">The Peaks</span>
        </h1>
        <p className="text-sm text-[#6B6B6B] mt-4 max-w-xl font-normal leading-relaxed">
          Documented flight lines and practical on-foot mountain travel notes. No sponsored rankings, no generic filler.
        </p>
      </div>

      {/* Region filter bar — clean Inter text, normal sentence case, active in red */}
      <div className="border-b border-[#1A1A1A] pb-3 mb-10 flex flex-wrap items-center justify-between gap-4 text-sm font-medium">
        <span className="text-xs text-[#6B6B6B] uppercase tracking-wider font-semibold">
          Region filter:
        </span>
        <div className="flex flex-wrap gap-5 sm:gap-7">
          {regions.map((region) => {
            const isActive = selectedRegion === region;
            return (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`transition-colors font-medium ${
                  isActive
                    ? 'text-[#e62117] font-semibold underline underline-offset-8 decoration-2 decoration-[#e62117]'
                    : 'text-[#1A1A1A] hover:text-[#e62117]'
                }`}
              >
                {region}
              </button>
            );
          })}
        </div>
      </div>

      {/* Post List */}
      {selectedRegion === 'Europe' ? (
        <div className="space-y-12">
          {/* Magazine Post Entry */}
          <article
            onClick={onOpenArticle}
            className="cursor-pointer group grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-[#1A1A1A]/15 pb-12"
          >
            {/* Real photo */}
            <div className="lg:col-span-6 border border-[#1A1A1A] overflow-hidden bg-black/5">
              <img
                src={heroPhoto.src}
                alt={heroPhoto.alt}
                className="w-full h-auto object-cover max-h-[440px]"
              />
              <div className="p-2.5 border-t border-[#1A1A1A] text-xs text-[#6B6B6B] leading-relaxed">
                {heroPhoto.caption}
              </div>
            </div>

            {/* Post Information */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-4 pt-1">
              <div className="text-xs text-[#6B6B6B] space-x-2">
                <span className="text-[#e62117] font-semibold">Europe, Italy</span>
                <span>·</span>
                <span>October 29, 2026</span>
                <span>·</span>
                <span className="text-[#1A1A1A]">Vertigo POV</span>
              </div>

              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#1A1A1A] tracking-tight leading-tight group-hover:text-[#e62117] transition-colors">
                Dolomites Travel Guide: Where to Go, When to Visit, and What to Know
              </h2>

              <p className="text-sm sm:text-base text-[#1A1A1A] leading-relaxed prose-editorial font-normal">
                We came to fly the peaks, but you do not need a parachute to experience these valleys. A field-tested guide covering where the range is, seasonal operating windows, valley bases, car-free mobility, signature hiking circuits, and structured 3, 5, and 7-day itineraries.
              </p>

              <div className="pt-4 flex items-center justify-between border-t border-[#1A1A1A]/10 text-xs">
                <span className="text-[#e62117] font-semibold group-hover:underline">
                  Read full article →
                </span>
                <span className="text-[#6B6B6B]">
                  Complete guide
                </span>
              </div>
            </div>
          </article>
        </div>
      ) : (
        /* Honest empty state */
        <div className="py-16 text-center border border-[#1A1A1A] p-8 my-6">
          <p className="font-display text-xl sm:text-2xl font-bold text-[#1A1A1A] tracking-tight">
            No posts in this region yet in this preview
          </p>
          <p className="text-xs text-[#6B6B6B] mt-2 max-w-md mx-auto leading-relaxed">
            Sector {selectedRegion} has no published posts in this preview demo. Only the Europe Dolomites guide is currently available.
          </p>
          <div className="mt-6">
            <button
              onClick={() => setSelectedRegion('Europe')}
              className="border border-[#1A1A1A] bg-[#1A1A1A] text-[#F5F0E8] px-4 py-2 text-xs font-medium hover:bg-[#e62117] hover:border-[#e62117] transition-colors"
            >
              Return to Europe
            </button>
          </div>
        </div>
      )}

      {/* Next in Series Preview Note */}
      <div className="mt-16 border-t border-[#1A1A1A] pt-6 flex flex-col sm:flex-row items-baseline justify-between gap-2 text-xs text-[#6B6B6B]">
        <div>
          <span className="text-[#e62117] font-semibold uppercase mr-2">Next in this series:</span>
          <span className="text-[#1A1A1A] font-semibold">Lauterbrunnen, Switzerland</span>
        </div>
        <span className="text-xs text-[#6B6B6B]">
          Text only · No link until published
        </span>
      </div>
    </div>
  );
};
