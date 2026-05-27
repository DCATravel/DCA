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
  pdfUrl: string; // Añadido para gestionar la descarga dinámica del PDF
}

export const destinations: Destination[] = [
  {
    id: "brasil",
    name: "Brasil",
    location: "Río de Janeiro & Iguazú, Brasil",
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325",
    rating: 5,
    price: 1895,
    description: "Un viaje que combina ciudad, cultura y naturaleza en un solo recorrido inolvidable iniciando en Río de Janeiro y finalizando en las Cataratas de Iguazú. [cite: 6, 9]",
    category: "Latinoamérica"
  },
  {
    id: "colombia",
    name: "Colombia",
    location: "Bogotá, Cartagena y Medellín, Colombia",
    image: "https://images.unsplash.com/photo-1536308037887-165852797016?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    price: 0,
    description: "Descubre lo mejor de Bogotá, Cartagena y Medellín en un viaje ideal para el verano, con una propuesta completa que combina historia, arquitectura colonial y energía urbana. [cite: 116]",
    category: "Latinoamérica"
  },
  {
    id: "costa-rica",
    name: "Costa Rica",
    location: "San José, Costa Rica",
    image: "https://images.unsplash.com/photo-1518182170546-076616fdfaaf?auto=format&fit=crop&w=800&q=80",
    rating: 5,
    price: 0,
    description: "Descubre lo mejor de Costa Rica en una experiencia que combina cultura, historia y naturaleza en solo cinco días. [cite: 234]",
    category: "Latinoamérica"
  },
  {
    id: "cuba",
    name: "Cuba",
    location: "La Habana, Varadero y Cayo Santa María, Cuba",
    image: "https://images.unsplash.com/photo-1500916434205-0c77489c6ce7?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    price: 0,
    description: "Descubre la perfecta combinación entre historia, cultura y playas de ensueño. [cite: 292, 342]",
    category: "Caribe"
  },
  {
    id: "republica-dominicana",
    name: "República Dominicana",
    location: "Santo Domingo y Puerto Plata, República Dominicana",
    image: "https://images.unsplash.com/photo-1549444342-995f57fc1c0a?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    price: 0,
    description: "Cultura vibrante, naturaleza impactante y descanso absoluto se unen en una experiencia que captura, en cada detalle, la verdadera alma dominicana. [cite: 438]",
    category: "Caribe"
  },
  {
    id: "guatemala",
    name: "Guatemala",
    location: "Antigua, Atitlán y Tikal, Guatemala",
    image: "https://images.unsplash.com/photo-1528543606781-2f6e6857f318?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    price: 2130,
    description: "Descubre los destinos más impresionantes de Guatemala en un recorrido que combina ciudades coloniales, cultura maya, naturaleza y tradiciones locales. [cite: 629]",
    category: "Centroamérica"
  }
];

export const itineraries: Itinerary[] = [
  {
    id: "brasil-expreso-2026",
    title: "Brasil Expreso 2026",
    destination: "Río de Janeiro & Iguazú, Brasil",
    dates: "16 al 23 de noviembre 2026",
    duration: "8 Días",
    days: 8,
    cities: 2,
    hotelNights: 7,
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325",
    description: "Vive un viaje completo por Brasil iniciando en Río de Janeiro, donde conocerás sus íconos esenciales... Después volarás a Iguazú para admirar ambos lados de las cataratas. [cite: 6, 8]",
    category: "Latinoamérica",
    season: ["Otoño"],
    pricePerPerson: 1895, // [cite: 108]
    flights: {
      outbound: { from: "N/A", departure: "N/A", to: "RÍO DE JANEIRO", arrival: "N/A", stops: "Vuelos no incluidos", estimatedPrice: "A consultar" },
      return: { from: "IGUAZÚ", departure: "N/A", to: "N/A", arrival: "N/A", stops: "Vuelos no incluidos", estimatedPrice: "A consultar" }
    },
    activities: [
      "Visita al Cristo Redentor, bosque de Tijuca y Estadio Maracaná. [cite: 19, 20, 23]",
      "Paseo por el Sambódromo y Catedral Metropolitana. [cite: 24, 25]",
      "Viaje en teleférico a la cima del Pan de Azúcar. [cite: 27]",
      "Recorrido por el centro histórico de Río y Escaleras de Selarón. [cite: 32, 43]",
      "Tour Cataratas del Iguazú (lado brasileño) con Macuco Safari. [cite: 54, 63]",
      "Recorrido por pasarelas de Garganta del Diablo (lado argentino). [cite: 79]"
    ],
    included: [
      "04 noches de acomodación en Rio de Janeiro con desayuno [cite: 91]",
      "03 noches de acomodación en Iguazú con desayuno [cite: 94]",
      "Traslados privados In & Out [cite: 92, 95]",
      "Tours detallados con entradas y almuerzos indicados [cite: 93, 96]",
      "Seguro de viajero AC 60 Assist Card [cite: 97]"
    ],
    notIncluded: [
      "Vuelos Domésticos o Internacionales [cite: 101]",
      "Gastos Personales y comidas no mencionadas [cite: 99, 100]",
      "Excursiones o servicios no mencionados [cite: 102]"
    ],
    pdfUrl: "/assets/Brasil-Iguazu.pdf"
  },
  {
    id: "colombia-3-joyas",
    title: "Las 3 Joyas de Colombia",
    destination: "Bogotá, Cartagena y Medellín, Colombia",
    dates: "20 al 27 de julio 2026",
    duration: "8 Días",
    days: 8,
    cities: 3,
    hotelNights: 7,
    image: "https://images.unsplash.com/photo-1536308037887-165852797016?auto=format&fit=crop&w=800&q=80",
    description: "Descubre lo mejor de Bogotá, Cartagena y Medellín en un viaje ideal para el verano, con una propuesta completa que combina historia, arquitectura colonial y energía urbana. [cite: 116]",
    category: "Latinoamérica",
    season: ["Verano"],
    pricePerPerson: 0,
    flights: {
      outbound: { from: "CDMX (MEX)", departure: "A coordinar", to: "BOGOTÁ (BOG)", arrival: "A coordinar", stops: "Vuelo Directo", estimatedPrice: "Incluido en tarifa" },
      return: { from: "MEDELLÍN (MDE)", departure: "A coordinar", to: "CDMX (MEX)", arrival: "A coordinar", stops: "Vuelo Directo", estimatedPrice: "Incluido en tarifa" }
    },
    activities: [
      "Ascenso a Monserrate y visita al Museo del Oro en Bogotá. [cite: 127, 128]",
      "Caminata por La Candelaria y Plaza de Bolívar. [cite: 129]",
      "Recorrido por la bahía de Cartagena y barrio Manga. [cite: 139]",
      "Visita al majestuoso Castillo de San Felipe de Barajas. [cite: 140]",
      "Recorrido en bus turístico en Medellín visitando Pueblito Paisa y Parque de los Pies Descalzos. [cite: 152, 154]"
    ],
    included: [
      "Vuelo redondo directo desde CDMX (MEX-BOG-CTG-MED-MEX) [cite: 169]",
      "Traslados Aeropuerto - Hotel - Aeropuerto [cite: 171]",
      "7 noches de alojamiento con desayuno incluido [cite: 172]",
      "City Tours en Bogotá, Cartagena y Medellín [cite: 173, 174, 175]",
      "Seguro de viajero Assist Card [cite: 176]"
    ],
    notIncluded: [
      "Alimentaciones y gastos no mencionados [cite: 179]",
      "Gastos personales y propinas [cite: 180, 182]",
      "Actividades extras y opcionales [cite: 181]"
    ],
    pdfUrl: "/assets/Colombia-3-Joyas.pdf"
  },
  {
    id: "costa-rica-para-todos",
    title: "Costa Rica Para Todos",
    destination: "San José, Costa Rica",
    dates: "A consultar",
    duration: "8 Días",
    days: 8,
    cities: 3,
    hotelNights: 7,
    image: "https://images.unsplash.com/photo-1518182170546-076616fdfaaf",
    description: "Una jornada memorable entre paisajes volcánicos, sitios históricos y tradiciones religiosas en el Volcán Irazú, Cartago y el encantador Valle de Orosí. [cite: 236]",
    category: "Latinoamérica",
    season: ["Todas"],
    pricePerPerson: 0,
    flights: {
      outbound: { from: "CDMX (MEX)", departure: "A coordinar", to: "SAN JOSÉ (SJO)", arrival: "A coordinar", stops: "Vuelos no incluidos", estimatedPrice: "A consultar" },
      return: { from: "SAN JOSÉ (SJO)", departure: "A coordinar", to: "CDMX (MEX)", arrival: "A coordinar", stops: "Vuelos no incluidos", estimatedPrice: "A consultar" }
    },
    activities: [
      "Visita al Teatro Nacional, Catedral Metropolitana y Mercado Central. [cite: 250]",
      "Tour al Volcán Irazú y Valle de Orosí. [cite: 254, 256]",
      "Visita a la Basílica de Nuestra Señora de los Ángeles. [cite: 255]",
      "Exploración del Parque Nacional Manuel Antonio. [cite: 262]",
      "Cena-Show típico en Restaurante Mirador Ran Luna. [cite: 270]",
      "Tour de Aventura en canopy y rappel. [cite: 275]"
    ],
    included: [
      "Traslado Aeropuerto - Hotel - Aeropuerto. [cite: 244, 286]",
      "Desayunos diarios y almuerzos detallados en itinerario. [cite: 247, 252, 261]",
      "Transportación para todos los tours mencionados. [cite: 262, 270]"
    ],
    notIncluded: [
      "Vuelos Internacionales",
      "Experiencias opcionales de rappel o aguas termales en días libres [cite: 269, 274]",
      "Traslado de regreso desde la Cena Show [cite: 271]"
    ],
    pdfUrl: "/assets/CostaRica-ParaTodos.pdf"
  },
  {
    id: "cuba-habana-varadero",
    title: "Cuba - La Habana & Varadero",
    destination: "La Habana y Varadero, Cuba",
    dates: "A consultar",
    duration: "5 Días",
    days: 5,
    cities: 2,
    hotelNights: 4,
    image: "https://images.unsplash.com/photo-1500916434205-0c77489c6ce7",
    description: "Descubre la perfecta combinación entre historia, cultura y playas de ensueño en este viaje que te lleva por la Habana Colonial y el paraíso de Varadero. [cite: 292, 293]",
    category: "Caribe",
    season: ["Todas"],
    pricePerPerson: 0,
    flights: {
      outbound: { from: "CDMX/AIFA", departure: "A coordinar", to: "LA HABANA (HAV)", arrival: "A coordinar", stops: "Vuelo Directo", estimatedPrice: "Incluido en tarifa" },
      return: { from: "LA HABANA (HAV)", departure: "A coordinar", to: "CDMX/AIFA", arrival: "A coordinar", stops: "Vuelo Directo", estimatedPrice: "Incluido en tarifa" }
    },
    activities: [
      "Días de playa y relajación en Varadero. [cite: 304, 305]",
      "City Tour panorámico por el Centro Histórico y La Habana Moderna. [cite: 314]",
      "Visita al Palacio Presidencial, Capitolio, y el Malecón. [cite: 315]",
      "Parada en el mirador del Gran Parque Histórico Militar Morro-Cabaña. [cite: 317]"
    ],
    included: [
      "Vuelo CDMX/AIFA- Habana- CDMX/AIFA [cite: 326]",
      "2 noches en Varadero en plan Todo Incluido [cite: 327]",
      "2 noches en La Habana con Desayunos incluidos [cite: 327]",
      "Traslados In, Inter y Out [cite: 327, 328]",
      "Seguro de asistencia médica y Visa electrónica [cite: 330]"
    ],
    notIncluded: [
      "Gastos personales y comidas no mencionadas [cite: 331, 332]",
      "Cualquier servicio no mencionado en las inclusiones [cite: 333]"
    ],
    pdfUrl: "/assets/Cuba-Habana-Varadero.pdf"
  },
  {
    id: "cuba-hvc",
    title: "Habana, Varadero & Cayo Santa María",
    destination: "Cuba",
    dates: "Salidas: Martes, Jueves y Sábados",
    duration: "8 Días",
    days: 8,
    cities: 3,
    hotelNights: 7,
    image: "https://images.unsplash.com/photo-1500916434205-0c77489c6ce7",
    description: "Una experiencia que combina la esencia cultural de La Habana, la tranquilidad de Varadero y el entorno natural paradisíaco de Cayo Santa María. [cite: 343, 344]",
    category: "Caribe",
    season: ["Todas"],
    pricePerPerson: 0,
    flights: {
      outbound: { from: "Felipe Angeles (AIFA)", departure: "A coordinar", to: "LA HABANA (HAV)", arrival: "A coordinar", stops: "Vuelo Directo", estimatedPrice: "Vuelo no especificado en incl." },
      return: { from: "LA HABANA (HAV)", departure: "A coordinar", to: "Felipe Angeles (AIFA)", arrival: "A coordinar", stops: "Vuelo Directo", estimatedPrice: "Vuelo no especificado en incl." }
    },
    activities: [
      "Tiempo libre para relajación en playas de Varadero. [cite: 354]",
      "Días de descanso y actividades acuáticas opcionales en Cayo Santa María. [cite: 360]",
      "Recorrido panorámico por el Centro Histórico de La Habana, Patrimonio de la Humanidad. [cite: 368]",
      "Visita al mirador del Morro-Cabaña. [cite: 373]"
    ],
    included: [
      "2 noches en Varadero (Todo Incluido) [cite: 379]",
      "2 noches en Cayo Santa María (Todo Incluido) [cite: 380]",
      "2 noches en La Habana (Desayunos) [cite: 381]",
      "Traslados In, Inter y Out [cite: 382, 383, 384]",
      "Visa electrónica y seguro de asistencia médica [cite: 386, 387]"
    ],
    notIncluded: [
      "Gastos personales y comidas no mencionadas [cite: 389, 390]",
      "Vuelos Internacionales explícitos en inclusiones [cite: 391]"
    ],
    pdfUrl: "/assets/Cuba-HVC.pdf"
  },
  {
    id: "dominicana-merengue-bachata",
    title: "Merengue y Bachata",
    destination: "República Dominicana",
    dates: "A consultar",
    duration: "6 Días",
    days: 6,
    cities: 5,
    hotelNights: 5,
    image: "https://images.unsplash.com/photo-1549444342-995f57fc1c0a",
    description: "Cultura vibrante, naturaleza impactante y descanso absoluto se unen en una experiencia que captura, en cada detalle, la verdadera alma dominicana. [cite: 438]",
    category: "Caribe",
    season: ["Todas"],
    pricePerPerson: 0,
    flights: {
      outbound: { from: "N/A", departure: "N/A", to: "SANTO DOMINGO", arrival: "N/A", stops: "Vuelos no incluidos", estimatedPrice: "A consultar" },
      return: { from: "PUERTO PLATA", departure: "N/A", to: "N/A", arrival: "N/A", stops: "Vuelos no incluidos", estimatedPrice: "A consultar" }
    },
    activities: [
      "Visita al parque nacional Los Tres Ojos y al Faro a Colón. [cite: 449]",
      "Recorrido en la Zona Colonial y el Alcázar de Colón. [cite: 450, 451]",
      "Degustación de café en Bonao y Santuario del Santo Cerro en La Vega. [cite: 457, 458]",
      "Visita a la Calle Café Colao en Jarabacoa. [cite: 467]",
      "Paseo por la calle de los paraguas y Doña Blanca en Puerto Plata. [cite: 472, 473]",
      "Ascenso en el funicular de Puerto Plata y visita a la casa del Ron Macorix. [cite: 474, 476]"
    ],
    included: [
      "Traslados In/Out [cite: 443, 482]",
      "Desayunos diarios y Cena de bienvenida [cite: 445, 447]",
      "Alojamiento en Jarabacoa (Gran Jimenoa) y Puerto Plata (Todo Incluido) [cite: 465, 470]",
      "City tours descritos con guías expertos [cite: 448]"
    ],
    notIncluded: [
      "Vuelos Internacionales",
      "Almuerzos en La Vega y otras zonas libres indicadas en el itinerario [cite: 459]"
    ],
    pdfUrl: "/assets/Dominicana-Merengue-Bachata.pdf"
  },
  {
    id: "guatemala-aventura-cultura",
    title: "Aventura y Cultura",
    destination: "Guatemala",
    dates: "A consultar",
    duration: "8 Días",
    days: 8,
    cities: 4,
    hotelNights: 7,
    image: "https://images.unsplash.com/photo-1528543606781-2f6e6857f318",
    description: "Un recorrido que combina lo mejor de Guatemala: historia colonial, tradiciones vivas y legado maya, incluyendo el colorido mercado de Chichicastenango y una excursión a Tikal. [cite: 487, 489, 490]",
    category: "Centroamérica",
    season: ["Todas"],
    pricePerPerson: 0,
    flights: {
      outbound: { from: "CDMX (MEX)", departure: "N/A", to: "GUATEMALA (GUA)", arrival: "N/A", stops: "Vuelos no incluidos", estimatedPrice: "A consultar" },
      return: { from: "GUATEMALA (GUA)", departure: "N/A", to: "CDMX (MEX)", arrival: "N/A", stops: "Vuelos no incluidos", estimatedPrice: "A consultar" }
    },
    activities: [
      "Tour guiado por la ciudad de Antigua visitando la Catedral y la Merced. [cite: 500, 501]",
      "Trekking al Volcán Acatenango con campamento base nocturno. [cite: 505, 506, 507]",
      "Visita al colorido mercado de Chichicastenango y a la Iglesia de Santo Tomás. [cite: 516, 517]",
      "Paseo en bote a San Juan La Laguna visitando cooperativas de chocolate y textiles. [cite: 520, 521, 522]",
      "Tour por la Ciudad de Guatemala y Ciudad Cayalá. [cite: 527, 528]"
    ],
    included: [
      "Traslados Aeropuerto - Hotel - Aeropuerto [cite: 497]",
      "Alojamiento y desayunos [cite: 500]",
      "Guías y transporte en circuitos detallados [cite: 500]"
    ],
    notIncluded: [
      "Vuelos Internacionales",
      "Gastos de equipo y alimentación personal (Acatenango requiere llevar mochila propia) [cite: 508]"
    ],
    pdfUrl: "/assets/Guatemala-Aventura-Cultura.pdf"
  },
  {
    id: "guatemala-descubriendo",
    title: "Descubriendo Guatemala",
    destination: "Guatemala",
    dates: "Salidas: Martes y Viernes",
    duration: "5 Días",
    days: 5,
    cities: 3,
    hotelNights: 4,
    image: "https://images.unsplash.com/photo-1528543606781-2f6e6857f318",
    description: "Este viaje combina historia, cultura viva y paisajes naturales únicos de Guatemala. Inicia en Antigua y finaliza en las tradiciones ancestrales de Atitlán. [cite: 537, 538, 540]",
    category: "Centroamérica",
    season: ["Todas"],
    pricePerPerson: 0,
    flights: {
      outbound: { from: "CDMX (MEX)", departure: "N/A", to: "GUATEMALA (GUA)", arrival: "N/A", stops: "Vuelos no incluidos", estimatedPrice: "A consultar" },
      return: { from: "GUATEMALA (GUA)", departure: "N/A", to: "CDMX (MEX)", arrival: "N/A", stops: "Vuelos no incluidos", estimatedPrice: "A consultar" }
    },
    activities: [
      "Medio día de tour en Antigua, Patrimonio Colonial. [cite: 551]",
      "Visita al mercado indígena de Chichicastenango e Iglesia de Santo Tomás. [cite: 556, 557]",
      "Visita panorámica de Panajachel. [cite: 558]",
      "Paseo en bote a San Juan La Laguna, talleres de chocolate y plantas medicinales. [cite: 560, 561, 563]"
    ],
    included: [
      "Traslado Aeropuerto - Hotel - Aeropuerto. [cite: 572]",
      "4 noches de alojamiento en hotel de su elección con desayunos. [cite: 573, 574]",
      "City tour de Antigua, Tour Chichicastenango - Lago Atitlán. [cite: 575, 576]",
      "Seguro de viajero Assist Card e Impuestos de hospedaje. [cite: 580, 581]"
    ],
    notIncluded: [
      "Property fee: Aplicable para hoteles en Antigua y Atitlán. [cite: 583]",
      "Vuelos internacionales y comidas no mencionadas. [cite: 587, 588]"
    ],
    pdfUrl: "/assets/Guatemala-Descubriendo.pdf"
  },
  {
    id: "guatemala-espectacular",
    title: "Guatemala Espectacular",
    destination: "Guatemala",
    dates: "Salidas: Martes y Viernes",
    duration: "7 Días",
    days: 7,
    cities: 5,
    hotelNights: 6,
    image: "https://unsplash.com/photos/multicolored-houses-L6T_6Rp2iEk?auto=format&fit=crop&w=800&q=80",
    description: "Recorre la encantadora Antigua Guatemala, visita el colorido mercado de Chichicastenango, navega por el Lago Atitlán y explora Tikal y Yaxhá. [cite: 630, 631]",
    category: "Centroamérica",
    season: ["Todas"],
    pricePerPerson: 2130, // [cite: 667]
    flights: {
      outbound: { from: "CDMX (MEX)", departure: "N/A", to: "GUATEMALA (GUA)", arrival: "N/A", stops: "Vuelos Internacionales No Incluidos", estimatedPrice: "A consultar" },
      return: { from: "GUATEMALA (GUA)", departure: "N/A", to: "CDMX (MEX)", arrival: "N/A", stops: "Vuelos Internacionales No Incluidos", estimatedPrice: "A consultar" }
    },
    activities: [
      "Tour de medio día en Antigua visitando la iglesia de la Merced y Plaza de Armas. [cite: 637, 638]",
      "Tour hacia el altiplano para visitar el mercado de Chichicastenango. [cite: 641]",
      "Paseo en bote por el Lago Atitlán hasta San Juan La Laguna (textiles y chocolate). [cite: 647, 648]",
      "Vuelo interno a Petén y recorrido arqueológico en el Mundo Maya: Tikal (Gran Jaguar). [cite: 652, 654]",
      "Visita al sitio arqueológico de Yaxhá, antigua ciudad ceremonial. [cite: 657, 658]"
    ],
    included: [
      "6 noches de alojamiento e Impuestos hoteleros. [cite: 618, 620]",
      "Desayunos diarios y Almuerzo campestre en Tikal. [cite: 619, 624]",
      "Traslados, Lancha en Panajachel y Guía durante tours. [cite: 621, 622, 625]",
      "Entradas según itinerario. [cite: 623]"
    ],
    notIncluded: [
      "Vuelos Internacionales",
      "Property fee, aplica en hoteles en Antigua y Atitlán. [cite: 627]"
    ],
    pdfUrl: "/assets/Guatemala-Espectacular.pdf"
  }
];

export const categories = ["Todos", "Latinoamérica", "Caribe", "Centroamérica", "Europa", "Asia"];
export const seasons = ["Todas", "Primavera", "Verano", "Otoño", "Invierno"];