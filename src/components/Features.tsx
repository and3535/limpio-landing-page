import React from 'react';

const Features = () => {
  return (
    <section className="bg-white section-padding">
      <div className="container mx-auto">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-6 md:p-12">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Tus Espacios Limpios, <span className="text-gradient">nuestra prioridad.</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Limpieza profesional para hogares en todo el país. Ofrecemos servicios de limpieza personalizados para residencias en todo Culiacán, garantizando calidad y eficiencia con tecnología avanzada y atención dedicada.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-brand-purple/10 flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800">Calidad</h3>
                  <p className="text-sm text-gray-600">Servicio superior con resultados visibles</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800">Eficiencia</h3>
                  <p className="text-sm text-gray-600">Optimización de tiempo y recursos</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800">Confianza</h3>
                  <p className="text-sm text-gray-600">Personal capacitado y de confianza</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800">Tecnología</h3>
                  <p className="text-sm text-gray-600">Equipos y productos avanzados</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img 
                src="/images/features-image.jpg" 
                alt="Limpieza profesional" 
                className="rounded-lg shadow-lg max-w-full h-auto object-cover"
                style={{ maxHeight: '400px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
