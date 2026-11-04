/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-[#1A1A1A] bg-[#F5F0E8] text-[#1A1A1A] py-10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-baseline justify-between gap-6 border-b border-[#1A1A1A]/15 pb-6">
          <div>
            <div className="font-display font-extrabold text-2xl tracking-tight uppercase">
              VERTIGO <span className="text-[#e62117]">POV</span>
            </div>
            <p className="text-xs text-[#6B6B6B] mt-1 font-normal">
              Wingsuit flight recordings and mountain route notes.
            </p>
          </div>

          {/* Social links ONLY: Facebook and YouTube */}
          <div className="flex items-center space-x-6 text-sm font-medium">
            <a
              href="https://www.youtube.com/@vertigopov-t7b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1A1A1A] hover:text-[#e62117] transition-colors underline underline-offset-4 decoration-[#e62117]"
            >
              YouTube
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=1356643844203830"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1A1A1A] hover:text-[#e62117] transition-colors underline underline-offset-4 decoration-[#e62117]"
            >
              Facebook
            </a>
          </div>
        </div>

        {/* Footer exactly as specified */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#6B6B6B]">
          <div>
            Copyright ©2026 Vertigo POV · All rights reserved.
          </div>
          <div>
            Preview only · Real article and media
          </div>
        </div>
      </div>
    </footer>
  );
};
