import { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Showcase } from './components/Showcase';
import { Projects } from './components/Projects';
import { ProjectModal } from './components/ProjectModal';
import { Journey } from './components/Journey';
import { Terminal } from './components/Terminal';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import type { Project } from './types';

export function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-[#050505] text-slate-100 font-sans relative selection:bg-cyan-500 selection:text-black">
      {/* Custom Mouse Cursor */}
      <CustomCursor />

      {/* Cyber Loading Screen */}
      {!loadingComplete && (
        <LoadingScreen onComplete={() => setLoadingComplete(true)} />
      )}

      {/* Main Portfolio Content */}
      <div className="opacity-100">
        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Showcase onSelectProject={(project) => setSelectedProject(project)} />
          <Projects onSelectProject={(project) => setSelectedProject(project)} />
          <Journey />
          <Terminal />
          <Services />
          <Contact />
        </main>

        <Footer />

        {/* Project Deep-Dive Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </div>
  );
}

export default App;
