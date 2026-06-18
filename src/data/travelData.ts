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
  destinationIds: string[];
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
    outbound: {
      from: string;
      departure: string;
      to: string;
      arrival: string;
      stops: string;
      estimatedPrice: string;
    };
    return: {
      from: string;
      departure: string;
      to: string;
      arrival: string;
      stops: string;
      estimatedPrice: string;
    };
  };
  activities: string[];
  included: string[];
  notIncluded: string[];
  pdfUrl: string;
}

export const destinations: Destination[] = [
  {
    id: "brasil",
    name: "Brasil",
    location: "Río de Janeiro, São Paulo y Salvador",
    image:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    price: 899,
    description:
      "Descubre la vibrante cultura brasileña, sus playas paradisíacas y su rica herencia histórica en un viaje que combina naturaleza, arte y gastronomía.",
    category: "Latinoamérica",
  },
  {
    id: "colombia",
    name: "Colombia",
    location: "Bogotá, Cartagena, Medellín e Islas del Caribe",
    image:
      "https://images.unsplash.com/photo-1536308037887-165852797016?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    price: 716,
    description:
      "Programas por Colombia que combinan historia, arquitectura colonial, ciudades vibrantes y descanso en el Caribe colombiano.",
    category: "Latinoamérica",
  },
  {
    id: "costa-rica",
    name: "Costa Rica",
    location: "San José, Irazú, Orosí y Manuel Antonio",
    image:
      "https://images.unsplash.com/photo-1536709017021-ce8f99c17e38?auto=format&fit=crop&w=800&q=80",
    rating: 5,
    price: 534,
    description:
      "Experiencias por Costa Rica que combinan cultura, historia, volcanes, naturaleza, aventura y la esencia de la Pura Vida.",
    category: "Centroamérica",
  },
  {
    id: "guatemala",
    name: "Guatemala",
    location: "Antigua, Acatenango, Chichicastenango, Atitlán y Ciudad de Guatemala",
    image:
      "https://images.unsplash.com/photo-1606503809729-40646b716a36?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    price: 754,
    description:
      "Un recorrido cultural y de aventura por Guatemala entre historia colonial, tradiciones vivas, paisajes volcánicos, Lago Atitlán y la energía de Antigua.",
    category: "Centroamérica",
  },
  {
    id: "mexico",
    name: "México",
    location: "Barrancas del Cobre, Chihuahua y Sinaloa",
    image:
      "https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    price: 1340,
    description:
      "Experiencias nacionales que combinan historia, cultura, naturaleza y paisajes únicos, como la ruta del tren Chepe por las Barrancas del Cobre.",
    category: "México",
  },
  {
  id: "puerto-rico",
  name: "Puerto Rico",
  location: "San Juan, Puerto Rico",
  image:
    "https://images.unsplash.com/photo-1599582871426-a44765cedca0?auto=format&fit=crop&w=800&q=80",
  rating: 4.8,
  price: 750,
  description:
    "Una escapada caribeña a San Juan que combina historia, playas, gastronomía local, paseo por la bahía al atardecer, Viejo San Juan, Castillo San Cristóbal y la icónica destilería Bacardí.",
  category: "Caribe",
},
{
  id: "republica-dominicana",
  name: "República Dominicana",
  location: "Punta Cana y Santo Domingo, República Dominicana",
  image:
    "https://images.unsplash.com/photo-1575950674322-3a1977724f2e?auto=format&fit=crop&w=800&q=80",
  rating: 4.8,
  price: 692,
  description:
    "Una escapada caribeña que combina el descanso en Punta Cana con una experiencia cultural en Santo Domingo, la primera ciudad fundada por los europeos en América.",
  category: "Caribe",
},
];

export const itineraries: Itinerary[] = [
{
  id: "barrancas-del-cobre",
  title: "Barrancas del Cobre",
  destinationIds: ["mexico"],
  destination: "El Fuerte, Creel, Barrancas del Cobre y Chihuahua, México",
  dates: "13 al 17 de enero 2027",
  duration: "5 Días",
  days: 5,
  cities: 4,
  hotelNights: 4,
  image:
    "https://images.unsplash.com/photo-1766121024397-50be7e61b127?auto=format&fit=crop&w=800&q=80",
  description:
    "Descubre algunos de los paisajes más impresionantes del norte de México en un viaje que combina historia, cultura y naturaleza. Desde el Pueblo Mágico de El Fuerte hasta Chihuahua, vivirás la experiencia del tren Chepe, la Sierra Tarahumara, Creel, Lago de Arareko, Valle de los Hongos y los miradores del Parque de Aventura Barrancas del Cobre.",
  category: "México",
  season: ["Invierno"],
  pricePerPerson: 1340,
  flights: {
    outbound: {
      from: "CDMX",
      departure: "06:10",
      to: "CULIACÁN",
      arrival: "07:12",
      stops: "Vuelo previsto Volaris Y4 390",
      estimatedPrice: "Incluido en tarifa MXN",
    },
    return: {
      from: "CHIHUAHUA",
      departure: "16:20",
      to: "CDMX",
      arrival: "18:30",
      stops: "Vuelo previsto Viva Aerobus VB1051",
      estimatedPrice: "Incluido en tarifa MXN",
    },
  },
  activities: [
    "Llegada a Sinaloa vía Culiacán o Los Mochis y traslado al Pueblo Mágico de El Fuerte.",
    "Recorrido a bordo del tren Chepe Express clase turista desde El Fuerte hacia Creel.",
    "Cruce por la Sierra Tarahumara entre túneles, puentes, cañones y paisajes panorámicos.",
    "Visita al Parque de Aventura Barrancas del Cobre con ticket de teleférico incluido.",
    "Acceso al Lago de Arareko y al Valle de los Hongos.",
    "Traslado hacia Chihuahua con parada en Ciudad Cuauhtémoc, corazón de la comunidad menonita.",
    "Recorrido panorámico por Chihuahua visitando puntos históricos como Palacio de Gobierno, Catedral, Casa de Pancho Villa y Acueducto Colonial.",
  ],
  included: [
    "Vuelos CDMX - Los Mochis o Culiacán / Chihuahua - CDMX.",
    "Traslados indicados en itinerario.",
    "4 noches de hospedaje 4 estrellas.",
    "4 desayunos americanos y/o buffet.",
    "City tour en Chihuahua.",
    "Tren Chepe Express clase turista en ruta El Fuerte - Creel.",
    "Ticket de teleférico en Parque de Aventura Barrancas del Cobre.",
    "Acceso al Lago de Arareko y Valle de los Hongos.",
    "Accesos incluidos indicados en itinerario.",
    "Coordinador de grupo.",
    "Tarjeta de asistencia.",
    "Impuestos.",
  ],
  notIncluded: [
    "Propinas.",
    "Servicios no especificados.",
    "Gastos personales.",
    "Bebidas en almuerzos incluidos conforme a régimen alimenticio.",
    "Ningún otro gasto no especificado en el apartado incluido.",
  ],
  pdfUrl: "/assets/pdfs/Barrancas-Cobre.pdf",
},
{
  id: "rio-ciudad-maravillosa",
  title: "Río: Ciudad Maravillosa",
  destinationIds: ["brasil"],
  destination: "Río de Janeiro, Angra dos Reis y Petrópolis, Brasil",
  dates: "Salidas diarias del 01 de enero al 30 de noviembre 2026",
  duration: "8 Días",
  days: 8,
  cities: 3,
  hotelNights: 7,
  image:
    "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=800&q=80",
  description:
    "Un viaje que late al ritmo de Río de Janeiro. Descubre el Cristo Redentor, Pan de Azúcar, Maracaná, Santa Teresa, Escaleras de Selarón, Bahía de Guanabara, Angra dos Reis, Petrópolis imperial y la magia del Carnaval en una experiencia completa por la Ciudad Maravillosa.",
  category: "Latinoamérica",
  season: ["Todas"],
  pricePerPerson: 1648,
  flights: {
    outbound: {
      from: "A consultar",
      departure: "A coordinar",
      to: "RÍO DE JANEIRO",
      arrival: "A coordinar",
      stops: "Vuelos internacionales y/o domésticos no incluidos",
      estimatedPrice: "A consultar",
    },
    return: {
      from: "RÍO DE JANEIRO",
      departure: "A coordinar",
      to: "A consultar",
      arrival: "A coordinar",
      stops: "Vuelos internacionales y/o domésticos no incluidos",
      estimatedPrice: "A consultar",
    },
  },
  activities: [
    "Llegada a Río de Janeiro, recepción y traslado privado al hotel con guía en español.",
    "Tour de día completo al Cristo Redentor, Corcovado, Maracaná, Catedral Metropolitana y Pan de Azúcar con entradas y comida.",
    "Tour de Río Histórico visitando Plaza XV, Arcos de Lapa, Santa Teresa, Parque das Ruínas, Escaleras de Selarón, Confeitaria Colombo y otros puntos históricos.",
    "Recorrido por la Bahía de Guanabara en catamarán, pasando por Isla Fiscal, Museo del Mañana, Puente Río-Niterói, Museo de Arte Contemporáneo y Fuerte Lage.",
    "Excursión a Angra dos Reis con paseo en escuna, paradas en islas y playas, y comida incluida.",
    "Día libre para actividades personales o experiencias opcionales en Copacabana, Ipanema, Arpoador o actividades locales.",
    "Tour al Estadio Maracaná y experiencia de Carnaval en el Sambódromo con entradas.",
    "Excursión a Petrópolis con Museo Imperial, Catedral de São Pedro de Alcântara, Crystal Palace, Casa de Santos Dumont y comida incluida.",
  ],
  included: [
    "Traslado Aeropuerto - Hotel - Aeropuerto en servicio privado.",
    "7 noches de alojamiento en categoría hotelera de su elección.",
    "Todos los desayunos.",
    "Tour día completo Corcovado y Pan de Azúcar con entradas, city tour y comida.",
    "Tour día completo Río Histórico y Bahía de Guanabara con catamarán.",
    "Tour día completo Angra dos Reis con paseo en catamarán y comida.",
    "Tour día completo Petrópolis con Museo Imperial, entradas y comida.",
    "Tour día completo Estadio Maracaná y Experiencia del Carnaval con entradas.",
    "Seguro de viajero Assist Card.",
    "Transportación terrestre en el circuito con guías en español.",
    "Impuestos de hospedaje.",
  ],
  notIncluded: [
    "Vuelos internacionales y/o domésticos.",
    "Alimentaciones y gastos no mencionados.",
    "Bebidas en las comidas incluidas.",
    "Gastos personales.",
    "Actividades extras y opcionales.",
    "Propinas.",
    "Nada no mencionado en el apartado incluido.",
  ],
  pdfUrl: "/assets/pdfs/Rio-Ciudad-Maravillosa.pdf",
},
{
  id: "rio-e-iguazu",
  title: "Río e Iguazú",
  destination: "Río de Janeiro e Iguazú, Brasil",
  destinationIds: ["brasil"],
  dates: "Salidas diarias del 01 de enero al 30 de noviembre 2026",
  duration: "8 Días",
  days: 8,
  cities: 2,
  hotelNights: 7,
  image:
    "https://images.unsplash.com/photo-1617721751087-ae4a46ebb980?auto=format&fit=crop&w=800&q=80",
  description:
    "Disfruta un viaje de 8 días por Brasil que combina la energía de Río de Janeiro con la majestuosidad de las Cataratas de Iguazú. En Río conocerás íconos como el Cristo Redentor, el Pan de Azúcar y el centro histórico de la ciudad. La experiencia continúa en Iguazú, explorando las cataratas desde los lados brasileño y argentino, incluyendo la emocionante aventura del Macuco Safari.",
  category: "Latinoamérica",
  season: ["Todas"],
  pricePerPerson: 1605,
  flights: {
    outbound: {
      from: "A consultar",
      departure: "A coordinar",
      to: "RÍO DE JANEIRO",
      arrival: "A coordinar",
      stops: "Vuelos internacionales y/o domésticos no incluidos",
      estimatedPrice: "A consultar",
    },
    return: {
      from: "IGUAZÚ",
      departure: "A coordinar",
      to: "A consultar",
      arrival: "A coordinar",
      stops: "Vuelos internacionales y/o domésticos no incluidos",
      estimatedPrice: "A consultar",
    },
  },
  activities: [
    "Llegada a Río de Janeiro, recepción en el aeropuerto y traslado privado al hotel con guía en español.",
    "Tour de día completo al Cristo Redentor, Corcovado, Maracaná, Catedral Metropolitana y Pan de Azúcar con entradas y comida incluida.",
    "Tour de medio día por Río Histórico visitando Plaza XV, Arcos de Lapa, Santa Teresa, Parque das Ruínas, Escaleras de Selarón, Confeitaria Colombo y otros puntos emblemáticos.",
    "Día libre en Río de Janeiro para actividades personales o experiencias opcionales como Maracaná y Sambódromo, Bossa Nova en Copacabana e Ipanema, paseo al atardecer por Arpoador o sesión de fotos local.",
    "Traslado del hotel al aeropuerto para tomar vuelo hacia Iguazú, vuelo no incluido. Llegada y traslado al alojamiento.",
    "Visita a las Cataratas de Iguazú del lado brasileño con entradas incluidas y recorrido panorámico hacia la Garganta del Diablo.",
    "Experiencia Macuco Safari, combinando recorrido por la selva, sendero interpretativo y aventura en barco por el río Iguazú.",
    "Tour de día completo a las Cataratas de Iguazú del lado argentino con entradas, visita a la Garganta del Diablo, Circuito Inferior y Circuito Superior.",
    "Traslado al Aeropuerto Internacional para tomar el vuelo de regreso a casa.",
  ],
  included: [
    "Traslado Aeropuerto - Hotel - Aeropuerto en servicio privado.",
    "7 noches de alojamiento en categoría hotelera de su elección.",
    "Todos los desayunos.",
    "Tour día completo Corcovado y Pan de Azúcar con entradas, city tour y comida.",
    "Tour medio día Río Histórico.",
    "Tour AM Cataratas Brasileñas con entradas + Macuco Safari PM en barco compartido.",
    "Tour día completo Cataratas Argentinas con entradas.",
    "Seguro de viajero Assist Card.",
    "Transportación terrestre en el circuito con guías en español.",
    "Impuestos de hospedaje.",
  ],
  notIncluded: [
    "Vuelos internacionales y/o domésticos.",
    "Vuelo interno Río de Janeiro - Iguazú.",
    "Alimentaciones y gastos no mencionados.",
    "Bebidas en las comidas incluidas.",
    "Gastos personales.",
    "Actividades extras y opcionales.",
    "Propinas.",
    "Nada no mencionado en el apartado incluido.",
  ],
  pdfUrl: "/assets/pdfs/Rio-Iguazu.pdf",
},
{
id: "colombia-3-joyas",
title: "Las Tres Joyas de Colombia",
destinationIds: ["colombia"],
destination: "Bogotá, Cartagena y Medellín",
dates: "Tarifas 2026",
duration: "8 Días",
days: 8,
cities: 3,
hotelNights: 7,
image:
"https://images.unsplash.com/photo-1536308037887-165852797016?auto=format&fit=crop&w=800&q=80",
description:
"Descubre lo mejor de Bogotá, Cartagena y Medellín en un viaje que combina historia, arquitectura colonial y energía urbana. Desde las vistas de Monserrate y La Candelaria hasta la magia amurallada de Cartagena y el espíritu innovador de Medellín.",
category: "Latinoamérica",
season: ["Todas", "Verano"],
pricePerPerson: 886,
flights: {
outbound: {
from: "A consultar",
departure: "A coordinar",
to: "BOGOTÁ (BOG)",
arrival: "A coordinar",
stops: "Vuelos según cotización",
estimatedPrice: "A consultar",
},
return: {
from: "MEDELLÍN (MDE)",
departure: "A coordinar",
to: "A consultar",
arrival: "A coordinar",
stops: "Vuelos según cotización",
estimatedPrice: "A consultar",
},
},
activities: [
"Llegada al Aeropuerto Internacional El Dorado, recepción y traslado al hotel en Bogotá.",
"City tour por Bogotá con Cerro de Monserrate, Museo del Oro, La Candelaria y Plaza de Bolívar.",
"Visita al Museo Botero con obras de Fernando Botero y maestros como Picasso y Dalí.",
"Traslado al aeropuerto para tomar vuelo con destino a Cartagena.",
"City tour Cartagena con bahía, barrio Manga, Castillo de San Felipe y centro histórico amurallado.",
"Día libre en Cartagena para actividades personales o tours opcionales.",
"Traslado al aeropuerto para tomar vuelo con destino a Medellín.",
"City tour Medellín en bus turístico con Parque de los Pies Descalzos, Parque del Río, Pueblito Paisa y Parque de la Inflexión.",
],
included: [
"Traslados Aeropuerto - Hotel - Aeropuerto.",
"7 noches de alojamiento en la categoría de hotel elegida con desayuno incluido.",
"City Tour en Bogotá.",
"City Tour en Cartagena.",
"City Tour en Medellín.",
"Seguro de viajero Assist Card.",
"Impuestos aéreos y de hospedaje.",
],
notIncluded: [
"Alimentaciones y gastos no mencionados.",
"Gastos personales.",
"Actividades extras y opcionales.",
"Propinas.",
],
pdfUrl: "/assets/pdfs/Colombia-3Joyas.pdf",
},
{
id: "caribe-colombiano",
title: "Caribe Colombiano",
destinationIds: ["colombia"],
destination: "Cartagena e Isla del Caribe",
dates: "Tarifas 2026",
duration: "6 Días",
days: 6,
cities: 2,
hotelNights: 5,
image:
"https://images.unsplash.com/photo-1583531352515-8884af319dc1?auto=format&fit=crop&w=800&q=80",
description:
"Una escapada que combina la riqueza histórica de Cartagena de Indias con el descanso y la belleza natural del Caribe colombiano. Recorre el Castillo de San Felipe, el barrio de Manga y el centro histórico amurallado, y continúa hacia una isla del Caribe para disfrutar playas y paisajes tropicales.",
category: "Latinoamérica",
season: ["Todas"],
pricePerPerson: 716,
flights: {
outbound: {
from: "A consultar",
departure: "A coordinar",
to: "CARTAGENA (CTG)",
arrival: "A coordinar",
stops: "Vuelos según cotización",
estimatedPrice: "A consultar",
},
return: {
from: "CARTAGENA (CTG)",
departure: "A coordinar",
to: "A consultar",
arrival: "A coordinar",
stops: "Vuelos según cotización",
estimatedPrice: "A consultar",
},
},
activities: [
"Llegada al Aeropuerto Internacional Rafael Núñez, recepción y traslado al hotel en Cartagena.",
"City tour Cartagena con recorrido panorámico por la bahía, barrio Manga y Castillo de San Felipe.",
"Recorrido a pie por el centro histórico amurallado con tiempo libre para compras.",
"Traslado desde Cartagena hacia una isla cercana, en embarcación compartida o transporte terrestre según la opción elegida.",
"Día libre en la isla para descanso, playa o actividades opcionales.",
"Regreso a Cartagena para la última noche de alojamiento.",
"Traslado al Aeropuerto Rafael Núñez para tomar el vuelo de regreso.",
],
included: [
"Traslados Aeropuerto - Hotel - Aeropuerto en servicio compartido.",
"3 noches de alojamiento en Cartagena, 2 al inicio y 1 al final.",
"2 noches de alojamiento en isla cercana en la categoría de hotel elegida y con plan alimenticio según elección.",
"Excursiones descritas en el itinerario con guía profesional en español.",
"Entradas a los sitios especificados.",
"Seguro de viajero Assist Card.",
"Impuestos de hospedaje.",
],
notIncluded: [
"Impuestos de muelle.",
"Seguro hotelero voluntario.",
"Alimentaciones y gastos no mencionados.",
"Gastos personales.",
"Actividades extras y opcionales.",
"Propinas.",
],
pdfUrl: "/assets/pdfs/Colombia-Cartagena.pdf",
},
{
id: "costa-rica-linda",
title: "Linda Costa Rica",
destinationIds: ["costa-rica"],
destination: "San José, Volcán Irazú, Cartago y Valle de Orosí",
dates: "Viaja del 01 de enero al 31 de diciembre 2026",
duration: "5 Días",
days: 5,
cities: 4,
hotelNights: 4,
image:
"https://images.unsplash.com/photo-1536708880921-03a9306ec47d?auto=format&fit=crop&w=800&q=80",
description:
"Descubre lo mejor de Costa Rica en una experiencia que combina cultura, historia y naturaleza. Explora San José, sus museos y arquitectura, continúa hacia el Volcán Irazú, Cartago y el Valle de Orosí, y disfruta un día libre para descansar o añadir experiencias opcionales.",
category: "Centroamérica",
season: ["Todas"],
pricePerPerson: 534,
flights: {
outbound: {
from: "MÉXICO",
departure: "A coordinar",
to: "SAN JOSÉ (SJO)",
arrival: "A coordinar",
stops: "Vuelos internacionales no incluidos",
estimatedPrice: "A consultar",
},
return: {
from: "SAN JOSÉ (SJO)",
departure: "A coordinar",
to: "MÉXICO",
arrival: "A coordinar",
stops: "Vuelos internacionales no incluidos",
estimatedPrice: "A consultar",
},
},
activities: [
"Llegada a Costa Rica, recepción en el aeropuerto y traslado al hotel.",
"City tour por San José visitando Museo de Arte Costarricense, Parque La Sabana, Teatro Nacional, Catedral Metropolitana, Plaza de la Cultura y Mercado Central.",
"Almuerzo típico costarricense durante el recorrido por San José.",
"Tour al Volcán Irazú, Cartago, Basílica de Nuestra Señora de los Ángeles y Valle de Orosí.",
"Día libre para descansar o añadir experiencias opcionales como Manuel Antonio, puentes colgantes o aguas termales del Arenal.",
"Traslado al aeropuerto para tomar el vuelo de regreso.",
],
included: [
"Traslado Aeropuerto - Hotel - Aeropuerto.",
"4 noches de alojamiento en hotel de su elección.",
"Todos los desayunos.",
"City tour de San José con comida.",
"Tour Volcán Irazú, Basílica de Nuestra Señora de los Ángeles en Cartago y Valle de Orosí, con comida.",
"Seguro de viajero Assist Card.",
"Transportación terrestre en el circuito.",
"Impuestos de hospedaje.",
],
notIncluded: [
"Vuelos internacionales.",
"Alimentaciones y gastos no mencionados.",
"Actividades extras y opcionales.",
"Propinas.",
"Nada que no se mencione explícitamente en el apartado incluido.",
],
pdfUrl: "/assets/pdfs/CostaRica-Linda.pdf",
},
{
id: "costa-rica-para-todos",
title: "Costa Rica Para Todos",
destinationIds: ["costa-rica"],
destination:
"San José, Volcán Irazú, Valle de Orosí, Manuel Antonio y Bosque Nuboso",
dates: "Viaja del 01 de enero al 31 de diciembre 2026",
duration: "8 Días",
days: 8,
cities: 5,
hotelNights: 7,
image:
"https://images.unsplash.com/photo-1536709017021-ce8f99c17e38?auto=format&fit=crop&w=800&q=80",
description:
"Una experiencia completa por Costa Rica que combina historia, cultura, naturaleza y aventura. Recorre San José, el Volcán Irazú, Cartago, Valle de Orosí, Parque Nacional Manuel Antonio, una cena-show típica y una aventura de canopy y rappel en el bosque nuboso.",
category: "Centroamérica",
season: ["Todas"],
pricePerPerson: 1223,
flights: {
outbound: {
from: "MÉXICO",
departure: "A coordinar",
to: "SAN JOSÉ (SJO)",
arrival: "A coordinar",
stops: "Vuelos internacionales no incluidos",
estimatedPrice: "A consultar",
},
return: {
from: "SAN JOSÉ (SJO)",
departure: "A coordinar",
to: "MÉXICO",
arrival: "A coordinar",
stops: "Vuelos internacionales no incluidos",
estimatedPrice: "A consultar",
},
},
activities: [
"Llegada a Costa Rica, recepción en el aeropuerto y traslado al hotel.",
"Tour de la ciudad de San José con Museo de Arte Costarricense, Parque La Sabana, Teatro Nacional, Catedral Metropolitana, Plaza de la Cultura y Mercado Central.",
"Tour al Volcán Irazú, Basílica de Nuestra Señora de los Ángeles en Cartago y Valle de Orosí.",
"Visita al Parque Nacional Manuel Antonio con playas, senderos, selva tropical y biodiversidad.",
"Mañana libre y cena-show típica en Restaurante Mirador Ram Luna.",
"Día libre para actividades opcionales como Isla Tortuga, rafting en el Río Pacuare o aguas termales del Volcán Arenal.",
"Tour de aventura con canopy, 13 cables, 19 plataformas y rappel en el bosque nuboso.",
"Traslado al aeropuerto para tomar el vuelo de regreso.",
],
included: [
"Traslado Aeropuerto - Hotel - Aeropuerto.",
"7 noches de alojamiento en hotel de su elección.",
"Todos los desayunos.",
"City tour de San José con comida incluida.",
"Tour Volcán Irazú, Basílica de Nuestra Señora de los Ángeles en Cartago y Valle de Orosí, con comida incluida.",
"Tour de playa en el Parque Nacional Manuel Antonio, con comida incluida.",
"Tour de aventura en canopy y 2 cables de rappel, con comida incluida.",
"Cena-show típico en el hotel Mirador Ram Luna.",
"Seguro de viajero Assist Card.",
"Transportación terrestre en el circuito.",
"Impuestos de alojamiento.",
],
notIncluded: [
"Vuelos internacionales.",
"Alimentaciones y gastos no mencionados.",
"Actividades extras y opcionales.",
"Propinas.",
"Nada que no sea explícitamente mencionado en el apartado incluido.",
],
pdfUrl: "/assets/pdfs/CostaRica-ParaTodos.pdf",
},
{
id: "guatemala-aventura-cultura",
title: "Guatemala - Aventura y Cultura",
destinationIds: ["guatemala"],
destination:
"Antigua, Acatenango, Chichicastenango, Lago Atitlán y Ciudad de Guatemala",
dates: "Inicia en domingo del 01 de enero al 31 de diciembre 2026",
duration: "8 Días",
days: 8,
cities: 6,
hotelNights: 7,
image:
"https://images.unsplash.com/photo-1528543606781-2f6e6857f318?auto=format&fit=crop&w=800&q=80",
description:
"Un recorrido que combina historia colonial, tradiciones vivas, naturaleza y aventura. El viaje inicia en Antigua Guatemala, continúa con el trekking al Volcán Acatenango, visita el mercado de Chichicastenango, el Lago Atitlán, San Juan La Laguna y finaliza con un recorrido por Ciudad de Guatemala y Cayalá.",
category: "Centroamérica",
season: ["Todas"],
pricePerPerson: 1443,
flights: {
outbound: {
from: "A consultar",
departure: "A coordinar",
to: "GUATEMALA (GUA)",
arrival: "A coordinar",
stops: "Vuelos internacionales no incluidos",
estimatedPrice: "A consultar",
},
return: {
from: "GUATEMALA (GUA)",
departure: "A coordinar",
to: "A consultar",
arrival: "A coordinar",
stops: "Vuelos internacionales no incluidos",
estimatedPrice: "A consultar",
},
},
activities: [
"Llegada al Aeropuerto Internacional La Aurora y traslado al hotel en Antigua Guatemala.",
"Tour guiado de medio día por Antigua, visitando Iglesia de la Merced, Plaza de Armas y Catedral.",
"Trekking al Volcán Acatenango con caminata hacia campamento base y vistas al Volcán de Fuego.",
"Amanecer en el Volcán Acatenango, descenso y tarde libre para descansar.",
"Visita al mercado de Chichicastenango, Iglesia de Santo Tomás y traslado al Lago Atitlán.",
"Paseo en bote a San Juan La Laguna con visita a cooperativas de chocolate, textiles y plantas medicinales.",
"Tour por Ciudad de Guatemala, Centro Histórico, Avenida de Las Américas y Ciudad Cayalá.",
],
included: [
"Traslado Aeropuerto - Hotel - Aeropuerto.",
"7 noches de alojamiento.",
"Todos los desayunos.",
"City tour de Antigua de medio día.",
"Trekking en Volcán Acatenango con comida, cena, desayuno, snack, 2 litros de agua, chocolate caliente, café o té, kit de higiene, sleeping bag, cabaña compartida, litera con colchón, almohada y frazada, chaqueta, gorro y guantes.",
"Tour Chichicastenango, Lago Atitlán y Panajachel de día completo.",
"Tour San Juan La Laguna con visita a cooperativas, lancha incluida.",
"Tour Ciudad de Guatemala y Cayalá.",
"Guía certificado durante los tours.",
"Entradas según sea necesario en el itinerario.",
"Transportación terrestre en el circuito.",
"Seguro de viajero Assist Card.",
"Impuestos de hospedaje.",
],
notIncluded: [
"Property fee aplicable para hoteles en Antigua y Atitlán.",
"Vuelos internacionales.",
"Alimentaciones y gastos no mencionados.",
"Actividades extras y opcionales.",
"Propinas.",
"Nada que no se haya mencionado explícitamente en el apartado incluido.",
],
pdfUrl: "/assets/pdfs/Guatemala-Aventura-Cultura.pdf",
},
{
id: "guatemala-descubriendo",
title: "Descubriendo Guatemala",
destinationIds: ["guatemala"],
destination: "Antigua, Chichicastenango, Lago Atitlán y Ciudad de Guatemala",
dates: "Inicio de viaje todos los martes y viernes del 2026",
duration: "5 Días",
days: 5,
cities: 4,
hotelNights: 4,
image:
"https://images.unsplash.com/photo-1637966201771-b0b251baa2ef?auto=format&fit=crop&w=800&q=80",
description:
"Un viaje que combina historia, cultura viva y paisajes naturales únicos de Guatemala. Inicia en Antigua, continúa hacia el mercado indígena de Chichicastenango y el majestuoso Lago Atitlán, con visita a San Juan La Laguna y sus cooperativas tradicionales.",
category: "Centroamérica",
season: ["Todas"],
pricePerPerson: 754,
flights: {
outbound: {
from: "A consultar",
departure: "A coordinar",
to: "GUATEMALA (GUA)",
arrival: "A coordinar",
stops: "Vuelos internacionales no incluidos",
estimatedPrice: "A consultar",
},
return: {
from: "GUATEMALA (GUA)",
departure: "A coordinar",
to: "A consultar",
arrival: "A coordinar",
stops: "Vuelos internacionales no incluidos",
estimatedPrice: "A consultar",
},
},
activities: [
"Llegada al Aeropuerto Internacional La Aurora, recepción y traslado al hotel en Antigua Guatemala.",
"Tour guiado de medio día por Antigua, visitando Iglesia de la Merced, Plaza de Armas y Catedral.",
"Tiempo libre en Antigua para compra de artesanías y souvenirs.",
"Visita al mercado indígena de Chichicastenango y a la Iglesia de Santo Tomás.",
"Traslado hacia el Lago Atitlán, rodeado por los volcanes Atitlán, Tolimán y San Pedro.",
"Visita panorámica de Panajachel.",
"Paseo en bote a San Juan La Laguna con visita a cooperativas de chocolate, textiles y plantas medicinales.",
"Traslado a Ciudad de Guatemala para descansar antes del regreso.",
],
included: [
"Traslado Aeropuerto - Hotel - Aeropuerto.",
"4 noches de alojamiento en hotel de su elección.",
"Todos los desayunos.",
"City tour de Antigua de medio día.",
"Tour Chichicastenango, Lago Atitlán y Panajachel de día completo.",
"Tour San Juan La Laguna con visita a cooperativas, lancha incluida.",
"Guía certificado durante los tours.",
"Entradas según sea necesario en el itinerario.",
"Transportación terrestre en el circuito.",
"Seguro de viajero Assist Card.",
"Impuestos de hospedaje.",
],
notIncluded: [
"Property fee aplicable para hoteles en Antigua y Atitlán.",
"Vuelos internacionales.",
"Alimentaciones y gastos no mencionados.",
"Actividades extras y opcionales.",
"Nada que no sea explícitamente mencionado en el apartado incluido.",
],
pdfUrl: "/assets/pdfs/Guatemala-Descubriendo.pdf",
},
{
id: "guatemala-magica",
title: "Guatemala Mágica",
destinationIds: ["guatemala"],
destination: "Antigua, Chichicastenango, Lago Atitlán, Tikal y Ciudad de Guatemala",
dates: "Inicia martes y viernes del 2026",
duration: "6 Días",
days: 6,
cities: 5,
hotelNights: 5,
image:
"https://images.unsplash.com/photo-1580250642511-1660fe42ad58?auto=format&fit=crop&w=800&q=80",
description:
"Un recorrido que combina lo mejor de Guatemala: historia colonial, tradiciones vivas, Lago Atitlán y legado maya. La experiencia se completa con una excursión a Tikal, uno de los sitios arqueológicos más importantes del mundo maya.",
category: "Centroamérica",
season: ["Todas"],
pricePerPerson: 1426,
flights: {
outbound: {
from: "A consultar",
departure: "A coordinar",
to: "GUATEMALA (GUA)",
arrival: "A coordinar",
stops: "Vuelos internacionales no incluidos",
estimatedPrice: "A consultar",
},
return: {
from: "GUATEMALA (GUA)",
departure: "A coordinar",
to: "A consultar",
arrival: "A coordinar",
stops: "Vuelos internacionales no incluidos",
estimatedPrice: "A consultar",
},
},
activities: [
"Llegada al Aeropuerto Internacional La Aurora, recepción y traslado al hotel en Antigua Guatemala.",
"Tour guiado de medio día por Antigua, visitando Iglesia de la Merced, Plaza de Armas y Catedral.",
"Tiempo libre en Antigua para compra de artesanías y souvenirs.",
"Visita al mercado de Chichicastenango y a la Iglesia de Santo Tomás.",
"Traslado al Lago Atitlán y visita panorámica de Panajachel.",
"Paseo en bote a San Juan La Laguna con visita a cooperativas de chocolate, textiles y plantas medicinales.",
"Excursión a Tikal con recorrido por sus templos, plazas y puntos emblemáticos del mundo maya.",
"Comida campestre incluida en el Centro de Visitantes de Tikal.",
"Vuelo interno Guatemala - Flores - Guatemala incluido según itinerario.",
],
included: [
"Traslado Aeropuerto - Hotel - Aeropuerto.",
"5 noches de alojamiento en hotel de su elección.",
"Todos los desayunos.",
"City tour de Antigua de medio día.",
"Tour Chichicastenango, Lago Atitlán y Panajachel de día completo.",
"Tour San Juan La Laguna con visita a cooperativas, lancha incluida.",
"Tour Tikal al completo con comida campestre incluida.",
"Guía certificado durante los tours.",
"Entradas según sea necesario en el itinerario.",
"Transportación terrestre en el circuito.",
"Vuelo Guatemala - Las Flores - Guatemala, incluye una pieza de equipaje de 20 lbs y una de 10 lbs por persona.",
"Seguro de viajero Assist Card.",
"Impuestos de hospedaje.",
],
notIncluded: [
"Property fee aplicable para hoteles en Antigua y Atitlán.",
"Vuelos internacionales.",
"Alimentaciones y gastos no mencionados.",
"Actividades extras y opcionales.",
"Propinas.",
"Nada que no sea explícitamente mencionado en el apartado incluido.",
],
pdfUrl: "/assets/pdfs/Guatemala-Magica.pdf",
},
{
id: "puerto-rico-isla-del-encanto",
title: "Puerto Rico: La Isla del Encanto",
destinationIds: ["puerto-rico"],
destination: "San Juan, Puerto Rico",
dates: "Inicio de viaje todos los jueves del 2026",
duration: "5 Días",
days: 5,
cities: 1,
hotelNights: 4,
image:
"https://images.unsplash.com/photo-1717263209162-ea0cda01ff70?auto=format&fit=crop&w=800&q=80",
description:
"Una escapada a San Juan donde la historia y el Caribe se encuentran. El viaje combina días libres para disfrutar del ambiente, playas y gastronomía local, con un paseo por la bahía al atardecer, una excursión histórica por el Viejo San Juan, Castillo San Cristóbal y visita a la destilería Bacardí.",
category: "Caribe",
season: ["Todas"],
pricePerPerson: 750,
flights: {
outbound: {
from: "MÉXICO",
departure: "A coordinar",
to: "SAN JUAN (SJU)",
arrival: "A coordinar",
stops: "Vuelos no incluidos",
estimatedPrice: "A consultar",
},
return: {
from: "SAN JUAN (SJU)",
departure: "A coordinar",
to: "MÉXICO",
arrival: "A coordinar",
stops: "Vuelos no incluidos",
estimatedPrice: "A consultar",
},
},
activities: [
"Llegada al Aeropuerto Internacional de San Juan, recibimiento y traslado al hotel.",
"Mañana libre para actividades personales.",
"Paseo por la bahía al atardecer de 90 minutos, con vistas del Paseo de La Princesa, Mansión del Gobernador, murallas de San Juan y destilería Bacardí.",
"Excursión histórica por el Viejo San Juan con recorrido guiado y visita al Castillo San Cristóbal.",
"Visita a Casa Bacardí con coctel de bienvenida, recorrido en trolley, Museo Casa Bacardí y degustación de Bacardí Reserve para mayores de 21 años.",
"Día libre para disfrutar San Juan, sus playas, gastronomía o actividades personales.",
"Traslado al aeropuerto para tomar el vuelo de regreso.",
],
included: [
"Traslados Aeropuerto - Hotel - Aeropuerto.",
"4 noches de alojamiento con desayuno incluido.",
"Paseo por la bahía al atardecer.",
"Excursión histórica por el Viejo San Juan con visita a Destilería Bacardí.",
"Traslados desde y hacia hoteles durante las actividades incluidas.",
"Costo de entrada al Fuerte y a Bacardí.",
"Bebida complementaria y degustación de ron Bacardí Reserve para mayores de 21 años.",
"Seguro de viajero Assist Card.",
],
notIncluded: [
"Consumos y servicios adicionales.",
"Propinas.",
"Resort fee San Juan City de pago directo, 40 USD por habitación.",
"Gastos personales.",
"Nada que no sea explícitamente mencionado en el apartado incluido.",
],
pdfUrl: "/assets/pdfs/PuertoRico-Isla.pdf",
},
{
  id: "republica-dominicana-esencia-dominicana",
  title: "Esencia Dominicana",
  destinationIds: ["republica-dominicana"],
  destination: "Punta Cana y Santo Domingo, República Dominicana",
  dates: "Salidas diarias 2026",
  duration: "6 Días",
  days: 6,
  cities: 2,
  hotelNights: 5,
  image:
    "https://images.unsplash.com/photo-1697302611781-5166533305da?auto=format&fit=crop&w=800&q=80",
  description:
    "Disfruta una escapada a Punta Cana que combina descanso en el Caribe con una enriquecedora experiencia cultural. Además de relajarte en playas paradisíacas y disfrutar el servicio todo incluido del resort, vivirás una excursión de día completo a Santo Domingo para conocer su historia, cultura y sabores dominicanos.",
  category: "Caribe",
  season: ["Todas"],
  pricePerPerson: 692,
  flights: {
    outbound: {
      from: "A consultar",
      departure: "A coordinar",
      to: "PUNTA CANA (PUJ)",
      arrival: "A coordinar",
      stops: "Vuelos no incluidos",
      estimatedPrice: "A consultar",
    },
    return: {
      from: "PUNTA CANA (PUJ)",
      departure: "A coordinar",
      to: "A consultar",
      arrival: "A coordinar",
      stops: "Vuelos no incluidos",
      estimatedPrice: "A consultar",
    },
  },
  activities: [
    "Llegada al Aeropuerto Internacional de Punta Cana, recibimiento y traslado al hotel.",
    "Alojamiento en hotel de su elección en plan todo incluido.",
    "Excursión de día completo a Santo Domingo, la primera ciudad fundada por los europeos en América.",
    "Visita a Los Tres Ojos, Faro a Colón y Palacio Presidencial.",
    "Recorrido por la Zona Colonial, Catedral Primada de América, Calle Las Damas, Panteón Nacional y Alcázar de Colón.",
    "Almuerzo buffet con sabores típicos dominicanos y recorrido por el Malecón.",
    "Días libres para disfrutar las instalaciones del resort, playas de Punta Cana y actividades opcionales.",
    "Posibilidad de añadir experiencias opcionales como Isla Saona, Los Haitises o recorridos de aventura.",
    "Traslado al aeropuerto para tomar el vuelo de regreso.",
  ],
  included: [
    "Traslados Aeropuerto - Hotel - Aeropuerto en servicio privado.",
    "5 noches de alojamiento en hotel a su elección, en plan todo incluido.",
    "Excursión de día completo a Santo Domingo con entradas necesarias y comida buffet.",
    "Recogida en el hotel y traslado de regreso durante la excursión.",
    "Transporte en minibús o autobús.",
    "Guía en español.",
    "Comida tipo buffet con bebidas sin alcohol.",
    "Impuestos hoteleros aplicables.",
    "Seguro de viajero Assist Card.",
  ],
  notIncluded: [
    "Consumos y servicios adicionales en los hoteles, como spa o estética.",
    "Propinas.",
    "Gastos personales.",
    "Actividades opcionales no incluidas.",
    "Cualquier otro servicio no especificado en el apartado incluido.",
  ],
  pdfUrl: "/assets/pdfs/Dominicana-Esencia.pdf",
},
];

export const categories: string[] = [
  "Todos",
  "Latinoamérica",
  "Centroamérica",
  "Caribe",
];

export const seasons: string[] = [
  "Todas",
  "Primavera",
  "Verano",
  "Otoño",
  "Invierno",
];
