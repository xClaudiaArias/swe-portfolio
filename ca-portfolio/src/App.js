import React, { useState } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { Navbar } from './components/Navbar';
import Section from './components/Section';
import { Projects } from './components/Projects';
// import navbar component

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Navbar />
      <Main>
        <Section id="projects" active={activeSection === 'projects'}>
          <Projects onProjectClick={handleProjectClick} />
        </Section>
        <Section id="about" active={activeSection === 'about'}>
          <About />
        </Section>
        <Section id="contact" active={activeSection === 'contact'}>
          <Contact />
        </Section>


      </Main>
    </div>
  );
}

export default App;
