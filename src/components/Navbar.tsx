import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/images/logo.jpg"
              alt="Punto Limpio Logo"
              className="w-12 h-12 rounded-full object-cover mr-3"
            />
            <span className={`font-bold text-xl ${isScrolled ? 'text-brand-blue' : 'text-white'}`}>
              Punto Limpio
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/"
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-brand-purple' : 'text-white hover:text-brand-gold'
              }`}
            >
              Inicio
            </Link>
            <Link 
              to="/contacto"
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-brand-purple' : 'text-white hover:text-brand-gold'
              }`}
            >
              Contacto
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-4 bg-white shadow-lg rounded-lg mt-2 absolute left-4 right-4 animate-fade-down">
            <div className="flex flex-col space-y-3 px-4">
              <Link 
                to="/"
                className="font-medium text-gray-700 hover:text-brand-purple"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                to="/contacto"
                className="font-medium text-gray-700 hover:text-brand-purple"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
