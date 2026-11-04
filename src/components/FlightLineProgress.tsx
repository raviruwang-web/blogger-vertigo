/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';

export const FlightLineProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const progress = (totalScroll / windowHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      {/* Hairline background track */}
      <div className="w-full h-[2px] bg-transparent relative">
        {/* Active thin REC-red progress bar */}
        <div
          className="h-full bg-[#e62117] transition-all duration-75 relative"
          style={{ width: `${scrollProgress}%` }}
        >
          {/* Travelling flight dot */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-[#e62117]" />
          </div>
        </div>
      </div>
    </div>
  );
};
