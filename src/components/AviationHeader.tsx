/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface AviationHeaderProps {
  currentView: 'home' | 'article';
  onNavigate: (view: 'home' | 'article') => void;
  onOpenBloggerModal?: () => void;
}

export const AviationHeader: React.FC<AviationHeaderProps> = ({
  currentView,
  onNavigate,
  onOpenBloggerModal,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#F5F0E8] border-b border-[#1A1A1A]">
      {/* Top Meta Line: REC dot + clean minimal meta */}
      <div className="border-b border-[#1A1A1A]/15 px-4 py-1.5 text-xs text-[#6B6B6B]">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center gap-x-2 gap-y-1">
          <span className="w-2 h-2 rounded-full bg-[#e62117] rec-pulse inline-block flex-shrink-0" />
          <span className="font-semibold text-[#e62117]">REC</span>
          <span className="text-[#1A1A1A]/20">·</span>
          <span className="text-[#1A1A1A] font-medium">Vertigo POV</span>
          <span className="text-[#1A1A1A]/20">·</span>
          <span>October 29, 2026</span>
          <span className="text-[#1A1A1A]/20">·</span>
          <span>Europe, Italy</span>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-5xl mx-auto px-4 py-3.5 flex items-center justify-between">
        {/* Brand */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-baseline space-x-2 text-left focus:outline-none"
        >
          <span className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight text-[#1A1A1A] uppercase">
            VERTIGO <span className="text-[#e62117]">POV</span>
          </span>
          <span className="text-xs font-medium text-[#6B6B6B] hidden md:inline ml-2">
            Preview
          </span>
        </button>

        {/* Clean Inter Navigation — with Blogger Theme XML export button */}
        <nav className="flex items-center space-x-4 sm:space-x-6 text-sm font-medium">
          <button
            onClick={() => onNavigate('home')}
            className={`transition-colors ${
              currentView === 'home'
                ? 'text-[#e62117] font-semibold underline underline-offset-8 decoration-2 decoration-[#e62117]'
                : 'text-[#1A1A1A] hover:text-[#e62117]'
            }`}
          >
            Archive
          </button>

          <button
            onClick={() => onNavigate('article')}
            className={`transition-colors ${
              currentView === 'article'
                ? 'text-[#e62117] font-semibold underline underline-offset-8 decoration-2 decoration-[#e62117]'
                : 'text-[#1A1A1A] hover:text-[#e62117]'
            }`}
          >
            Article
          </button>

          {onOpenBloggerModal && (
            <button
              onClick={onOpenBloggerModal}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-[#e62117] text-white hover:bg-[#1A1A1A] transition-colors"
            >
              Get Blogger Theme XML
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};
