import { Linkedin, Mail, Phone } from 'lucide-react';
import logoImage from 'figma:asset/335f302dd65b4dff26ddada964d4a2816a9b2511.png';

const menuSections = [
  {
    title: 'Navegación',
    links: [
      { label: 'Inicio', href: '#inicio' },
      { label: 'Sobre Nosotros', href: '#sobre-nosotros' },
      { label: 'Servicios', href: '#servicios' },
      { label: 'Sectores', href: '#sectores' },
    ],
  },
  {
    title: 'Soluciones',
    links: [
      { label: 'Red de Aliados', href: '#red-aliados' },
      { label: 'TiendaLad', href: '#tienda' },
      { label: 'Contacto', href: '#contacto' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Términos y Condiciones', href: '#' },
      { label: 'Política de Privacidad', href: '#' },
      { label: 'Política de Cookies', href: '#' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#232323] border-t border-[#f4bb23]/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <img 
                src={logoImage} 
                alt="LADCOM Logo" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-white/70 mb-6 max-w-sm">
              Su socio estratégico para eficientizar inversiones y compartir el éxito en 
              proyectos de construcción e industria.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#f4bb23] transition-colors group"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="text-white group-hover:text-[#232323]" />
              </a>
              <a
                href="mailto:contacto@ladcom.com.ar"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#f4bb23] transition-colors group"
                aria-label="Email"
              >
                <Mail size={20} className="text-white group-hover:text-[#232323]" />
              </a>
              <a
                href="tel:+541112345678"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#f4bb23] transition-colors group"
                aria-label="Teléfono"
              >
                <Phone size={20} className="text-white group-hover:text-[#232323]" />
              </a>
            </div>
          </div>

          {/* Menu Sections */}
          {menuSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-[#f4bb23] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm text-center md:text-left">
              © {new Date().getFullYear()} LADCOM SRL. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-white/70 hover:text-[#f4bb23] transition-colors">
                Accesibilidad
              </a>
              <a href="#" className="text-white/70 hover:text-[#f4bb23] transition-colors">
                Mapa del Sitio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
