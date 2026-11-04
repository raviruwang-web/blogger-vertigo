/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export const WatchTheFlightHero: React.FC = () => {
  return (
    <section className="my-10 w-full">
      {/* Real YouTube Embed */}
      <div className="w-full border border-[#1A1A1A] bg-black">
        <div className="relative aspect-video w-full overflow-hidden">
          <iframe
            src="https://www.youtube-nocookie.com/embed/mCQyetQfCVg?rel=0&modestbranding=1"
            title="Vertigo POV - Wingsuit flight over the Dolomites"
            className="absolute inset-0 h-full w-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>

      {/* Reel Link & Caption */}
      <div className="mt-3 text-xs text-[#6B6B6B] border-b border-[#1A1A1A]/15 pb-3">
        <p>
          Watch our wingsuit flight over the Dolomites above, and see the Facebook reel here:{' '}
          <a
            href="https://facebook.com/reel/2276924356464995/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#e62117] font-medium underline underline-offset-2 hover:opacity-80 transition-opacity"
          >
            https://facebook.com/reel/2276924356464995/
          </a>
        </p>
      </div>

      {/* Large red italic Inter pull quote breaking the grid */}
      <div className="my-8 -mx-4 sm:-mx-8 lg:-mx-16 px-4 sm:px-8 lg:px-16 py-6 border-y border-[#1A1A1A]">
        <blockquote className="font-sans italic text-[#e62117] text-2xl sm:text-3xl md:text-4xl leading-snug tracking-tight">
          “We came to fly the peaks, but you do not need a parachute to experience these valleys.”
        </blockquote>
      </div>
    </section>
  );
};
