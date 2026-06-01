import { useParams, Link } from "react-router-dom";
import { Download, Plane, Calendar, MapPin, Hotel, Circle, CheckCircle2, XCircle } from "lucide-react";
import { itineraries } from "@/data/travelData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ItineraryDetail() {
  const { id } = useParams();
  const itinerary = itineraries.find((it) => it.id === id);

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
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header Banner - Usando el color Primario de la empresa */}
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
              
              {/* Badges de información */}
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
          
          <a 
            href={itinerary.pdfUrl || "#"} 
            target="_blank" 
            rel="noopener noreferrer"
            download={`Itinerario-${itinerary.id}.pdf`}
            className="inline-flex items-center gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold rounded-xl px-5 py-3 transition-colors shrink-0"
          >
            <Download className="w-5 h-5" />
            <span>Descargar PDF</span>
          </a>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        
        {/* Description con asimetría sutil */}
        <div className="flex flex-col md:flex-row gap-10 mb-16 items-center">
          <div className="w-full md:w-2/5 relative">
            {/* Elemento decorativo de fondo en lugar de sombra */}
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

        {/* Flight Information - Layering tonal sin bordes */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
            <div className="bg-primary/10 p-2 rounded-lg text-primary">
              <Plane className="w-6 h-6" />
            </div>
            Información de Vuelos
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Outbound */}
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

            {/* Return */}
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

        {/* Detalles Rápidos y Actividades */}
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

          {/* Columna Lateral: Detalles */}
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

        {/* Included / Not Included */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">Consideraciones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50/50 dark:bg-green-950/20 rounded-2xl p-6 md:p-8">
              <h3 className="font-bold text-green-800 dark:text-green-400 mb-5 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Incluido
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
                <XCircle className="w-5 h-5" />
                No Incluido
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

      <Footer />
    </div>
  );
}