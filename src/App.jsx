import Header from './components/layout/Header'
import Hero from './sections/Hero'
import Historia from './sections/Historia'
import Productos from './sections/Productos'
import Contacto from './sections/Contacto'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Historia />
        <Productos />
        <Contacto />
      </main>
      <Footer />
    </div>
  )
}

export default App
