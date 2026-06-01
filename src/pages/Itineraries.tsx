import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { Search, Download, Calendar, MapPin, Hotel } from "lucide-react";
import { itineraries, categories, seasons } from "@/data/travelData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Itineraries() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedSeason, setSelectedSeason] = useState("Todas");
  const navigate = useNavigate();

  const filteredItineraries = itineraries.filter((it) => {
    const matchesSearch =
      it.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      it.destination.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "Todos" || it.category === selectedCategory;
    const matchesSeason = selectedSeason === "Todas" || it.season.includes(selectedSeason);
    return matchesSearch && matchesCategory && matchesSeason;
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
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
              placeholder="Buscar itinerarios por destino..."
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
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <p className="text-sm text-muted-foreground mb-6">{filteredItineraries.length} itinerarios encontrados</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItineraries.map((it) => (
            <div 
              key={it.id} 
              onClick={() => navigate(`/itinerarios/${it.id}`)}
              className="bg-card rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-md hover:border-primary/50 transition-all duration-300 cursor-pointer group"
            >
              <div className="relative h-48 overflow-hidden">
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
              <div className="p-5">
                <h3 className="font-bold text-foreground mb-3">{it.title}</h3>
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
                <p className="text-sm text-muted-foreground line-clamp-2 mb-5 leading-relaxed">{it.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <p className="text-xl font-bold text-foreground">
                    {it.pricePerPerson === 0 ? (
                      'Cotizar'
                    ) : (
                      <>
                        ${it.pricePerPerson}<span className="text-xs font-normal text-muted-foreground">/persona</span>
                      </>
                    )}
                  </p>
                  
                  {/* Button CTA */}
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

      <Footer />
    </div>
  );
}