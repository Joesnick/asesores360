import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ApplicationCard from '@/components/ApplicationCard.jsx';
import {
  FileDown,
  FileCheck,
  Globe,
  Building2,
  FileSpreadsheet,
  Users
} from 'lucide-react';

const WhatsAppIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const AplicacionesPage = () => {
  const basePricing = [
    { concepto: 'Suscripción anual – 1 empresa, usuarios ilimitados', valor: '$150.000' },
    { concepto: 'Contador Básico: 10 empresas, usuarios ilimitados', valor: '$200.000' },
    { concepto: 'Contador Premium: 20 empresas, usuarios ilimitados', valor: '$300.000' },
    { concepto: 'Contador Full: 50 empresas, usuarios ilimitados', valor: '$400.000' }
  ];

  const defaultNequiPayment = {
    number: '3158089726',
    name: 'EDWIN CAICEDO CHAVARRO'
  };

  const applications = [
    {
      title: 'Extractor de Documentos Electrónicos',
      features: [
        'Descarga masiva y automática de facturas electrónicas desde los portales habilitados.',
        'Organización estructurada de documentos XML y PDF por año, mes, día, cliente, proveedor y empleado.',
        'Generación de archivo plano por cada documento electrónico disponible mes a mes y de forma acumulada.',
        'Ahorro significativo de tiempo en la recolección y organización de soportes contables.',
        'Integración fluida con procesos de auditoría y revisión documental.'
      ],
      icon: FileDown,
      pricingType: 'simple',
      pricingData: basePricing,
      downloadUrl: 'https://github.com/Joesnick/Asesores360-Releases/releases/download/v1.0.5/ContaClick360.zip',
      comingSoon: false,
      nequiPayment: defaultNequiPayment
    },
    {
      title: 'Verificador de Eventos de Factura Electrónica',
      features: [
        'Validación integral de eventos de factura electrónica tanto de ventas como de compras.',
        'Generación de reportes en Excel con detalle de eventos realizados y pendientes.'
      ],
      icon: FileCheck,
      pricingType: 'simple',
      pricingData: basePricing,
      downloadUrl: 'https://github.com/Joesnick/VerificadorEventos-Releases/releases/download/v1.0.1/ContaClick360-VerificadorEventos.zip',
      comingSoon: false,
      nequiPayment: defaultNequiPayment
    },
    {
      title: 'Registro de Eventos en Portal DIAN',
      features: [
        'Automatización del registro de eventos directamente en el portal DIAN.',
        'Cumplimiento normativo garantizado para la procedencia de deducciones fiscales.',
        'Trazabilidad completa de cada evento registrado con respaldo documental.'
      ],
      icon: Globe,
      pricingType: 'simple',
      pricingData: basePricing,
      pricingExtra: 'Ejecución mensual por demanda: $25.000 fijos + $50 por factura procesada en el mes.',
      downloadUrl: 'https://github.com/Joesnick/EventosFacturaDIAN-Releases/releases/download/v1.0.1/ContaClick360-EventosFacturaDIAN.zip',
      comingSoon: false,
      nequiPayment: defaultNequiPayment
    },
    {
      title: 'Registro de Eventos en Portal SIIGO',
      features: [
        'Automatización del registro de eventos directamente en el portal SIIGO.',
        'Cumplimiento normativo garantizado para la procedencia de deducciones fiscales.',
        'Trazabilidad completa de cada evento registrado con respaldo documental.'
      ],
      icon: Building2,
      pricingType: 'simple',
      pricingData: basePricing,
      pricingExtra: 'Ejecución mensual por demanda: $25.000 fijos + $50 por factura procesada en el mes.',
      downloadUrl: 'https://github.com/Joesnick/EventosSiigo-Releases/releases/download/v1.0.1/ContaClick360-EventosSiigo.zip',
      comingSoon: false,
      nequiPayment: defaultNequiPayment
    },
    {
      title: 'Generación de Formatos 1001, 2276 y Certificados de Ingresos para Empleados',
      features: [
        'Genera automáticamente los formatos de información exógena 1001 y 2276.',
        'Genera certificados de ingresos y retenciones para empleados.',
        'Proceso ágil y preciso a partir del resumen en Excel de los operadores de pago de seguridad social.',
        'Reduce al mínimo la intervención manual y los riesgos de error.'
      ],
      icon: FileSpreadsheet,
      pricingType: 'simple',
      pricingData: [
        { concepto: 'Suscripción anual – por empresa, usuarios ilimitados', valor: '$20.000' }
      ],
      downloadUrl: '',
      comingSoon: false,
      nequiPayment: defaultNequiPayment
    },
    {
      title: 'Módulo de Nómina',
      features: [],
      icon: Users,
      pricingType: 'simple',
      pricingData: [],
      downloadUrl: '',
      comingSoon: true,
      upcomingModules: [
        'Módulo Liquidación de Nómina con archivo plano para contabilizar',
        'Módulo de Contabilización y generación de formularios nacionales y municipales de impuestos con archivos planos',
        'Módulo Control de Inventario'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Aplicaciones y Precios - ASESORES360.COM.CO</title>
        <meta
          name="description"
          content="Conozca nuestras aplicaciones especializadas para facturación electrónica, gestión DIAN y nómina. Consulte funcionalidades y planes de precios."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="flex-grow">
          {/* Page Header */}
          <section className="bg-primary text-primary-foreground py-20 md:py-28 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08)_0,transparent_60%)] pointer-events-none" />
            <div className="container relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}>
                  Aplicaciones y Soluciones Tecnológicas
                </h1>
                <p className="text-xl leading-relaxed text-primary-foreground/90 max-w-2xl">
                  Herramientas diseñadas para automatizar procesos, garantizar el cumplimiento normativo y optimizar la gestión contable de su empresa.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Applications Grid */}
          <section className="py-20 md:py-24 bg-muted/30">
            <div className="container">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {applications.map((app, index) => (
                  <motion.div
                    key={app.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <ApplicationCard
                      title={app.title}
                      features={app.features}
                      icon={app.icon}
                      pricingType={app.pricingType}
                      pricingData={app.pricingData}
                      pricingExtra={app.pricingExtra}
                      downloadUrl={app.downloadUrl}
                      comingSoon={app.comingSoon}
                      nequiPayment={app.nequiPayment}
                      upcomingModules={app.upcomingModules}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Payment Method Section */}
          <section className="py-20 bg-background">
            <div className="container max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-card rounded-3xl border border-border shadow-xl p-8 md:p-14 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-full pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-tr-full pointer-events-none" />

                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">
                      Medio de pago
                    </h2>

                    <div className="bg-muted/50 rounded-2xl p-8 md:p-10 mb-10 inline-block w-full max-w-lg border border-border/60 shadow-inner">
                      <p className="text-xl text-muted-foreground font-medium mb-2 tracking-wide uppercase">
                        Nequi
                      </p>
                      <p className="text-5xl md:text-6xl font-bold text-primary mb-6 tracking-tight font-variant-numeric tabular-nums">
                        3158089726
                      </p>
                      <div className="h-px w-24 bg-border mx-auto mb-6" />
                      <p className="text-xl md:text-2xl font-bold text-foreground uppercase tracking-wide">
                        EDWIN CAICEDO CHAVARRO
                      </p>
                    </div>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
                      🎉 ¡Tu acceso está a un paso! Una vez realices el pago, tu aplicación será activada en un máximo de 24 horas. Solo envíanos el comprobante por WhatsApp al <a href="https://wa.me/573133611965" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:text-accent transition-colors underline decoration-2 underline-offset-4">313 361 1965</a> y listo.
                    </p>

                    <a
                      href="https://wa.me/573133611965"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp shadow-lg shadow-[#25D366]/20 inline-flex"
                    >
                      <WhatsAppIcon className="w-6 h-6" />
                      <span className="text-lg">Enviar Comprobante</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Additional Info / Consultation */}
          <section className="py-20 bg-muted/30 border-t border-border/50">
            <div className="container">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto bg-card rounded-2xl p-8 md:p-10 border border-border shadow-sm text-center flex flex-col items-center"
              >
                <h2 className="text-2xl font-bold text-foreground mb-4">¿Necesita asesoría personalizada?</h2>
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                  Nuestro equipo de expertos en C&G - Grupo Contable y Jurídico S.A.S. está disponible para ayudarle a elegir la solución tecnológica que mejor se adapte al volumen y necesidades de su empresa.
                </p>

                <a
                  href="https://wa.me/573133611965"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp shadow-md"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>Contactar a un Asesor</span>
                </a>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AplicacionesPage;