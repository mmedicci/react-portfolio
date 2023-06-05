import Menu from './componentes/Menu';
import About from './componentes/About';
import Academic from './componentes/Academic';
import Hero from './componentes/Hero';
import Services from './componentes/Services';
import Projects from './componentes/Projects';
import Contacts from './componentes/Contact';
import Skills from './componentes/Skills';
import Footer from './componentes/Footer';
import './App.css'

function App() {
  return (
    <main>
      <Menu />
      <Hero />
      <About />
      <Academic />
      <Services />
      <Projects />
      <Skills />
      <Contacts />
      <Footer />
    </main>
  )
}

export default App;
