
import React from 'react';
import { CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: "🛋️",
      title: "Limpieza de Muebles",
      description: "Limpieza profunda de sofás, sillones y muebles tapizados con tecnología de extracción."
    },
    {
      id: 2,
      icon: "🛏️",
      title: "Limpieza de Colchones",
      description: "Eliminamos ácaros, manchas y olores de tu colchón, dejándolo como nuevo."
    },
    {
      id: 3,
      icon: "🧶",
      title: "Limpieza de Alfombras",
      description: "Servicio especializado para alfombras y tapetes con tratamientos anti-manchas."
    },
    {
      id: 4,
      icon: "🧪",
      title: "Desinfección",
      description: "Desinfección profesional de espacios con productos certificados y seguros."
    }
  ];

  return (
    <section 
      id="servicios" 
      className="relative section-padding"
      style={{
        backgroundImage: "url('/images/services-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-brand-blue/85"></div>
      
      {/* Content */}
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Servicios Eficientes y Confiables
          </h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.id} className="service-card group">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-brand-purple transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex items-center text-brand-purple">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">Servicio Garantizado</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contacto" 
            className="inline-block bg-brand-gold hover:bg-brand-orange text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Solicitar Servicio
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
