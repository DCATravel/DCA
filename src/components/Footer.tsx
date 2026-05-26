import { Link } from "react-router-dom";
import { SiFacebook, SiInstagram, SiWhatsapp } from '@icons-pack/react-simple-icons';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo */}
          <div className="flex items-start">
            <Link to="/" className="flex items-center flex-shrink-0 transition-transform hover:scale-105">
              <img 
                src="/assets/logo.png" 
                alt="DCA Travel" 
                // h-24 (96px) para móvil, h-32 (128px) para desktop. Mayor presencia estructural.
                className="h-24 w-24 sm:h-32 sm:w-32 object-contain" 
              />
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/explora" className="hover:underline text-secondary font-semibold">Explora</Link></li>
              <li><Link to="/agencias" className="hover:underline">Agencias</Link></li>
              <li><Link to="/contacto" className="hover:underline">Contacto</Link></li>
              <li><Link to="/politica-de-privacidad" className="hover:underline">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Destinos */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Destinos</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/explora" className="hover:underline">Populares</Link></li>
              <li><Link to="/explora" className="hover:underline">Imperdibles</Link></li>
              <li><Link to="/itinerarios" className="hover:underline">Lista de Itinerarios</Link></li>
              <li><Link to="/material" className="hover:underline">Gallery</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <SiFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <SiInstagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <SiWhatsapp className="w-6 h-6" />
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
}