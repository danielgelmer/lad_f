import { Clock, Lightbulb, Palette, Truck, Briefcase } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const values = [
  {
    icon: Clock,
    title: 'Experiencia',
    description: '60+ años de conocimiento del sector',
  },
  {
    icon: Lightbulb,
    title: 'Innovación',
    description: 'Soluciones tecnológicas avanzadas',
  },
  {
    icon: Palette,
    title: 'Creatividad',
    description: 'Enfoque único y personalizado',
  },
  {
    icon: Truck,
    title: 'Delivery',
    description: 'Cumplimiento garantizado',
  },
  {
    icon: Briefcase,
    title: 'Profesionalismo',
    description: 'Estándares de excelencia',
  },
];

export function EssenceSection() {
  return (
    <section id="sobre-nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#232323] mb-4 text-3xl md:text-4xl lg:text-5xl">
            Trayectoria que Impulsa el Mañana
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div>
            <p className="text-[#232323] text-lg mb-6">
              Nuestros fundadores suman más de <strong className="text-[#f4bb23]">60 años de experiencia</strong> en el sector, 
              convirtiendo ese know-how en un modelo colaborativo, transparente y enfocado en eficiencia.
            </p>
            <p className="text-[#232323]/70 mb-6">
              En LADCOM entendemos que cada proyecto es único y requiere un socio estratégico que no solo provea 
              materiales, sino que se convierta en un aliado fundamental para el éxito.
            </p>
            <p className="text-[#232323]/70">
              Nuestra misión es transformar la manera en que se gestionan las adquisiciones en proyectos de gran 
              envergadura, aportando valor en cada etapa del proceso.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758518730523-c9f6336ebdae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjB3b3JraW5nJTIwdG9nZXRoZXJ8ZW58MXx8fHwxNzYwMTIxMzE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Equipo trabajando juntos"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#f4bb23] rounded-2xl -z-10"></div>
          </div>
        </div>

        {/* Values Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="group p-6 border-2 border-[#232323]/10 rounded-xl hover:border-[#f4bb23] transition-all hover:shadow-lg text-center"
            >
              <div className="w-14 h-14 bg-[#f4bb23] rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <value.icon className="text-[#232323]" size={28} />
              </div>
              <h3 className="text-[#232323] mb-2">{value.title}</h3>
              <p className="text-[#232323]/70 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
