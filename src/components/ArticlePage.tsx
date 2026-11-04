/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { WatchTheFlightHero } from './WatchTheFlightHero';
import { ArticleImage, ARTICLE_PHOTOS } from './ArticleImage';
import { ItineraryTables } from './ItineraryTables';
import { GearChecklist } from './GearChecklist';
import { FaqAccordion } from './FaqAccordion';
import { ShareButtons } from './ShareButtons';

interface ArticlePageProps {
  onBackToArchive: () => void;
}

export const ArticlePage: React.FC<ArticlePageProps> = ({ onBackToArchive }) => {
  const [activeToc, setActiveToc] = useState<string>('');

  const scrollTo = (id: string) => {
    setActiveToc(id);
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const headings = [
    { id: 'sec-where', label: 'Where the Dolomites are' },
    { id: 'sec-get-there', label: 'How to get to the Dolomites' },
    { id: 'sec-no-car', label: 'Visiting the Dolomites without a car' },
    { id: 'sec-best-time', label: 'Best time to visit the Dolomites' },
    { id: 'sec-where-to-stay', label: 'Where to stay in the Dolomites' },
    { id: 'sec-best-hikes', label: 'Best hikes and places to see' },
    { id: 'sec-tre-cime', label: 'Tre Cime di Lavaredo hike: the classic loop' },
    { id: 'sec-seceda', label: 'Seceda ridgeline' },
    { id: 'sec-braies', label: 'Lago di Braies' },
    { id: 'sec-alpe-siusi', label: 'Alpe di Siusi' },
    { id: 'sec-sorapis', label: 'Lago di Sorapis' },
    { id: 'sec-cinque-torri', label: 'Cinque Torri and Passo Giau' },
    { id: 'sec-itineraries', label: 'Dolomites itinerary: 3, 5 and 7 days' },
    { id: 'sec-via-ferrata', label: 'Via ferrata and climbing in the Dolomites' },
    { id: 'sec-winter', label: 'Dolomites in winter' },
    { id: 'sec-food-culture', label: 'Food, rifugios and local culture' },
    { id: 'sec-gear', label: 'Gear checklist' },
    { id: 'sec-safety', label: 'Safety, bookings and practical tips' },
    { id: 'sec-flight', label: 'About the flight in the video' },
    { id: 'sec-faq', label: 'FAQ' },
  ];

  return (
    <article className="w-full text-[#1A1A1A] bg-[#F5F0E8]">
      {/* Article Header & Editorial Title Block */}
      <header className="max-w-4xl mx-auto px-4 pt-12 pb-8 border-b border-[#1A1A1A]">
        <button
          onClick={onBackToArchive}
          className="text-xs font-semibold text-[#e62117] hover:underline mb-6 block"
        >
          ← Back to archive
        </button>

        {/* Title Meta in Inter */}
        <div className="text-xs text-[#6B6B6B] mb-3 flex flex-wrap items-center gap-2">
          <span className="text-[#e62117] font-semibold">Europe, Italy</span>
          <span>·</span>
          <span>October 29, 2026</span>
          <span>·</span>
          <span className="text-[#1A1A1A] font-medium">Vertigo POV</span>
        </div>

        {/* Oversized Grotesque Archivo Headline */}
        <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#1A1A1A] tracking-tight uppercase leading-[1.02]">
          Dolomites Travel Guide: Where to Go, When to Visit, and What to Know
        </h1>
      </header>

      {/* Main Single Centred Column */}
      <div className="max-w-3xl mx-auto px-4 py-8">
        
        {/* Hero Video & FB Reel Link */}
        <WatchTheFlightHero />

        {/* Disclosure Box */}
        <div className="border border-[#1A1A1A] p-4 my-8 text-xs text-[#6B6B6B] leading-relaxed">
          <strong className="text-[#1A1A1A] font-semibold block mb-1">
            Disclosure:
          </strong>
          This guide has no affiliate links yet. When hotel and gear links are added they will be marked here.
        </div>

        {/* Article Intro */}
        <div className="prose-editorial text-base sm:text-lg leading-relaxed space-y-5 my-8 font-normal">
          <p>
            The Dolomites in northeastern Italy are among the most dramatic mountain landscapes anywhere in the world. Colossal limestone spires, sheer rock needles, and wide green alpine meadows rise abruptly from valley floors.
          </p>
          <p>
            This guide covers where the range is, when to go, where to base yourself, how to get around with or without a car, which hikes are genuinely worth your time, and how many days you need. It ends with three itineraries to follow as written (3, 5, and 7 days). Pick one, and do not stack them.
          </p>
        </div>

        {/* Quick-Facts Table */}
        <div className="my-10 border border-[#1A1A1A]">
          <div className="bg-[#1A1A1A] text-[#F5F0E8] p-3 font-display font-bold uppercase text-sm tracking-wider">
            Quick-Facts
          </div>
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <tbody className="divide-y divide-[#1A1A1A]/20">
                <tr>
                  <td className="p-3 font-semibold w-1/3 text-[#1A1A1A]">Location</td>
                  <td className="p-3 text-[#6B6B6B]">Northeast Italy, near the Austrian border</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-[#1A1A1A]">Status</td>
                  <td className="p-3 text-[#6B6B6B]">UNESCO World Heritage Site since 2009</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-[#1A1A1A]">Best hiking season</td>
                  <td className="p-3 text-[#6B6B6B]">Mid-June to mid-September</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-[#1A1A1A]">Best ski season</td>
                  <td className="p-3 text-[#6B6B6B]">December to March</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-[#1A1A1A]">Best bases</td>
                  <td className="p-3 text-[#6B6B6B]">Ortisei, Cortina d'Ampezzo, Dobbiaco</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-[#1A1A1A]">How many days</td>
                  <td className="p-3 text-[#6B6B6B]">4 to 5 nights for one valley, a week for two</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-[#1A1A1A]">Car or no car</td>
                  <td className="p-3 text-[#6B6B6B]">A car helps most, but Ortisei and Dobbiaco work without one in peak season</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Table of Contents in Plain Editorial Form */}
        <nav aria-label="Table of contents" className="my-10 border border-[#1A1A1A] p-5 text-xs">
          <div className="font-semibold text-sm text-[#1A1A1A] pb-3 mb-3 border-b border-[#1A1A1A]/15">
            Table of contents
          </div>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-[#6B6B6B]">
            {headings.map((h, i) => (
              <li key={h.id}>
                <button
                  onClick={() => scrollTo(h.id)}
                  className="hover:text-[#e62117] text-left transition-colors truncate w-full font-medium"
                >
                  <span className="text-[#e62117] mr-1.5">{String(i + 1).padStart(2, '0')}.</span>
                  <span>{h.label}</span>
                </button>
              </li>
            ))}
          </ol>
        </nav>

        {/* Photo 1: Tre Cime sunrise with tent */}
        <ArticleImage
          index={1}
          src={ARTICLE_PHOTOS[1].src}
          alt={ARTICLE_PHOTOS[1].alt}
          caption={ARTICLE_PHOTOS[1].caption}
          fullBleed
        />

        {/* 1. Where the Dolomites are */}
        <section id="sec-where" className="my-12">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl uppercase tracking-tight text-[#1A1A1A] mb-4 pb-2 border-b border-[#1A1A1A]">
            Where the Dolomites are
          </h2>
          <div className="prose-editorial text-base leading-relaxed space-y-4 font-normal">
            <p>
              The Dolomites are situated in northeastern Italy, spanning the provinces of South Tyrol (Südtirol), Trentino, and Belluno. They are distinguished by major massifs rather than a single continuous spine: the fortress-like <strong>Sella massif</strong>, the iconic Three Peaks of <strong>Tre Cime di Lavaredo</strong>, the jagged spires of the <strong>Catinaccio (Rosengarten)</strong>, the plateau of <strong>Sciliar (Schlern)</strong>, and the <strong>Marmolada</strong>, whose Punta Penia reaches 3,343 meters as the highest summit in the range.
            </p>
            <p>
              Key river valleys carve through the massifs: <strong>Val Gardena</strong>, <strong>Alta Badia</strong>, <strong>Val di Fassa</strong>, and the wide corridor of <strong>Val Pusteria</strong>. The pale limestone is famous for <em>enrosadira</em>—the phenomenon where cliff faces flush vivid pink, coral, and burnt orange at sunrise and dusk.
            </p>
          </div>
        </section>

        {/* Photo 2: Alpe di Siusi wildflower meadow */}
        <ArticleImage
          index={2}
          src={ARTICLE_PHOTOS[2].src}
          alt={ARTICLE_PHOTOS[2].alt}
          caption={ARTICLE_PHOTOS[2].caption}
        />

        {/* 2. How to get to the Dolomites */}
        <section id="sec-get-there" className="my-12">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl uppercase tracking-tight text-[#1A1A1A] mb-4 pb-2 border-b border-[#1A1A1A]">
            How to get to the Dolomites
          </h2>
          <div className="prose-editorial text-base leading-relaxed space-y-4 font-normal">
            <p>
              The closest international airports are <strong>Venice Marco Polo (VCE)</strong>, <strong>Venice Treviso (TSF)</strong>, <strong>Milan (MXP/LIN/BGY)</strong>, <strong>Verona (VRN)</strong>, and <strong>Innsbruck (INN)</strong> in Austria. From Venice, driving to Cortina d'Ampezzo takes approximately <strong>2.5 hours by car</strong> via the A27 highway and Alemagna valley.
            </p>
            <p>
              Mainline trains run from Verona, Bologna, and Munich up through the Adige valley, stopping at <strong>Bolzano (Bozen)</strong>, <strong>Bressanone (Brixen)</strong>, <strong>Brunico (Bruneck)</strong>, and <strong>Dobbiaco (Toblach)</strong>. From these rail depots, regional SAD and Südtirolmobil buses carry travelers into the mountain villages.
            </p>
            <p>
              Driving gives the most freedom for early starts, but heed critical road rules: historic village centers enforce strict <strong>ZTL zones (Zona a Traffico Limitato)</strong> with automated cameras. Non-EU drivers must carry an <strong>International Driving Permit (IDP)</strong>. Trailhead parking fills very early in July and August. At Tre Cime, the Rifugio Auronzo toll road parking requires pre-booking online in peak summer, and the Dobbiaco Line 444 shuttle operates on a reservation-only basis. Peak-season access to Lago di Braies is similarly restricted between 09:30 and 16:00.
            </p>
          </div>
        </section>

        {/* Photo 3: Locatelli Hut hikers */}
        <ArticleImage
          index={3}
          src={ARTICLE_PHOTOS[3].src}
          alt={ARTICLE_PHOTOS[3].alt}
          caption={ARTICLE_PHOTOS[3].caption}
        />

        {/* 3. Visiting the Dolomites without a car */}
        <section id="sec-no-car" className="my-12">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl uppercase tracking-tight text-[#1A1A1A] mb-4 pb-2 border-b border-[#1A1A1A]">
            Visiting the Dolomites without a car
          </h2>
          <div className="prose-editorial text-base leading-relaxed space-y-4 font-normal">
            <p>
              Visiting without a car works best during the peak summer season (mid-June to September) by basing in either <strong>Ortisei</strong> or <strong>Dobbiaco</strong>.
            </p>
            <p>
              In Ortisei, you can walk directly from hotels to the Seceda gondola and the Mont Sëuc cable car up to Alpe di Siusi without ever needing a vehicle. In Dobbiaco, frequent valley shuttles run directly to Tre Cime di Lavaredo, Lago di Braies, and the eastern valleys.
            </p>
            <p>
              Accommodations in South Tyrol provide a guest pass covering regional public buses and trains. Note that the <strong>Tre Cime shuttle Line 444</strong> is an excursion bus outside standard passes and requires a separate paid ticket. Cortina and the Veneto side are operated by <strong>DolomitiBus</strong>.
            </p>
          </div>
        </section>

        {/* Photo 4: Tre Cime trail hikers */}
        <ArticleImage
          index={4}
          src={ARTICLE_PHOTOS[4].src}
          alt={ARTICLE_PHOTOS[4].alt}
          caption={ARTICLE_PHOTOS[4].caption}
        />

        {/* 4. Best time to visit the Dolomites */}
        <section id="sec-best-time" className="my-12">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl uppercase tracking-tight text-[#1A1A1A] mb-4 pb-2 border-b border-[#1A1A1A]">
            Best time to visit the Dolomites
          </h2>
          <div className="prose-editorial text-base leading-relaxed space-y-4 font-normal">
            <p>
              The seasonal calendar is divided sharply between summer hiking and winter skiing.
            </p>
          </div>

          {/* Season table */}
          <div className="my-6 border border-[#1A1A1A]">
            <div className="w-full overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#1A1A1A] text-[#F5F0E8] border-b border-[#1A1A1A] font-semibold">
                  <tr>
                    <th className="p-3">Season</th>
                    <th className="p-3">Conditions</th>
                    <th className="p-3">Trade-offs</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1A1A1A]/20">
                  <tr>
                    <td className="p-3 font-semibold text-[#e62117]">Mid-June to mid-September</td>
                    <td className="p-3">Hiking, lifts, rifugios open</td>
                    <td className="p-3 text-[#6B6B6B]">Crowds in July and August, afternoon storms</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-[#e62117]">Late September to mid-October</td>
                    <td className="p-3">Quieter trails, autumn colour</td>
                    <td className="p-3 text-[#6B6B6B]">Some lifts closing, early snow on high passes</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-[#e62117]">December to March</td>
                    <td className="p-3">Skiing, winter scenery</td>
                    <td className="p-3 text-[#6B6B6B]">Summer trails closed, winter driving conditions</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-[#e62117]">November and early spring</td>
                    <td className="p-3">Low prices, empty villages</td>
                    <td className="p-3 text-[#6B6B6B]">Many lifts and huts shut, limited transport</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Photo 5: Jagged Seceda ridgeline */}
        <ArticleImage
          index={5}
          src={ARTICLE_PHOTOS[5].src}
          alt={ARTICLE_PHOTOS[5].alt}
          caption={ARTICLE_PHOTOS[5].caption}
          fullBleed
        />

        {/* 5. Where to stay in the Dolomites */}
        <section id="sec-where-to-stay" className="my-12">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl uppercase tracking-tight text-[#1A1A1A] mb-4 pb-2 border-b border-[#1A1A1A]">
            Where to stay in the Dolomites
          </h2>
          <div className="prose-editorial text-base leading-relaxed space-y-4 font-normal">
            <p>
              Basing yourself strategically is essential. Driving between western valleys (Val Gardena) and eastern valleys (Cortina d'Ampezzo) takes about <strong>2 hours or more</strong> over winding mountain passes. For shorter trips (4 to 5 nights), choose one base. For a week, book two bases: one west and one east.
            </p>
            <p>
              High-altitude mountain rifugios operate from <strong>mid-June to late September</strong> and require booking months in advance.
            </p>
          </div>

          {/* Base table */}
          <div className="my-6 border border-[#1A1A1A]">
            <div className="w-full overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#1A1A1A] text-[#F5F0E8] border-b border-[#1A1A1A] font-semibold">
                  <tr>
                    <th className="p-3">Base</th>
                    <th className="p-3">Best for</th>
                    <th className="p-3">Ideal if</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1A1A1A]/20">
                  <tr>
                    <td className="p-3 font-semibold text-[#e62117]">Ortisei, Val Gardena</td>
                    <td className="p-3">Seceda, Alpe di Siusi, Puez-Odle</td>
                    <td className="p-3 text-[#6B6B6B]">You want an all-rounder and no-car options</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-[#e62117]">Cortina d'Ampezzo</td>
                    <td className="p-3">Tre Cime, Sorapis, Cinque Torri</td>
                    <td className="p-3 text-[#6B6B6B]">You want the eastern peaks and a larger town</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-[#e62117]">Dobbiaco</td>
                    <td className="p-3">Tre Cime, Braies, eastern valleys</td>
                    <td className="p-3 text-[#6B6B6B]">You are travelling without a car in the east</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-[#e62117]">Alta Badia / Val di Fassa</td>
                    <td className="p-3">Skiing, quieter villages</td>
                    <td className="p-3 text-[#6B6B6B]">You want fewer crowds and a village base</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-[#e62117]">Bolzano / Brunico</td>
                    <td className="p-3">Train connections, town stays</td>
                    <td className="p-3 text-[#6B6B6B]">You want a larger town and day trips by bus</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Photo 6: Lago di Braies wooden boats */}
        <ArticleImage
          index={6}
          src={ARTICLE_PHOTOS[6].src}
          alt={ARTICLE_PHOTOS[6].alt}
          caption={ARTICLE_PHOTOS[6].caption}
        />

        {/* 6. Best hikes and places to see */}
        <section id="sec-best-hikes" className="my-12">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl uppercase tracking-tight text-[#1A1A1A] mb-4 pb-2 border-b border-[#1A1A1A]">
            Best hikes and places to see
          </h2>

          {/* Master Hike Table */}
          <div className="my-6 border border-[#1A1A1A]">
            <div className="w-full overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#1A1A1A] text-[#F5F0E8] border-b border-[#1A1A1A] font-semibold">
                  <tr>
                    <th className="p-3">Hike</th>
                    <th className="p-3">Base</th>
                    <th className="p-3">Time</th>
                    <th className="p-3">Difficulty</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1A1A1A]/20">
                  <tr>
                    <td className="p-3 font-semibold text-[#e62117]">Tre Cime loop</td>
                    <td className="p-3">Cortina / Dobbiaco</td>
                    <td className="p-3">About 3 to 4.5 hours</td>
                    <td className="p-3 text-[#6B6B6B]">Moderate</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-[#e62117]">Seceda ridgeline</td>
                    <td className="p-3">Ortisei</td>
                    <td className="p-3">Half day to full day</td>
                    <td className="p-3 text-[#6B6B6B]">Easy to moderate</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-[#e62117]">Lago di Braies loop</td>
                    <td className="p-3">Dobbiaco / Braies</td>
                    <td className="p-3">About 1 to 2 hours</td>
                    <td className="p-3 text-[#6B6B6B]">Easy</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-[#e62117]">Alpe di Siusi</td>
                    <td className="p-3">Ortisei / Siusi</td>
                    <td className="p-3">2 hours to full day</td>
                    <td className="p-3 text-[#6B6B6B]">Easy to moderate</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-[#e62117]">Lago di Sorapis</td>
                    <td className="p-3">Cortina / Misurina</td>
                    <td className="p-3">Half day</td>
                    <td className="p-3 text-[#6B6B6B]">Moderate</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-[#e62117]">Cinque Torri / Passo Giau</td>
                    <td className="p-3">Cortina</td>
                    <td className="p-3">2 to 5 hours</td>
                    <td className="p-3 text-[#6B6B6B]">Easy to moderate</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 7. Tre Cime di Lavaredo hike: the classic loop */}
        <section id="sec-tre-cime" className="my-10">
          <h3 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-tight text-[#1A1A1A] mb-3">
            Tre Cime di Lavaredo hike: the classic loop
          </h3>
          <div className="prose-editorial text-base leading-relaxed space-y-4 font-normal">
            <p>
              The 9 to 10 km loop circles the three monolithic towers entirely above 2,300 meters elevation. Starting from <strong>Rifugio Auronzo</strong>, trail 101 passes <strong>Rifugio Lavaredo</strong>, climbs to Forcella Lavaredo, and reaches <strong>Rifugio Locatelli (Dreizinnenhütte)</strong> with its commanding view of the vertical north walls. The return traverses the Lange Alm scree basin. The air is thin, cool, and exposed to swift squalls.
            </p>
          </div>
        </section>

        {/* 8. Seceda ridgeline */}
        <section id="sec-seceda" className="my-10">
          <h3 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-tight text-[#1A1A1A] mb-3">
            Seceda ridgeline
          </h3>
          <div className="prose-editorial text-base leading-relaxed space-y-4 font-normal">
            <p>
              Reached via gondola and cable car from Ortisei to 2,519 meters. The southern meadow pasture ends abruptly at a dramatic knife-edge precipice looking down at the jagged teeth of the Odle group. The ridge is best appreciated in <strong>afternoon light</strong>. Note timed-entry checks during July and August, and verify pass coverage: the <strong>Gardena Card</strong> covers it, but the <strong>2026 Dolomiti Supersummer pass</strong> did not include the Ortisei–Seceda lift.
            </p>
          </div>
        </section>

        {/* 9. Lago di Braies */}
        <section id="sec-braies" className="my-10">
          <h3 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-tight text-[#1A1A1A] mb-3">
            Lago di Braies
          </h3>
          <div className="prose-editorial text-base leading-relaxed space-y-4 font-normal">
            <p>
              An easy flat 3.5 km loop around the shoreline of the emerald mountain lake below Croda del Becco (2,810m). <strong>Arrive at sunrise</strong>: access roads close to unbooked vehicle traffic between 09:30 and 16:00, and dawn yields still, glass-like water reflections before crowds arrive.
            </p>
          </div>
        </section>

        {/* 10. Alpe di Siusi */}
        <section id="sec-alpe-siusi" className="my-10">
          <h3 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-tight text-[#1A1A1A] mb-3">
            Alpe di Siusi
          </h3>
          <div className="prose-editorial text-base leading-relaxed space-y-4 font-normal">
            <p>
              Europe’s largest high-altitude meadow plateau spans 56 square kilometers. Gentle rolling paths provide relaxed walking with the unmistakable jagged silhouette of the <strong>Sciliar (Schlern)</strong> rising directly behind the alpine pastures.
            </p>
          </div>
        </section>

        {/* Photo 7: Turquoise Lago di Sorapis */}
        <ArticleImage
          index={7}
          src={ARTICLE_PHOTOS[7].src}
          alt={ARTICLE_PHOTOS[7].alt}
          caption={ARTICLE_PHOTOS[7].caption}
        />

        {/* 11. Lago di Sorapis */}
        <section id="sec-sorapis" className="my-10">
          <h3 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-tight text-[#1A1A1A] mb-3">
            Lago di Sorapis
          </h3>
          <div className="prose-editorial text-base leading-relaxed space-y-4 font-normal">
            <p>
              A half-day moderate hike along Trail 215 from Passo Tre Croci to an astonishing milky-turquoise alpine cirque. The pale pastel hue is produced by suspended glacial rock flour. Exposed cliff ledges with metal cables require sure footing; start by 07:00 to avoid bottlenecks on the single-file cliff trail.
            </p>
          </div>
        </section>

        {/* 12. Cinque Torri and Passo Giau */}
        <section id="sec-cinque-torri" className="my-10">
          <h3 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-tight text-[#1A1A1A] mb-3">
            Cinque Torri and Passo Giau
          </h3>
          <div className="prose-editorial text-base leading-relaxed space-y-4 font-normal">
            <p>
              Cinque Torri features five distinct rock towers housing a restored First World War Italian frontline open-air museum with observation trenches and gun emplacements. Nearby <strong>Passo Giau (2,236m)</strong> offers one of the most expansive 360-degree mountain panoramas in the range.
            </p>
          </div>
        </section>

        {/* 13. Dolomites itinerary: 3, 5 and 7 days */}
        <section id="sec-itineraries" className="my-12">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl uppercase tracking-tight text-[#1A1A1A] mb-4 pb-2 border-b border-[#1A1A1A]">
            Dolomites itinerary: 3, 5 and 7 days
          </h2>
          <div className="prose-editorial text-base leading-relaxed space-y-4 mb-6 font-normal">
            <p>
              The golden rule of travelling the Dolomites is not to stack routes across valleys. Choose the plan matching your timeframe:
            </p>
          </div>

          {/* Exact itinerary tables */}
          <ItineraryTables />
        </section>

        {/* 14. Via ferrata and climbing in the Dolomites */}
        <section id="sec-via-ferrata" className="my-12">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl uppercase tracking-tight text-[#1A1A1A] mb-4 pb-2 border-b border-[#1A1A1A]">
            Via ferrata and climbing in the Dolomites
          </h2>
          <div className="prose-editorial text-base leading-relaxed space-y-4 font-normal">
            <p>
              The Dolomites are the historic home of the <em>via ferrata</em> ("iron path"). Routes use fixed steel cables, stemples, and suspended ladders. Never attempt them without proper safety gear: an approved <strong>climbing harness</strong>, a <strong>certified energy-absorbing lanyard (EN 958)</strong>, and a <strong>helmet</strong> for protection against rockfall. Beginners should hire an alpine mountain guide and attempt an easy starter route first (e.g. Gran Cir). The Day 3 buffer day in the 7-day plan is the ideal place for this.
            </p>
          </div>
        </section>

        {/* Photo 8: Skiers on winter slopes in Veneto */}
        <ArticleImage
          index={8}
          src={ARTICLE_PHOTOS[8].src}
          alt={ARTICLE_PHOTOS[8].alt}
          caption={ARTICLE_PHOTOS[8].caption}
        />

        {/* 15. Dolomites in winter */}
        <section id="sec-winter" className="my-12">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl uppercase tracking-tight text-[#1A1A1A] mb-4 pb-2 border-b border-[#1A1A1A]">
            Dolomites in winter
          </h2>
          <div className="prose-editorial text-base leading-relaxed space-y-4 font-normal">
            <p>
              From December to March, the valleys become <strong>Dolomiti Superski</strong>, covering 12 ski resorts and 1,200 km of slopes on one pass. The signature route is the <strong>Sellaronda circuit</strong>, skiing around the entire Sella massif across four mountain passes.
            </p>
            <p>
              Cortina's February 2026 Winter Olympics legacy facilities include the <strong>Apollonio–Socrepes gondola</strong>, the <strong>Cortina Sliding Centre</strong>, and the renovated <strong>Olympic Ice Stadium</strong>. Check public opening dates before planning visits around them.
            </p>
          </div>
        </section>

        {/* 16. Food, rifugios and local culture */}
        <section id="sec-food-culture" className="my-12">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl uppercase tracking-tight text-[#1A1A1A] mb-4 pb-2 border-b border-[#1A1A1A]">
            Food, rifugios and local culture
          </h2>
          <div className="prose-editorial text-base leading-relaxed space-y-4 font-normal">
            <p>
              The region is officially bilingual in Italian and German, with the ancient neo-Latin <strong>Ladin</strong> language spoken throughout Val Gardena and Alta Badia.
            </p>
            <p>
              Cuisine is rustic and sustaining: <em>canederli</em> (bread dumplings in broth or melted butter), cured South Tyrolean <em>speck</em>, hot <em>polenta</em> with melted mountain cheese and wild mushrooms, and warm <em>apfelstrudel</em>. The daily rhythm is a hearty hut lunch at midday on the trail, followed by village dining in the evening.
            </p>
          </div>
        </section>

        {/* 17. Gear checklist */}
        <section id="sec-gear" className="my-12">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl uppercase tracking-tight text-[#1A1A1A] mb-4 pb-2 border-b border-[#1A1A1A]">
            Gear checklist
          </h2>
          <GearChecklist />
        </section>

        {/* 18. Safety, bookings and practical tips */}
        <section id="sec-safety" className="my-12">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl uppercase tracking-tight text-[#1A1A1A] mb-4 pb-2 border-b border-[#1A1A1A]">
            Safety, bookings and practical tips
          </h2>
          <div className="prose-editorial text-base leading-relaxed space-y-4 font-normal">
            <p>
              Always check valley-specific forecasts before heading out. Pack a waterproof layer on every hike, as afternoon thunderstorms develop quickly. Snow lingers above 2,400 meters well into late June. Trails are marked with red-and-white paint on rocks; if disorienting fog rolls in, stay on the marked path. Carry paper or offline GPS maps.
            </p>
            <p>
              Book accommodation, rifugios, Tre Cime parking/shuttles, and Braies access early. The <strong>Gardena Card</strong> covers western lifts, while <strong>Dolomiti Supersummer</strong> covers across valleys (though in 2026 it excluded the Ortisei–Seceda lift). <strong>Wild camping is strictly prohibited</strong> throughout the Dolomites nature parks and subject to immediate heavy fines.
            </p>
          </div>
        </section>

        {/* 19. About the flight in the video */}
        <section id="sec-flight" className="my-12 border-l-2 border-[#e62117] pl-5 py-2">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl uppercase tracking-tight text-[#1A1A1A] mb-3">
            About the flight in the video
          </h2>
          <div className="prose-editorial text-base leading-relaxed space-y-3 font-normal">
            <p>
              Wingsuit proximity flying is a regulated, professional extreme sport requiring thousands of skydives, specialized technical training, and official flight permits. It is not an activity to attempt on a holiday hiking trip. Experience the Dolomites safely on foot along the established trail network.
            </p>
          </div>
        </section>

        {/* 20. FAQ */}
        <section id="sec-faq" className="my-12">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl uppercase tracking-tight text-[#1A1A1A] mb-4 pb-2 border-b border-[#1A1A1A]">
            FAQ
          </h2>
          <FaqAccordion />
        </section>

        {/* Next in Series Callout */}
        <div className="my-10 border-t border-b border-[#1A1A1A] py-5 text-xs text-[#6B6B6B]">
          <span className="text-[#e62117] font-semibold uppercase mr-2">Next in this series:</span>
          <span className="text-[#1A1A1A] font-semibold">Lauterbrunnen, Switzerland</span>
          <span className="ml-2 block sm:inline">
            (Text only · No link until published)
          </span>
        </div>

        {/* Share Buttons */}
        <ShareButtons
          title="Dolomites Travel Guide: Where to Go, When to Visit, and What to Know"
          url="https://vertigopov.blogspot.com/2026/10/dolomites-travel-guide.html"
        />

        {/* Related Post: Dolomites Only */}
        <div className="my-8 border border-[#1A1A1A] p-5 text-xs">
          <div className="font-semibold text-sm text-[#1A1A1A] mb-2 pb-2 border-b border-[#1A1A1A]/15">
            Related posts
          </div>
          <div className="text-sm font-semibold text-[#1A1A1A]">
            Dolomites Travel Guide: Where to Go, When to Visit, and What to Know
          </div>
          <div className="text-[#6B6B6B] text-xs mt-1">
            Vertigo POV · October 29, 2026 · Europe, Italy
          </div>
        </div>

        {/* Return Button */}
        <div className="text-center my-12">
          <button
            onClick={onBackToArchive}
            className="border border-[#1A1A1A] bg-[#1A1A1A] text-[#F5F0E8] px-6 py-2.5 text-xs font-semibold hover:bg-[#e62117] hover:border-[#e62117] transition-colors"
          >
            ← Return to archive
          </button>
        </div>

      </div>
    </article>
  );
};
