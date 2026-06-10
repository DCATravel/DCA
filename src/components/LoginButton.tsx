import { useState, useEffect } from "react";
import { Lock, Sparkles, X } from "lucide-react"; 
import { SiFacebook, SiInstagram } from "@icons-pack/react-simple-icons";
import { Link } from "react-router-dom";

export default function LoginButton() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md font-medium transition-colors shadow-sm text-sm"
      >
        <Lock className="w-4 h-4" />
        Acceso Agencias
      </button>

      {/* Overlay y Popup (Modal) */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)} 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm transition-all duration-300"
        >
          
          {/* Contenedor del Modal */}
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="bg-background rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative animate-in fade-in zoom-in duration-200"
          >
            
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground bg-muted hover:bg-muted/80 rounded-full p-1.5 transition-colors z-10"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Cabecera decorativa */}
            <div className="bg-secondary/10 pt-8 pb-6 px-6 flex flex-col items-center border-b border-border">
              <div className="bg-secondary text-secondary-foreground p-3 rounded-full mb-4 shadow-md">
                <Sparkles className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-foreground text-center">
                ¡Próximamente!
              </h2>
            </div>

            {/* Contenido del Modal */}
            <div className="p-6 text-center">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Estamos afinando los últimos detalles de nuestro <strong className="text-foreground font-semibold">Portal B2B Exclusivo</strong>. Muy pronto podrás acceder a tu panel para gestionar reservas, descargar material sin marca y consultar tarifas netas en tiempo real.
              </p>
              
              <div className="bg-muted/50 rounded-lg p-4 mb-6 border border-border">
                <p className="text-sm font-medium text-foreground mb-1">
                  ¿Quieres ser de los primeros en entrar?
                </p>
                <p className="text-xs text-muted-foreground mb-4">
                  Mantente atento a nuestros comunicados en redes sociales:
                </p>
                
                <div className="flex justify-center gap-4">
                  <a 
                    href="https://www.facebook.com/people/DCA-Travel/61590488308493/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-[#1877F2] transition-colors p-2 bg-background rounded-full shadow-sm border border-border hover:border-[#1877F2]/30"
                    aria-label="Síguenos en Facebook"
                  >
                    <SiFacebook className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://instagram.com/dca.travel" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-[#E4405F] transition-colors p-2 bg-background rounded-full shadow-sm border border-border hover:border-[#E4405F]/30"
                    aria-label="Síguenos en Instagram"
                  >
                    <SiInstagram className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Secondary Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-2.5 rounded-lg transition-colors shadow-sm"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}