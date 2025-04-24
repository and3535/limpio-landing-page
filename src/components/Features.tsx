
const Features = () => {
  return (
    <section className="bg-white section-padding">
      <div className="container mx-auto">
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-6 md:p-12">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Tu sala impecable, <span className="text-gradient">tu hogar en armonía.</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
              Transformamos tus espacios con limpieza profesional, tecnología avanzada y trato cercano. Porque el confort y la salud de tu familia son lo primero.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <div className="flex items-center mb-2">
                    <div className="w-12 h-12 rounded-full bg-brand-purple/10 flex items-center justify-center mr-3">
                      <svg className="w-6 h-6 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-800">Resultados Visibles</h3>
                  </div>
                  <p className="text-sm text-gray-600">El cambio se nota desde la primera visita. Muebles renovados, ambiente fresco.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <div className="flex items-center mb-2">
                    <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center mr-3">
                      <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-800">Tecnología Profesional</h3>
                  </div>
                  <p className="text-sm text-gray-600">Equipos industriales y productos ecológicos que garantizan una limpieza profunda y segura.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <div className="flex items-center mb-2">
                    <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center mr-3">
                      <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-800">Trato Cercano y Garantizado</h3>
                  </div>
                  <p className="text-sm text-gray-600">Atención personalizada y garantía de satisfacción. Si no te gusta, lo repetimos sin costo.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <div className="flex items-center mb-2">
                    <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center mr-3">
                      <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-800">Pensado para tu Familia</h3>
                  </div>
                  <p className="text-sm text-gray-600">Seguro para niños y mascotas. Ideal para hogares con actividad constante.</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img 
                src="/images/test23.jpg" 
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
