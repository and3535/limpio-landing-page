import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contacto = () => {
  return (
    <>
      <Navbar />
      <main
        className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-16 px-4 relative overflow-hidden"
        style={{
          backgroundImage: "url('/images/clean-service.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
        <div className="bg-white rounded-lg shadow-xl p-8 flex flex-col items-center max-w-md w-full relative z-10">
          <img
            src="/images/qr prueba.png"
            alt="QR para contacto"
            className="w-48 h-48 object-contain mb-6"
          />
          <h1 className="text-2xl font-bold text-brand-purple mb-2 text-center">
            ¡Mándanos mensaje para una cotización sin costo!
          </h1>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contacto;