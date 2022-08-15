import { useState } from 'react';

import Header from './components/Header';

import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

import Footer from './components/Footer';
import { Container } from '@mui/system';
import { Paper } from '@mui/material';

function App() {
  const [content, setContent] = useState("About Me");

  return (
    <div>
      <Header
        content={content}
        setContent={setContent}
      />

      <main style={{ backgroundColor: "#3D0B37", padding: "1.5rem" }}>

        <Paper
          elevation={3}
          sx={[
            {
              backgroundColor: "#F1DAC4"
            },
            {
              padding: "1.5rem"
            }
          ]}
        >
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
        </Paper>
      </main>

      <Footer />
    </div>
  );
}

export default App;
