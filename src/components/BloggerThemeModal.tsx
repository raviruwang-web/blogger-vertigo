/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BLOGGER_THEME_XML } from '../data/bloggerThemeXml';
import { Download, Copy, Check, X, FileCode, ExternalLink, HelpCircle } from 'lucide-react';

interface BloggerThemeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BloggerThemeModal: React.FC<BloggerThemeModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'instructions' | 'code'>('instructions');

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(BLOGGER_THEME_XML);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      const textarea = document.createElement('textarea');
      textarea.value = BLOGGER_THEME_XML;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([BLOGGER_THEME_XML], { type: 'application/xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'vertigo-pov-blogger-theme.xml';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A1A1A]/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="bg-[#F5F0E8] border-2 border-[#1A1A1A] w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="blogger-modal-title"
      >
        {/* Modal Header */}
        <div className="border-b border-[#1A1A1A] px-6 py-4 flex items-center justify-between bg-[#F5F0E8]">
          <div className="flex items-center space-x-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#e62117] inline-block" />
            <div>
              <h2 id="blogger-modal-title" className="font-display font-extrabold text-xl tracking-tight text-[#1A1A1A] uppercase">
                VERTIGO POV — Blogger / Blogspot Theme XML
              </h2>
              <p className="text-xs text-[#6B6B6B] font-medium">
                Complete, valid Blogger v3 standalone XML template file ready to install
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action bar & tabs */}
        <div className="border-b border-[#1A1A1A]/20 px-6 py-3 flex flex-wrap items-center justify-between gap-3 bg-[#EFE9DF]">
          <div className="flex space-x-2">
            <button
              onClick={() => setActiveTab('instructions')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-none border transition-colors ${
                activeTab === 'instructions'
                  ? 'bg-[#1A1A1A] text-[#F5F0E8] border-[#1A1A1A]'
                  : 'bg-transparent text-[#1A1A1A] border-[#1A1A1A]/30 hover:border-[#1A1A1A]'
              }`}
            >
              How to Install (3 Steps)
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-none border transition-colors ${
                activeTab === 'code'
                  ? 'bg-[#1A1A1A] text-[#F5F0E8] border-[#1A1A1A]'
                  : 'bg-transparent text-[#1A1A1A] border-[#1A1A1A]/30 hover:border-[#1A1A1A]'
              }`}
            >
              View XML Source
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopy}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-semibold border border-[#1A1A1A] bg-[#F5F0E8] hover:bg-[#1A1A1A] hover:text-[#F5F0E8] transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#e62117]" />
                  <span>Copied XML!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy XML</span>
                </>
              )}
            </button>

            <button
              onClick={handleDownload}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-semibold bg-[#e62117] text-white hover:bg-[#c9180f] transition-colors shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download .XML File</span>
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto flex-1 text-sm text-[#1A1A1A]">
          {activeTab === 'instructions' ? (
            <div className="space-y-6">
              <div className="bg-[#FAF7F2] border border-[#1A1A1A]/20 p-4">
                <h3 className="font-bold text-base text-[#1A1A1A] flex items-center space-x-2">
                  <FileCode className="w-4 h-4 text-[#e62117]" />
                  <span>What is in this Blogger Theme package?</span>
                </h3>
                <p className="mt-1 text-xs text-[#6B6B6B] leading-relaxed">
                  This is a 100% valid, standalone <strong>Blogger v3 XML theme</strong> tailored to match the Vertigo POV design system:
                </p>
                <div className="mt-2 text-xs bg-[#EAE4D8]/60 p-2.5 border-l-2 border-[#e62117] space-y-1 text-[#1A1A1A]">
                  <p className="font-semibold text-[#1A1A1A]">✓ Strict XML &amp; Blogger v3 Validation Passed:</p>
                  <p className="text-[#6B6B6B]">
                    Fixed HTML entities (e.g. replaced undefined entities with numeric entities), resolved self-closing tags to explicit closing tags, implemented Blogger v3 compliant Blog1 includables (main, post, postPagination), and decoupled share buttons from fragile expression parsers.
                  </p>
                </div>
                <ul className="mt-3 text-xs text-[#1A1A1A] space-y-1 list-disc pl-4">
                  <li><strong>Color palette</strong>: Paper/bone background (<code className="bg-[#EAE4D8] px-1 py-0.5 rounded-none font-sans">#F5F0E8</code>), ink black text (<code className="bg-[#EAE4D8] px-1 py-0.5 rounded-none font-sans">#1A1A1A</code>), graphite (<code className="bg-[#EAE4D8] px-1 py-0.5 rounded-none font-sans">#6B6B6B</code>), REC-red (<code className="bg-[#EAE4D8] px-1 py-0.5 rounded-none font-sans">#e62117</code>).</li>
                  <li><strong>Typography</strong>: Archivo 800 headings + Inter body and labels. No monospace fonts.</li>
                  <li><strong>Features</strong>: Top REC strip, reading progress line, post body styling for pull quotes, tables, image captions, and share buttons (Copy Link, X, Facebook, WhatsApp).</li>
                  <li><strong>Author</strong>: Site author strictly branded as Vertigo POV.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-display font-extrabold text-base tracking-tight text-[#1A1A1A] uppercase border-b border-[#1A1A1A]/20 pb-2">
                  How to install it on your Blogspot blog
                </h4>

                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#1A1A1A] text-[#F5F0E8] font-bold text-xs flex items-center justify-center flex-shrink-0">
                      1
                    </div>
                    <div>
                      <p className="font-semibold text-[#1A1A1A]">Download or Copy the XML</p>
                      <p className="text-xs text-[#6B6B6B] mt-0.5">
                        Click the red <strong className="text-[#1A1A1A]">Download .XML File</strong> button above to save <code className="bg-[#EAE4D8] px-1 py-0.5 rounded-none font-sans">vertigo-pov-blogger-theme.xml</code> to your computer.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#1A1A1A] text-[#F5F0E8] font-bold text-xs flex items-center justify-center flex-shrink-0">
                      2
                    </div>
                    <div>
                      <p className="font-semibold text-[#1A1A1A]">Go to your Blogger Dashboard</p>
                      <p className="text-xs text-[#6B6B6B] mt-0.5">
                        Open <a href="https://www.blogger.com" target="_blank" rel="noopener noreferrer" className="text-[#e62117] underline inline-flex items-center gap-1">blogger.com <ExternalLink className="w-3 h-3" /></a> &rarr; click <strong className="text-[#1A1A1A]">Theme</strong> in the left sidebar menu.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#1A1A1A] text-[#F5F0E8] font-bold text-xs flex items-center justify-center flex-shrink-0">
                      3
                    </div>
                    <div>
                      <p className="font-semibold text-[#1A1A1A]">Restore or Edit HTML</p>
                      <p className="text-xs text-[#6B6B6B] mt-0.5">
                        Next to the orange &quot;Customize&quot; button, click the small <strong className="text-[#1A1A1A]">dropdown arrow (&#9662;)</strong> and choose:
                      </p>
                      <div className="mt-2 bg-[#EFE9DF] border border-[#1A1A1A]/15 p-3 text-xs space-y-2">
                        <p><strong>Option A (Recommended):</strong> Click <strong className="text-[#1A1A1A]">Restore</strong> &rarr; click <strong className="text-[#1A1A1A]">Upload</strong> &rarr; select the downloaded <code className="bg-[#EAE4D8] px-1 py-0.5 font-sans">vertigo-pov-blogger-theme.xml</code> file.</p>
                        <p><strong>Option B:</strong> Click <strong className="text-[#1A1A1A]">Edit HTML</strong> &rarr; select all existing code (<kbd className="border border-[#1A1A1A]/30 px-1 py-0.5 bg-white">Ctrl+A</kbd>) &rarr; paste the copied XML &rarr; click the disk/save icon.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#1A1A1A]/20 pt-4 flex items-start gap-2 text-xs text-[#6B6B6B]">
                <HelpCircle className="w-4 h-4 text-[#e62117] flex-shrink-0 mt-0.5" />
                <p>
                  <strong>Tip:</strong> Always backup your current Blogger theme first by clicking the dropdown arrow and selecting <strong>Backup</strong> before applying a new theme.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs text-[#6B6B6B]">
                <span>Showing vertigo-pov-blogger-theme.xml</span>
                <span>{BLOGGER_THEME_XML.split('\n').length} lines</span>
              </div>
              <pre className="p-4 bg-[#1A1A1A] text-[#F5F0E8] text-xs font-mono overflow-x-auto max-h-[420px] rounded-none border border-[#1A1A1A] selection:bg-[#e62117] selection:text-white">
                {BLOGGER_THEME_XML}
              </pre>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="border-t border-[#1A1A1A] px-6 py-3 flex items-center justify-between bg-[#F5F0E8]">
          <span className="text-xs text-[#6B6B6B]">
            Vertigo POV &middot; Standalone Blogger XML v3
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold bg-[#1A1A1A] text-[#F5F0E8] hover:bg-[#e62117] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
