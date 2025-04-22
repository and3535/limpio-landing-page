
const Hero = () => {
  return (
    <section 
      id="inicio" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/clean-service.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 hero-gradient opacity-80"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 fade-in">
          Limpieza Doméstica
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 fade-in">
          Soluciones profesionales para un hogar limpio y saludable
        </p>
        <a 
          href="#contacto" 
          className="inline-block bg-brand-gold hover:bg-brand-orange text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 fade-in"
        >
          Contáctanos
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-8 border-r-2 border-b-2 border-white rotate-45 transform opacity-70"></div>
      </div>
    </section>
  );
};

export default Hero;
