import NavSection from './components/NavSection';
import About from "./components/About"
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ThemeSet from './components/other components/ThemeSet';
import Contact from './components/Contact';
function App() {

  return (
    <div className='main_section'>
      <ThemeSet />
      <NavSection />
      <div className='container'>
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </div>
    </div>
  )
}

export default App
