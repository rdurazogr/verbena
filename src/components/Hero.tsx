import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const element = document.querySelector('#que-es-verbena');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/ai-generated-8881543_1280.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-terracota-overlay"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32">
        <p className="text-2xl sm:text-3xl text-warm-white mb-8 font-light">
          Teatro, cuerpo y movimiento para <span className="text-amarillo">(celebrar)</span> la vida
        </p>

        <div className="max-w-2xl mx-auto space-y-6 text-warm-white text-lg leading-relaxed mb-12">
          <p className="text-xl font-medium">
            El cuerpo también necesita su fiesta.
          </p>

          <p>
            VERBENA es un espacio donde el teatro, el cuerpo y el movimiento se unen para ayudarte a reconectar contigo,
            soltar tensiones, expresarte y recuperar la alegría de estar vivo.
          </p>

          <p>
            No hace falta tener experiencia escénica ni saber "actuar".
            Solo ganas de sentir, explorar y compartir.
          </p>

          <p>
            Aquí no venimos a representar nada, sino a presenciarnos.
            A escuchar lo que el cuerpo tiene que decir.
            A dejarnos mover por lo que nos pasa, y descubrir que detrás de cada gesto hay vida queriendo expresarse.
          </p>

          <p className="font-medium">
            VERBENA es una invitación a volver al cuerpo —a celebrarlo, a cuidarlo y a dejar que nos devuelva al presente.
          </p>
        </div>

        <button
          onClick={scrollToNext}
          className="bg-amarillo text-terracota px-8 py-4 text-lg font-semibold uppercase tracking-wide hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Descubre VERBENA
        </button>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-warm-white" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
