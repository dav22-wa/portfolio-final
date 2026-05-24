/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Background } from './components/Background';
import { Achievements } from './components/Achievements';
import { BlogPreview } from './components/BlogPreview';
import { Newsletter } from './components/Newsletter';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Background />
        <Achievements />
        <BlogPreview />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
