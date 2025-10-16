import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1759849556341-f4767cb26ae0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwY29uc3RydWN0aW9uJTIwbmV0d29ya3xlbnwxfHx8fDE3NjAxMjEzMTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Construcción industrial y redes colaborativas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#232323]/95 via-[#232323]/90 to-[#232323]/80"></div>
        
        {/* Animated geometric shapes */}
        <div className="absolute top-20 right-10 w-32 h-32 border-2 border-[#f4bb23]/30 rounded-lg rotate-12 animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-24 h-24 border-2 border-[#f4bb23]/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          <h1 className="text-white mb-6 text-4xl md:text-5xl lg:text-6xl">
            Centralice la Adquisición de Materiales. 
            <span className="text-[#f4bb23]"> Multiplique el Éxito de su Proyecto.</span>
          </h1>
          
          <p className="text-white/90 mb-8 text-lg md:text-xl max-w-3xl">
            <strong>LADCOM:</strong> Su socio estratégico para eficientizar inversiones y compartir el éxito en proyectos de construcción e industria.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button
              onClick={() => scrollToSection('contacto')}
              className="bg-[#f4bb23] text-[#232323] px-8 py-4 rounded-lg hover:bg-[#d9a820] transition-all flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl"
            >
              Conversemos sobre su Próximo Proyecto
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            
            <button
              onClick={() => scrollToSection('sobre-nosotros')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#232323] transition-all"
            >
              Conozca Nuestra Trayectoria
            </button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-white/20">
            <div>
              <div className="text-[#f4bb23] mb-1 text-3xl md:text-4xl">60+</div>
              <p className="text-white/70">Años de Experiencia</p>
            </div>
            <div>
              <div className="text-[#f4bb23] mb-1 text-3xl md:text-4xl">100%</div>
              <p className="text-white/70">Transparencia</p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="text-[#f4bb23] mb-1 text-3xl md:text-4xl">B2B</div>
              <p className="text-white/70">Enfoque Profesional</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#f4bb23] rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-[#f4bb23] rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
