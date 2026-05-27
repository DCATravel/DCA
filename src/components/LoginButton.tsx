import { useState } from "react";
import { Lock, Sparkles, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function LoginButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botón que va en tu Navbar */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md font-medium transition-colors shadow-sm text-sm"
      >
        <Lock className="w-4 h-4" />
        Acceso Agencias
      </button>

      {/* Overlay y Popup (Modal) */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm transition-all duration-300">
          
          {/* Contenedor del Modal */}
          <div className="bg-background rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative animate-in fade-in zoom-in duration-200">
            
            {/* Botón para cerrar (X) */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground bg-muted hover:bg-muted/80 rounded-full p-1.5 transition-colors"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Cabecera decorativa (Naranja corporativo) */}
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
                <p className="text-xs text-muted-foreground">
                  Mantente atento a nuestros comunicados oficiales.
                </p>
              </div>

              {/* Botón de acción secundario para cerrar */}
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