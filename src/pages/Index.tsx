import { Link } from "react-router-dom";
import { Star, MapPin } from "lucide-react";
import { useState } from "react";
import { destinations } from "@/data/travelData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Index() {
  const [popularIndex, setPopularIndex] = useState(0);
  const [mustSeeIndex, setMustSeeIndex] = useState(0);
  const popularDestinations = destinations.slice(0, 6);
  const mustSeeDestinations = destinations.slice(0, 4);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-muted"}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Decorative airplane path */}
          <div className="absolute top-8 left-0 w-full">
            <svg className="w-full h-16 text-primary/20 opacity-40" viewBox="0 0 1200 60" fill="none">
              <path d="M0 30 Q300 5 600 30 T1200 30" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 4" />
            </svg>
          </div>

          {/* Hero Image */}
          <div className="relative w-full md:w-1/2 flex justify-center">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-secondary shadow-xl" style={{ borderRadius: "60% 40% 50% 50% / 50% 60% 40% 50%" }}>
              <img
                src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80"
                alt="Travel Hero"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Hero Text */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Explora El Mundo</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
              Tu Próximo Gran Destino, Planeado Por Expertos En Viajes.
            </h1>
            <p className="text-muted-foreground mb-6">
              Expertos en viajes por Latinoamérica: diseñamos, conectamos y te acompañamos en tu próxima aventura.
            </p>
            {/* Main Button */}
            <Link
              to="/itinerarios"
              className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 py-3 rounded transition-colors shadow-sm"
            >
              ¡Viaja!
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-10">Destinos Populares</h2>
          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {popularDestinations.slice(popularIndex, popularIndex + 5).map((dest) => (
                <Link 
                  key={dest.id} 
                  to={`/destinos/${dest.id}`} 
                  className="group"
                >
                  <div className="rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow">
                    <img src={dest.image} alt={dest.name} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <p className="text-sm font-medium text-foreground mt-2">{dest.name}</p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="w-3 h-3 text-secondary" />
                    <span>{dest.location}</span>
                  </div>
                </Link>
              ))}
            </div>
            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {[0, 1, 2].map((i) => (
                <button
                  key={i}
                  onClick={() => setPopularIndex(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${popularIndex === i ? "bg-primary" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Must-See of the Month */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-10 uppercase">Imperdibles Del Mes</h2>
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {mustSeeDestinations.map((dest) => (
                <div key={dest.id} className="bg-card rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                      <p className="text-white font-semibold text-sm">{dest.name}</p>
                      <div className="flex">{renderStars(dest.rating)}</div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-muted-foreground line-clamp-3 mb-3">{dest.description}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-sm">
                        {dest.price > 0 && <span className="text-muted-foreground">Desde </span>}
                        <span className="text-lg font-bold text-foreground">
                          {dest.price === 0 ? 'Cotizar' : `$${dest.price}`}
                        </span>
                      </p>
                      {/* Secondary Buttons */}
                      <Link
                        to={`/destinos/${dest.id}`}
                        className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-xs font-medium px-4 py-1.5 rounded transition-colors shadow-sm"
                      >
                        Detalles
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {[0, 1, 2].map((i) => (
                <button
                  key={i}
                  onClick={() => setMustSeeIndex(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${mustSeeIndex === i ? "bg-secondary" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="nosotros" className="py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Photo Grid */}
          <div className="w-full md:w-1/2 grid grid-cols-3 gap-2">
            {destinations.slice(0, 6).map((dest, i) => (
              <div key={i} className="rounded-lg overflow-hidden aspect-square border border-border/50">
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-foreground mb-4 italic">Sobre Nosotros</h2>
            <p className="text-muted-foreground mb-3 leading-relaxed">
              En <strong className="text-foreground font-semibold">DCA Travel</strong> somos una operadora mayorista de viajes liderada por mujeres, expertas en Latinoamérica y el mundo. Nos especializamos en crear viajes en paquete y a la medida, trabajando de la mano con proveedores locales para ofrecer experiencias auténticas y de alta calidad.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Seleccionamos cuidadosamente cada destino y experiencia diferenciada para garantizar autenticidad en cada detalle. Diseñamos propuestas personalizadas según las necesidades de cada viajero, asegurando que la aventura comience desde el primer momento.
            </p>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold text-primary">1K+</p>
                <p className="text-sm text-muted-foreground">Paquetes A Medida</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">3K+</p>
                <p className="text-sm text-muted-foreground">Destinos</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">15+</p>
                <p className="text-sm text-muted-foreground">Años De Experiencia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Itineraries Banner */}
      <section id="material" className="relative py-20 px-4">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
            alt="Travel background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#056099]/70 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold italic mb-4">Material Exclusivo Para Tus Redes</h2>
          <p className="text-sm md:text-base max-w-2xl mx-auto mb-8 opacity-90 leading-relaxed">
            Sabemos que tu presencia digital es clave para atraer viajeros. Por eso, hemos preparado un catálogo con itinerarios detallados, flyers y descripciones <strong>listas para publicar</strong>. Descarga los PDF's de nuestros paquetes en alta calidad y compártelos directamente con tus clientes para impulsar tus ventas.
          </p>
          {/* Main Conversion Button */}
          <Link
            to="/material"
            className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium px-10 py-4 rounded transition-colors shadow-lg shadow-black/20"
          >
            Material Gráfico
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}