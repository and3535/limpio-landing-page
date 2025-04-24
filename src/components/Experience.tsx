
const Experience = () => {
  return (
    <section className="bg-gray-50 section-padding">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              💼 <span className="text-gradient">10 años transformando</span> hogares con limpieza profesional.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
            Con una década de experiencia, en Punto Limpio Sinaloa no solo limpiamos muebles: renovamos espacios, cuidamos tu hogar y protegemos la salud de tu familia.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
            Durante estos 10 años, hemos perfeccionado una fórmula única que combina tecnología industrial, atención personalizada y procesos certificados, entregando resultados visibles desde la primera visita.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
            Nuestra trayectoria nos respalda: más de 5 mil hogares transformados, cientos de clientes satisfechos y una meta clara: que cada sala, colchón o tapete que tocamos vuelva a brillar como nuevo.
            </p>
            
            <div className="grid grid-cols-2 gap-4 md:gap-6 mb-8">
              <div className="bg-white p-4 rounded-lg shadow text-center transition-transform transition-shadow duration-500 hover:scale-105 hover:shadow-xl">
                <div className="text-3xl font-bold text-brand-purple mb-1">1500+</div>
                <p className="text-gray-600 text-sm">Clientes Satisfechos</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center transition-transform transition-shadow duration-800 hover:scale-105 hover:shadow-xl">
                <div className="text-3xl font-bold text-brand-blue mb-1">5000+</div>
                <p className="text-gray-600 text-sm">Servicios Realizados</p>
              </div>
            </div>
            
            
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?auto=format&fit=crop&q=80" 
              alt="Equipo de limpieza profesional" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 w-40 transition-transform transition-shadow duration-500 hover:scale-105 hover:shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-orange">10+</div>
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
