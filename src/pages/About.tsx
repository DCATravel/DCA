import { Target, Eye, Shield, Users, Globe, Award, HeartHandshake, ArrowRight, Compass } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Nosotros() {
  const valores = [
    {
      icon: Shield,
      title: "Respaldo Total",
      description:
        "Alianzas sólidas con proveedores estratégicos para garantizar tranquilidad, continuidad y confianza en cada operación.",
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      icon: Users,
      title: "Atención Especializada",
      description:
        "Acompañamiento cercano para agencias que necesitan respuestas claras, seguimiento humano y soluciones ágiles.",
      color: "text-secondary",
      bg: "bg-secondary/10",
    },
    {
      icon: Globe,
      title: "Presencia Global",
      description:
        "Un portafolio amplio de destinos y experiencias diseñado para que tu agencia pueda vender con mayor seguridad.",
      color: "text-emerald-600",
      bg: "bg-emerald-500/10",
    },
    {
      icon: Award,
      title: "Calidad Garantizada",
      description:
        "Seleccionamos cuidadosamente cada producto turístico para mantener estándares altos antes, durante y después del viaje.",
      color: "text-amber-600",
      bg: "bg-amber-500/10",
    },
  ];

  const pilares = [
    "Operación B2B",
    "Acompañamiento humano",
    "Material para agencias",
    "Destinos exclusivos",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />

      {/* HERO SECTION */}
      <section
        id="inicio"
        className="
          relative flex items-center justify-center overflow-hidden shrink-0
          mx-3 sm:mx-6 lg:mx-8 2xl:mx-auto
          mt-6 sm:mt-8 rounded-[1.75rem] sm:rounded-3xl shadow-sm
          min-h-[520px]
          h-[clamp(520px,68vh,760px)]
          2xl:max-w-[1760px]
          scroll-mt-28
        "
      >
        {/* Imagen de fondo */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?auto=format&fit=crop&w=1920&q=85"
            alt="Planeación profesional de viajes DCA Travel"
            loading="eager"
            fetchPriority="high"
            className="
              w-full h-full object-cover
              object-[58%_54%]
              sm:object-[55%_56%]
              lg:object-[center_60%]
              2xl:object-[center_63%]
            "
          />

          {/* Overlay principal */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-r
              from-black/90 via-black/70 to-black/25
              md:from-black/85 md:via-black/62 md:to-transparent
            "
          />

          {/* Toque cálido */}
          <div
            className="
              absolute inset-0
              bg-[radial-gradient(circle_at_22%_78%,rgba(237,106,32,0.30),transparent_34%)]
            "
          />

          {/* Toque institucional azul */}
          <div
            className="
              absolute inset-0
              bg-[radial-gradient(circle_at_82%_20%,rgba(5,96,153,0.28),transparent_32%)]
            "
          />
        </div>

        {/* Contenido */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
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
              Sobre DCA Travel
            </span>

            <h1
              className="
                text-4xl sm:text-5xl lg:text-6xl
                font-bold text-white
                mb-6 leading-[1.05] drop-shadow-lg
                max-w-3xl
              "
            >
              Conectamos el mundo,{" "}
              <span className="block text-white/90 italic font-light">
                creamos experiencias.
              </span>
            </h1>

            <p
              className="
                text-base sm:text-lg md:text-xl
                text-white
                leading-relaxed font-light
                max-w-xl
              "
            >
              No solo somos un operador mayorista. Somos el respaldo que impulsa
              a tu agencia a ofrecer viajes extraordinarios con confianza,
              calidez humana y una operación bien cuidada.
            </p>
          </div>
        </div>

        {/* Banda inferior de confianza */}
        <div
          className="
            absolute left-4 right-4 bottom-4 z-10
            hidden lg:block
          "
        >
          <div
            className="
              max-w-7xl mx-auto
              rounded-2xl border border-white/15
              bg-white/10 backdrop-blur-md
              px-6 py-4
              shadow-lg shadow-black/10
            "
          >
            <div className="grid grid-cols-4 gap-4">
              {pilares.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-secondary" />
                  <p className="text-sm font-medium text-white/90">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <main className="flex-grow w-full">
        {/* NUESTRA ESENCIA */}
        <section
          id="esencia"
          className="
            py-16 sm:py-20 md:py-28
            max-w-7xl mx-auto
            px-4 sm:px-6 lg:px-8
            scroll-mt-28
          "
        >
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <div className="lg:w-1/2 space-y-6">
              <span className="text-sm font-semibold text-secondary uppercase tracking-[0.22em]">
                Nuestra esencia
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Experiencia, respaldo y trato humano para agencias que quieren
                vender mejor.
              </h2>

              <div className="w-20 h-1.5 bg-secondary rounded-full" />

              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                Nacimos con la convicción de que la industria del turismo B2B
                necesitaba un cambio:{" "}
                <strong className="text-foreground">
                  Más Destinos, Café y Aventuras.
                </strong>
              </p>

              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                En DCA Travel entendemos que detrás de cada reserva hay una
                familia, una luna de miel o un sueño por cumplir. Por eso,
                trabajamos seleccionando proveedores, cuidando la operación y
                acercando herramientas para que tu agencia pueda vender con más
                confianza.
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
                      Tu éxito es nuestro éxito
                    </p>
                    <p className="text-sm sm:text-base text-muted-foreground mt-1 leading-relaxed">
                      Crecemos de la mano con agencias que buscan respaldo
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative w-full">
              <div className="absolute inset-0 bg-secondary/15 rounded-3xl translate-x-3 translate-y-3 sm:translate-x-6 sm:translate-y-6 -z-10" />

                <div className="relative overflow-hidden rounded-3xl shadow-xl">
                    <img
                    src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=1000&q=85"
                    alt="Planeación de experiencias de viaje"
                    loading="lazy"
                    className="
                        object-cover w-full
                        h-[340px] sm:h-[430px] lg:h-[520px]
                        object-center
                        saturate-[0.95]
                    "
                    />
                </div>
            </div>
          </div>
        </section>

        {/* MISIÓN Y VISIÓN */}
        <section
          id="mision-vision"
          className="bg-muted/30 py-16 sm:py-20 md:py-24 scroll-mt-28"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-sm font-semibold text-secondary uppercase tracking-[0.22em]">
                Lo que nos guía
              </span>

              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
                Una visión clara para fortalecer el turismo B2B.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {/* Card Misión */}
              <div
                className="
                  bg-card rounded-3xl p-8 md:p-10
                  shadow-sm border border-border/60
                  relative overflow-hidden group
                  hover:shadow-lg transition-all duration-300
                  hover:-translate-y-1
                "
              >
                <div className="absolute -right-10 -top-10 w-44 h-44 bg-primary/7 rounded-full blur-2xl group-hover:bg-primary/12 transition-colors" />

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center mb-6 shadow-md">
                    <Target className="w-7 h-7" />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Misión
                  </h3>

                  <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                    Facilitar y potenciar el trabajo de las agencias de viaje
                    ofreciendo herramientas intuitivas, tarifas competitivas y
                    un portafolio de destinos excepcional, respaldado siempre
                    por un servicio humano y personalizado.
                  </p>
                </div>
              </div>

              {/* Card Visión */}
              <div
                className="
                  bg-card rounded-3xl p-8 md:p-10
                  shadow-sm border border-border/60
                  relative overflow-hidden group
                  hover:shadow-lg transition-all duration-300
                  hover:-translate-y-1
                "
              >
                <div className="absolute -right-10 -top-10 w-44 h-44 bg-secondary/7 rounded-full blur-2xl group-hover:bg-secondary/12 transition-colors" />

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-secondary text-secondary-foreground rounded-2xl flex items-center justify-center mb-6 shadow-md">
                    <Eye className="w-7 h-7" />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Visión
                  </h3>

                  <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                    Ser el operador turístico líder y más innovador del mercado
                    B2B, reconocidos por transformar la manera en que las
                    agencias comercializan, gestionan y garantizan experiencias
                    de viaje en todo el mundo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VALORES / POR QUÉ ELEGIRNOS */}
        <section
          id="valores"
          className="
            py-16 sm:py-20 md:py-24
            max-w-7xl mx-auto
            px-4 sm:px-6 lg:px-8
            scroll-mt-28
          "
        >
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            <span className="text-sm font-semibold text-secondary uppercase tracking-[0.22em]">
              Nuestro ADN
            </span>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground mb-6">
              El respaldo que tu agencia necesita para crecer.
            </h2>

            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              No somos un intermediario más. Somos el soporte técnico, logístico
              y humano que tu agencia necesita para brillar frente a sus
              clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7">
            {valores.map((val) => (
              <div
                key={val.title}
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
                    ${val.bg}
                    w-14 h-14 rounded-2xl
                    flex items-center justify-center
                    mb-6 transition-transform
                    group-hover:scale-110 duration-300
                  `}
                >
                  <val.icon className={`w-7 h-7 ${val.color}`} />
                </div>

                <h3 className="font-bold text-foreground text-xl mb-3">
                  {val.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA FINAL */}
        <section
          id="agencias"
          className="
            max-w-7xl mx-auto
            px-4 sm:px-6 lg:px-8
            mb-20 md:mb-24
            scroll-mt-28
          "
        >
          <div className="relative rounded-3xl overflow-hidden shadow-lg">
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1920&q=85"
                alt="Agencias trabajando con DCA Travel"
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
                  inline-flex items-center justify-center
                  px-3.5 py-1.5 rounded-full
                  bg-white/12 border border-white/20
                  text-primary-foreground/90
                  text-sm font-medium mb-6
                  backdrop-blur-md
                "
              >
                Para agencias de viaje
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Lleva a tu agencia al siguiente nivel
              </h2>

              <p className="text-primary-foreground/85 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
                Únete a la red de agencias que están transformando la forma en
                la que venden el mundo. Tarifas competitivas, material de apoyo
                y un equipo dispuesto a acompañarte en cada operación.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/itinerarios"
                  className="
                    inline-flex items-center justify-center gap-2
                    bg-primary-foreground text-primary
                    font-bold px-8 py-4 rounded-xl
                    hover:bg-white transition-colors
                    shadow-lg hover:shadow-xl
                  "
                >
                  Explorar catálogo
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  to="/contacto"
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
                  Contactar a DCA Travel
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}