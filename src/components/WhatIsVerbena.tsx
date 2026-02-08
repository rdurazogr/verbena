const WhatIsVerbena = () => {
  return (
    <section id="que-es-verbena" className="min-h-section bg-warm-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-terracota uppercase tracking-wide">
              Lo que ocurre cuando vuelves al cuerpo
            </h2>

            <div className="space-y-4 text-gray-warm text-lg leading-relaxed">
              <p>
                VERBENA es un proyecto que une teatro, cuerpo y movimiento como herramientas para el bienestar,
                la creatividad y el desarrollo personal.
              </p>

              <p>
                Nace de una idea sencilla: cuando el cuerpo se expresa, algo dentro de nosotros se ordena y se abre.
              </p>

              <p>
                En cada taller combinamos dinámicas teatrales, movimiento consciente y exploración emocional
                de una manera amable, divertida y respetuosa.
              </p>

              <p>
                No se trata de "hacer terapia", sino de explorar quiénes somos cuando nos damos permiso
                para sentir, jugar y movernos libremente.
              </p>

              <p className="text-terracota font-semibold text-xl">
                Cada encuentro es una pequeña celebración: del cuerpo, del grupo, del instante
                y de todo lo que somos capaces de expresar cuando nos quitamos la máscara.
              </p>
            </div>

            <a
              href="#talleres"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#talleres')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-block bg-amarillo text-terracota px-8 py-3 font-semibold uppercase tracking-wide hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Ver próximos talleres
            </a>
          </div>

          <div className="relative h-[500px] overflow-hidden shadow-2xl">
            <img
              src="/dancing-5297381_1280.jpg"
              alt="Personas mayores en movimiento expresivo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-2xl text-terracota font-light italic leading-relaxed">
            "Un lugar donde el cuerpo se mueve, el alma respira y la vida se celebra."
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIsVerbena;
