import { useState, useEffect } from "react";
import { Download, X, Heart, Map } from "lucide-react";
import { SiFacebook, SiInstagram } from "@icons-pack/react-simple-icons";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Tour = {
  id: string;
  title: string;
  file_url: string;
  image: string;
};

const TURITOURS_LIST: Tour[] = [
  { 
    id: "mexico-verde", 
    title: "Turitour México Verde", 
    file_url: "/assets/turitours/Itinerario_Turitour_Mexico_Verde.pdf",
    image: "/assets/turitours/Rafting.jpg" 
  },
  { 
    id: "sierra-cafe", 
    title: "Turitour Sierra del Café", 
    file_url: "/assets/turitours/Itinerario_Turitour_Sierra_del_Cafe.pdf",
    image: "/assets/turitours/Cafe.jpg" 
  },
  { 
    id: "acapulco-baja", 
    title: "Turitour Acapulco Temporada Baja", 
    file_url: "/assets/turitours/Acapulco.pdf",
    image: "/assets/turitours/AcapulcoBaja.jpg" 
  }
];

// COMPONENTE AISLADO: Modal de Descarga
const DownloadModal = ({ tour, onClose }: { tour: Tour, onClose: () => void }) => {
  const [countdown, setCountdown] = useState(5);
  
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    if (countdown <= 0) return;
    const timer = window.setInterval(() => setCountdown((prev) => prev - 1), 1000);
    return () => window.clearInterval(timer);
  }, [countdown]);

  const handleConfirmDownload = () => {
    const link = document.createElement('a');
    link.href = tour.file_url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.download = `${tour.title.replace(/\s+/g, '-')}.pdf`;
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    onClose();
  };

  return (
    <div onClick={onClose} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-all duration-300">
      <div onClick={(e) => e.stopPropagation()} className="bg-background rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative animate-in fade-in zoom-in duration-200">
        <button
          onClick={onClose}
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
            Antes de descargar la info de <strong className="text-foreground">{tour.title}</strong>, te invitamos a seguirnos en nuestras redes sociales.
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
  );
};

// PÁGINA PRINCIPAL
export default function Turitours() {
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <main className="pt-12 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow w-full">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TURITOURS_LIST.map((tour) => (
            <div key={tour.id} className="relative group h-80">
              <div className="absolute inset-0 bg-secondary/30 rounded-2xl translate-x-2.5 translate-y-2.5 -z-10 transition-transform group-hover:translate-x-3.5 group-hover:translate-y-3.5"></div>
              <div className="relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full overflow-hidden border border-transparent shadow-sm">
                
                <img 
                  src={tour.image} 
                  alt={tour.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20"></div>

                <div className="relative z-10 mb-8 mt-auto">
                  <div className="bg-white/20 backdrop-blur-md border border-white/10 w-10 h-10 flex items-center justify-center rounded-xl mb-4 shadow-sm">
                    <Map className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-white text-2xl leading-tight drop-shadow-md">
                    {tour.title}
                  </h3>
                </div>
                
                {/* BOTÓN DE DESCARGA ACTIVADO */}
                <button
                  onClick={() => setSelectedTour(tour)}
                  className="relative z-10 w-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border border-white/20 font-semibold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                >
                  <Download className="w-5 h-5" /> 
                  Descargar Itinerario
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Renderizado condicional del modal aislado */}
      {selectedTour && (
        <DownloadModal 
          tour={selectedTour} 
          onClose={() => setSelectedTour(null)} 
        />
      )}

      <Footer />
    </div>
  );
}