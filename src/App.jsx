import './App.css'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Contact from './components/sections/Contact'
import Education from './components/sections/Education'
import Certifications from './components/sections/Certifications'
import ScrollToTop from './components/layout/ScrollToTop'

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="app-shell__main" aria-label="Portfolio content"><Hero /><Skills /><Projects /><Experience /><Education /><Certifications /><Contact /></main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
