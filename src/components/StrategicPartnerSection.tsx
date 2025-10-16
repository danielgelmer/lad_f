import { CheckCircle2, TrendingUp, Shield, BarChart3 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const benefits = [
  'Centralización de materiales (eléctricos, cemento, etc.)',
  'Asesoramiento personalizado para cada proyecto',
  'Enfoque B2B en proyectos, no ventas minoristas',
  'Trazabilidad completa con tecnología avanzada',
];

const features = [
  {
    icon: TrendingUp,
    title: 'Eficiencia',
    description: 'Reducción de costos operativos',
  },
  {
    icon: Shield,
    title: 'Seguridad',
    description: 'Procesos certificados',
  },
  {
    icon: BarChart3,
    title: 'Control',
    description: 'Métricas en tiempo real',
  },
];

export function StrategicPartnerSection() {
  return (
    <section id="servicios" className="py-20 bg-[#232323]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-white mb-4 text-3xl md:text-4xl lg:text-5xl">
            LADCOM: Su Socio Estratégico
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Soluciones Prácticas que Traccionan su Negocio
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="bg-[#f4bb23]/10 border border-[#f4bb23] rounded-xl p-6 mb-8">
              <h3 className="text-white mb-3">El Problema</h3>
              <p className="text-white/80">
                En grandes proyectos, coordinar múltiples proveedores consume recursos valiosos, 
                genera ineficiencias y puede comprometer los tiempos de entrega.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 mb-8">
              <h3 className="text-[#232323] mb-3">Nuestra Solución</h3>
              <p className="text-[#232323]/80 mb-4">
                Actuamos como su <strong className="text-[#f4bb23]">unidad centralizada de compras</strong>, 
                facilitando adquisiciones, eficientizando inversiones y asegurando trazabilidad con tecnología avanzada.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#f4bb23] flex-shrink-0 mt-1" size={20} />
                    <p className="text-[#232323]">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-[#f4bb23] rounded-lg flex items-center justify-center mx-auto mb-2">
                    <feature.icon className="text-[#232323]" size={24} />
                  </div>
                  <h4 className="text-white mb-1 text-sm">{feature.title}</h4>
                  <p className="text-white/60 text-xs">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Process Diagram */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-[#232323] mb-6 text-center">Proceso Optimizado</h3>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'Solicitud', desc: 'Recibimos sus necesidades' },
                  { step: '2', title: 'Análisis', desc: 'Evaluamos la mejor solución' },
                  { step: '3', title: 'Coordinación', desc: 'Centralizamos proveedores' },
                  { step: '4', title: 'Entrega', desc: 'Garantizamos tiempos' },
                  { step: '5', title: 'Seguimiento', desc: 'Trazabilidad total' },
                ].map((item) => (
                  <div key={item.step} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#f4bb23] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-[#232323]">{item.step}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[#232323]">{item.title}</h4>
                      <p className="text-[#232323]/60 text-sm">{item.desc}</p>
                    </div>
                    {item.step !== '5' && (
                      <div className="w-px h-8 bg-[#f4bb23]/30 absolute ml-6 mt-12"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
