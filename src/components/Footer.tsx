import { Link } from "react-router-dom";
import { SiFacebook, SiInstagram, SiWhatsapp } from '@icons-pack/react-simple-icons';

export default function Footer() {
  return (
    <footer className="bg-primary dark:bg-card text-primary-foreground dark:text-card-foreground dark:border-t dark:border-border py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo */}
          <div className="flex items-start">
            <Link to="/" className="flex items-center flex-shrink-0 transition-transform hover:scale-105">
              <img 
                src="/assets/logo-blanco.png"
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
              <li><Link to="/" className="hover:text-secondary transition-colors">Home</Link></li>
              <li><Link to="/explora" className="text-secondary font-semibold hover:opacity-80 transition-colors">Explora</Link></li>
              <li><Link to="/agencias" className="hover:text-secondary transition-colors">Agencias</Link></li>
              <li><Link to="/contacto" className="hover:text-secondary transition-colors">Contacto</Link></li>
              <li><Link to="/politica-de-privacidad" className="hover:text-secondary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Destinos */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Destinos</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/explora" className="hover:text-secondary transition-colors">Populares</Link></li>
              <li><Link to="/explora" className="hover:text-secondary transition-colors">Imperdibles</Link></li>
              <li><Link to="/itinerarios" className="hover:text-secondary transition-colors">Lista de Itinerarios</Link></li>
              <li><Link to="/material" className="hover:text-secondary transition-colors">Material</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/people/DCA-Travel/61590488308493/" target="_blank" rel="noopener" className="hover:text-secondary transition-transform hover:scale-110">
                <SiFacebook className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/dca.travel/" target="_blank" rel="noopener" className="hover:text-secondary transition-transform hover:scale-110">
                <SiInstagram className="w-6 h-6" />
              </a>
              <a href="https://wa.me/525527276085" target="_blank" rel="noopener" className="hover:text-secondary transition-transform hover:scale-110">
                <SiWhatsapp className="w-6 h-6" />
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
}