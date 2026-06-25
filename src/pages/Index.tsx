import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Compass,
  Download,
  Globe,
  HeartHandshake,
  MapPin,
  Plane,
  Shield,
  Users,
} from "lucide-react";
import { destinations, itineraries } from "@/data/travelData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const getVisibleDestinationCount = () => {
  if (typeof window === "undefined") return 4;

  if (window.innerWidth >= 1024) return 4;
  if (window.innerWidth >= 640) return 2;
  return 1;
};

export default function Index() {
  const [destinationIndex, setDestinationIndex] = useState(0);
  const [isDestinationCarouselPaused, setIsDestinationCarouselPaused] =
    useState(false);
  const [visibleDestinationCount, setVisibleDestinationCount] = useState(
    getVisibleDestinationCount
  );

  const carouselDestinations = destinations.slice(0, 6);
  const featuredItineraries = itineraries.slice(0, 4);

  const maxDestinationIndex = Math.max(
    carouselDestinations.length - visibleDestinationCount,
    0
  );

  const safeDestinationIndex = Math.min(destinationIndex, maxDestinationIndex);

  const trackWidth =
    carouselDestinations.length > 0
      ? `${(carouselDestinations.length / visibleDestinationCount) * 100}%`
      : "100%";

  const translatePercent =
    carouselDestinations.length > 0
      ? safeDestinationIndex * (100 / carouselDestinations.length)
      : 0;

  const values = [
    {
      icon: Shield,
      title: "Respaldo operativo",
      description:
        "Cuidamos la operación para que tu agencia pueda vender con mayor confianza.",
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      icon: Users,
      title: "Atención cercana",
      description:
        "Acompañamiento humano para resolver dudas, cotizaciones y seguimiento.",
      color: "text-secondary",
      bg: "bg-secondary/10",
    },
    {
      icon: Globe,
      title: "Portafolio internacional",
      description:
        "Experiencias en Latinoamérica, Caribe y destinos clave para tus clientes.",
      color: "text-emerald-600",
      bg: "bg-emerald-500/10",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setVisibleDestinationCount(getVisibleDestinationCount());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isDestinationCarouselPaused || maxDestinationIndex === 0) return;

    const interval = window.setInterval(() => {
      setDestinationIndex((prev) => {
        const currentIndex = Math.min(prev, maxDestinationIndex);
        return currentIndex >= maxDestinationIndex ? 0 : currentIndex + 1;
      });
    }, 3200);

    return () => window.clearInterval(interval);
  }, [isDestinationCarouselPaused, maxDestinationIndex]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />

      {/* HERO SECTION */}
      <section
        className="
          relative flex items-center justify-center overflow-hidden shrink-0
          w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] lg:w-[calc(100%-4rem)]
          max-w-[1480px] mx-auto
          mt-6 sm:mt-8 rounded-[1.75rem] sm:rounded-3xl shadow-sm
          min-h-[560px]
          h-[clamp(560px,72vh,820px)]
        "
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1602088113235-229c19758e9f?auto=format&fit=crop&w=1920&q=85"
            alt="Experiencias de viaje DCA Travel"
            loading="eager"
            fetchPriority="high"
            className="
              w-full h-full object-cover
              object-[52%_50%]
              md:object-center
            "
          />

          <div
            className="
              absolute inset-0
              bg-gradient-to-r
              from-black/90 via-black/70 to-black/30
              md:from-black/85 md:via-black/60 md:to-black/10
            "
          />

          <div
            className="
              absolute inset-0
              bg-[radial-gradient(circle_at_22%_78%,rgba(237,106,32,0.32),transparent_34%)]
            "
          />

          <div
            className="
              absolute inset-0
              bg-[radial-gradient(circle_at_82%_20%,rgba(5,96,153,0.30),transparent_32%)]
            "
          />
        </div>

        <div className="relative z-10 w-full max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-4xl">
            <span
              className="
                inline-flex items-center gap-2
                px-3.5 py-1.5 rounded-full
                bg-white/10 backdrop-blur-md
                border border-white/20
                text-white text-sm font-medium
                mb-6 shadow-sm
              "
            >
              <Compass className="w-4 h-4 text-secondary" />
              Operador mayorista para agencias
            </span>

            <h1
              className="
                text-4xl sm:text-5xl lg:text-6xl xl:text-7xl
                font-bold text-white
                mb-6 leading-[1.02] drop-shadow-lg
                max-w-5xl
              "
            >
              Viajes extraordinarios,{" "}
              <span className="block text-white/90 italic font-light">
                listos para que tu agencia los venda.
              </span>
            </h1>

            <p
              className="
                text-base sm:text-lg md:text-xl
                text-white/85
                leading-relaxed font-light
                max-w-3xl
              "
            >
              En DCA Travel conectamos a las agencias con itinerarios,
              materiales y experiencias cuidadosamente seleccionadas para vender
              con más confianza, respaldo y calidez humana.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
              <Link
                to="/itinerarios"
                className="
                  inline-flex items-center justify-center gap-2
                  bg-secondary text-secondary-foreground
                  font-semibold px-6 py-3 rounded-xl
                  hover:bg-secondary/90 transition-colors
                  shadow-lg shadow-black/20
                "
              >
                Explorar itinerarios
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/material"
                className="
                  inline-flex items-center justify-center gap-2
                  px-6 py-3 rounded-xl
                  bg-white/10 text-white font-medium
                  border border-white/20 backdrop-blur-md
                  hover:bg-white/15 transition-colors
                "
              >
                Ver material para agencias
                <Download className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <main className="flex-grow w-full">
        {/* DESTINOS POPULARES */}
        <section
          id="destinos-populares"
          className="
            pt-20 pb-14
            sm:pt-24 sm:pb-16
            md:pt-28 md:pb-20
            scroll-mt-28
          "
        >
          <div className="w-full max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
              <div className="max-w-4xl">
                <span className="text-sm font-semibold text-secondary uppercase tracking-[0.22em]">
                  Explora destinos
                </span>

                <h2 className="mt-3 text-3xl md:text-4xl xl:text-5xl font-bold text-foreground leading-tight">
                  Destinos populares para inspirar nuevas ventas.
                </h2>

                <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed max-w-3xl">
                  Una selección visual de destinos clave para que tus clientes
                  imaginen su próximo viaje desde el primer vistazo.
                </p>
              </div>

              <Link
                to="/explora"
                className="
                  inline-flex items-center gap-2
                  text-primary hover:text-secondary
                  transition-colors font-semibold
                  group
                "
              >
                Ver todos los destinos
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div
              className="relative overflow-hidden -mx-2 sm:-mx-2.5 lg:-mx-3"
              onMouseEnter={() => setIsDestinationCarouselPaused(true)}
              onMouseLeave={() => setIsDestinationCarouselPaused(false)}
              onFocus={() => setIsDestinationCarouselPaused(true)}
              onBlur={() => setIsDestinationCarouselPaused(false)}
            >
              <div
                className="
                  flex
                  transition-transform duration-700
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  will-change-transform
                "
                style={{
                  width: trackWidth,
                  transform: `translate3d(-${translatePercent}%, 0, 0)`,
                }}
              >
                {carouselDestinations.map((dest) => (
                  <Link
                    key={dest.id}
                    to={`/destinos/${dest.id}`}
                    className="
                      group block shrink-0
                      px-2 sm:px-2.5 lg:px-3
                    "
                    style={{
                      width: `${100 / carouselDestinations.length}%`,
                    }}
                  >
                    <div
                      className="
                        rounded-3xl overflow-hidden isolate
                        border border-border/60
                        bg-card shadow-sm
                        hover:shadow-lg
                        transition-shadow duration-300
                      "
                    >
                      <div className="relative h-56 sm:h-64 lg:h-72 overflow-hidden rounded-3xl isolate">
                        <img
                          src={dest.image}
                          alt={dest.name}
                          loading="lazy"
                          className="
                            w-full h-full object-cover
                            transition-transform duration-700
                            ease-[cubic-bezier(0.22,1,0.36,1)]
                            group-hover:scale-[1.04]
                            transform-gpu
                            will-change-transform
                          "
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                        <div className="absolute left-4 right-4 bottom-4">
                          <h3 className="text-white font-bold text-xl drop-shadow-md">
                            {dest.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: maxDestinationIndex + 1 }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setDestinationIndex(i)}
                    aria-label={`Ver grupo de destinos ${i + 1}`}
                    className={`
                      h-2.5 rounded-full transition-all duration-300
                      ${
                        safeDestinationIndex === i
                          ? "w-8 bg-secondary"
                          : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }
                    `}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SOBRE DCA PREVIEW */}
        <section className="bg-muted/30 py-16 sm:py-20 md:py-24">
          <div className="w-full max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 xl:gap-24 items-center">
              <div className="lg:w-1/2 relative w-full">
                <div className="absolute inset-0 bg-secondary/15 rounded-3xl translate-x-3 translate-y-3 sm:translate-x-6 sm:translate-y-6 -z-10" />

                <div className="relative overflow-hidden rounded-3xl shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=1000&q=85"
                    alt="Planeación de experiencias de viaje"
                    loading="lazy"
                    className="
                      object-cover w-full
                      h-[340px] sm:h-[430px] lg:h-[520px] xl:h-[560px]
                      object-center
                      saturate-[0.95]
                    "
                  />
                </div>
              </div>

              <div className="lg:w-1/2 space-y-6">
                <span className="text-sm font-semibold text-secondary uppercase tracking-[0.22em]">
                  Sobre DCA Travel
                </span>

                <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-foreground leading-tight">
                  Más que destinos: una forma más clara de vender viajes.
                </h2>

                <div className="w-20 h-1.5 bg-secondary rounded-full" />

                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                  En <strong className="text-foreground">DCA Travel</strong>{" "}
                  trabajamos para que las agencias tengan acceso a propuestas
                  atractivas, confiables y fáciles de presentar a sus clientes.
                  Cada itinerario busca equilibrar operación, experiencia y valor
                  comercial.
                </p>

                <div
                  className="
                    mt-8 rounded-2xl
                    border border-border/70
                    bg-card
                    p-5 sm:p-6
                    shadow-sm
                  "
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/10 p-3 rounded-2xl shrink-0">
                      <HeartHandshake className="w-7 h-7 text-secondary" />
                    </div>

                    <div>
                      <p className="font-bold text-foreground text-lg">
                        Respaldo con trato humano
                      </p>
                      <p className="text-sm sm:text-base text-muted-foreground mt-1 leading-relaxed">
                        Porque detrás de cada reserva hay una agencia, un
                        cliente y una experiencia que debe salir bien.
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  to="/nosotros"
                  className="
                    inline-flex items-center gap-2
                    text-primary hover:text-secondary
                    transition-colors font-semibold
                    group
                  "
                >
                  Conocer nuestra historia
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ITINERARIOS DESTACADOS */}
        <section className="py-12 sm:py-14 md:py-16">
          <div className="w-full max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
            <div className="text-center mb-7 md:mb-9 max-w-4xl mx-auto">
              <span className="text-sm font-semibold text-secondary uppercase tracking-[0.22em]">
                Itinerarios destacados
              </span>

              <h2 className="mt-3 text-3xl md:text-4xl xl:text-5xl font-bold text-foreground mb-3">
                Programas listos para cotizar y compartir.
              </h2>

              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                Una selección de experiencias pensadas para inspirar a tus
                clientes y facilitar el trabajo comercial de tu agencia.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 auto-rows-fr">
              {featuredItineraries.map((item) => (
                <Link
                  key={item.id}
                  to={`/itinerarios/${item.id}`}
                  className="
                    group bg-card border border-border/60
                    rounded-2xl overflow-hidden isolate
                    hover:shadow-lg
                    transition-shadow duration-300
                    h-full flex flex-col
                  "
                >
                  <div className="relative h-36 sm:h-40 lg:h-44 overflow-hidden shrink-0 rounded-t-2xl isolate">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="
                        w-full h-full object-cover
                        transition-transform duration-700
                        ease-[cubic-bezier(0.22,1,0.36,1)]
                        group-hover:scale-[1.04]
                        transform-gpu
                        will-change-transform
                      "
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute left-3 right-3 bottom-3">
                      <span
                        className="
                          inline-flex items-center gap-1.5
                          bg-black/35 backdrop-blur-md
                          border border-white/20
                          text-white text-[11px] font-semibold
                          px-2.5 py-1 rounded-full
                        "
                      >
                        <Plane className="w-3.5 h-3.5 text-secondary" />
                        {item.duration}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="font-bold text-foreground text-base mb-2 line-clamp-2 min-h-[2.75rem]">
                      {item.title}
                    </h3>

                    <div className="flex items-start gap-1.5 text-xs sm:text-sm text-muted-foreground mb-4 min-h-[2.5rem]">
                      <MapPin className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                      <span className="line-clamp-2">{item.destination}</span>
                    </div>

                    <div className="flex items-end justify-between gap-3 mt-auto pt-1">
                      <p className="text-xs sm:text-sm text-muted-foreground leading-tight">
                        Desde
                        <span className="block text-base sm:text-lg font-bold text-primary mt-1">
                          {item.pricePerPerson === 0
                            ? "Cotizar"
                            : `$${item.pricePerPerson} USD`}
                        </span>
                      </p>

                      <span
                        className="
                          inline-flex items-center gap-1.5
                          text-secondary font-semibold text-sm
                          group-hover:text-primary
                          transition-colors
                          whitespace-nowrap
                        "
                      >
                        Ver más
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                to="/itinerarios"
                className="
                  inline-flex items-center justify-center gap-2
                  bg-primary text-primary-foreground
                  font-semibold px-7 py-3.5 rounded-xl
                  hover:bg-primary/90 transition-colors
                  shadow-sm
                "
              >
                Ver catálogo completo
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* VALORES / BENEFICIOS */}
        <section className="bg-muted/30 py-16 sm:py-20 md:py-24">
          <div className="w-full max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
            <div className="text-center mb-12 md:mb-16 max-w-4xl mx-auto">
              <span className="text-sm font-semibold text-secondary uppercase tracking-[0.22em]">
                Por qué trabajar con DCA
              </span>

              <h2 className="mt-3 text-3xl md:text-4xl xl:text-5xl font-bold text-foreground mb-6">
                Una plataforma pensada para hacer más fácil tu venta.
              </h2>

              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                Nuestro objetivo es darte herramientas, contenido y respaldo para
                que tus clientes confíen más rápido en la experiencia que estás
                ofreciendo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="
                    bg-card border border-border/60
                    rounded-3xl p-7 sm:p-8
                    hover:bg-muted/20
                    hover:shadow-lg
                    hover:-translate-y-1
                    transition-all duration-300
                    text-left group
                  "
                >
                  <div
                    className={`
                      ${value.bg}
                      w-14 h-14 rounded-2xl
                      flex items-center justify-center
                      mb-6 transition-transform
                      group-hover:scale-110 duration-300
                    `}
                  >
                    <value.icon className={`w-7 h-7 ${value.color}`} />
                  </div>

                  <h3 className="font-bold text-foreground text-xl mb-3">
                    {value.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA MATERIAL */}
        <section
          id="material"
          className="
            my-16 md:my-24
          "
        >
          <div className="w-full max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
            <div className="relative rounded-3xl overflow-hidden shadow-lg">
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1920&q=85"
                  alt="Material para agencias de viaje"
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />

                <div className="absolute inset-0 bg-primary/88 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-secondary/60" />
                <div className="absolute inset-0 bg-black/10" />
              </div>

              <div className="relative z-10 px-6 sm:px-10 py-16 md:py-24 text-center">
                <span
                  className="
                    inline-flex items-center justify-center gap-2
                    px-3.5 py-1.5 rounded-full
                    bg-white/12 border border-white/20
                    text-primary-foreground/90
                    text-sm font-medium mb-6
                    backdrop-blur-md
                  "
                >
                  <Download className="w-4 h-4 text-secondary" />
                  Material para vender mejor
                </span>

                <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-primary-foreground mb-6">
                  Recursos listos para compartir con tus clientes.
                </h2>

                <p className="text-primary-foreground/85 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-10">
                  Accede a itinerarios, materiales gráficos y contenido pensado
                  para que tu agencia tenga una presencia más profesional en
                  redes y canales digitales.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    to="/material"
                    className="
                      inline-flex items-center justify-center gap-2
                      bg-primary-foreground text-primary
                      font-bold px-8 py-4 rounded-xl
                      hover:bg-white transition-colors
                      shadow-lg hover:shadow-xl
                    "
                  >
                    Ver material gráfico
                    <ArrowRight className="w-5 h-5" />
                  </Link>

                  <Link
                    to="/itinerarios"
                    className="
                      inline-flex items-center justify-center
                      px-8 py-4 rounded-xl
                      bg-white/10 text-primary-foreground
                      font-semibold
                      border border-white/20
                      hover:bg-white/15 transition-colors
                      backdrop-blur-md
                    "
                  >
                    Explorar itinerarios
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
