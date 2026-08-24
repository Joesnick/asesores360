import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ApplicationCard from '@/components/ApplicationCard.jsx';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ArrowRight, 
  Zap, 
  Calculator, 
  TrendingUp, 
  Scale, 
  CheckCircle2, 
  BarChart3, 
  BadgeCheck, 
  Quote,
  FileDown,
  FileCheck,
  Globe,
  Building2,
  FileSpreadsheet,
  Users,
  ScrollText
} from 'lucide-react';

const WhatsAppIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const HomePage = () => {
  const navigate = useNavigate();

  const solutions = [{
    title: 'Automatización Tecnológica',
    description: 'Implementamos soluciones tecnológicas avanzadas que automatizan procesos contables y tributarios, permitiendo que tu equipo se enfoque en análisis estratégico y toma de decisiones.',
    icon: Zap
  }, {
    title: 'Contabilidad',
    description: 'Servicios contables integrales bajo normas NIIF, con herramientas especializadas para llevar registros precisos y cumplimiento normativo en Colombia.',
    icon: Calculator
  }, {
    title: 'Tributación',
    description: 'Asesoría tributaria especializada en impuestos, régimen simple, tributario especial, y cumplimiento con la DIAN para optimizar tu carga fiscal.',
    icon: TrendingUp
  }, {
    title: 'Servicios Jurídicos Especializados',
    description: 'Acompañamiento legal en temas tributarios, UGPP, procedimientos administrativos y fiscalización, con expertos en derecho tributario colombiano.',
    icon: Scale
  }, {
    title: 'Derecho Civil y Notarial',
    description: 'Servicios legales integrales incluyendo planeación patrimonial en vida, divorcios, sucesiones, compraventas y otros trámites notariales.',
    icon: ScrollText
  }, {
    title: 'Revisoría Fiscal',
    description: 'Servicios de revisoría fiscal para empresas obligadas a llevar contador público, garantizando el cumplimiento normativo y la integridad de los registros contables según la legislación colombiana.',
    icon: CheckCircle2
  }, {
    title: 'Auditoría',
    description: 'Auditorías integrales de procesos contables, financieros y tributarios para evaluar la efectividad de controles internos y proporcionar recomendaciones estratégicas para la mejora continua.',
    icon: BarChart3
  }];
  
  const defaultNequiPayment = {
    number: '3158089726',
    name: 'EDWIN CAICEDO CHAVARRO'
  };

  const applications = [
    {
      title: 'Extractor de Documentos Electrónicos',
      description: 'Descarga masiva y automática de facturas electrónicas desde portales habilitados, con organización estructurada y generación de archivos planos.',
      icon: FileDown,
      path: '/aplicaciones',
      comingSoon: false,
      nequiPayment: defaultNequiPayment
    }, 
    {
      title: 'Verificador de Eventos de Factura Electrónica',
      description: 'Validación integral de eventos de factura electrónica tanto de ventas como de compras, con generación de reportes detallados en Excel.',
      icon: FileCheck,
      path: '/aplicaciones',
      comingSoon: false,
      nequiPayment: defaultNequiPayment
    },
    {
      title: 'Registro de Eventos en Portal DIAN',
      description: 'Automatización del registro de eventos directamente en el portal DIAN garantizando cumplimiento normativo y trazabilidad con respaldo documental.',
      icon: Globe,
      path: '/aplicaciones',
      comingSoon: false,
      nequiPayment: defaultNequiPayment
    },
    {
      title: 'Registro de Eventos en Portal SIIGO',
      description: 'Automatización del registro de eventos directamente en el portal SIIGO garantizando cumplimiento normativo y trazabilidad con respaldo documental.',
      icon: Building2,
      path: '/aplicaciones',
      comingSoon: false,
      nequiPayment: defaultNequiPayment
    },
    {
      title: 'Generación de Formatos 1001, 2276 y Certificados de Ingresos para Empleados',
      description: 'Genera automáticamente formatos de información exógena y certificados de ingresos, reduciendo al mínimo la intervención manual.',
      icon: FileSpreadsheet,
      path: '/aplicaciones',
      comingSoon: false,
      nequiPayment: defaultNequiPayment
    },
    {
      title: 'Módulo de Nómina',
      description: 'Módulos integrales para liquidación de nómina, contabilización y generación de formularios de impuestos, además de control de inventarios.',
      icon: Users,
      path: '/aplicaciones',
      comingSoon: true,
      upcomingModules: [
        'Módulo Liquidación de Nómina con archivo plano para contabilizar',
        'Módulo de Contabilización y generación de formularios nacionales y municipales de impuestos con archivos planos',
        'Módulo Control de Inventario'
      ]
    }
  ];
  
  const credentials = [
    "Tecnólogo en Sistemas - Especialista en automatización y soluciones tecnológicas", 
    "Contador Público - Experto en contabilidad y gestión financiera", 
    "Abogado experto en impuestos nacionales y territoriales - Especialista en Derecho Constitucional", 
    "Especialista en Revisoría Fiscal y Auditoría Forense - Garantía de cumplimiento normativo"
  ];
  
  const handleAccess = path => {
    navigate(path);
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  return (
    <>
      <Helmet>
        <title>ASESORES360.COM.CO - Portal de Aplicaciones Contables y Jurídicas</title>
        <meta name="description" content="Portal especializado de C&G - Grupo Contable y Jurídico S.A.S. Acceda a aplicaciones de facturación electrónica, gestión DIAN y servicios contables profesionales." />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="flex-grow">
          {/* Hero Section */}
          <section className="hero-container">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0,transparent_100%)] pointer-events-none" />
            
            <div className="container relative z-10 flex flex-col items-center">
              <motion.h1 
                initial={{ opacity: 0, scale: 0.95 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.8, ease: "easeOut" }} 
                className="hero-title text-balance animate-fade-in-scale"
              >
                Transforma tu tiempo: pasa de la ejecución manual a la visión estratégica.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="text-4xl md:text-5xl font-bold text-center text-white pt-6 max-w-4xl mx-auto leading-tight"
                style={{ textWrap: 'balance' }}
              >
                El mundo ya cambió. ¿Estás listo para el siguiente nivel?
              </motion.p>
            </div>
          </section>

          {/* Presentation Image & Tagline Section */}
          <section className="py-24 bg-background border-b border-border/40">
            <div className="container">
              <div className="max-w-5xl mx-auto">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.7 }} 
                  className="mb-16"
                >
                  <img src="https://horizons-cdn.hostinger.com/1375b6a5-2606-46a3-bb03-5e8c16a48b37/gemini_generated_image_lcm318lcm318lcm3-N3fr7.png" alt="C&G Grupo Contable y Jurídico - Soluciones Integrales" className="w-full h-auto rounded-2xl shadow-2xl border border-border/50" />
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.7, delay: 0.2 }} 
                  className="text-center max-w-4xl mx-auto space-y-8"
                >
                  <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
                    <p>
                      Deja que nuestras aplicaciones hagan el trabajo pesado por ti. Libérate de horas de digitación y recupera ese tiempo para lo que realmente importa: analizar, decidir y crecer.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Soluciones Integrales Section */}
          <section className="py-24 bg-muted/40">
            <div className="container">
              <div className="text-center mb-16">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.5 }} 
                  className="text-3xl md:text-4xl font-bold text-primary mb-6" 
                  style={{ textWrap: 'balance' }}
                >
                  Soluciones Integrales para tu Negocio
                </motion.h2>
                
                <motion.div 
                  initial={{ opacity: 0, width: 0 }} 
                  whileInView={{ opacity: 1, width: "80px" }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.5, delay: 0.2 }} 
                  className="h-1 bg-accent mx-auto rounded-full mb-8" 
                />

                <motion.p 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.5, delay: 0.3 }} 
                  className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                >
                  Respaldo profesional garantizado con todas las Soluciones Integrales para tu Negocio
                </motion.p>
              </div>

              <motion.div 
                variants={containerVariants} 
                initial="hidden" 
                whileInView="show" 
                viewport={{ once: true }} 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {solutions.map((solution, index) => {
                  const Icon = solution.icon;
                  return (
                    <motion.div key={index} variants={itemVariants} className="group bg-card rounded-xl shadow-md hover:shadow-2xl border-t-4 border-primary hover:border-accent transition-all duration-300 hover:-translate-y-2 flex flex-col h-full overflow-hidden">
                      <div className="p-8 flex flex-col h-full">
                        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors duration-300">
                          <Icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-300" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-4 leading-snug group-hover:text-primary transition-colors">
                          {solution.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed flex-grow">
                          {solution.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </section>

          {/* Acerca del Fundador Section */}
          <section className="py-24 bg-primary/[0.02] border-y border-border/30 overflow-hidden">
            <div className="container max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <motion.p 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.5 }} 
                  className="text-sm font-bold tracking-widest text-accent uppercase mb-3"
                >
                  Acerca del Fundador
                </motion.p>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.5, delay: 0.1 }} 
                  className="text-3xl md:text-4xl font-bold text-primary mb-3" 
                  style={{ textWrap: 'balance' }}
                >
                  EDWIN CAICEDO CHAVARRO
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.5, delay: 0.2 }} 
                  className="text-lg md:text-xl text-muted-foreground font-medium"
                >
                  Fundador - Asesores360.com.co & Grupo Contable y Jurídico C&G S.A.S.
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }} 
                  whileInView={{ opacity: 1, scale: 1 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.5, delay: 0.3 }} 
                  className="mt-6"
                >
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-accent text-accent-foreground font-semibold text-sm shadow-sm">
                    20 años de experiencia
                  </span>
                </motion.div>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.7, delay: 0.4 }} 
                className="space-y-12"
              >
                {/* Credentials Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {credentials.map((cred, idx) => (
                    <Card key={idx} className="group border border-border/60 shadow-sm hover:shadow-md transition-all duration-300 bg-card/50 hover:bg-card">
                      <CardContent className="p-5 flex items-start gap-4 h-full">
                        <div className="mt-0.5 shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 text-primary">
                          <BadgeCheck className="w-4 h-4" />
                        </div>
                        <p className="text-sm font-medium text-foreground leading-snug">
                          {cred}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Mission Statement */}
                <div className="relative p-8 md:p-12 rounded-2xl bg-primary text-primary-foreground shadow-xl overflow-hidden text-center">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary-foreground/5 pointer-events-none">
                    <Quote className="w-48 h-48" />
                  </div>
                  <p className="relative z-10 text-xl md:text-2xl font-medium italic leading-relaxed text-primary-foreground/95 max-w-3xl mx-auto">
                    "Con más de 20 años de experiencia, combino expertise técnico y profesional para transformar la gestión empresarial. Mi misión es liberar a contadores y empresarios del trabajo manual repetitivo, permitiéndoles enfocarse en decisiones estratégicas que hagan crecer sus negocios."
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Applications Section */}
          <section className="py-24 bg-background">
            <div className="container">
              <div className="text-center mb-16">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 leading-tight" style={{ textWrap: 'balance' }}>
                    Nuestras Aplicaciones
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Herramientas especializadas desarrolladas para optimizar la gestión contable y procesos DIAN
                  </p>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {applications.map((app, index) => (
                  <motion.div 
                    key={app.title} 
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }} 
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <ApplicationCard 
                      title={app.title} 
                      description={app.description} 
                      icon={app.icon}
                      comingSoon={app.comingSoon}
                      nequiPayment={app.nequiPayment}
                      upcomingModules={app.upcomingModules}
                      onAccess={() => handleAccess(app.path)} 
                    />
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.5, delay: 0.3 }} 
                className="text-center mt-12"
              >
                <button 
                  onClick={() => navigate('/aplicaciones')} 
                  className="inline-flex items-center gap-2 text-primary hover:text-accent font-medium transition-colors duration-200 group"
                >
                  Ver todas las aplicaciones
                  <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </motion.div>
            </div>
          </section>

          {/* Expertise & Contact Section */}
          <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08)_0,transparent_60%)] pointer-events-none" />
            <div className="container relative z-10">
              <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ textWrap: 'balance' }}>
                    Respaldo Profesional Garantizado
                  </h2>
                  <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto mb-12">
                    Nuestras soluciones tecnológicas están respaldadas por la sólida experiencia de C&G - Grupo Contable y Jurídico S.A.S. en contabilidad, impuestos, normas NIIF y gestión UGPP.
                  </p>
                  
                  <a 
                    href="https://wa.me/573133611965"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp shadow-lg shadow-[#25D366]/20 mx-auto"
                  >
                    <WhatsAppIcon className="w-6 h-6" />
                    <span className="text-lg">Contactar a un Asesor</span>
                  </a>
                </motion.div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;