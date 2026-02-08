const AboutUs = () => {
  return (
    <section id="sobre-nosotros" className="min-h-section bg-terracota py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 h-[500px] overflow-hidden shadow-2xl">
            <img
              src="/p6rntdapbuk.jpg"
              alt="Facilitadores de VERBENA"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="order-1 md:order-2 space-y-6 text-warm-white">
            <h2 className="text-4xl sm:text-5xl font-bold uppercase tracking-wide text-amarillo mb-8">
              Sobre nosotros
            </h2>

            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                Llevamos más de veinte años trabajando con el teatro, el cuerpo y la emoción,
                acompañando a personas y grupos en procesos de creación y crecimiento.
              </p>

              <p>
                Hemos dirigido obras, formado actores y diseñando programas donde el arte
                se convierte en una forma de conocimiento.
              </p>

              <p>
                VERBENA nace del deseo de llevar todo eso a un espacio más abierto,
                donde cualquier persona —no solo intérpretes— pueda usar el teatro y
                el movimiento como caminos de reconexión.
              </p>

              <p className="text-xl font-semibold text-amarillo">
                Creemos profundamente que el cuerpo sabe, que el juego transforma y que,
                cuando nos atrevemos a sentir, la vida se ensancha.
              </p>

              <p>
                Eso es lo que intentamos compartir en cada taller: una manera de estar vivos
                más completa, más presente, más celebrada.
              </p>
            </div>

            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-block bg-amarillo text-terracota px-8 py-3 font-semibold uppercase tracking-wide hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl mt-8"
            >
              Escríbeme
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
