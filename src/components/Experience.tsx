
const Experience = () => {
  return (
    <section className="bg-gray-50 section-padding">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Más de <span className="text-gradient">5 años de experiencia</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Contamos con más de 15 años de experiencia en la industria de limpieza corporativa. Nos destacamos por profesionalizar el sector mediante una combinación única de estructura operativa sólida, infraestructura tecnológica avanzada y un enfoque constante en procesos de mejora continua.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Nuestra experiencia nos permite ofrecer un servicio de limpieza que no solo cumple con los más altos estándares, sino que también incorpora las últimas innovaciones para garantizar la máxima eficiencia y satisfacción del cliente.
            </p>
            
            <div className="grid grid-cols-2 gap-4 md:gap-6 mb-8">
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <div className="text-3xl font-bold text-brand-purple mb-1">1500+</div>
                <p className="text-gray-600 text-sm">Clientes Satisfechos</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <div className="text-3xl font-bold text-brand-blue mb-1">5000+</div>
                <p className="text-gray-600 text-sm">Servicios Realizados</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-brand-purple/20 flex items-center justify-center border-2 border-white text-brand-purple text-xs font-bold">JL</div>
                <div className="w-10 h-10 rounded-full bg-brand-blue/20 flex items-center justify-center border-2 border-white text-brand-blue text-xs font-bold">MR</div>
                <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center border-2 border-white text-brand-gold text-xs font-bold">PC</div>
              </div>
              <p className="text-gray-600 text-sm">Un equipo de profesionales dedicados a la excelencia</p>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?auto=format&fit=crop&q=80" 
              alt="Equipo de limpieza profesional" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 w-40">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-orange">15+</div>
                <p className="text-gray-600 text-sm">Años de Experiencia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
