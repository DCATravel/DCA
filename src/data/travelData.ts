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
  pdfUrl: string;
}

export const destinations: Destination[] = [
  {
    "id": "brasil",
    "name": "Brasil",
    "location": "Río de Janeiro, Iguazú, Angra dos Reis y Petrópolis, Brasil",
    "image": "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=800&q=80",
    "rating": 5,
    "price": 1765,
    "description": "Programas por Brasil que combinan los íconos de Río de Janeiro, el Cristo Redentor, Pan de Azúcar, cultura carioca, playas, naturaleza e incluso las Cataratas de Iguazú según el itinerario elegido.",
    "category": "Latinoamérica"
  },
  {
    "id": "colombia",
    "name": "Colombia",
    "location": "Bogotá, Cartagena y Medellín, Colombia",
    "image": "https://images.unsplash.com/photo-1536308037887-165852797016?auto=format&fit=crop&w=800&q=80",
    "rating": 4.8,
    "price": 0,
    "description": "Una ruta ideal para conocer Bogotá, Cartagena y Medellín entre historia, arquitectura colonial, museos, miradores y energía urbana.",
    "category": "Latinoamérica"
  },
  {
    "id": "costa-rica",
    "name": "Costa Rica",
    "location": "San José, Irazú, Orosí y Manuel Antonio, Costa Rica",
    "image": "https://images.unsplash.com/photo-1536709017021-ce8f99c17e38?auto=format&fit=crop&w=800&q=80",
    "rating": 5,
    "price": 0,
    "description": "Una experiencia de naturaleza, cultura y aventura con San José, Volcán Irazú, Valle de Orosí, Manuel Antonio, cena-show y actividades de canopy y rappel.",
    "category": "Latinoamérica"
  },
  {
    "id": "cuba",
    "name": "Cuba",
    "location": "La Habana, Varadero y Cayo Santa María, Cuba",
    "image": "https://images.unsplash.com/photo-1500759285222-a95626b934cb?auto=format&fit=crop&w=800&q=80",
    "rating": 4.7,
    "price": 0,
    "description": "Programas por Cuba que combinan historia, arquitectura colonial, ritmo caribeño, playas de Varadero y escapadas de descanso en Cayo Santa María.",
    "category": "Caribe"
  },
  {
    "id": "republica-dominicana",
    "name": "República Dominicana",
    "location": "Santo Domingo, Bonao, La Vega, Jarabacoa, Puerto Plata y Santiago",
    "image": "https://images.unsplash.com/photo-1575950674322-3a1977724f2e?auto=format&fit=crop&w=800&q=80",
    "rating": 4.7,
    "price": 0,
    "description": "Un recorrido cultural y caribeño entre Santo Domingo, montaña, café, ron, funicular, Puerto Plata y la esencia dominicana.",
    "category": "Caribe"
  },
  {
    "id": "guatemala",
    "name": "Guatemala",
    "location": "Antigua, Chichicastenango, Lago Atitlán, Tikal, Yaxhá y Ciudad de Guatemala",
    "image": "https://images.unsplash.com/photo-1606503809729-40646b716a36?auto=format&fit=crop&w=800&q=80",
    "rating": 4.9,
    "price": 1935,
    "description": "Rutas culturales y de naturaleza por Antigua, mercados tradicionales, Lago Atitlán, San Juan La Laguna, Tikal, Yaxhá y experiencias de aventura como Acatenango.",
    "category": "Centroamérica"
  },
  {
    "id": "puerto-rico",
    "name": "Puerto Rico",
    "location": "San Juan, Puerto Rico",
    "image": "https://images.unsplash.com/photo-1599582871426-a44765cedca0?auto=format&fit=crop&w=800&q=80",
    "rating": 4.8,
    "price": 0,
    "description": "Una escapada caribeña a San Juan con historia, paseo por la bahía al atardecer, Castillo San Cristóbal y experiencia en Casa Bacardí.",
    "category": "Caribe"
  }
];

export const itineraries: Itinerary[] = [
  {
    "id": "brasil-expreso-2026",
    "title": "Brasil Expreso 2026",
    "destination": "Río de Janeiro & Iguazú, Brasil",
    "dates": "16 al 23 de noviembre 2026",
    "duration": "8 Días",
    "days": 8,
    "cities": 2,
    "hotelNights": 7,
    "image": "https://images.unsplash.com/photo-1544991337-95176b5233c4?auto=format&fit=crop&w=800&q=80",
    "description": "Viaje completo por Brasil iniciando en Río de Janeiro para conocer Cristo Redentor, Pan de Azúcar, Maracaná, Sambódromo, Catedral Metropolitana, Santa Teresa y Escaleras de Selarón, finalizando en Iguazú con el lado brasileño, Macuco Safari y el lado argentino de las cataratas.",
    "category": "Latinoamérica",
    "season": [
      "Otoño"
    ],
    "pricePerPerson": 1895,
    "flights": {
      "outbound": {
        "from": "A consultar",
        "departure": "A coordinar",
        "to": "RÍO DE JANEIRO",
        "arrival": "A coordinar",
        "stops": "Vuelos no incluidos",
        "estimatedPrice": "A consultar"
      },
      "return": {
        "from": "IGUAZÚ",
        "departure": "A coordinar",
        "to": "A consultar",
        "arrival": "A coordinar",
        "stops": "Vuelos no incluidos",
        "estimatedPrice": "A consultar"
      }
    },
    "activities": [
      "Cristo Redentor con ascenso por el bosque de Tijuca.",
      "Pan de Azúcar en teleférico con vistas panorámicas de Río.",
      "Recorrido panorámico por Maracaná, Sambódromo y Catedral Metropolitana.",
      "Medio día de Río histórico, Santa Teresa y Escaleras de Selarón.",
      "Cataratas de Iguazú del lado brasileño con entrada y Macuco Safari.",
      "Cataratas de Iguazú del lado argentino con Garganta del Diablo y circuitos panorámicos."
    ],
    "included": [
      "04 noches de acomodación en Río de Janeiro con desayuno.",
      "03 noches de acomodación en Iguazú con desayuno.",
      "Traslados privados In & Out en Río y en Iguazú.",
      "Día completo Corcovado & Pan de Azúcar con entradas, city tour y almuerzo.",
      "Medio día Río Histórico.",
      "Medio día Cataratas Brasileñas con entradas + Macuco Safari.",
      "Día completo Cataratas Argentinas con entradas.",
      "Seguro de viajero AC 60 Assist Card."
    ],
    "notIncluded": [
      "Gastos personales.",
      "Comidas no mencionadas en la programación.",
      "Vuelos domésticos o internacionales.",
      "Servicios o excursiones no mencionados anteriormente."
    ],
    "pdfUrl": "/assets/Brasil-Iguazu.pdf"
  },
  {
    "id": "rio-ciudad-maravillosa",
    "title": "Ciudad Maravillosa",
    "destination": "Río de Janeiro, Brasil",
    "dates": "Válidas hasta noviembre 2026",
    "duration": "8 Días",
    "days": 8,
    "cities": 3,
    "hotelNights": 7,
    "image": "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=800&q=80",
    "description": "Programa ideal para descubrir Río de Janeiro a través de historia, samba, tradición brasileña, Cristo Redentor, Pan de Azúcar, Bahía de Guanabara, Angra dos Reis, Petrópolis, Maracaná y experiencia de Carnaval.",
    "category": "Latinoamérica",
    "season": [
      "Todas"
    ],
    "pricePerPerson": 1765,
    "flights": {
      "outbound": {
        "from": "A consultar",
        "departure": "A coordinar",
        "to": "RÍO DE JANEIRO",
        "arrival": "A coordinar",
        "stops": "Vuelos no incluidos",
        "estimatedPrice": "A consultar"
      },
      "return": {
        "from": "RÍO DE JANEIRO",
        "departure": "A coordinar",
        "to": "A consultar",
        "arrival": "A coordinar",
        "stops": "Vuelos no incluidos",
        "estimatedPrice": "A consultar"
      }
    },
    "activities": [
      "Día completo Corcovado & Pan de Azúcar con entradas, city tour y almuerzo.",
      "Río Histórico y Bahía de Guanabara con paseo en catamarán.",
      "Angra dos Reis con paseo de escuna y almuerzo.",
      "Petrópolis con Museo Imperial y almuerzo.",
      "Estadio Maracaná y experiencia cultural del Carnaval con entradas."
    ],
    "included": [
      "07 noches de hospedaje en Río de Janeiro con desayuno.",
      "Traslados privados In & Out.",
      "Día completo Corcovado & Pan de Azúcar con entradas, city tour y almuerzo.",
      "Día completo Río Histórico & Bahía de Guanabara con catamarán.",
      "Día completo Angra dos Reis con paseo de escuna y almuerzo.",
      "Día completo Petrópolis con Museo Imperial y almuerzo.",
      "Día completo Estadio Maracaná & Experiencia del Carnaval con entradas.",
      "Seguro de viajero AC 60 Assist Card."
    ],
    "notIncluded": [
      "Gastos personales.",
      "Comidas no mencionadas en la programación.",
      "Vuelos domésticos o internacionales.",
      "Excursiones o servicios no mencionados anteriormente."
    ],
    "pdfUrl": "/assets/Rio-Ciudad-Maravillosa.pdf"
  },
  {
    "id": "colombia-3-joyas",
    "title": "Las 3 Joyas de Colombia",
    "destination": "Bogotá, Cartagena y Medellín, Colombia",
    "dates": "20 al 27 de julio 2026",
    "duration": "8 Días",
    "days": 8,
    "cities": 3,
    "hotelNights": 7,
    "image": "https://images.unsplash.com/photo-1536308037887-165852797016?auto=format&fit=crop&w=800&q=80",
    "description": "Recorrido por Bogotá, Cartagena y Medellín que combina historia, arquitectura colonial, vistas desde Monserrate, La Candelaria, Cartagena amurallada y la energía urbana de Medellín.",
    "category": "Latinoamérica",
    "season": [
      "Verano"
    ],
    "pricePerPerson": 0,
    "flights": {
      "outbound": {
        "from": "CDMX (MEX)",
        "departure": "A coordinar",
        "to": "BOGOTÁ (BOG)",
        "arrival": "A coordinar",
        "stops": "Vuelo redondo directo / ruta MEX-BOG-CTG-MED-MEX",
        "estimatedPrice": "Incluido en tarifa"
      },
      "return": {
        "from": "MEDELLÍN (MDE)",
        "departure": "A coordinar",
        "to": "CDMX (MEX)",
        "arrival": "A coordinar",
        "stops": "Vuelo redondo directo / ruta MEX-BOG-CTG-MED-MEX",
        "estimatedPrice": "Incluido en tarifa"
      }
    },
    "activities": [
      "City tour Bogotá con Monserrate, Museo del Oro, La Candelaria y Plaza de Bolívar.",
      "Museo Botero y obras de maestros como Picasso y Dalí.",
      "Traslado/vuelo hacia Cartagena.",
      "City tour Cartagena con bahía, barrio Manga y Castillo de San Felipe.",
      "Día libre en Cartagena para actividades personales u opcionales.",
      "City tour Medellín en bus turístico por Parque de los Pies Descalzos, Parque del Río, Pueblito Paisa y Parque de la Inflexión."
    ],
    "included": [
      "Vuelo redondo directo desde Ciudad de México en la ruta MEX-BOG-CTG-MED-MEX con artículo personal y equipaje de mano de 10 kg.",
      "Traslados Aeropuerto - Hotel - Aeropuerto.",
      "7 noches de alojamiento en categoría elegida con desayuno incluido.",
      "City Tour en Bogotá.",
      "City Tour en Cartagena.",
      "City Tour en Medellín.",
      "Seguro de viajero Assist Card.",
      "Impuestos aéreos y de hospedaje."
    ],
    "notIncluded": [
      "Alimentaciones y gastos no mencionados.",
      "Gastos personales.",
      "Actividades extras y opcionales.",
      "Propinas."
    ],
    "pdfUrl": "/assets/Colombia-3-Joyas.pdf"
  },
  {
    "id": "costa-rica-para-todos",
    "title": "Costa Rica Para Todos",
    "destination": "San José, Irazú, Orosí y Manuel Antonio, Costa Rica",
    "dates": "A consultar",
    "duration": "8 Días",
    "days": 8,
    "cities": 4,
    "hotelNights": 7,
    "image": "https://images.unsplash.com/photo-1536709017021-ce8f99c17e38?auto=format&fit=crop&w=800&q=80",
    "description": "Experiencia por Costa Rica con ciudad, cultura, naturaleza y aventura: San José, Volcán Irazú, Cartago, Valle de Orosí, Manuel Antonio, cena-show típica y canopy/rappel.",
    "category": "Latinoamérica",
    "season": [
      "Todas"
    ],
    "pricePerPerson": 0,
    "flights": {
      "outbound": {
        "from": "CDMX (MEX)",
        "departure": "A coordinar",
        "to": "SAN JOSÉ (SJO)",
        "arrival": "A coordinar",
        "stops": "A consultar",
        "estimatedPrice": "A consultar"
      },
      "return": {
        "from": "SAN JOSÉ (SJO)",
        "departure": "A coordinar",
        "to": "CDMX (MEX)",
        "arrival": "A coordinar",
        "stops": "A consultar",
        "estimatedPrice": "A consultar"
      }
    },
    "activities": [
      "Tour de la ciudad de San José con Museo de Arte Costarricense, Parque La Sabana, Teatro Nacional, Catedral Metropolitana, Plaza de la Cultura y Mercado Central.",
      "Volcán Irazú, Basílica de Nuestra Señora de los Ángeles, Cartago y Valle de Orosí.",
      "Parque Nacional Manuel Antonio con playas, senderos y biodiversidad.",
      "Cena-show típico en Restaurante Mirador Ran Luna.",
      "Día libre para actividades personales o experiencias opcionales.",
      "Tour de aventura con canopy, plataformas y rappel."
    ],
    "included": [
      "Recepción y traslado al hotel a la llegada.",
      "Tours descritos en itinerario.",
      "Desayunos y comidas indicadas en los días mencionados.",
      "Traslado al aeropuerto para vuelo de regreso."
    ],
    "notIncluded": [
      "Actividades opcionales no indicadas como incluidas.",
      "Traslado de regreso desde la cena-show cuando se indique por cuenta del pasajero.",
      "Gastos personales.",
      "Servicios no especificados."
    ],
    "pdfUrl": "/assets/CostaRica-ParaTodos.pdf"
  },
  {
    "id": "cuba-habana-varadero",
    "title": "Cuba - La Habana & Varadero",
    "destination": "La Habana y Varadero, Cuba",
    "dates": "A consultar",
    "duration": "5 Días",
    "days": 5,
    "cities": 2,
    "hotelNights": 4,
    "image": "https://images.unsplash.com/photo-1602515677088-2643f5eabaa6?auto=format&fit=crop&w=800&q=80",
    "description": "Programa equilibrado entre ciudad y descanso para vivir La Habana colonial, tradiciones caribeñas y playas de arena blanca en Varadero.",
    "category": "Caribe",
    "season": [
      "Todas"
    ],
    "pricePerPerson": 0,
    "flights": {
      "outbound": {
        "from": "CDMX/AIFA",
        "departure": "A coordinar",
        "to": "LA HABANA (HAV)",
        "arrival": "A coordinar",
        "stops": "Vuelo directo",
        "estimatedPrice": "Incluido en tarifa"
      },
      "return": {
        "from": "LA HABANA (HAV)",
        "departure": "A coordinar",
        "to": "CDMX/AIFA",
        "arrival": "A coordinar",
        "stops": "Vuelo directo",
        "estimatedPrice": "Incluido en tarifa"
      }
    },
    "activities": [
      "Traslado de La Habana a Varadero y tiempo libre para playa.",
      "Día libre en Varadero en plan Todo Incluido.",
      "Traslado de Varadero a La Habana.",
      "City Tour guiado por La Habana, Centro Histórico y La Habana Moderna.",
      "Visitas panorámicas a Palacio Presidencial, Parque Central, Capitolio, Floridita, Bodeguita del Medio, Plaza de la Catedral, Plaza de Armas, Malecón, Universidad de La Habana y Plaza de la Revolución.",
      "Mirador del Gran Parque Histórico Militar Morro-Cabaña."
    ],
    "included": [
      "Vuelo CDMX/AIFA - Habana - CDMX/AIFA.",
      "2 noches en Varadero en plan Todo Incluido.",
      "2 noches en La Habana con desayunos incluidos.",
      "Traslado In: aeropuerto - hotel Varadero.",
      "Traslado Inter: hotel Varadero - hotel La Habana.",
      "Traslado Out: hotel La Habana - aeropuerto.",
      "City Tour en La Habana.",
      "Seguro de asistencia médica.",
      "Visa electrónica."
    ],
    "notIncluded": [
      "Gastos personales.",
      "Comidas no mencionadas.",
      "Cualquier servicio no mencionado en las inclusiones.",
      "Servicios y gastos no especificados."
    ],
    "pdfUrl": "/assets/Cuba-Habana-Varadero.pdf"
  },
  {
    "id": "cuba-hvc",
    "title": "Habana, Varadero & Cayo Santa María",
    "destination": "La Habana, Varadero y Cayo Santa María, Cuba",
    "dates": "Salidas: Martes, Jueves y Sábados",
    "duration": "8 Días",
    "days": 8,
    "cities": 3,
    "hotelNights": 7,
    "image": "https://images.unsplash.com/photo-1574436713488-0d99167108cf?auto=format&fit=crop&w=800&q=80",
    "description": "Experiencia por Cuba que combina la esencia cultural de La Habana, la tranquilidad de Varadero y el entorno paradisíaco de Cayo Santa María.",
    "category": "Caribe",
    "season": [
      "Todas"
    ],
    "pricePerPerson": 0,
    "flights": {
      "outbound": {
        "from": "AIFA",
        "departure": "A coordinar",
        "to": "LA HABANA (HAV)",
        "arrival": "A coordinar",
        "stops": "Vuelo directo / a confirmar",
        "estimatedPrice": "A consultar"
      },
      "return": {
        "from": "LA HABANA (HAV)",
        "departure": "A coordinar",
        "to": "AIFA",
        "arrival": "A coordinar",
        "stops": "Vuelo directo / a confirmar",
        "estimatedPrice": "A consultar"
      }
    },
    "activities": [
      "Traslado inicial a Varadero y tiempo libre de playa.",
      "Día de playa y relajación en Varadero.",
      "Traslado a Cayo Santa María con tarde libre.",
      "Días libres en Cayo Santa María con opción de snorkel, kayak o paseo en barco.",
      "Traslado a La Habana.",
      "City Tour guiado por La Habana, Centro Histórico y La Habana Moderna.",
      "Visita panorámica a puntos icónicos de La Habana y mirador del Morro-Cabaña."
    ],
    "included": [
      "2 noches en Varadero en plan Todo Incluido.",
      "2 noches en Cayo Santa María en plan Todo Incluido.",
      "2 noches en La Habana con desayunos incluidos.",
      "Traslado In: aeropuerto - hotel Varadero.",
      "Traslados Inter: Varadero - Cayo Santa María - La Habana.",
      "Traslado Out: hotel La Habana - aeropuerto.",
      "City Tour en La Habana.",
      "Seguro de asistencia médica.",
      "Visa electrónica."
    ],
    "notIncluded": [
      "Gastos personales.",
      "Comidas no mencionadas.",
      "Cualquier servicio no mencionado en las inclusiones.",
      "Servicios y gastos no especificados."
    ],
    "pdfUrl": "/assets/Cuba-HVC.pdf"
  },
  {
    "id": "cuba-varadero",
    "title": "Varadero",
    "destination": "Varadero, Cuba",
    "dates": "A consultar",
    "duration": "6 Días",
    "days": 6,
    "cities": 1,
    "hotelNights": 5,
    "image": "https://images.unsplash.com/photo-1500759285222-a95626b934cb?auto=format&fit=crop&w=800&q=80",
    "description": "Estancia de playa en Varadero, reconocido por sus playas de arena blanca, aguas turquesa, arrecifes para buceo y snorkel, cuevas naturales y reservas ecológicas.",
    "category": "Caribe",
    "season": [
      "Todas"
    ],
    "pricePerPerson": 0,
    "flights": {
      "outbound": {
        "from": "AIFA",
        "departure": "A coordinar",
        "to": "LA HABANA (HAV)",
        "arrival": "A coordinar",
        "stops": "Vuelo directo",
        "estimatedPrice": "Incluido en tarifa"
      },
      "return": {
        "from": "LA HABANA (HAV)",
        "departure": "A coordinar",
        "to": "AIFA",
        "arrival": "A coordinar",
        "stops": "Vuelo directo",
        "estimatedPrice": "Incluido en tarifa"
      }
    },
    "activities": [
      "Llegada a La Habana y traslado incluido a Varadero.",
      "Días libres para disfrutar playas y servicios del hotel en plan Todo Incluido.",
      "Tiempo libre para descanso, actividades recreativas o playa.",
      "Traslado al aeropuerto de La Habana para vuelo de regreso."
    ],
    "included": [
      "Vuelo AIFA - Habana - AIFA con equipaje de 10 kg y bolso de mano.",
      "5 noches en Varadero en plan Todo Incluido.",
      "Traslado aeropuerto - hotel Varadero - aeropuerto.",
      "Seguro de asistencia médica.",
      "Visa electrónica."
    ],
    "notIncluded": [
      "Gastos personales.",
      "Comidas no mencionadas.",
      "Cualquier servicio no mencionado en las inclusiones.",
      "Servicios y gastos no especificados."
    ],
    "pdfUrl": "/assets/Cuba-Varadero.pdf"
  },
  {
    "id": "republica-dominicana-merengue-bachata",
    "title": "República Dominicana: Merengue y Bachata",
    "destination": "Santo Domingo, Bonao, La Vega, Jarabacoa, Puerto Plata y Santiago",
    "dates": "A consultar",
    "duration": "6 Días",
    "days": 6,
    "cities": 6,
    "hotelNights": 5,
    "image": "https://images.unsplash.com/photo-1575950674322-3a1977724f2e?auto=format&fit=crop&w=800&q=80",
    "description": "Recorrido por República Dominicana que combina Santo Domingo colonial, naturaleza, café, montaña, Puerto Plata, funicular, Ron Macorix y Santiago de los Caballeros.",
    "category": "Caribe",
    "season": [
      "Todas"
    ],
    "pricePerPerson": 0,
    "flights": {
      "outbound": {
        "from": "A consultar",
        "departure": "A coordinar",
        "to": "SANTO DOMINGO",
        "arrival": "A coordinar",
        "stops": "A consultar",
        "estimatedPrice": "A consultar"
      },
      "return": {
        "from": "PUERTO PLATA",
        "departure": "A coordinar",
        "to": "A consultar",
        "arrival": "A coordinar",
        "stops": "A consultar",
        "estimatedPrice": "A consultar"
      }
    },
    "activities": [
      "Llegada a Santo Domingo con traslado incluido y cena de bienvenida.",
      "City tour de Santo Domingo con Los Tres Ojos, Faro a Colón, Zona Colonial, Catedral Primada de América y Alcázar de Colón.",
      "Ruta hacia Bonao con degustación de café dominicano.",
      "Visita al Santuario del Santo Cerro en La Vega.",
      "Estancia en Jarabacoa con cena incluida y visita a Calle Café Colao.",
      "Recorrido por Puerto Plata, calle de los paraguas, paseo de Doña Blanca y funicular de Puerto Plata.",
      "Casa del Ron Macorix con degustación y recorrido panorámico por Santiago de los Caballeros."
    ],
    "included": [
      "Recepción y traslado al hotel a la llegada.",
      "Cena de bienvenida.",
      "City tours y recorridos descritos en el itinerario.",
      "Cena incluida en Jarabacoa.",
      "Alojamiento en Puerto Plata en hotel todo incluido según itinerario.",
      "Traslado al aeropuerto para regreso."
    ],
    "notIncluded": [
      "Vuelos internacionales.",
      "Almuerzos señalados como no incluidos.",
      "Gastos personales.",
      "Servicios no especificados en el itinerario."
    ],
    "pdfUrl": "/assets/Dominicana-Merengue-Bachata.pdf"
  },
  {
    "id": "guatemala-aventura-cultura",
    "title": "Aventura y Cultura",
    "destination": "Antigua, Acatenango, Chichicastenango, Atitlán y Ciudad de Guatemala",
    "dates": "A consultar",
    "duration": "8 Días",
    "days": 8,
    "cities": 5,
    "hotelNights": 7,
    "image": "https://images.unsplash.com/photo-1528543606781-2f6e6857f318?auto=format&fit=crop&w=800&q=80",
    "description": "Recorrido por Guatemala que combina historia colonial, tradiciones vivas, legado maya, trekking al Volcán Acatenango, Chichicastenango, Lago Atitlán, San Juan La Laguna y Ciudad Cayalá.",
    "category": "Centroamérica",
    "season": [
      "Todas"
    ],
    "pricePerPerson": 0,
    "flights": {
      "outbound": {
        "from": "A consultar",
        "departure": "A coordinar",
        "to": "GUATEMALA (GUA)",
        "arrival": "A coordinar",
        "stops": "Vuelos no incluidos",
        "estimatedPrice": "A consultar"
      },
      "return": {
        "from": "GUATEMALA (GUA)",
        "departure": "A coordinar",
        "to": "A consultar",
        "arrival": "A coordinar",
        "stops": "Vuelos no incluidos",
        "estimatedPrice": "A consultar"
      }
    },
    "activities": [
      "Tour guiado por Antigua con Iglesia de la Merced, Plaza de Armas y Catedral.",
      "Trekking al Volcán Acatenango con caminata al campamento base y vistas al Volcán de Fuego.",
      "Descenso del Volcán Acatenango y tarde libre.",
      "Visita al mercado de Chichicastenango e Iglesia de Santo Tomás.",
      "Lago Atitlán y visita panorámica de Panajachel.",
      "Bote a San Juan La Laguna con cooperativas de chocolate, textiles y plantas medicinales.",
      "Tour por Ciudad de Guatemala y Ciudad Cayalá."
    ],
    "included": [
      "Recepción y traslado al hotel en Antigua.",
      "Tours y traslados descritos en el itinerario.",
      "Desayunos según itinerario.",
      "Transporte terrestre en circuito.",
      "Guías durante actividades indicadas."
    ],
    "notIncluded": [
      "Vuelos internacionales.",
      "Gastos personales.",
      "Servicios no especificados.",
      "Equipo o gastos personales requeridos para Acatenango."
    ],
    "pdfUrl": "/assets/Guatemala-Aventura-Cultura.pdf"
  },
  {
    "id": "guatemala-descubriendo",
    "title": "Descubriendo Guatemala",
    "destination": "Antigua, Chichicastenango, Lago Atitlán y Ciudad de Guatemala",
    "dates": "Salidas: Martes y Viernes",
    "duration": "5 Días",
    "days": 5,
    "cities": 4,
    "hotelNights": 4,
    "image": "https://images.unsplash.com/photo-1637966201771-b0b251baa2ef?auto=format&fit=crop&w=800&q=80",
    "description": "Viaje corto por Guatemala que mezcla historia, cultura viva y naturaleza: Antigua, mercado de Chichicastenango, Lago Atitlán, San Juan La Laguna y regreso a Ciudad de Guatemala.",
    "category": "Centroamérica",
    "season": [
      "Todas"
    ],
    "pricePerPerson": 0,
    "flights": {
      "outbound": {
        "from": "A consultar",
        "departure": "A coordinar",
        "to": "GUATEMALA (GUA)",
        "arrival": "A coordinar",
        "stops": "Vuelos internacionales no incluidos",
        "estimatedPrice": "A consultar"
      },
      "return": {
        "from": "GUATEMALA (GUA)",
        "departure": "A coordinar",
        "to": "A consultar",
        "arrival": "A coordinar",
        "stops": "Vuelos internacionales no incluidos",
        "estimatedPrice": "A consultar"
      }
    },
    "activities": [
      "Tour de medio día por Antigua con Iglesia de la Merced, Plaza de Armas y Catedral.",
      "Mercado de Chichicastenango e Iglesia de Santo Tomás.",
      "Lago Atitlán, Panajachel y paisajes volcánicos.",
      "Paseo en bote a San Juan La Laguna.",
      "Visita a cooperativas de chocolate, textiles y plantas medicinales."
    ],
    "included": [
      "Traslado Aeropuerto - Hotel - Aeropuerto.",
      "4 noches de alojamiento en hotel de su elección.",
      "Todos los desayunos.",
      "City tour de Antigua medio día.",
      "Tour Chichicastenango - Lago Atitlán y Panajachel día completo.",
      "Tour San Juan La Laguna con visita a cooperativas, incluye lancha.",
      "Guía certificado durante los tours.",
      "Entradas según sea necesario según itinerario.",
      "Transportación terrestre en el circuito.",
      "Seguro de viajero Assist Card.",
      "Impuestos de hospedaje."
    ],
    "notIncluded": [
      "Property fee aplicable para hoteles en Antigua y Atitlán.",
      "Vuelos internacionales.",
      "Alimentaciones y gastos no mencionados.",
      "Actividades extras y opcionales."
    ],
    "pdfUrl": "/assets/Guatemala-Descubriendo.pdf"
  },
  {
    "id": "guatemala-espectacular",
    "title": "Guatemala Espectacular",
    "destination": "Antigua, Chichicastenango, Lago Atitlán, Tikal, Yaxhá y Ciudad de Guatemala",
    "dates": "Salidas: Martes y Viernes · Válidas hasta 20 diciembre 2026",
    "duration": "7 Días",
    "days": 7,
    "cities": 6,
    "hotelNights": 6,
    "image": "https://images.unsplash.com/photo-1580250642511-1660fe42ad58?auto=format&fit=crop&w=800&q=80",
    "description": "Recorrido por los destinos más impresionantes de Guatemala: Antigua, Chichicastenango, Lago Atitlán, San Juan La Laguna, Tikal y Yaxhá.",
    "category": "Centroamérica",
    "season": [
      "Todas"
    ],
    "pricePerPerson": 1935,
    "flights": {
      "outbound": {
        "from": "A consultar",
        "departure": "A coordinar",
        "to": "GUATEMALA (GUA)",
        "arrival": "A coordinar",
        "stops": "Vuelos internacionales no incluidos",
        "estimatedPrice": "A consultar"
      },
      "return": {
        "from": "GUATEMALA (GUA)",
        "departure": "A coordinar",
        "to": "A consultar",
        "arrival": "A coordinar",
        "stops": "Vuelos internacionales no incluidos",
        "estimatedPrice": "A consultar"
      }
    },
    "activities": [
      "Traslado del aeropuerto a Antigua Guatemala.",
      "Tour de Antigua medio día con Iglesia de la Merced, Plaza de Armas y Catedral.",
      "Chichicastenango, Iglesia de Santo Tomás y Lago Atitlán.",
      "Bote a San Juan La Laguna con cooperativas de chocolate, textiles y plantas medicinales.",
      "Vuelo interno a Flores y visita al sitio arqueológico de Tikal.",
      "Visita arqueológica a Yaxhá y regreso a Ciudad de Guatemala."
    ],
    "included": [
      "6 noches de alojamiento.",
      "Desayunos diarios, excepto día 05 que es Box Lunch.",
      "Impuestos hoteleros.",
      "Traslados y tours detallados.",
      "Guía durante tours.",
      "Entradas según itinerario.",
      "Almuerzo campestre en Tikal.",
      "Lancha en Panajachel."
    ],
    "notIncluded": [
      "Property fee aplicable en hoteles en Antigua y Atitlán.",
      "Vuelos internacionales.",
      "Gastos personales.",
      "Servicios no especificados."
    ],
    "pdfUrl": "/assets/Guatemala-Espectacular.pdf"
  },
  {
    "id": "puerto-rico-isla-del-encanto",
    "title": "Puerto Rico: La Isla del Encanto",
    "destination": "San Juan, Puerto Rico",
    "dates": "Salidas: Jueves",
    "duration": "5 Días",
    "days": 5,
    "cities": 2,
    "hotelNights": 4,
    "image": "https://images.unsplash.com/photo-1717263209162-ea0cda01ff70?auto=format&fit=crop&w=800&q=80",
    "description": "Escapada a San Juan que combina días libres, paseo por la bahía al atardecer, historia del Viejo San Juan, Castillo San Cristóbal y visita a la destilería Bacardí.",
    "category": "Caribe",
    "season": [
      "Todas"
    ],
    "pricePerPerson": 0,
    "flights": {
      "outbound": {
        "from": "MÉXICO",
        "departure": "A coordinar",
        "to": "SAN JUAN (SJU)",
        "arrival": "A coordinar",
        "stops": "A consultar",
        "estimatedPrice": "A consultar"
      },
      "return": {
        "from": "SAN JUAN (SJU)",
        "departure": "A coordinar",
        "to": "MÉXICO",
        "arrival": "A coordinar",
        "stops": "A consultar",
        "estimatedPrice": "A consultar"
      }
    },
    "activities": [
      "Llegada a San Juan y traslado al hotel.",
      "Paseo por la bahía al atardecer de 90 minutos.",
      "Vistas del Paseo de La Princesa, Mansión del Gobernador, murallas de San Juan y destilería Bacardí desde el agua.",
      "Excursión histórica por el Viejo San Juan con Castillo San Cristóbal.",
      "Visita a Casa Bacardí con bebida complementaria y degustación para mayores de 21 años.",
      "Día libre para actividades personales."
    ],
    "included": [
      "Traslados Aeropuerto - Hotel - Aeropuerto.",
      "4 noches de alojamiento con desayuno incluido.",
      "Paseo por la bahía al atardecer.",
      "Excursión Histórica por el Viejo San Juan con visita a Destilería Bacardí.",
      "Seguro de viajero Assist Card."
    ],
    "notIncluded": [
      "Consumos y servicios adicionales.",
      "Propinas.",
      "Resort fee San Juan City, pago directo de 40 USD por habitación.",
      "Gastos personales.",
      "Cualquier otro servicio no especificado en el apartado de incluye."
    ],
    "pdfUrl": "/assets/PuertoRico-Isla.pdf"
  }
];

export const categories: string[] = [
  "Todos",
  "Latinoamérica",
  "Caribe",
  "Centroamérica",
  "Europa",
  "Asia"
];

export const seasons: string[] = [
  "Todas",
  "Primavera",
  "Verano",
  "Otoño",
  "Invierno"
];

