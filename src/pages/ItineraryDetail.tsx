import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Download, Plane, Calendar, MapPin, Hotel, Circle, CheckCircle2, XCircle, X, Heart } from "lucide-react";
import { SiFacebook, SiInstagram } from "@icons-pack/react-simple-icons";
import { itineraries } from "@/data/travelData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ItineraryDetail() {
  const { id } = useParams();
  const itinerary = itineraries.find((it) => it.id === id);

  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    if (!showDownloadModal) return;

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
  }, [showDownloadModal]);

  const handleConfirmDownload = () => {
    if (!itinerary) return;
    
    const link = document.createElement('a');
    link.href = itinerary.pdfUrl || "#";
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.download = `Itinerario-${itinerary.id}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setShowDownloadModal(false);
  };

  if (!itinerary) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Itinerario no encontrado</h1>
          <Link to="/itinerarios" className="text-primary font-medium hover:underline underline-offset-4">
            Volver al catálogo
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <section className="bg-primary py-8 px-4 rounded-b-3xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="bg-primary-foreground/20 p-3 rounded-2xl">
              <Plane className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-1">
                {itinerary.title}
              </h1>
              <p className="text-primary-foreground/80 font-medium mb-3">
                {itinerary.dates} · {itinerary.duration}
              </p>
              
              <div className="flex flex-wrap gap-3 text-primary-foreground/90 text-sm">
                <span className="flex items-center gap-1.5 bg-primary-foreground/10 px-3 py-1.5 rounded-lg">
                  <Calendar className="w-4 h-4" /> {itinerary.days} Días
                </span>
                <span className="flex items-center gap-1.5 bg-primary-foreground/10 px-3 py-1.5 rounded-lg">
                  <MapPin className="w-4 h-4" /> {itinerary.cities} Ciudades
                </span>
                <span className="flex items-center gap-1.5 bg-primary-foreground/10 px-3 py-1.5 rounded-lg">
                  <Hotel className="w-4 h-4" /> {itinerary.hotelNights} Noches
                </span>
              </div>
            </div>
          </div>
          
          <button 
            onClick={() => {
              setCountdown(5);
              setShowDownloadModal(true);
            }}
            className="inline-flex items-center gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold rounded-xl px-5 py-3 transition-colors shrink-0 cursor-pointer"
          >
            <Download className="w-5 h-5" />
            <span>Descargar PDF</span>
          </button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12 md:py-16 flex-grow w-full">
        <div className="flex flex-col md:flex-row gap-10 mb-16 items-center">
          <div className="w-full md:w-2/5 relative">
            <div className="absolute inset-0 bg-secondary/20 rounded-2xl translate-x-3 translate-y-3 -z-10"></div>
            <img
              src={itinerary.image}
              alt={itinerary.title}
              className="w-full h-80 object-cover rounded-2xl"
            />
          </div>
          <div className="w-full md:w-3/5">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Resumen del Viaje</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {itinerary.description}
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
            <div className="bg-primary/10 p-2 rounded-lg text-primary">
              <Plane className="w-6 h-6" />
            </div>
            Información de Vuelos
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-muted/40 rounded-2xl p-6">
              <div className="flex justify-between items-center mb-6">
                <span className="bg-primary/15 text-primary text-xs font-bold px-3 py-1.5 rounded-md">VUELO DE IDA</span>
                <span className="text-sm font-medium text-muted-foreground">{itinerary.flights.outbound.arrival}</span>
              </div>
              
              <div className="flex items-stretch gap-4 mb-6">
                <div className="flex flex-col items-center py-1">
                  <Circle className="w-3.5 h-3.5 text-primary fill-primary" />
                  <div className="w-0.5 flex-1 bg-border my-1" />
                  <Circle className="w-3.5 h-3.5 text-primary fill-primary" />
                </div>
                <div className="flex flex-col justify-between space-y-6">
                  <div>
                    <p className="font-bold text-foreground">{itinerary.flights.outbound.from}</p>
                    <p className="text-sm text-muted-foreground">{itinerary.flights.outbound.departure}</p>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{itinerary.flights.outbound.to}</p>
                    <p className="text-sm text-muted-foreground">{itinerary.flights.outbound.arrival}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-background rounded-xl p-4 text-sm text-muted-foreground">
                <p className="flex items-center gap-2 mb-1"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> {itinerary.flights.outbound.stops}</p>
                <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> {itinerary.flights.outbound.estimatedPrice}</p>
              </div>
            </div>

            <div className="bg-muted/40 rounded-2xl p-6">
              <div className="flex justify-between items-center mb-6">
                <span className="bg-secondary/15 text-secondary-foreground text-xs font-bold px-3 py-1.5 rounded-md">VUELO DE REGRESO</span>
                <span className="text-sm font-medium text-muted-foreground">{itinerary.flights.return.arrival}</span>
              </div>
              
              <div className="flex items-stretch gap-4 mb-6">
                <div className="flex flex-col items-center py-1">
                  <Circle className="w-3.5 h-3.5 text-secondary-foreground fill-secondary-foreground" />
                  <div className="w-0.5 flex-1 bg-border my-1" />
                  <Circle className="w-3.5 h-3.5 text-secondary-foreground fill-secondary-foreground" />
                </div>
                <div className="flex flex-col justify-between space-y-6">
                  <div>
                    <p className="font-bold text-foreground">{itinerary.flights.return.from}</p>
                    <p className="text-sm text-muted-foreground">{itinerary.flights.return.departure}</p>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{itinerary.flights.return.to}</p>
                    <p className="text-sm text-muted-foreground">{itinerary.flights.return.arrival}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-background rounded-xl p-4 text-sm text-muted-foreground">
                <p className="flex items-center gap-2 mb-1"><span className="w-1.5 h-1.5 rounded-full bg-secondary-foreground" /> {itinerary.flights.return.stops}</p>
                <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary-foreground" /> {itinerary.flights.return.estimatedPrice}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-foreground mb-6">¿Qué harás en tu viaje?</h2>
            <div className="bg-primary/5 rounded-2xl p-6 md:p-8">
              <ul className="space-y-4">
                {itinerary.activities.map((activity, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="bg-primary/20 p-1.5 rounded-full mt-0.5 shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-foreground/80 leading-relaxed">{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-muted/30 rounded-2xl p-6">
              <h3 className="font-bold text-foreground mb-4">Detalles del Paquete</h3>
              <div className="space-y-5">
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Temporada</p>
                  <div className="flex flex-wrap gap-2">
                    {itinerary.season.map((s, i) => (
                      <span key={i} className="bg-background text-foreground text-sm px-3 py-1 rounded-md font-medium">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Duración</p>
                  <p className="text-foreground font-medium">{itinerary.days} Días y {itinerary.hotelNights} Noches</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Precio Por Persona</p>
                  <p className="text-2xl font-bold text-primary">
                    {itinerary.pricePerPerson === 0 ? 'Cotizar tarifa' : `$${itinerary.pricePerPerson} USD`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">Consideraciones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50/50 dark:bg-green-950/20 rounded-2xl p-6 md:p-8">
              <h3 className="font-bold text-green-800 dark:text-green-400 mb-5 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" /> Incluido
              </h3>
              <ul className="space-y-3">
                {itinerary.included.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                    <span className="text-green-900/80 dark:text-green-200/80 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50/50 dark:bg-red-950/20 rounded-2xl p-6 md:p-8">
              <h3 className="font-bold text-red-800 dark:text-red-400 mb-5 flex items-center gap-2">
                <XCircle className="w-5 h-5" /> No Incluido
              </h3>
              <ul className="space-y-3">
                {itinerary.notIncluded.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                    <span className="text-red-900/80 dark:text-red-200/80 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {showDownloadModal && (
        <div 
          onClick={() => setShowDownloadModal(false)} 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-all duration-300"
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="bg-background rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative animate-in fade-in zoom-in duration-200"
          >
            <button
              onClick={() => setShowDownloadModal(false)}
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
                Antes de descargar el itinerario de <strong className="text-foreground">{itinerary.title}</strong>, te invitamos a seguirnos en nuestras redes sociales para no perderte ningún paquete nuevo ni promociones exclusivas.
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
                Ya los sigo, descargar itinerario
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}