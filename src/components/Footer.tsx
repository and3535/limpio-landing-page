
import { Phone, Facebook, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contacto" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
            <img
              src="/images/logo.jpg"
              alt="Punto Limpio Logo"
              className="w-12 h-12 rounded-full object-cover mr-3"
            />
              <span className="font-bold text-xl">Punto Limpio Sinaloa</span>
            </div>
            <p className="text-gray-400 mb-6">
              Soluciones profesionales de limpieza para hogares y empresas en Culiacán, Sinaloa.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-brand-blue/20 flex items-center justify-center hover:bg-brand-blue/30 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-purple/20 flex items-center justify-center hover:bg-brand-purple/30 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center hover:bg-brand-gold/30 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contáctanos</h3>
            <div className="space-y-3">
              
              <div className="flex items-start justify-center">
                <Phone className="w-5 h-5 mr-3 text-brand-gold mt-1" />
                <div className="text-center">
                  <p className="font-medium">667 XXX XXXX</p>
                  <p className="text-gray-400 text-sm">Atención 24/7</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-brand-gold transition-colors">Limpieza de Muebles</a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-brand-gold transition-colors">Limpieza de Colchones</a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-brand-gold transition-colors">Limpieza de Alfombras</a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-brand-gold transition-colors">Desinfección de Espacios</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Punto Limpio Sinaloa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
