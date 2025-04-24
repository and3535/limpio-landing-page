import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

const Contacto = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Trigger the animation after the component mounts
    setTimeout(() => setShow(true), 100);
  }, []);

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
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/80 via-brand-blue/70 to-black/60 opacity-80 z-0"></div>
        <div
          className={`bg-white rounded-2xl shadow-2xl p-10 flex flex-col items-center max-w-lg w-full relative z-10 border border-gray-100
            transition-all duration-700 ease-out
            ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
        >
          <h1 className="text-3xl font-bold text-brand-purple mb-2 text-center">
            ¡Contáctanos!
          </h1>
          <div className="w-16 h-1 bg-brand-gold rounded-full mb-6"></div>
          <p className="text-gray-600 mb-6 text-center text-lg">
            Solicita tu cotización sin costo. Respuesta rápida por WhatsApp.
          </p>
          <img
            src="/images/qr prueba.png"
            alt="QR para contacto"
            className="w-60 h-60 object-contain mb-4 rounded-lg border border-gray-200 shadow"
          />
          <span className="text-sm text-gray-500 mb-6 text-center">
            Escanea el código QR para enviarnos un mensaje directo.
          </span>
        </div>
      </main>
    </>
  );
};

export default Contacto;