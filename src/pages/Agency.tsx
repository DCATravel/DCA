import { Building2, Mail, MessageCircle, Rocket } from "lucide-react";
import { SiFacebook, SiInstagram } from "@icons-pack/react-simple-icons";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Agencias() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <main className="flex-grow flex items-center justify-center py-16 px-4 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
        
        <div className="max-w-4xl w-full mx-auto text-center">
          
          {/* Main Icon */}
          <div className="flex justify-center mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="relative">
              <div className="absolute inset-0 bg-secondary/20 rounded-full animate-ping opacity-75" />
              <div className="relative bg-background border-2 border-secondary text-secondary p-5 rounded-full shadow-xl">
                <Building2 className="w-12 h-12" />
              </div>
            </div>
          </div>

          <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Construyamos una <span className="text-primary italic">alianza poderosa</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Estamos preparando un espacio exclusivo para destacar a nuestras agencias afiliadas. 
              <strong className="text-foreground font-semibold"> ¿Quieres que el logo de tu agencia aparezca aquí?</strong> Contáctanos hoy mismo y sé de los primeros en formar parte de nuestra red oficial.
            </p>
          </div>

          {/* CTA  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            
            {/* WhatsApp button */}
            <a 
              href="https://wa.me/525527276085" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-card border border-border hover:border-secondary hover:bg-secondary/5 text-foreground px-6 py-4 rounded-xl transition-all duration-300 hover:shadow-md group"
            >
              <MessageCircle className="w-6 h-6 text-secondary group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <p className="font-semibold text-sm">Escríbenos por WhatsApp</p>
                <p className="text-xs text-muted-foreground">Afíliate de forma rápida</p>
              </div>
            </a>

            {/* Mail button */}
            <a 
              href="mailto:ventas@dcatravel.com" 
              className="flex items-center justify-center gap-3 bg-card border border-border hover:border-primary hover:bg-primary/5 text-foreground px-6 py-4 rounded-xl transition-all duration-300 hover:shadow-md group"
            >
              <Mail className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <p className="font-semibold text-sm">Envíanos un Correo</p>
                <p className="text-xs text-muted-foreground">ventas@dcatravel.com</p>
              </div>
            </a>

          </div>

          {/* Social */}
          <div className="mt-16 pt-10 border-t border-border/50 animate-in fade-in duration-1000 delay-500">
            <div className="inline-flex items-center gap-2 bg-muted px-4 py-2 rounded-full mb-6">
              <Rocket className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-foreground">Únete a nuestra comunidad</span>
            </div>
            <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
              Síguenos en nuestras redes sociales para enterarte antes que nadie cuando lancemos el portal oficial de agencias.
            </p>
            <div className="flex justify-center gap-4">
              <a 
                href="https://www.facebook.com/people/DCA-Travel/61590488308493/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-background border border-border hover:border-primary text-muted-foreground hover:text-primary p-3 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                aria-label="Síguenos en Facebook"
              >
                <SiFacebook className="w-6 h-6" />
              </a>
              <a 
                href="https://www.instagram.com/dcatravel/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-background border border-border hover:border-secondary text-muted-foreground hover:text-secondary p-3 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                aria-label="Síguenos en Instagram"
              >
                <SiInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}