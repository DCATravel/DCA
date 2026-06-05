import { useState, useEffect } from "react";
import { Download, X, Heart, Map } from "lucide-react";
import { SiFacebook, SiInstagram } from "@icons-pack/react-simple-icons";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Lista de Turitours actualizada
const TURITOURS_LIST = [
  { 
    id: "rafting", 
    title: "Turitour Rafting", 
    file_url: "/assets/pdfs/Turitour-Rafting.pdf" 
  },
  { 
    id: "acapulco", 
    title: "Turitour Acapulco", 
    file_url: "/assets/pdfs/Turitour-Acapulco.pdf" 
  }
];

export default function Turitours() {
  const [selectedTour, setSelectedTour] = useState<any>(null);
  const [countdown, setCountdown] = useState(0);

  // Temporizador para el modal
  useEffect(() => {
    if (!selectedTour) return;

    const timer = window.setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          window.clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [selectedTour]);

  // Función de descarga
  const handleConfirmDownload = () => {
    if (!selectedTour) return;
    
    const link = document.createElement('a');
    link.href = selectedTour.file_url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.download = `DCA-${selectedTour.title.replace(/\s+/g, '-')}.pdf`;
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setSelectedTour(null);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <main className="pt-12 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow w-full">
        {/* Encabezado Simple */}
        <div className="bg-primary/5 rounded-3xl p-8 md:p-12 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Catálogo Turitours</h1>
            <p className="text-muted-foreground text-lg max-w-xl">
              Descarga la información rápida y sencilla de nuestros circuitos cortos y tours de un día.
            </p>
          </div>
          <div className="hidden md:flex bg-primary/10 p-4 rounded-2xl">
            <Map className="w-12 h-12 text-primary" />
          </div>
        </div>

        {/* Grid de Tarjetas Minimalistas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TURITOURS_LIST.map((tour) => (
            <div key={tour.id} className="relative group">
              {/* Sombra Tonal Asimétrica */}
              <div className="absolute inset-0 bg-secondary/15 rounded-2xl translate-x-2.5 translate-y-2.5 -z-10 transition-transform group-hover:translate-x-3.5 group-hover:translate-y-3.5"></div>
              
              {/* Tarjeta Frontal */}
              <div className="bg-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full border border-transparent shadow-sm">
                <div className="mb-8">
                  <div className="bg-primary/10 w-10 h-10 flex items-center justify-center rounded-xl mb-4">
                    <Map className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground text-xl leading-tight">{tour.title}</h3>
                </div>
                
                <button
                  onClick={() => {
                    setCountdown(5);
                    setSelectedTour(tour);
                  }}
                  className="w-full bg-primary/5 hover:bg-primary text-primary hover:text-primary-foreground font-semibold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download className="w-5 h-5" /> 
                  Descargar PDF
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* POPUP DE DESCARGA */}
      {selectedTour && (
        <div 
          onClick={() => setSelectedTour(null)} 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-all duration-300"
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="bg-background rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative animate-in fade-in zoom-in duration-200"
          >
            <button
              onClick={() => setSelectedTour(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground bg-muted hover:bg-muted/80 rounded-full p-1.5 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="bg-primary/10 pt-8 pb-6 px-6 flex flex-col items-center border-b border-border">
              <div className="bg-primary text-primary-foreground p-3 rounded-full mb-4 shadow-md">
                <Heart className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-foreground text-center">
                ¡Únete a nuestra comunidad!
              </h2>
            </div>

            <div className="p-6 text-center">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Antes de descargar la info de <strong className="text-foreground">{selectedTour.title}</strong>, te invitamos a seguirnos en nuestras redes sociales.
              </p>
              
              <div className="bg-muted/40 rounded-xl p-5 mb-6 border border-border">
                <p className="text-sm font-semibold text-foreground mb-4">Síguenos en:</p>
                <div className="flex justify-center gap-4">
                  <a 
                    href="https://www.facebook.com/people/DCA-Travel/61590488308493/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-[#1877F2] transition-transform hover:scale-110 p-2.5 bg-background rounded-full shadow-sm border border-border hover:border-[#1877F2]/30"
                  >
                    <SiFacebook className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://instagram.com/dca.travel" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-[#E4405F] transition-transform hover:scale-110 p-2.5 bg-background rounded-full shadow-sm border border-border hover:border-[#E4405F]/30"
                  >
                    <SiInstagram className="w-6 h-6" />
                  </a>
                </div>
              </div>

              <button
                onClick={handleConfirmDownload}
                disabled={countdown > 0}
                className={`w-full font-semibold py-3 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 ${
                  countdown > 0 
                    ? 'bg-muted text-muted-foreground cursor-not-allowed' 
                    : 'bg-secondary hover:bg-secondary/90 text-secondary-foreground cursor-pointer'
                }`}
              >
                <Download className="w-5 h-5" />
                {countdown > 0 ? `Espera ${countdown}s para descargar...` : 'Continuar a la descarga'}
              </button>
              
              <button
                onClick={handleConfirmDownload}
                className="w-full mt-3 text-sm text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline cursor-pointer"
              >
                Ya los sigo, descargar
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
