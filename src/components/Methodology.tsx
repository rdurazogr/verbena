import { Heart, Theater, Users } from 'lucide-react';

const Methodology = () => {
  const pillars = [
    {
      icon: Heart,
      title: 'El cuerpo',
      description:
        'Es nuestra base, nuestra casa y nuestro lenguaje más antiguo. Aprendemos a escucharlo, a soltarlo y a confiar en él.',
    },
    {
      icon: Theater,
      title: 'El teatro',
      description:
        'No como representación, sino como espacio de juego, expresión y encuentro. A través de improvisaciones, dinámicas y escenas simbólicas, exploramos emociones y formas de estar en el mundo.',
    },
    {
      icon: Users,
      title: 'El grupo',
      description:
        'El verdadero corazón de VERBENA. Un grupo que acompaña, sostiene y refleja. Porque a veces necesitamos vernos en los ojos del otro para entendernos mejor.',
    },
  ];

  return (
    <section id="metodologia" className="min-h-section bg-warm-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-terracota uppercase tracking-wide mb-6">
            Nuestra forma de trabajar
          </h2>
          <p className="text-xl text-gray-warm max-w-3xl mx-auto leading-relaxed">
            En VERBENA todo parte del cuerpo y del juego. Trabajamos desde lo que eres, no desde lo que deberías ser.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div key={index} className="text-center space-y-4 p-6 hover:bg-beige-light transition-colors duration-300">
                <div className="flex justify-center">
                  <div className="bg-amarillo-soft p-6 inline-block">
                    <Icon className="text-terracota" size={48} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-terracota uppercase tracking-wide">{pillar.title}</h3>
                <div className="w-20 h-1 bg-amarillo mx-auto"></div>
                <p className="text-gray-warm leading-relaxed text-lg">{pillar.description}</p>
              </div>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-beige-light p-12 text-center shadow-lg">
            <p className="text-2xl text-terracota font-light italic leading-relaxed mb-4">
              "En VERBENA el cuerpo es nuestro punto de partida: respiramos, escuchamos, nos movemos
              y dejamos que la vida encuentre su forma."
            </p>
            <div className="w-32 h-1 bg-amarillo mx-auto my-6"></div>
            <p className="text-lg text-gray-warm leading-relaxed">
              Cada sesión es distinta, pero todas comparten una intención común:
              <span className="block mt-2 text-terracota font-semibold">
                ayudarte a sentirte más presente, más libre y más tú.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
