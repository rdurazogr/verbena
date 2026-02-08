import { MapPin, Calendar, Globe } from 'lucide-react';

const Workshops = () => {
  const workshops = [
    {
      icon: MapPin,
      title: 'Asturias',
      description: 'Grupos semanales en Gijón, Oviedo y Avilés.',
      details: 'Un espacio estable donde venir a desconectar, moverte, expresarte y recargarte de energía cada semana.',
      buttonText: 'Quiero unirme',
      image: '/asturias.png',
    },
    {
      icon: Calendar,
      title: 'Madrid',
      description: 'Talleres intensivos de fin de semana (sábado y domingo de 10 a 14h).',
      details: 'Para quienes quieren vivir la experiencia VERBENA de forma concentrada y transformadora.',
      buttonText: 'Apúntate al próximo',
      image: '/bailando_mayores.png',
    },
    {
      icon: Globe,
      title: 'Online',
      description: 'Cursos grabados y sesiones en directo cada quince días.',
      details: 'Para seguir conectado con tu cuerpo y tu proceso desde donde estés.',
      buttonText: 'Más info',
      image: '/online_mayores.png',
    },
  ];

  return (
    <section id="talleres" className="min-h-section bg-beige-light py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-terracota uppercase tracking-wide mb-6">
            Tres maneras de vivir VERBENA
          </h2>
          <p className="text-xl text-gray-warm max-w-2xl mx-auto">
            VERBENA es un centro itinerante. Nos movemos —igual que tú— entre ciudades, emociones y experiencias.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {workshops.map((workshop, index) => {
            const Icon = workshop.icon;
            return (
              <div
                key={index}
                className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={workshop.image}
                    alt={workshop.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon className="text-amarillo" size={32} />
                    <h3 className="text-2xl font-bold text-terracota uppercase">{workshop.title}</h3>
                  </div>
                  <p className="text-terracota font-semibold">{workshop.description}</p>
                  <p className="text-gray-warm leading-relaxed">{workshop.details}</p>
                  <a
                    href="#contacto"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-block bg-amarillo text-terracota px-6 py-2 font-semibold uppercase tracking-wide text-sm hover:bg-opacity-90 transition-all duration-300"
                  >
                    {workshop.buttonText}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center bg-terracota-light p-8 max-w-3xl mx-auto">
          <p className="text-lg text-gray-warm leading-relaxed">
            No hay niveles ni objetivos cerrados. Cada persona llega con su propio ritmo, su propia historia y su propio cuerpo.
            <span className="block mt-2 text-terracota font-semibold">Aquí todo eso tiene lugar.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Workshops;
