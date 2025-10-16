import { Building2, Factory, Radio, Fuel } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const sectors = [
  {
    icon: Building2,
    title: 'Inmobiliario',
    subtitle: 'Residencial & Corporativo',
    description: 'Centralizamos la adquisición de materiales para proyectos residenciales y corporativos, garantizando calidad y tiempos de entrega óptimos.',
    image: 'https://images.unsplash.com/photo-1557813282-bcd50093e38f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzYwMDc4NDkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    icon: Factory,
    title: 'Industrial',
    subtitle: 'Logística & Manufactura',
    description: 'Soluciones para proyectos industriales de gran escala, incluyendo centros logísticos y plantas de manufactura con requerimientos especializados.',
    image: 'https://images.unsplash.com/photo-1669003153363-6d7ba8e20c7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2FyZWhvdXNlJTIwbG9naXN0aWNzfGVufDF8fHx8MTc2MDExMjQ0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    icon: Radio,
    title: 'Telecomunicaciones',
    subtitle: 'Despliegue 5G & Infraestructura',
    description: 'Suministro especializado para proyectos de telecomunicaciones, incluyendo despliegue de redes 5G y modernización de infraestructura.',
    image: 'https://images.unsplash.com/photo-1643155193188-38eb08e2b54f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWxlY29tbXVuaWNhdGlvbnMlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MDEwOTUyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    icon: Fuel,
    title: 'Oil & Gas',
    subtitle: 'Proyectos de Envergadura',
    description: 'En Oil & Gas, centralizamos suministros para proyectos de gran envergadura como Vaca Muerta, asegurando eficiencia en condiciones exigentes.',
    image: 'https://images.unsplash.com/photo-1546486257-9eebc43c9f55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBnYXMlMjBpbmR1c3RyeXxlbnwxfHx8fDE3NjAwNjMxNDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function SectorsSection() {
  return (
    <section id="sectores" className="py-20 bg-[#232323]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-[#f4bb23]/20 border border-[#f4bb23] rounded-full">
            <span className="text-[#f4bb23]">Experiencia Comprobada</span>
          </div>
          <h2 className="text-white mb-4 text-3xl md:text-4xl lg:text-5xl">
            Donde la Ejecución Impecable es Crítica
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Nuestra experiencia abarca los sectores más exigentes de la industria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-[16/9] overflow-hidden relative">
                <ImageWithFallback
                  src={sector.image}
                  alt={sector.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#232323]/80 to-transparent"></div>
                <div className="absolute top-4 left-4 w-12 h-12 bg-[#f4bb23] rounded-lg flex items-center justify-center">
                  <sector.icon className="text-[#232323]" size={24} />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-[#232323] mb-1">{sector.title}</h3>
                <p className="text-[#f4bb23] mb-3 text-sm">{sector.subtitle}</p>
                <p className="text-[#232323]/70">{sector.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-white/10">
          {[
            { value: '500+', label: 'Proyectos Completados' },
            { value: '50+', label: 'Clientes Activos' },
            { value: '4', label: 'Sectores Principales' },
            { value: '99%', label: 'Satisfacción' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-[#f4bb23] mb-2 text-3xl md:text-4xl">{stat.value}</div>
              <p className="text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
