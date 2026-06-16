import { PhoneCall, Mail, MapPin, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <main className="flex-grow flex items-center justify-center py-16 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-primary/5 to-transparent -z-10 pointer-events-none" />
        
        <div className="max-w-5xl w-full mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Estamos aquí para <span className="text-primary italic">ayudarte</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ¿Tienes dudas sobre nuestros itinerarios, necesitas una cotización a la medida o quieres formar parte de nuestra red de agencias? Contáctanos por cualquiera de nuestros canales.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* WhatsApp */}
            <a 
              href="https://wa.me/525627278632" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-card border border-border rounded-2xl p-8 flex flex-col items-center text-center hover:border-secondary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
              <p className="text-muted-foreground text-sm mb-4">Escríbenos para una respuesta rápida.</p>
              <p className="font-semibold text-primary group-hover:text-secondary transition-colors">
                56 2727 8632
              </p>
            </a>

            {/* Phone */}
            <a 
              href="tel:+525513925779" 
              className="group bg-card border border-border rounded-2xl p-8 flex flex-col items-center text-center hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <PhoneCall className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-lg mb-2">Llámanos</h3>
              <p className="text-muted-foreground text-sm mb-4">Habla con uno de nuestros expertos.</p>
              <p className="font-semibold text-primary group-hover:text-primary/80 transition-colors">
                55 1392 5779
              </p>
            </a>

            {/* Mail */}
            <a 
              href="mailto:ventas@dcatravel.com" 
              className="group bg-card border border-border rounded-2xl p-8 flex flex-col items-center text-center hover:border-secondary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Mail className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-lg mb-2">Correo</h3>
              <p className="text-muted-foreground text-sm mb-4">Envíanos tus solicitudes detalladas.</p>
              <p className="font-semibold text-primary group-hover:text-secondary transition-colors text-sm">
                ventas@dcatravel.com
              </p>
            </a>

            {/* Ubi */}
            <div className="group bg-card border border-border rounded-2xl p-8 flex flex-col items-center text-center hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-lg mb-2">Oficina</h3>
              <p className="text-muted-foreground text-sm mb-4">Visítanos en nuestras instalaciones.</p>
              <p className="font-semibold text-primary text-sm leading-tight">
                Av. Medellín 150 Int. 1A<br />
                Roma Norte, C.P. 06700<br />
                CDMX
              </p>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}