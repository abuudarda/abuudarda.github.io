import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Expertise } from './components/Expertise';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { AIChat } from './components/AIChat';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero onOpenChat={() => setIsChatOpen(true)} />
      <About />
      <Expertise />
      <Education />
      <Experience />
      <Projects />
      <Achievements />
      <Certifications />
      <Contact />
      <AIChat isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
    </main>
  );
}

export default App;