/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AviationHeader } from './components/AviationHeader';
import { FlightLineProgress } from './components/FlightLineProgress';
import { HomePage } from './components/HomePage';
import { ArticlePage } from './components/ArticlePage';
import { Footer } from './components/Footer';
import { BloggerThemeModal } from './components/BloggerThemeModal';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'article'>('article');
  const [isBloggerModalOpen, setIsBloggerModalOpen] = useState<boolean>(false);

  const handleNavigate = (view: 'home' | 'article') => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#F5F0E8] text-[#1A1A1A]">
      {/* Flight-Line Reading Progress Bar (Active when reading the article) */}
      {currentView === 'article' && <FlightLineProgress />}

      {/* Header with REC dot and clean navigation */}
      <AviationHeader
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenBloggerModal={() => setIsBloggerModalOpen(true)}
      />

      {/* Main View Router */}
      <main className="flex-1 w-full">
        {currentView === 'home' ? (
          <HomePage onOpenArticle={() => handleNavigate('article')} />
        ) : (
          <ArticlePage onBackToArchive={() => handleNavigate('home')} />
        )}
      </main>

      {/* Signature Vertigo POV Footer */}
      <Footer />

      {/* Blogger Theme XML Exporter Modal */}
      <BloggerThemeModal
        isOpen={isBloggerModalOpen}
        onClose={() => setIsBloggerModalOpen(false)}
      />
    </div>
  );
}
