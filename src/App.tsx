import './App.css'
import NavBar from './components/NavBar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Achievements from './sections/Achievements'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import Background from './components/Background'

function App() {
  return (
    <div className="min-h-screen">
      <Background />
      <NavBar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Achievements />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
