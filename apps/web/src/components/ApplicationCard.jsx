import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle2, Smartphone, Youtube, Download } from 'lucide-react';
import PricingTable from './PricingTable.jsx';
import { Button } from '@/components/ui/button';

const ApplicationCard = ({ 
  title, 
  description,
  features = [], 
  icon: Icon, 
  pricingType, 
  pricingData = [], 
  pricingExtra,
  nequiPayment,
  upcomingModules = [],
  downloadUrl = '',
  comingSoon = false,
  onAccess 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Safely check if pricing data exists and has items
  const hasPricing = pricingType && Array.isArray(pricingData) && pricingData.length > 0;
  // Safely check if features exist and have items
  const hasFeatures = Array.isArray(features) && features.length > 0;

  // Video Mappings based on Application Name
  const videoMap = {
    'Extractor de Documentos Electrónicos': 'https://www.youtube.com/embed/_Y6jMOq2dmw',
    'Verificador de Eventos de Factura Electrónica': 'https://www.youtube.com/embed/fmibCz6_PDg',
    'Registro de Eventos en Portal DIAN': 'https://www.youtube.com/embed/a6ZAC7mfwdo',
    'Registro de Eventos en Portal SIIGO': 'https://www.youtube.com/embed/UXk6_ryZzcE'
  };

  const videoUrl = title ? videoMap[title] : null;

  // Coming Soon Card - Simplified Version with Upcoming Modules
  if (comingSoon) {
    return (
      <div className="bg-card rounded-2xl border border-border shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full group relative">
        <div className="p-6 md:p-8 flex-grow flex flex-col items-center justify-center min-h-[400px]">
          {Icon && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-300"
            >
              <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
            </motion.div>
          )}
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center mb-8"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold tracking-wide bg-primary/10 text-primary border border-primary/20">
              Próximamente
            </span>
          </motion.div>

          {upcomingModules && upcomingModules.length > 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full space-y-4 mt-4 border-t border-border/50 pt-6"
            >
              {upcomingModules.map((module, index) => (
                <div key={index} className="flex items-start gap-3 text-left">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2 shrink-0" />
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    {module}
                  </p>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    );
  }

  // Regular Card - Full Version
  return (
    <div className="bg-card rounded-2xl border border-border shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full group">
      <div className="p-6 md:p-8 flex-grow flex flex-col">
        <div className="flex items-start gap-4 mb-6">
          {Icon && (
            <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
              <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
            </div>
          )}
          <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight text-balance pt-1 group-hover:text-primary transition-colors duration-300">
            {title || 'Aplicación'}
          </h3>
        </div>

        {description && (
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6 flex-grow">
            {description}
          </p>
        )}

        {hasFeatures && (
          <div className="space-y-3 mb-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        )}

        {videoUrl && (
          <div className="mb-8 w-full">
            <h4 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
              <Youtube className="w-4 h-4 text-[#FF0000]" />
              Video Tutorial
            </h4>
            <div className="w-full aspect-video rounded-xl overflow-hidden shadow-sm border border-border bg-muted/50">
              <iframe
                className="w-full h-full"
                src={videoUrl}
                title={`Video tutorial: ${title}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        )}

        <div className="mt-auto space-y-3">
          {downloadUrl && (
            <Button
              asChild
              className="w-full font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
            >
              <a 
                href={downloadUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`Descargar ${title}`}
              >
                <Download className="w-4 h-4 mr-2" />
                Descargar
              </a>
            </Button>
          )}

          {onAccess && (
            <Button
              variant="outline"
              onClick={onAccess}
              className="w-full font-medium group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
            >
              Acceder
            </Button>
          )}

          {hasPricing && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full flex items-center justify-between py-3 px-4 rounded-lg bg-muted/50 hover:bg-muted text-foreground font-medium transition-colors duration-200"
              aria-expanded={isExpanded}
            >
              <span>Ver planes y precios</span>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-5 h-5 text-muted-foreground" />
              </motion.div>
            </button>
          )}
        </div>
      </div>

      <AnimatePresence initial={false}>
        {hasPricing && isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-border bg-muted/10"
          >
            <div className="p-6 md:p-8">
              <h4 className="text-sm font-bold tracking-wide text-primary uppercase mb-4">
                Estructura de Costos
              </h4>
              
              <PricingTable type={pricingType} data={pricingData} />
              
              {pricingExtra && (
                <div className="mt-4 p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <p className="text-sm text-foreground font-medium">
                    {pricingExtra}
                  </p>
                </div>
              )}

              {nequiPayment && (
                <div className="mt-4 p-4 rounded-lg bg-[#E8E2F4]/50 dark:bg-[#E8E2F4]/10 border border-[#E8E2F4] dark:border-[#E8E2F4]/20 flex items-start gap-3">
                  <div className="mt-0.5 shrink-0 w-8 h-8 rounded-full bg-[#200020] flex items-center justify-center text-white">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#200020] dark:text-[#E8E2F4] uppercase tracking-wider mb-1">
                      Medio de Pago
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      Nequi: {nequiPayment.number} - {nequiPayment.name}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ApplicationCard;