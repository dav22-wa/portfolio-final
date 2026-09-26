/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
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
      if (['story', 'speaking', 'testimonials', 'book', 'what-i-do', 'contact', 'blog'].includes(hash)) {
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
          <>
            {/* 1. Hero Section (Dan Martell layout with Dave's identity & mission) */}
            <Hero onNavigate={handleNavigate} />

            {/* 2. "Who I Help" Section (Startups, Local Businesses, Students) */}
            <WhoIsThisFor onNavigate={handleNavigate} />

            {/* 3. "My Story" Section (2022 zero background to First Class Honours & ventures) */}
            <About onNavigate={handleNavigate} />

            {/* 4. Featured Flagship Project (SYNERGY Multi-Agent Intelligence & Builder's Blueprint) */}
            <FeaturedProject onNavigate={handleNavigate} />

            {/* 5. Companies / Ventures Section (SYNERGY, Velox AI, Davamos Tech) */}
            <Ventures onNavigate={handleNavigate} />

            {/* 6. Certifications & Achievements Section (IBM Skills, CCNA, Mozilla Challenge, First Class) */}
            <Achievements onNavigate={handleNavigate} />

            {/* 7. Production Projects Repository (Full engineered systems) */}
            <Projects />

            {/* 8. Blog Section (Latest essays on AI, Python/Flask, freelancing, cybersecurity) */}
            <BlogPreview onSelectPost={handleSelectPost} />

            {/* 9. Newsletter Section (Weekly builder's dispatch) */}
            <Newsletter />

            {/* 10. Contact / "Work With Me" Section */}
            <Contact />
          </>
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
          <WhatIDo onNavigate={handleNavigate} />
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
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
