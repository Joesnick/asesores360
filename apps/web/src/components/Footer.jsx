import React from 'react';
import { Separator } from '@/components/ui/separator';
import { MapPin, Phone, Mail } from 'lucide-react';

const WhatsAppIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const Footer = () => {
  const expertiseAreas = ['Contabilidad', 'Impuestos', 'NIIF', 'UGPP'];

  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="flex flex-col">
            <h3 className="text-lg font-bold mb-5 text-white">ASESORES360.COM.CO</h3>
            <p className="text-sm text-primary-foreground/90 leading-relaxed mb-3">
              C&G - Grupo Contable y Jurídico S.A.S.
            </p>
            <p className="text-sm text-primary-foreground/90 leading-relaxed">
              Portal de aplicaciones especializadas para servicios contables y jurídicos. Transforma tu tiempo de la ejecución manual a la visión estratégica.
            </p>
          </div>

          {/* Expertise Areas */}
          <div className="flex flex-col">
            <h3 className="text-lg font-bold mb-5 text-white">Áreas de Expertise</h3>
            <ul className="space-y-3">
              {expertiseAreas.map((area) => (
                <li key={area} className="text-sm text-primary-foreground/90 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div className="flex flex-col">
            <h3 className="text-lg font-bold mb-5 text-white">Contacto</h3>
            <ul className="space-y-4 text-sm text-primary-foreground/90 mb-6">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="leading-relaxed uppercase">
                  CALLE 10 NO 5-48, OFICINA 203<br />
                  NEIVA - HUILA
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a 
                  href="tel:3133611965" 
                  className="hover:text-accent focus-visible:text-accent transition-colors duration-200 outline-none"
                >
                  3133611965
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a 
                  href="mailto:CONTACTO@ASESORES360.COM.CO" 
                  className="hover:text-accent focus-visible:text-accent transition-colors duration-200 break-all outline-none uppercase"
                >
                  CONTACTO@ASESORES360.COM.CO
                </a>
              </li>
            </ul>

            <a 
              href="https://wa.me/573133611965"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full shadow-lg shadow-[#25D366]/20"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>Contactar a un Asesor</span>
            </a>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
          <p>&copy; 2026 C&G - Grupo Contable y Jurídico S.A.S. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <button className="hover:text-accent focus-visible:text-accent transition-colors duration-200 outline-none">
              Política de Privacidad
            </button>
            <button className="hover:text-accent focus-visible:text-accent transition-colors duration-200 outline-none">
              Términos de Servicio
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;