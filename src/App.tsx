/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { Hero } from './components/Hero';
import { WhoIsThisFor } from './components/WhoIsThisFor';
import { About } from './components/About';
import { FeaturedProject } from './components/FeaturedProject';
import { Ventures } from './components/Ventures';
import { Achievements } from './components/Achievements';
import { Projects } from './components/Projects';
import { BlogPreview } from './components/BlogPreview';
import { Newsletter } from './components/Newsletter';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MyStory } from './components/MyStory';
import { Speaking } from './components/Speaking';
import { TestimonialsPage } from './components/TestimonialsPage';
import { WhatIDo } from './components/WhatIDo';
import { BookSection } from './components/BookSection';
import { BlogPost } from './components/BlogPost';
import { Careers } from './components/Careers';
import { BrandPresentation } from './components/BrandPresentation';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [postId, setPostId] = useState<string | null>(null);

  // Sync with URL query param or hash on mount and on popstate
  useEffect(() => {
    const parseLocation = () => {
      const params = new URLSearchParams(window.location.search);
      const post = params.get('post');
      if (post) {
        setPostId(post);
        return;
      }
      setPostId(null);

      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['ventures', 'ai-solution-studio'].includes(hash)) {
        setCurrentPage('what-i-do');
      } else if (['foundation', 'waihenya-foundation'].includes(hash)) {
        setCurrentPage('foundation');
      } else if (['story', 'speaking', 'testimonials', 'book', 'what-i-do', 'contact', 'blog', 'careers', 'brand', 'foundation'].includes(hash)) {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
      }
    };

    parseLocation();
    window.addEventListener('hashchange', parseLocation);
    window.addEventListener('popstate', parseLocation);
    return () => {
      window.removeEventListener('hashchange', parseLocation);
      window.removeEventListener('popstate', parseLocation);
    };
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    setPostId(null);
    if (page === 'home') {
      history.pushState(null, '', window.location.pathname);
    } else {
      window.location.hash = page;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPost = (id: string) => {
    setPostId(id);
    history.pushState(null, '', `?post=${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackFromPost = () => {
    setPostId(null);
    history.pushState(null, '', window.location.pathname);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (postId) {
    return <BlogPost postId={postId} />;
  }

  return (
    <div className="min-h-screen bg-[#060813] text-[#d4d4d4] flex flex-col selection:bg-[#00a8ff] selection:text-black">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      
      <main id="main" className="flex-1">
        {currentPage === 'home' && (
          <HomePage onNavigate={handleNavigate} onSelectPost={handleSelectPost} />
        )}

        {currentPage === 'story' && (
          <MyStory onNavigate={handleNavigate} />
        )}

        {currentPage === 'speaking' && (
          <Speaking onNavigate={handleNavigate} />
        )}

        {currentPage === 'book' && (
          <BookSection isDedicatedPage={true} onNavigate={handleNavigate} />
        )}

        {currentPage === 'testimonials' && (
          <TestimonialsPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'what-i-do' && (
          <WhatIDo onNavigate={handleNavigate} initialTab="ventures" />
        )}

        {currentPage === 'foundation' && (
          <WhatIDo onNavigate={handleNavigate} initialTab="foundation" />
        )}

        {currentPage === 'careers' && (
          <Careers onNavigate={handleNavigate} />
        )}

        {currentPage === 'blog' && (
          <div className="pt-24 pb-12">
            <BlogPreview onSelectPost={handleSelectPost} />
          </div>
        )}

        {currentPage === 'contact' && (
          <div className="pt-24 pb-12">
            <Contact />
          </div>
        )}

        {currentPage === 'brand' && (
          <BrandPresentation onNavigate={handleNavigate} />
        )}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
