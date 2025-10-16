import { ShoppingCart, Zap, Smartphone, Usb, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const products = [
  {
    icon: Zap,
    name: 'Cables Eléctricos',
    category: 'Materiales',
  },
  {
    icon: Smartphone,
    name: 'Cargadores Inteligentes',
    category: 'Gadgets',
  },
  {
    icon: Usb,
    name: 'Accesorios Tech',
    category: 'Tecnología',
  },
];

export function LadcomStoreSection() {
  return (
    <section id="tienda" className="py-20 bg-gradient-to-br from-[#f4bb23]/20 via-white to-[#f4bb23]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-block mb-4 px-4 py-2 bg-[#f4bb23] rounded-full">
              <span className="text-[#232323]">Sub-Marca</span>
            </div>
            <h2 className="text-[#232323] mb-4 text-3xl md:text-4xl lg:text-5xl">
              Descubre <span className="text-[#f4bb23]">Ladcom Store</span>
            </h2>
            <p className="text-[#232323] mb-6 text-lg">
              Innovación al Alcance de Tu Mano
            </p>
            
            <p className="text-[#232323]/70 mb-8">
              Nuestra sub-marca para importación y comercialización de productos eléctricos y 
              tecnológicos (gadgets cotidianos). Dirigida a un público más joven (20-45 años), 
              con enfoque en creatividad y delivery rápido via Mercado Libre.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#f4bb23] rounded-lg flex items-center justify-center flex-shrink-0">
                  <ShoppingCart size={16} className="text-[#232323]" />
                </div>
                <div>
                  <h4 className="text-[#232323]">Envío Rápido</h4>
                  <p className="text-[#232323]/60 text-sm">Via Mercado Libre</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#f4bb23] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap size={16} className="text-[#232323]" />
                </div>
                <div>
                  <h4 className="text-[#232323]">Productos Innovadores</h4>
                  <p className="text-[#232323]/60 text-sm">Última tecnología</p>
                </div>
              </div>
            </div>

            <a
              href="https://www.mercadolibre.com.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#f4bb23] text-[#232323] px-8 py-4 rounded-lg hover:bg-[#d9a820] transition-all shadow-lg hover:shadow-xl"
            >
              Visita TiendaLad en Mercado Libre
              <ExternalLink size={20} />
            </a>
          </div>

          {/* Product Showcase */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-[#f4bb23] to-[#d9a820] p-8 shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758186355698-bd0183fc75ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwZ2FkZ2V0cyUyMGVsZWN0cm9uaWNzfGVufDF8fHx8MTc2MDExMDY1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Tech gadgets and electronics"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Floating Product Cards */}
            <div className="absolute -bottom-4 -left-4 right-4 grid grid-cols-3 gap-3">
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-4 shadow-xl hover:shadow-2xl transition-shadow"
                >
                  <div className="w-10 h-10 bg-[#f4bb23]/20 rounded-lg flex items-center justify-center mb-2 mx-auto">
                    <product.icon className="text-[#f4bb23]" size={20} />
                  </div>
                  <p className="text-[#232323] text-sm text-center">{product.name}</p>
                  <p className="text-[#232323]/60 text-xs text-center">{product.category}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
