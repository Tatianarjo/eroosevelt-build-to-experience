import Cursor             from './components/Cursor'
import Nav                from './components/Nav'
import Hero               from './components/Hero'
import Marquee            from './components/Marquee'
import About              from './components/About'
import Services           from './components/Services'
import Projects           from './components/Projects'
import Gallery            from './components/Gallery'
import BuildToExperience  from './components/BuildToExperience'
import Clients            from './components/Clients'
import Contact            from './components/Contact'

export default function App() {
  return (
    <>
      {/* Custom cursor — hidden on mobile via CSS */}
      <Cursor />

      {/* Navigation */}
      <Nav />

      {/* Page sections */}
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Projects />
        <Gallery />
        <BuildToExperience />
        <Clients />
        <Contact />
      </main>
    </>
  )
}
