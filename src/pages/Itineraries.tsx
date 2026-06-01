import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { Search, Download, Calendar, MapPin, Hotel, X, Heart } from "lucide-react";
import { SiFacebook, SiInstagram } from "@icons-pack/react-simple-icons";
import { itineraries, categories, seasons } from "@/data/travelData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type ItineraryType = typeof itineraries[0];

export default function Itineraries() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedSeason, setSelectedSeason] = useState("Todas");
  const navigate = useNavigate();

  const [selectedItinerary, setSelectedItinerary] = useState<ItineraryType | null>(null);
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    if (!selectedItinerary) return;

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
  }, [selectedItinerary]);

  const filteredItineraries = itineraries.filter((it) => {
    const matchesSearch =
      it.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      it.destination.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "Todos" || it.category === selectedCategory;
    const matchesSeason = selectedSeason === "Todas" || it.season.includes(selectedSeason);
    return matchesSearch && matchesCategory && matchesSeason;
  });

  const handleConfirmDownload = () => {
    if (!selectedItinerary) return;
    
    const link = document.createElement('a');
    link.href = selectedItinerary.pdfUrl || "#";
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.download = `Itinerario-${selectedItinerary.id}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setSelectedItinerary(null);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="bg-primary py-10 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-primary-foreground mb-2">Catálogo de Itinerarios</h1>
          <p className="text-primary-foreground/80 text-sm">Encuentra tu próximo destino con nuestros itinerarios detallados</p>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          {/* Search Bar */}
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar por destino..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm text-foreground placeholder:text-muted-foreground transition-shadow"
            />
          </div>

          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-3 bg-card border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-shadow cursor-pointer"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          {/* Season Filter */}
          <select
            value={selectedSeason}
            onChange={(e) => setSelectedSeason(e.target.value)}
            className="px-4 py-3 bg-card border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-shadow cursor-pointer"
          >
            {seasons.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </section>

      {/* Itinerary Cards */}
      <section className="max-w-7xl mx-auto px-4 pb-16 flex-grow w-full">
        <p className="text-sm text-muted-foreground mb-6">{filteredItineraries.length} itinerarios encontrados</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItineraries.map((it) => (
            <div 
              key={it.id} 
              onClick={() => navigate(`/itinerarios/${it.id}`)}
              className="bg-card rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-md hover:border-primary/50 transition-all duration-300 cursor-pointer group flex flex-col"
            >
              <div className="relative h-48 overflow-hidden shrink-0">
                <img src={it.image} alt={it.title} className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500" />
                
                {/* Botón de descarga modificado */}
                <button 
                  onClick={(e) => {
                    e.stopPropagation(); 
                    // Asignamos los 5 segundos justo al hacer clic
                    setCountdown(5);
                    setSelectedItinerary(it);
                  }} 
                  className="absolute top-3 right-3 bg-background/90 hover:bg-background text-primary hover:text-secondary p-2.5 rounded-full shadow-sm transition-colors z-10"
                  title="Descargar PDF"
                >
                  <Download className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-lg text-foreground mb-1 leading-tight">{it.title}</h3>
                <p className="text-sm text-primary font-medium mb-4">{it.destination}</p>
                
                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-primary" /> {it.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-primary" /> {it.cities} Ciudades
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Hotel className="w-3.5 h-3.5 text-primary" /> {it.hotelNights} Noches
                  </span>
                </div>
                
                <p className="text-sm text-muted-foreground line-clamp-2 mb-5 leading-relaxed flex-1">{it.description}</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                  <p className="text-xl font-bold text-foreground">
                    {it.pricePerPerson === 0 ? (
                      'Cotizar'
                    ) : (
                      <>
                        ${it.pricePerPerson}<span className="text-xs font-normal text-muted-foreground">/persona</span>
                      </>
                    )}
                  </p>
                  
                  <span className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-sm font-medium px-5 py-2.5 rounded-md transition-colors shadow-sm">
                    Ver Detalles
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItineraries.length === 0 && (
          <div className="text-center py-20 bg-muted/30 rounded-xl border border-dashed border-border">
            <Search className="w-10 h-10 text-muted-foreground mx-auto mb-3 opacity-50" />
            <p className="text-foreground font-medium">No encontramos itinerarios</p>
            <p className="text-muted-foreground text-sm mt-1">Intenta ajustando los filtros de búsqueda</p>
          </div>
        )}
      </section>

      {/* ========================================= */}
      {/* POPUP DE DESCARGA CON TIMER               */}
      {/* ========================================= */}
      {selectedItinerary && (
        <div 
          onClick={() => setSelectedItinerary(null)} 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-all duration-300"
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="bg-background rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative animate-in fade-in zoom-in duration-200"
          >
            {/* Botón Cerrar */}
            <button
              onClick={() => setSelectedItinerary(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground bg-muted hover:bg-muted/80 rounded-full p-1.5 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Cabecera del Popup */}
            <div className="bg-primary/10 pt-8 pb-6 px-6 flex flex-col items-center border-b border-border">
              <div className="bg-primary text-primary-foreground p-3 rounded-full mb-4 shadow-md">
                <Heart className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-foreground text-center">
                ¡Únete a nuestra comunidad!
              </h2>
            </div>

            {/* Contenido del Popup */}
            <div className="p-6 text-center">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Antes de descargar el itinerario de <strong className="text-foreground">{selectedItinerary.title}</strong>, te invitamos a seguirnos en nuestras redes sociales para no perderte ningún paquete nuevo ni promociones exclusivas.
              </p>
              
              <div className="bg-muted/40 rounded-xl p-5 mb-6 border border-border">
                <p className="text-sm font-semibold text-foreground mb-4">
                  Síguenos en:
                </p>
                
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

              {/* Botón Principal (Con Timer) */}
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
              
              {/* Botón Secundario (Sin Timer) */}
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