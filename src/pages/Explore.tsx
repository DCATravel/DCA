import { useState } from "react";
import { Link } from "react-router-dom";
import { Star, ChevronDown, Search } from "lucide-react";
import { destinations, categories, seasons } from "@/data/travelData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Explore() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedSeason, setSelectedSeason] = useState("Todas");
  const [priceRange, setPriceRange] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDestinations = destinations.filter((dest) => {
    const matchesCategory = selectedCategory === "Todos" || dest.category === selectedCategory;
    const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = !priceRange || dest.price <= parseInt(priceRange);
    return matchesCategory && matchesSearch && matchesPrice;
  });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3.5 h-3.5 ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-muted"}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-72 mx-4 mt-4 rounded-xl overflow-hidden shadow-sm border border-border">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
          alt="Explore"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#056099]/60 mix-blend-multiply" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold italic mb-4 drop-shadow-md">Explora El Mundo</h1>
          <p className="text-base md:text-lg opacity-90 max-w-2xl drop-shadow-sm">
            Encuentra los mejores destinos curados para ti y tus clientes. Utiliza nuestros filtros para descubrir la aventura perfecta.
          </p>
        </div>
      </section>

      {/* Filters Bar */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row flex-wrap items-center gap-4 bg-card rounded-xl shadow-sm border border-border p-4 md:p-5">
          
          {/* Search */}
          <div className="flex-1 w-full min-w-[200px] relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar por nombre o lugar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-shadow placeholder:text-muted-foreground"
            />
          </div>

          {/* Lugares Filter */}
          <div className="flex-1 w-full min-w-[150px]">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1 block">
              Región
            </label>
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full text-sm text-foreground bg-background border border-border py-2.5 px-3 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-primary transition-shadow cursor-pointer"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>

          {/* Temporada Filter */}
          <div className="flex-1 w-full min-w-[150px]">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1 block">
              Temporada
            </label>
            <div className="relative">
              <select
                value={selectedSeason}
                onChange={(e) => setSelectedSeason(e.target.value)}
                className="w-full text-sm text-foreground bg-background border border-border py-2.5 px-3 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-primary transition-shadow cursor-pointer"
              >
                {seasons.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>

          {/* Precios Filter */}
          <div className="flex-1 w-full min-w-[150px]">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1 block">
              Presupuesto
            </label>
            <div className="relative">
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full text-sm text-foreground bg-background border border-border py-2.5 px-3 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-primary transition-shadow cursor-pointer"
              >
                <option value="">Cualquier precio</option>
                <option value="500">Hasta $500</option>
                <option value="700">Hasta $700</option>
                <option value="1000">Hasta $1,000</option>
                <option value="2000">Hasta $2,000</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>

        </div>
      </section>

      {/* Destination Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <p className="text-sm text-muted-foreground mb-6 font-medium">{filteredDestinations.length} destinos encontrados</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDestinations.map((dest) => (
            <Link
              key={dest.id}
              to={`/destinos/${dest.id}`}
              className="group block"
            >
              <div className="rounded-xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300">
                <div className="overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-semibold text-foreground text-lg mb-1">{dest.name}</p>
                      <div className="flex items-center gap-2">
                        <div className="flex">{renderStars(dest.rating)}</div>
                        <span className="text-xs text-muted-foreground">{dest.location}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground mb-0.5">Desde</p>
                      <p className="text-primary font-bold text-xl">${dest.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredDestinations.length === 0 && (
          <div className="text-center py-20 bg-muted/30 rounded-xl border border-dashed border-border mt-4">
            <Search className="w-10 h-10 text-muted-foreground mx-auto mb-3 opacity-50" />
            <p className="text-foreground font-medium">No encontramos destinos</p>
            <p className="text-muted-foreground text-sm mt-1">Intenta ajustando los filtros de búsqueda</p>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}