/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';

interface ShareButtonsProps {
  title: string;
  url: string;
}

export const ShareButtons: React.FC<ShareButtonsProps> = ({ title, url }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(url || window.location.href);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const encodedUrl = encodeURIComponent(url || window.location.href);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="border-y border-[#1A1A1A] py-4 my-8 text-xs flex flex-wrap items-center justify-between gap-3">
      <div className="flex items-center space-x-2">
        <span className="w-2 h-2 rounded-full bg-[#e62117]" />
        <span className="font-semibold text-[#1A1A1A]">
          Share article:
        </span>
      </div>

      {/* Share options exactly: Copy link, X, Facebook, and WhatsApp only */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={handleCopy}
          className="border border-[#1A1A1A] px-3 py-1 font-medium text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#F5F0E8] transition-colors"
        >
          {copied ? 'Copied to clipboard' : 'Copy link'}
        </button>

        <a
          href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-[#1A1A1A] px-3 py-1 font-medium text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#F5F0E8] transition-colors"
        >
          X
        </a>

        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-[#1A1A1A] px-3 py-1 font-medium text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#F5F0E8] transition-colors"
        >
          Facebook
        </a>

        <a
          href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-[#1A1A1A] px-3 py-1 font-medium text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#F5F0E8] transition-colors"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
};
