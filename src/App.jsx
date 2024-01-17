
import Art from '../Components/Art/Art'
import Contact from '../Components/Contact/Contact'
import Education from '../Components/Education/Education'
import Footer from '../Components/Footer/Footer'
import Hero from '../Components/Hero/Hero'
import Nav from '../Components/Nav/Nav'
import Projects from '../Components/Projects/Projects'
import Skills from '../Components/Skills/Skills'
import './App.css'

function App() {


  return (
    <>
      <Nav />
      <div className='hero-style'>
        <Hero />
      </div>
      <Education />
      <Skills />
      <Projects />
      <Art />
      <div className='contact-bg'>
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default App
