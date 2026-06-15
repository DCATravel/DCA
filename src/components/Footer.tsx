import { Link } from "react-router-dom";
import { SiFacebook, SiInstagram, SiWhatsapp } from '@icons-pack/react-simple-icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary dark:bg-card text-primary-foreground dark:text-card-foreground pt-8 pb-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 md:gap-8 mb-10">
          
          {/* Logo */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start gap-4">
            <Link to="/" className="flex items-center flex-shrink-0 transition-transform hover:scale-105">
              <img 
                src="/assets/logo-blanco.png"
                alt="DCA Travel" 
                className="h-20 w-20 sm:h-28 sm:w-28 object-contain" 
              />
            </Link>
          </div>

          {/* Enlaces Rápidos */}
          <div className="col-span-1 flex flex-col items-start md:mx-auto">
            <h3 className="font-semibold text-lg mb-5 text-primary-foreground dark:text-foreground">Enlaces Rápidos</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80 dark:text-muted-foreground">
              <li>
                <Link to="/" className="inline-block hover:text-secondary hover:translate-x-1 transition-all duration-300">Inicio</Link>
              </li>
              <li>
                <Link to="/nosotros" className="inline-block hover:text-secondary hover:translate-x-1 transition-all duration-300">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/explora" className="inline-block text-secondary font-semibold hover:opacity-80 hover:translate-x-1 transition-all duration-300">Explora</Link>
              </li>
              <li>
                <Link to="/agencias" className="inline-block hover:text-secondary hover:translate-x-1 transition-all duration-300">Agencias</Link>
              </li>
              <li>
                <Link to="/contacto" className="inline-block hover:text-secondary hover:translate-x-1 transition-all duration-300">Contacto</Link>
              </li>
            </ul>
          </div>

          {/* Destinos*/}
          <div className="col-span-1 flex flex-col items-start md:mx-auto">
            <h3 className="font-semibold text-lg mb-5 text-primary-foreground dark:text-foreground">Destinos</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80 dark:text-muted-foreground">
              <li>
                <Link to="/explora" className="inline-block hover:text-secondary hover:translate-x-1 transition-all duration-300">Populares</Link>
              </li>
              <li>
                <Link to="/explora" className="inline-block hover:text-secondary hover:translate-x-1 transition-all duration-300">Imperdibles</Link>
              </li>
              <li>
                <Link to="/itinerarios" className="inline-block hover:text-secondary hover:translate-x-1 transition-all duration-300">Itinerarios</Link>
              </li>
              <li>
                <Link to="/material" className="inline-block hover:text-secondary hover:translate-x-1 transition-all duration-300">Material</Link>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-lg mb-5 text-primary-foreground dark:text-foreground">Síguenos</h3>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/people/DCA-Travel/61590488308493/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 md:p-2.5 bg-primary-foreground/10 dark:bg-muted/20 rounded-full hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 hover:-translate-y-1"
                aria-label="Facebook"
              >
                <SiFacebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/dca.travel/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 md:p-2.5 bg-primary-foreground/10 dark:bg-muted/20 rounded-full hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 hover:-translate-y-1"
                aria-label="Instagram"
              >
                <SiInstagram className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/525627278632" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 md:p-2.5 bg-primary-foreground/10 dark:bg-muted/20 rounded-full hover:bg-[#25D366] hover:text-white transition-all duration-300 hover:-translate-y-1"
                aria-label="WhatsApp"
              >
                <SiWhatsapp className="w-5 h-5" />
              </a>
            </div>
          </div>
          
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-4 border-t border-primary-foreground/10 dark:border-border/30 flex flex-col md:flex-row justify-between items-center gap-5 text-xs md:text-sm text-primary-foreground/60 dark:text-muted-foreground">
          <p className="text-center md:text-left">
            &copy; {currentYear} DCA Travel. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            <Link to="/politica-de-privacidad" className="hover:text-secondary transition-colors">
              Aviso de Privacidad
            </Link>
            <Link to="/terminos" className="hover:text-secondary transition-colors">
              Términos y Condiciones
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}