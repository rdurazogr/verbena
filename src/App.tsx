import Header from './components/Header';
import Hero from './components/Hero';
import WhatIsVerbena from './components/WhatIsVerbena';
import Workshops from './components/Workshops';
import Methodology from './components/Methodology';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <WhatIsVerbena />
        <Workshops />
        <Methodology />
        <AboutUs />
        <Contact />
      </main>
      <footer className="bg-terracota text-warm-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <img
            src="/logo_2 copy.png"
            alt="VERBENA Logo"
            className="h-16 w-auto mx-auto mb-4"
          />
          <p className="text-sm">
            &copy; {new Date().getFullYear()} VERBENA: teatro, cuerpo y movimiento para celebrar la vida.
          </p>
          <p className="text-xs mt-2 opacity-75">Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
