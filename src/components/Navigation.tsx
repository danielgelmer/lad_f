import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoImage from 'figma:asset/335f302dd65b4dff26ddada964d4a2816a9b2511.png';

const menuItems = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'sobre-nosotros', label: 'Sobre Nosotros' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'sectores', label: 'Sectores' },
  { id: 'red-aliados', label: 'Red de Aliados' },
  { id: 'tienda', label: 'TiendaLad' },
  { id: 'contacto', label: 'Contacto' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-[#232323] shadow-lg' : 'bg-[#232323]/95'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('inicio')}
            className="flex items-center gap-3 hover:opacity-90 transition-opacity"
          >
            <img 
              src={logoImage} 
              alt="LADCOM Logo" 
              className="h-7 md:h-8 w-auto"
            />
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:text-[#f4bb23] transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#232323] border-t border-[#f4bb23]/20 py-4">
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white hover:text-[#f4bb23] transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
