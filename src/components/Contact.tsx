import { useState } from 'react';
import { Mail, Instagram, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('¡Gracias por tu interés! Te contactaremos pronto.');
    setFormData({ name: '', email: '', city: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="min-h-section bg-amarillo-soft py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-terracota uppercase tracking-wide mb-6">
            ¿Te apetece venir a una VERBENA?
          </h2>
          <p className="text-xl text-gray-warm leading-relaxed max-w-2xl mx-auto">
            Escríbeme para recibir información sobre próximos talleres, el programa online o para reservar tu plaza.
          </p>
        </div>

        <div className="bg-white shadow-2xl p-8 md:p-12 mb-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-terracota font-semibold mb-2 uppercase text-sm">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-beige-light focus:border-terracota focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-terracota font-semibold mb-2 uppercase text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-beige-light focus:border-terracota focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="city" className="block text-terracota font-semibold mb-2 uppercase text-sm">
                Ciudad
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-beige-light focus:border-terracota focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-terracota font-semibold mb-2 uppercase text-sm">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                className="w-full px-4 py-3 border-2 border-beige-light focus:border-terracota focus:outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-amarillo text-terracota px-8 py-4 font-semibold uppercase tracking-wide hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <span>Quiero más información</span>
              <Send size={20} />
            </button>
          </form>
        </div>

        <div className="text-center space-y-6">
          <div className="flex justify-center space-x-8">
            <a
              href="mailto:correo@verbena.com"
              className="flex items-center space-x-2 text-terracota hover:text-amarillo transition-colors"
            >
              <Mail size={24} />
              <span className="text-lg">correo@verbena.com</span>
            </a>
            <a
              href="https://instagram.com/verbena.teatrocuerpo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-terracota hover:text-amarillo transition-colors"
            >
              <Instagram size={24} />
              <span className="text-lg">@verbena.teatrocuerpo</span>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <div className="inline-block bg-white p-8 shadow-lg max-w-2xl">
          <p className="text-xl text-terracota italic leading-relaxed">
            "VERBENA: Un lugar donde el cuerpo se mueve, el alma respira y la vida se celebra."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
