import './App.css'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Projects />
        <Certificates />
        <Contact />
      </main>
    </>
  )
}

export default App
