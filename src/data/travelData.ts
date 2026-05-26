export interface Destination {
  id: string;
  name: string;
  location: string;
  image: string;
  rating: number;
  price: number;
  description: string;
  category: string;
}

export interface Itinerary {
  id: string;
  title: string;
  destination: string;
  dates: string;
  duration: string;
  days: number;
  cities: number;
  hotelNights: number;
  image: string;
  description: string;
  category: string;
  season: string[];
  pricePerPerson: number;
  flights: {
    outbound: { from: string; departure: string; to: string; arrival: string; stops: string; estimatedPrice: string };
    return: { from: string; departure: string; to: string; arrival: string; stops: string; estimatedPrice: string };
  };
  activities: string[];
  included: string[];
  notIncluded: string[];
}

export const destinations: Destination[] = [
  {
   id: "costa-rica",
    name: "Costa Rica",
    location: "San José, Costa Rica",
    image: "https://rutina-no.com/wp-content/uploads/2025/06/Aerial-Drone-view-of-Manuel-Antonio-National-Park-in-Costa-Rica.-.jpg",
    rating: 5,
    price: 534,
    description: "Descubre lo mejor de Costa Rica en una experiencia que combina cultura, historia y naturaleza en solo cinco días. Explorarás San José, paisajes volcánicos y el encantador Valle de Orosí.",
    category: "Latinoamérica"
  },
  {
    id: "venice",
    name: "Grand Canal, Venice",
    location: "Venice, Italy",
    image: "https://mgx-backend-cdn.metadl.com/generate/images/1003084/2026-05-26/pjtghiaaagvq/destination-venice-italy.png",
    rating: 4.5,
    price: 800,
    description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nunc Vulputate Libero Et Velit Interdum. Ac Aliquet Odio Mattis Class Aptent Taciti Sociosqu Ad Litora Torquent Per Consulta Nostra.",
    category: "Europa"
  },
  {
    id: "agra",
    name: "Agra, India",
    location: "Agra, India",
    image: "https://mgx-backend-cdn.metadl.com/generate/images/1003084/2026-05-26/pjtgc5aaagxq/destination-agra-india.png",
    rating: 5,
    price: 459,
    description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nunc Vulputate Libero Et Velit Interdum. Ac Aliquet Odio Mattis Class Aptent Taciti Sociosqu Ad Litora Torquent Per Consulta Nostra.",
    category: "Asia"
  },
  {
    id: "bali",
    name: "Bali, Indonesia",
    location: "Bali, Indonesia",
    image: "https://mgx-backend-cdn.metadl.com/generate/images/1003084/2026-05-26/pjtgieqaagwa/destination-bali-indonesia.png",
    rating: 4.5,
    price: 700,
    description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nunc Vulputate Libero Et Velit Interdum. Ac Aliquet Odio Mattis Class Aptent Taciti Sociosqu Ad Litora Torquent Per Consulta Nostra.",
    category: "Asia"
  },
  {
    id: "mount-fuji",
    name: "Mount Fuji, Japan",
    location: "Tokyo, Japan",
    image: "https://mgx-backend-cdn.metadl.com/generate/images/1003084/2026-05-26/pjtgznaaagxa/destination-mount-fuji-japan.png",
    rating: 4.5,
    price: 500,
    description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nunc Vulputate Libero Et Velit Interdum. Ac Aliquet Odio Mattis Class Aptent Taciti Sociosqu Ad Litora Torquent Per Consulta Nostra.",
    category: "Asia"
  },
  {
    id: "railay",
    name: "Railay Beach, Thailand",
    location: "Krabi, Thailand",
    image: "https://mgx-backend-cdn.metadl.com/generate/images/1003084/2026-05-26/pjtg65qaagxq/destination-railay-thailand.png",
    rating: 3,
    price: 400,
    description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nunc Vulputate Libero Et Velit Interdum. Ac Aliquet Odio Mattis Class Aptent Taciti Sociosqu Ad Litora Torquent Per Consulta Nostra.",
    category: "Asia"
  },
  {
    id: "santorini",
    name: "Santorini, Greece",
    location: "Santorini, Greece",
    image: "https://mgx-backend-cdn.metadl.com/generate/images/1003084/2026-05-26/pjthciiaagwa/destination-santorini-greece.png",
    rating: 5,
    price: 850,
    description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nunc Vulputate Libero Et Velit Interdum. Ac Aliquet Odio Mattis Class Aptent Taciti Sociosqu Ad Litora Torquent Per Consulta Nostra.",
    category: "Europa"
  },
  {
    id: "rome",
    name: "Rome, Italy",
    location: "Rome, Italy",
    image: "https://mgx-backend-cdn.metadl.com/generate/images/1003084/2026-05-26/pjtghiaaagvq/destination-venice-italy.png",
    rating: 5,
    price: 700,
    description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nunc Vulputate Libero Et Velit Interdum. Ac Aliquet Odio Mattis Class Aptent Taciti Sociosqu Ad Litora Torquent Per Consulta Nostra.",
    category: "Europa"
  },
  {
    id: "cappadocia",
    name: "Cappadocia, Turkey",
    location: "Cappadocia, Turkey",
    image: "https://mgx-backend-cdn.metadl.com/generate/images/1003084/2026-05-26/pjtgziyaagvq/hero-hot-air-balloons-cappadocia.png",
    rating: 4.5,
    price: 550,
    description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nunc Vulputate Libero Et Velit Interdum. Ac Aliquet Odio Mattis Class Aptent Taciti Sociosqu Ad Litora Torquent Per Consulta Nostra.",
    category: "Europa"
  }
];

export const itineraries: Itinerary[] = [
  {
    id: "linda-costa-rica-2026",
    title: "Linda Costa Rica 2026",
    destination: "San José, Costa Rica",
    dates: "10 - 15 Mayo",
    duration: "5 Días",
    days: 5,
    cities: 3, 
    hotelNights: 4,
    image: "https://rutina-no.com/wp-content/uploads/2025/06/Aerial-Drone-view-of-Manuel-Antonio-National-Park-in-Costa-Rica.-.jpg",
    description: "Descubre lo mejor de Costa Rica en una experiencia que combina cultura, historia y naturaleza en solo cinco días. Comenzarás en San José, donde podrás explorar la esencia de la capital, seguido de una jornada memorable en el Volcán Irazú, la histórica Cartago y el Valle de Orosí.",
    category: "Latinoamérica",
    season: ["Primavera", "Verano", "Otoño", "Invierno"], // Salidas diarias todo el año
    pricePerPerson: 534,
    flights: {
      outbound: { from: "CDMX (MEX)", departure: "SALIDA: 22:00", to: "DENPASAR (DPS)", arrival: "SALIDA: Martes 3 Mayo", stops: "2 Escalas (LAX, SIN)", estimatedPrice: "Precio Estimado: ~$1500" },
      return: { from: "DENPASAR (DPS)", departure: "SALIDA: 08:00", to: "CDMX (MEX)", arrival: "LLEGADA: Domingo 15 Mayo", stops: "2 Escalas (SIN, LAX)", estimatedPrice: "Precio Estimado: ~$1500" }
    },
    activities: [
      "City tour de San José: Museo de Arte Costarricense y Parque La Sabana.",
      "Visita al Teatro Nacional, Catedral Metropolitana y Mercado Central.",
      "Almuerzo típico costarricense (casado) incluido.",
      "Tour Volcán Irazú: El más alto de la Cordillera Volcánica Central.",
      "Cartago: Visita a la Basílica de Nuestra Señora de los Ángeles.",
      "Valle de Orosí: Plantaciones de café y la histórica Iglesia colonial.",
      "Día libre: Opciones para visitar Manuel Antonio o el Volcán Arenal."
    ],
    included: [
      "Traslado Aeropuerto - Hotel - Aeropuerto",
      "4 noches de alojamiento",
      "Todos los desayunos y 2 comidas",
      "City tour de San José",
      "Tour Volcán Irazú, Basílica y Valle de Orosí",
      "Seguro de viajero Assist Card",
      "Transportación terrestre"
    ],
    notIncluded: [
      "Vuelos internacionales",
      "Alimentaciones y gastos no mencionados",
      "Actividades extras y opcionales"
    ]
  },
  {
    id: "venice-italia-2026",
    title: "Itinerario Venecia, Italia 2026",
    destination: "Venice, Italy",
    dates: "10 - 24 Octubre",
    duration: "14 Días",
    days: 14,
    cities: 5,
    hotelNights: 13,
    image: "https://mgx-backend-cdn.metadl.com/generate/images/1003084/2026-05-26/pjtghiaaagvq/destination-venice-italy.png",
    description: "Descubre la magia de Venecia con sus canales, góndolas y arquitectura renacentista. Un viaje inolvidable por la ciudad más romántica del mundo.",
    category: "Europa",
    season: ["Otoño", "Primavera"],
    pricePerPerson: 800,
    flights: {
      outbound: { from: "CDMX (MEX)", departure: "SALIDA: 14:00", to: "VENECIA (VCE)", arrival: "SALIDA: Domingo 11 Octubre", stops: "1 Escala (MAD)", estimatedPrice: "Precio Estimado: ~$1200" },
      return: { from: "VENECIA (VCE)", departure: "SALIDA: 10:00", to: "CDMX (MEX)", arrival: "LLEGADA: Sábado 24 Octubre", stops: "1 Escala (MAD)", estimatedPrice: "Precio Estimado: ~$1200" }
    },
    activities: [
      "Paseo en góndola por el Gran Canal.",
      "Visita a la Basílica de San Marcos.",
      "Recorrido por el Palacio Ducal.",
      "Isla de Murano: Taller de vidrio soplado.",
      "Burano: Fotografía en calles coloridas."
    ],
    included: ["Hospedaje", "Desayunos", "Paseo en góndola", "Entradas a museos"],
    notIncluded: ["Vuelos", "Comidas y Cenas", "Transporte local", "Souvenirs"]
  },
  {
    id: "bali-indonesia-2026",
    title: "Itinerario Bali, Indonesia 2026",
    destination: "Bali, Indonesia",
    dates: "1 - 15 Noviembre",
    duration: "15 Días",
    days: 15,
    cities: 4,
    hotelNights: 14,
    image: "https://mgx-backend-cdn.metadl.com/generate/images/1003084/2026-05-26/pjtgieqaagwa/destination-bali-indonesia.png",
    description: "Explora los templos milenarios, arrozales infinitos y playas paradisíacas de Bali. Una experiencia espiritual y natural única.",
    category: "Asia",
    season: ["Verano", "Otoño"],
    pricePerPerson: 700,
    flights: {
      outbound: { from: "CDMX (MEX)", departure: "SALIDA: 22:00", to: "DENPASAR (DPS)", arrival: "SALIDA: Martes 3 Noviembre", stops: "2 Escalas (LAX, SIN)", estimatedPrice: "Precio Estimado: ~$1500" },
      return: { from: "DENPASAR (DPS)", departure: "SALIDA: 08:00", to: "CDMX (MEX)", arrival: "LLEGADA: Domingo 15 Noviembre", stops: "2 Escalas (SIN, LAX)", estimatedPrice: "Precio Estimado: ~$1500" }
    },
    activities: [
      "Templo de Uluwatu: Danza Kecak al atardecer.",
      "Terrazas de arroz de Tegallalang.",
      "Monkey Forest en Ubud.",
      "Snorkel en Nusa Penida.",
      "Ceremonia de purificación en Tirta Empul."
    ],
    included: ["Hospedaje", "Desayunos", "Transporte privado", "Guía local"],
    notIncluded: ["Vuelos", "Comidas y Cenas", "Actividades opcionales", "Seguro de viaje"]
  },
  {
    id: "agra-india-2026",
    title: "Itinerario Agra, India 2026",
    destination: "Agra, India",
    dates: "5 - 18 Diciembre",
    duration: "13 Días",
    days: 13,
    cities: 6,
    hotelNights: 12,
    image: "https://mgx-backend-cdn.metadl.com/generate/images/1003084/2026-05-26/pjtgc5aaagxq/destination-agra-india.png",
    description: "Recorre el triángulo dorado de India: Delhi, Agra y Jaipur. Maravíllate con el Taj Mahal y sumérgete en la cultura milenaria.",
    category: "Asia",
    season: ["Invierno"],
    pricePerPerson: 459,
    flights: {
      outbound: { from: "CDMX (MEX)", departure: "SALIDA: 20:00", to: "DELHI (DEL)", arrival: "SALIDA: Domingo 7 Diciembre", stops: "1 Escala (DOH)", estimatedPrice: "Precio Estimado: ~$1300" },
      return: { from: "DELHI (DEL)", departure: "SALIDA: 06:00", to: "CDMX (MEX)", arrival: "LLEGADA: Jueves 18 Diciembre", stops: "1 Escala (DOH)", estimatedPrice: "Precio Estimado: ~$1300" }
    },
    activities: [
      "Taj Mahal al amanecer.",
      "Fuerte de Agra: Recorrido histórico.",
      "Jaipur: Palacio de los Vientos.",
      "Delhi: Templo del Loto y Qutub Minar.",
      "Mercados locales y gastronomía."
    ],
    included: ["Hospedaje", "Desayunos y Cenas", "Transporte entre ciudades", "Guía bilingüe"],
    notIncluded: ["Vuelos", "Almuerzos", "Propinas", "Visa"]
  },
  {
    id: "mount-fuji-japan-2026",
    title: "Itinerario Monte Fuji, Japón 2026",
    destination: "Mount Fuji, Japan",
    dates: "20 Marzo - 5 Abril",
    duration: "16 Días",
    days: 16,
    cities: 5,
    hotelNights: 15,
    image: "https://mgx-backend-cdn.metadl.com/generate/images/1003084/2026-05-26/pjtgznaaagxa/destination-mount-fuji-japan.png",
    description: "Vive la temporada de cerezos en flor en Japón. Desde Tokio hasta Kioto, descubre templos, tecnología y tradición.",
    category: "Asia",
    season: ["Primavera"],
    pricePerPerson: 500,
    flights: {
      outbound: { from: "CDMX (MEX)", departure: "SALIDA: 12:00", to: "TOKIO (NRT)", arrival: "SALIDA: Domingo 22 Marzo", stops: "1 Escala (LAX)", estimatedPrice: "Precio Estimado: ~$1400" },
      return: { from: "TOKIO (NRT)", departure: "SALIDA: 15:00", to: "CDMX (MEX)", arrival: "LLEGADA: Domingo 5 Abril", stops: "1 Escala (LAX)", estimatedPrice: "Precio Estimado: ~$1400" }
    },
    activities: [
      "Tokio: Shibuya, Akihabara y Senso-ji.",
      "Monte Fuji: Vista desde lago Kawaguchi.",
      "Kioto: Fushimi Inari y Arashiyama.",
      "Nara: Parque de los ciervos.",
      "Osaka: Street food en Dotonbori."
    ],
    included: ["Hospedaje", "Japan Rail Pass", "Desayunos", "WiFi portátil"],
    notIncluded: ["Vuelos", "Comidas y Cenas", "Entradas a templos", "Souvenirs"]
  },
  {
    id: "railay-thailand-2026",
    title: "Itinerario Railay, Tailandia 2026",
    destination: "Railay Beach, Thailand",
    dates: "15 - 28 Junio",
    duration: "13 Días",
    days: 13,
    cities: 3,
    hotelNights: 12,
    image: "https://mgx-backend-cdn.metadl.com/generate/images/1003084/2026-05-26/pjtg65qaagxq/destination-railay-thailand.png",
    description: "Playas de ensueño, escalada en roca y comida tailandesa auténtica. Railay Beach es el paraíso tropical perfecto.",
    category: "Asia",
    season: ["Verano"],
    pricePerPerson: 400,
    flights: {
      outbound: { from: "CDMX (MEX)", departure: "SALIDA: 23:00", to: "KRABI (KBV)", arrival: "SALIDA: Miércoles 17 Junio", stops: "2 Escalas (LAX, BKK)", estimatedPrice: "Precio Estimado: ~$1100" },
      return: { from: "KRABI (KBV)", departure: "SALIDA: 09:00", to: "CDMX (MEX)", arrival: "LLEGADA: Domingo 28 Junio", stops: "2 Escalas (BKK, LAX)", estimatedPrice: "Precio Estimado: ~$1100" }
    },
    activities: [
      "Railay Beach: Kayak y snorkel.",
      "Escalada en acantilados de caliza.",
      "Isla Phi Phi: Tour en lancha.",
      "Mercado nocturno de Krabi.",
      "Clase de cocina tailandesa."
    ],
    included: ["Hospedaje", "Desayunos", "Tour Phi Phi", "Transporte local"],
    notIncluded: ["Vuelos", "Comidas y Cenas", "Equipo de escalada", "Seguro"]
  },
  {
    id: "santorini-grecia-2026",
    title: "Itinerario Santorini, Grecia 2026",
    destination: "Santorini, Greece",
    dates: "1 - 12 Agosto",
    duration: "12 Días",
    days: 12,
    cities: 4,
    hotelNights: 11,
    image: "https://mgx-backend-cdn.metadl.com/generate/images/1003084/2026-05-26/pjthciiaagwa/destination-santorini-greece.png",
    description: "Atardeceres mágicos, vinos volcánicos y arquitectura cicládica. Santorini es el destino romántico por excelencia.",
    category: "Europa",
    season: ["Verano"],
    pricePerPerson: 850,
    flights: {
      outbound: { from: "CDMX (MEX)", departure: "SALIDA: 16:00", to: "SANTORINI (JTR)", arrival: "SALIDA: Domingo 3 Agosto", stops: "2 Escalas (MAD, ATH)", estimatedPrice: "Precio Estimado: ~$1600" },
      return: { from: "SANTORINI (JTR)", departure: "SALIDA: 11:00", to: "CDMX (MEX)", arrival: "LLEGADA: Miércoles 12 Agosto", stops: "2 Escalas (ATH, MAD)", estimatedPrice: "Precio Estimado: ~$1600" }
    },
    activities: [
      "Oia: Atardecer desde el castillo.",
      "Tour vinícola por bodegas volcánicas.",
      "Playa Roja y Playa Negra.",
      "Akrotiri: Ruinas minoicas.",
      "Crucero por la caldera y volcán."
    ],
    included: ["Hospedaje", "Desayunos", "Tour vinícola", "Crucero caldera"],
    notIncluded: ["Vuelos", "Comidas y Cenas", "Transporte en isla", "Propinas"]
  },
  {
    id: "cappadocia-turkey-2026",
    title: "Itinerario Capadocia, Turquía 2026",
    destination: "Cappadocia, Turkey",
    dates: "8 - 20 Septiembre",
    duration: "12 Días",
    days: 12,
    cities: 4,
    hotelNights: 11,
    image: "https://mgx-backend-cdn.metadl.com/generate/images/1003084/2026-05-26/pjtgziyaagvq/hero-hot-air-balloons-cappadocia.png",
    description: "Vuela en globo aerostático sobre formaciones rocosas únicas. Capadocia ofrece paisajes de otro mundo y cultura milenaria.",
    category: "Europa",
    season: ["Verano", "Otoño"],
    pricePerPerson: 550,
    flights: {
      outbound: { from: "CDMX (MEX)", departure: "SALIDA: 18:00", to: "ESTAMBUL (IST)", arrival: "SALIDA: Miércoles 10 Septiembre", stops: "1 Escala (MAD)", estimatedPrice: "Precio Estimado: ~$1200" },
      return: { from: "ESTAMBUL (IST)", departure: "SALIDA: 07:00", to: "CDMX (MEX)", arrival: "LLEGADA: Sábado 20 Septiembre", stops: "1 Escala (MAD)", estimatedPrice: "Precio Estimado: ~$1200" }
    },
    activities: [
      "Vuelo en globo aerostático al amanecer.",
      "Valle de las Chimeneas de Hadas.",
      "Ciudad subterránea de Derinkuyu.",
      "Estambul: Santa Sofía y Gran Bazar.",
      "Cena en cueva tradicional."
    ],
    included: ["Hospedaje", "Desayunos", "Vuelo en globo", "Transporte interno"],
    notIncluded: ["Vuelos internacionales", "Comidas y Cenas", "Visa turca", "Propinas"]
  }
];

export const categories = ["Todos", "Europa", "Asia", "América", "África"];
export const seasons = ["Todas", "Primavera", "Verano", "Otoño", "Invierno"];