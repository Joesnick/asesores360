import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const WhatsAppIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Aplicaciones', path: '/aplicaciones' },
    { name: 'Nómina', path: 'https://nomina.asesores360.com.co', external: true },
    { name: 'Polla Futbolera', path: 'https://polla-mundialista.asesores360.com.co', external: true }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
      <div className="container">
        <div className="flex items-center justify-between h-24">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center gap-4 group">
            <img
              src="https://horizons-cdn.hostinger.com/1375b6a5-2606-46a3-bb03-5e8c16a48b37/c890635f924f547976964de96a5b8cbb.jpg"
              alt="C&G - Grupo Contable y Jurídico S.A.S."
              className="h-14 w-14 rounded-lg object-cover transition-transform duration-200 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight">ASESORES360.COM.CO</span>
              <span className="text-xs opacity-90 font-medium">C&G - Grupo Contable y Jurídico S.A.S.</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <nav className="flex items-center gap-2">
              {navLinks.map((link) => (
                link.external ? (
                  <a
                    key={link.path}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-lg font-medium transition-all duration-200 hover:bg-primary-foreground/10"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-200 ${isActive(link.path)
                        ? 'bg-accent text-accent-foreground'
                        : 'hover:bg-primary-foreground/10'
                      }`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </nav>

            <div className="h-8 w-px bg-primary-foreground/20" />

            <a
              href="https://wa.me/573133611965"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp px-4 py-2 text-sm"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Contactar</span>
            </a>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-primary text-primary-foreground border-primary-foreground/20 flex flex-col">
              <div className="flex flex-col gap-6 mt-8 flex-grow">
                <div className="border-b border-primary-foreground/20 pb-4">
                  <p className="font-bold text-lg">ASESORES360.COM.CO</p>
                  <p className="text-xs opacity-90 mt-1">C&G - Grupo Contable y Jurídico S.A.S.</p>
                </div>
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    link.external ? (
                      <a
                        key={link.path}
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsOpen(false)}
                        className="px-4 py-3 rounded-lg font-medium transition-all duration-200 hover:bg-primary-foreground/10"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 ${isActive(link.path)
                            ? 'bg-accent text-accent-foreground'
                            : 'hover:bg-primary-foreground/10'
                          }`}
                      >
                        {link.name}
                      </Link>
                    )
                  ))}
                </nav>
              </div>

              {/* Mobile WhatsApp CTA */}
              <div className="mt-auto pt-6 border-t border-primary-foreground/20 pb-4">
                <a
                  href="https://wa.me/573133611965"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full"
                  onClick={() => setIsOpen(false)}
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>Contactar a un Asesor</span>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;