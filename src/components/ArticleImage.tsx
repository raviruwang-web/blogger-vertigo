/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export interface ArticleImageProps {
  index: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  src: string;
  alt: string;
  caption: string;
  fullBleed?: boolean;
}

export const ARTICLE_PHOTOS = {
  1: {
    src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDIbGSyVPURMNTCqfrr_ZT6uCzm2ROyr1ILRDxjc2SLtVuLsvI32XSGK3F8nH3uZB16p3lO04dv7G5xpMP_cnD2Uv_sspBgZNPcntlpxG9SE-5apNeyENN5wSaS3Pzy-j2qB5XTTNzEFyFUZKo1BHb5SnfIzo-4Y9eGAsL1hZVJEXFHsO2cQg2Y-1iT6b1/w400-h300/01-hero-tre-cime-sunrise-krivec-ales.jpg',
    caption: 'Tre Cime di Lavaredo peaks glowing at sunrise, with a camping tent in the foreground. Credit: Krivec Ales, Pexels Free.',
    alt: 'Tre Cime di Lavaredo sunrise',
  },
  2: {
    src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhNN52x_xYMgS2F5WOJ7qXpEqbTxGgqL8AFljCwNjL1BfMBlA8lbt4dVXc6aHI1G-cpWJ-6Dhou-svTap0Y7AAjUK6lVSrde9xe6IcEqmcSrS7sSy6DAiYo4hz_beezqQSS0JAH7Eq7KZaYxlcucdOVkmLf-MS7rZ-3nhEb0T6lTKUg5oJxW2I38C6U06on/w400-h266/02-alpe-di-siusi-alexandre-moreira.jpg',
    caption: 'Wildflower meadow at Alpe di Siusi in the Dolomites. Credit: Alexandre Moreira, Pexels Free.',
    alt: 'Wildflower meadow at Alpe di Siusi',
  },
  3: {
    src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhkc2baypSkh5scjVFyr6FN-IxWDgHNIDQvWoQl1Iv7fHKyBI6KbLp3lC9lspXrxqGUptmimE9Be18zAIaCOPvl3ebuhnWalHarSLExV_SPSmXvd_VNyLXUMwatPcIqKv8HiRfot1wMmcy5XNw_pQxzA3dkPOcRzqMuqy1uRcFiKw66bJZf1kKgJZWByosn/w276-h400/03-locatelli-hut-friedrich-haag.jpg',
    caption: 'Hikers at the Antonio Locatelli Hut in the Dolomites, with the Paternkofel behind. Credit: © Friedrich Haag / Wikimedia Commons / CC BY-SA 4.0.',
    alt: 'Antonio Locatelli Hut hikers',
  },
  4: {
    src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhrCIL5HYhcC9tmikVg78pw80N1jJ8XLEtT3gKOK3Qw7qryyIJ35l2uJj8Q-dVdUlk4RYw_4-DRq0Pz7XVRx9rbAQ2RnKBdaCID3cEb3kEWBvqlUdKuhTjgJHaVFfz0gCNHtRYlVyDwfCTKcuBOEBGcOEMp_cFQsOfvMosMx0trdnqJLSaUU4I30pW5PgfD/w266-h400/04-tre-cime-trail-andrea-gambirasio.jpg',
    caption: 'Hikers on the Tre Cime di Lavaredo loop trail. Credit: Andrea Gambirasio, Pexels Free.',
    alt: 'Tre Cime di Lavaredo loop trail',
  },
  5: {
    src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhp5NvG2jSpIyE1ArWhDFI4zv5DQ1fhMb9OKDAKMS-7tCkQnu46UOwGu64vxsuCRorzTw-5wZfA2Q7D_jWoj68GQ4nERr4GhYFXgVumqbXKjqnFB4t-EhVq2DwaVLVU7pJv7VE9QfiSQIEX5tsHt1HRqwT7lOrEZegF87pbqozurPB2TdT-HHJNjB2hisNN/w266-h400/05-seceda-alex-dttrch.jpg',
    caption: 'Jagged Seceda ridgeline above green slopes in Val Gardena. Credit: Alex Dttrch, Pexels Free.',
    alt: 'Seceda ridgeline in Val Gardena',
  },
  6: {
    src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxLYDznYs-tnFYNn2aBcRd0xh-jI8smAgSLgBrv1qJX1KG5GtLU1_QAt92YQk829Ka4bfW1cuQc7EDfN5zH_U0UFtGE7uXAcBv2dcz8TDH11jpqu2oFZfYmfm4WHXguyBPtp0FIn9DH6GIzW329U33vqBPer48Y9cy_sHRDQ6Q9VkiMe-SMvsmflPbFjm5/w400-h266/06-lago-di-braies-luca-bravo.jpg',
    caption: 'Wooden boats on Lago di Braies. Credit: Luca Bravo, CC0 1.0 Universal.',
    alt: 'Lago di Braies wooden boats',
  },
  7: {
    src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjOmlRWZ1ZkLs0v3rblI7rCRCm8Jc8C-pyVAIsEAIoeJEhPIOBvE7H1-EFweyFLIPIGQhgo3-kw_OhZfSCBn0FUaWAfkGans71i3CN1ijgcRZOy8EKrKF2YLdhJhIRTEYxVDYH3JG_hcvmPXNq2Olnq_a6ds5RlUODp3uDEmephAS6l1fzN2rfn50i7fZiN/w320-h400/07-lago-di-sorapis-giuseppe-paoletti.jpg',
    caption: 'Turquoise Lago di Sorapis below limestone cliffs. Credit: Giuseppe Paoletti, Pexels Free.',
    alt: 'Turquoise Lago di Sorapis',
  },
  8: {
    src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj2Sf5d7ffkT7QEUyo0e9ZQrO2XjFQ-hb8ERV5UERm11BzrDD706u1zjmWXO4HFWEEU0h-l9PJI6iTjodTXlUxTCf1jH1_tx_82Eh-SDHJQQYN5MnEZ2NxBtfHZuIsZgjrnObR3HsJgoKFSbM9_DTz8zkMeiMsLKYkOL3mscgVfrFdAkNSXo_mSeKui-lEp/w245-h400/08-winter-skiers-matteo-milan.jpg',
    caption: 'Skiers on winter slopes in Veneto, Italy, with snow-capped mountains. Credit: Matteo Milan, Pexels Free.',
    alt: 'Skiers on winter slopes in Veneto',
  },
} as const;

export const ArticleImage: React.FC<ArticleImageProps> = ({
  index,
  src,
  alt,
  caption,
  fullBleed = false,
}) => {
  return (
    <figure className={`my-10 ${fullBleed ? '-mx-4 sm:-mx-8 lg:-mx-16' : 'w-full'}`}>
      <div className="border border-[#1A1A1A] bg-black/5 overflow-hidden">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-auto object-cover max-h-[620px]"
        />
      </div>
      <figcaption className="mt-2 text-xs font-normal text-[#6B6B6B] leading-relaxed">
        {caption}
      </figcaption>
    </figure>
  );
};
