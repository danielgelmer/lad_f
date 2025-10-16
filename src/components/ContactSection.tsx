import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('¡Gracias por contactarnos! Un especialista de LADCOM se comunicará con usted en breve.');
    setFormData({ name: '', company: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#232323] mb-4 text-3xl md:text-4xl lg:text-5xl">
            ¿Listo para Eficientizar su Próximo Desafío?
          </h2>
          <p className="text-[#232323]/70 max-w-2xl mx-auto text-lg">
            Comience con la experiencia LADCOM: eficiencia, innovación y éxito compartido.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-[#232323] p-8 rounded-2xl shadow-xl">
            <h3 className="text-white mb-6">Envíenos un Mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-[#f4bb23] transition-colors"
                  placeholder="Juan Pérez"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-white mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-[#f4bb23] transition-colors"
                  placeholder="Su Empresa SRL"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-[#f4bb23] transition-colors"
                  placeholder="juan@empresa.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-[#f4bb23] transition-colors resize-none"
                  placeholder="Cuéntenos sobre su proyecto..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#f4bb23] text-[#232323] px-8 py-4 rounded-lg hover:bg-[#d9a820] transition-colors flex items-center justify-center gap-2"
              >
                Contáctenos
                <Send size={20} />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-[#f4bb23] rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="text-[#232323]" size={24} />
              </div>
              <div>
                <h3 className="text-[#232323] mb-2">Email</h3>
                <p className="text-[#232323]/70">contacto@ladcom.com.ar</p>
                <p className="text-[#232323]/70">ventas@ladcom.com.ar</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-[#f4bb23] rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="text-[#232323]" size={24} />
              </div>
              <div>
                <h3 className="text-[#232323] mb-2">Teléfono</h3>
                <p className="text-[#232323]/70">+54 11 xxxx-xxxx</p>
                <p className="text-[#232323]/70">WhatsApp: +54 9 11 xxxx-xxxx</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-[#f4bb23] rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="text-[#232323]" size={24} />
              </div>
              <div>
                <h3 className="text-[#232323] mb-2">Ubicación</h3>
                <p className="text-[#232323]/70">
                  Buenos Aires, Argentina<br />
                  Zona de cobertura: Nacional
                </p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-[#f4bb23]/10 border-2 border-[#f4bb23] rounded-xl">
              <h3 className="text-[#232323] mb-3">Horario de Atención</h3>
              <p className="text-[#232323]/70 mb-2">
                <strong>Lunes a Viernes:</strong> 9:00 AM - 6:00 PM
              </p>
              <p className="text-[#232323]/70">
                <strong>Sábados:</strong> 10:00 AM - 2:00 PM
              </p>
            </div>

            {/* Map placeholder */}
            <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.50748728295!2d-58.51570385!3d-34.6156525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20Argentina!5e0!3m2!1ses!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Ubicación LADCOM"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
