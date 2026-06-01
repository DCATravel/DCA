import { useParams, Link, useNavigate } from "react-router-dom";
import { Search, Download, Calendar, MapPin, Hotel, ArrowLeft } from "lucide-react";
import { destinations, itineraries } from "@/data/travelData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DestinationItineraries() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const destination = destinations.find((d) => d.id === id);
  const destinationItineraries = itineraries.filter((it) => it.id.startsWith(id || ""));

  if (!destination) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center p-4">
          <h1 className="text-2xl font-bold mb-4">Destino no encontrado</h1>
          <Link to="/explora" className="text-primary hover:underline flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Volver a explorar
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-64 mx-4 mt-4 rounded-xl overflow-hidden shadow-sm border border-border">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#056099]/50 mix-blend-multiply" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold italic mb-2 drop-shadow-md">
            {destination.name}
          </h1>
          <p className="text-lg opacity-90 drop-shadow-sm flex items-center gap-2">
            <MapPin className="w-5 h-5" /> {destination.location}
          </p>
        </div>
      </section>

      {/* Itineraries */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Paquetes Disponibles</h2>
            <p className="text-muted-foreground text-sm mt-1">
              Encontramos {destinationItineraries.length} opciones increíbles para tu viaje a {destination.name}
            </p>
          </div>
          <Link to="/explora" className="hidden md:flex text-sm font-medium text-primary hover:text-primary/80 items-center gap-1 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Ver otros destinos
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinationItineraries.map((it) => (
            <div 
              key={it.id} 
              onClick={() => navigate(`/itinerarios/${it.id}`)}
              className="bg-card rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-md hover:border-primary/50 transition-all duration-300 cursor-pointer group flex flex-col"
            >
              <div className="relative h-48 overflow-hidden shrink-0">
                <img src={it.image} alt={it.title} className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500" />
                
                <a 
                  href={it.pdfUrl || "#"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  download={`Itinerario-${it.id}.pdf`}
                  onClick={(e) => e.stopPropagation()} 
                  className="absolute top-3 right-3 bg-background/90 hover:bg-background text-primary hover:text-secondary p-2.5 rounded-full shadow-sm transition-colors z-10"
                  title="Descargar PDF"
                >
                  <Download className="w-5 h-5" />
                </a>
              </div>
              
              <div className="p-5 flex flex-col flex-1">
                {/* Título Principal */}
                <h3 className="font-bold text-lg text-foreground mb-1 leading-tight">{it.title}</h3>
                <p className="text-sm text-primary font-medium mb-4">{it.destination}</p>
                
                {/* Badges Info */}
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
                        ${it.pricePerPerson} <span className="text-xs font-normal text-muted-foreground">USD/persona</span>
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
        {destinationItineraries.length === 0 && (
          <div className="text-center py-20 bg-muted/30 rounded-xl border border-dashed border-border mt-4">
            <Search className="w-10 h-10 text-muted-foreground mx-auto mb-3 opacity-50" />
            <p className="text-foreground font-medium">Próximamente más paquetes</p>
            <p className="text-muted-foreground text-sm mt-1">Estamos preparando nuevas experiencias para {destination.name}</p>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}