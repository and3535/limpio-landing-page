
import { CheckCircle } from 'lucide-react';
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: "🛋️",
      title: "Limpieza de Salas",
      description: "Devuelve la frescura a tu hogar. Eliminamos manchas, olores y suciedad de tus salas y sillones con tecnología de extracción profunda."
    },
    {
      id: 2,
      icon: "🛏️",
      title: "Limpieza de Colchones",
      description: "Duerme tranquilo, respira limpio. Eliminamos ácaros, manchas y olores dejando tu colchón como nuevo, ideal para hogares con niños o mascotas."
    },
    {
      id: 3,
      icon: "🧼",
      title: "Limpieza de Tapetes y Alfombras",
      description: "Protege tu salud y renueva tus espacios. Tratamientos anti-manchas y desinfección profunda que cuidan cada fibra sin dañar tus textiles."
    },
    {
      id: 4,
      icon: "🧪",
      title: "Desinfección de espacios",
      description: "Ambientes seguros, hogares felices. Desinfección profesional con productos certificados, seguros para niños, adultos mayores y mascotas."
    }
  ];

  return (
    <section 
      id="servicios" 
      className="relative section-padding"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80')",
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
            <div key={service.id} className="service-card group flex flex-col h-full cursor-default">
              <div className="text-4xl mb-4 text-center">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-brand-purple transition-colors text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 flex-1 text-center">{service.description}</p>
              <div className="flex justify-center items-center text-brand-purple mt-2">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">Servicio Garantizado</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link 
            to="/contacto" 
            className="inline-block bg-brand-gold hover:bg-brand-orange text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Solicitar Servicio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
