import { useParams, Link } from "react-router-dom";
import { Download, Plane, Calendar, MapPin, Hotel, Circle } from "lucide-react";
import { itineraries } from "@/data/travelData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ItineraryDetail() {
  const { id } = useParams();
  const itinerary = itineraries.find((it) => it.id === id);

  if (!itinerary) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Itinerario no encontrado</h1>
          <Link to="/itinerarios" className="text-teal-500 hover:underline">Volver al catálogo</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header Banner */}
      <section className="bg-teal-500 py-6 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Plane className="w-8 h-8 text-white" />
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-white">{itinerary.title}</h1>
              <p className="text-teal-100 text-sm">{itinerary.dates} · {itinerary.duration}</p>
              <div className="flex gap-4 mt-1 text-teal-100 text-xs">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {itinerary.days} Días De Viaje
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {itinerary.cities} Ciudades
                </span>
                <span className="flex items-center gap-1">
                  <Hotel className="w-3 h-3" /> {itinerary.hotelNights} Noches De Hotel
                </span>
              </div>
            </div>
          </div>
          <a 
            href="/assets/IT LINDA COSTA RICA 5D-4N.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            download="Itinerario-Linda-Costa-Rica.pdf"
            className="inline-flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors cursor-pointer"
          >
            <Download className="w-6 h-6 text-white" />
          </a>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        {/* Description */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="w-full md:w-2/5">
            <img
              src={itinerary.image}
              alt={itinerary.title}
              className="w-full h-72 object-cover rounded-xl shadow-md"
            />
          </div>
          <div className="w-full md:w-3/5 flex items-center">
            <p className="text-gray-700 text-lg leading-relaxed">{itinerary.description}</p>
          </div>
        </div>

        {/* Flight Information */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Plane className="w-5 h-5 text-teal-500" />
            Información De Vuelos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Outbound */}
            <div className="border rounded-xl p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-teal-100 text-teal-700 text-xs font-bold px-2 py-1 rounded">IDA</span>
                <span className="text-sm text-gray-600">{itinerary.flights.outbound.arrival}</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="flex flex-col items-center">
                    <Circle className="w-3 h-3 text-teal-500 fill-teal-500" />
                    <div className="w-0.5 h-8 bg-gray-200" />
                    <Circle className="w-3 h-3 text-teal-500 fill-teal-500" />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-sm text-gray-900">{itinerary.flights.outbound.from}</p>
                      <p className="text-xs text-gray-500">{itinerary.flights.outbound.departure}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-gray-900">{itinerary.flights.outbound.to}</p>
                      <p className="text-xs text-gray-500">{itinerary.flights.outbound.arrival}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 bg-teal-500 text-white text-xs rounded-lg p-3">
                <p>• {itinerary.flights.outbound.stops}</p>
                <p>• {itinerary.flights.outbound.estimatedPrice}</p>
              </div>
            </div>

            {/* Return */}
            <div className="border rounded-xl p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">VUELTA</span>
                <span className="text-sm text-gray-600">{itinerary.flights.return.arrival}</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="flex flex-col items-center">
                    <Circle className="w-3 h-3 text-teal-500 fill-teal-500" />
                    <div className="w-0.5 h-8 bg-gray-200" />
                    <Circle className="w-3 h-3 text-teal-500 fill-teal-500" />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-sm text-gray-900">{itinerary.flights.return.from}</p>
                      <p className="text-xs text-gray-500">{itinerary.flights.return.departure}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-gray-900">{itinerary.flights.return.to}</p>
                      <p className="text-xs text-gray-500">{itinerary.flights.return.arrival}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 bg-teal-500 text-white text-xs rounded-lg p-3">
                <p>• {itinerary.flights.return.stops}</p>
                <p>• {itinerary.flights.return.estimatedPrice}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Activities */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-2 italic underline">Actividades</h2>
          <h3 className="font-semibold text-gray-800 mb-4">Qué Harás En Tu Viaje?</h3>
          <ul className="space-y-3">
            {itinerary.activities.map((activity, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-teal-500 mt-2 flex-shrink-0" />
                <span className="text-gray-700">{activity}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Included / Not Included */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Incluido / No Incluido</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-gray-800 mb-3">Incluido</h3>
              <ul className="space-y-2">
                {itinerary.included.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal-500" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-3">No Incluido</h3>
              <ul className="space-y-2">
                {itinerary.notIncluded.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gray-400" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Detalles</h2>
          <div className="grid grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-gray-800 mb-2">Temporada</h3>
              <ul className="space-y-1">
                {itinerary.season.map((s, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal-500" />
                    <span className="text-gray-700 text-sm">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">Duration</h3>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-500" />
                <span className="text-gray-700 text-sm">{itinerary.days} Días y {itinerary.hotelNights} Noches</span>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">Precio Por Persona</h3>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-500" />
                <span className="text-gray-700 text-sm">${itinerary.pricePerPerson}usd</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}