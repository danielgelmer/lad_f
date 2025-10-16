import { DollarSign, Users, TrendingUp, Award } from 'lucide-react';

const benefits = [
  {
    icon: DollarSign,
    title: 'Ganancias Compartidas',
    description: 'Modelo de revenue sharing transparente que premia a nuestros aliados por cada proyecto exitoso.',
  },
  {
    icon: Users,
    title: 'Red Colaborativa',
    description: 'Acceso a una red de profesionales y empresas líderes en el sector de la construcción.',
  },
  {
    icon: TrendingUp,
    title: 'Crecimiento Mutuo',
    description: 'Oportunidades de negocio constantes y apoyo en desarrollo comercial.',
  },
  {
    icon: Award,
    title: 'Reconocimiento',
    description: 'Promoción activa de nuestros aliados en nuestros canales y proyectos.',
  },
];

export function CollaborativeModelSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="red-aliados" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-[#f4bb23]/10 border border-[#f4bb23] rounded-full">
            <span className="text-[#232323]">Nuestro Diferencial</span>
          </div>
          <h2 className="text-[#232323] mb-4 text-3xl md:text-4xl lg:text-5xl">
            Transparencia Radical: Crecemos Juntos
          </h2>
          <p className="text-[#232323]/70 max-w-3xl mx-auto text-lg">
            No somos solo proveedores; somos aliados. Nuestro modelo único comparte ganancias con 
            proveedores que acercan proyectos, fomentando sinergia y lealtad.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-[#232323] mb-4 text-2xl">Programa Red de Aliados LADCOM</h3>
              <p className="text-[#232323]/70 mb-6">
                Nuestro programa está diseñado para crear relaciones a largo plazo basadas en confianza mutua, 
                transparencia total y beneficios compartidos.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#f4bb23] rounded-full mt-2"></div>
                  <p className="text-[#232323]">Contratos transparentes con términos claros</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#f4bb23] rounded-full mt-2"></div>
                  <p className="text-[#232323]">Porcentajes definidos y reportes mensuales</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#f4bb23] rounded-full mt-2"></div>
                  <p className="text-[#232323]">Soporte técnico y comercial continuo</p>
                </div>
              </div>
            </div>

            <div className="bg-[#f4bb23]/10 rounded-xl p-6">
              <h4 className="text-[#232323] mb-4">¿Cómo Funciona?</h4>
              <ol className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-[#f4bb23] flex-shrink-0">1.</span>
                  <span className="text-[#232323]">Nos contacta con un proyecto potencial</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#f4bb23] flex-shrink-0">2.</span>
                  <span className="text-[#232323]">Evaluamos juntos la viabilidad</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#f4bb23] flex-shrink-0">3.</span>
                  <span className="text-[#232323]">Acordamos términos transparentes</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#f4bb23] flex-shrink-0">4.</span>
                  <span className="text-[#232323]">Compartimos el éxito del proyecto</span>
                </li>
              </ol>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group p-6 border-2 border-[#232323]/10 rounded-xl hover:border-[#f4bb23] hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-[#f4bb23] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="text-[#232323]" size={24} />
                </div>
                <h4 className="text-[#232323] mb-2">{benefit.title}</h4>
                <p className="text-[#232323]/70 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={scrollToContact}
            className="bg-[#f4bb23] text-[#232323] px-8 py-4 rounded-lg hover:bg-[#d9a820] transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2"
          >
            Únete a Nuestra Red
            <Users size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
