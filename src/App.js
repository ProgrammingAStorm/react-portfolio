import { useState } from 'react';

import Header from './components/Header';

import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

import Footer from './components/Footer';

function App() {
  const [content, setContent] = useState("About Me");

  return (
    <div>
      <Header
        content={content}
        setContent={setContent}
      />

      <main>
        {content === "About Me" && (
          <AboutMe />
        )}

        {content === "Portfolio" && (
          <Portfolio />
        )}

        {content === "Contact" && (
          <Contact />
        )}

        {content === "Resume" && (
          <Resume />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
