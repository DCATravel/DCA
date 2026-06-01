import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Image, FileText, Layout, Search, LucideIcon, X, Heart } from 'lucide-react';
import { SiFacebook, SiInstagram } from "@icons-pack/react-simple-icons";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

interface Material {
  id: number;
  title: string;
  type: string;
  destination_name: string;
  file_url: string;
  thumbnail_url: string;
  dimensions: string;
}

const MOCK_MATERIALS: Material[] = [
  {
    id: 1,
    title: 'Guía de Equipaje Permitido',
    type: 'post',
    destination_name: 'Tips de Viaje',
    file_url: '/assets/material/equipaje.jpg', 
    thumbnail_url: '/assets/material/equipaje.jpg', 
    dimensions: '720x1280',
  },
  {
    id: 2,
    title: 'Explora Destinos Únicos',
    type: 'flyer',
    destination_name: 'Multidestino',
    file_url: '/assets/material/explora.jpg',
    thumbnail_url: '/assets/material/explora.jpg',
    dimensions: '500x890',
  },
  {
    id: 3,
    title: 'Linda Costa Rica',
    type: 'flyer',
    destination_name: 'Costa Rica',
    file_url: '/assets/material/linda-costa-rica.jpg',
    thumbnail_url: '/assets/material/linda-costa-rica.jpg',
    dimensions: '750x938',
  },
  {
    id: 4,
    title: 'Puerto Rico',
    type: 'flyer',
    destination_name: 'Puerto Rico',
    file_url: '/assets/material/puerto-rico.jpg',
    thumbnail_url: '/assets/material/puerto-rico.jpg',
    dimensions: '1280x1600',
  },
  {
    id: 5,
    title: 'Promocional',
    type: 'post',
    destination_name: 'Latinoamérica',
    file_url: '/assets/material/promocional.jpg',
    thumbnail_url: '/assets/material/promocional.jpg',
    dimensions: '630x788',
  },
  {
    id: 6,
    title: 'Parque Nacional Costa Rica',
    type: 'post',
    destination_name: 'Costa Rica',
    file_url: '/assets/material/costa-rica-parque.jpg',
    thumbnail_url: '/assets/material/costa-rica-parque.jpg',
    dimensions: '1280x1600',
  },
  {
    id: 7,
    title: 'Guatemala',
    type: 'post',
    destination_name: 'Guatemala',
    file_url: '/assets/material/guatemala.jpg',
    thumbnail_url: '/assets/material/guatemala.jpg',
    dimensions: '1280x1600',
  },
  {
    id: 8,
    title: 'Guatemala Tikal',
    type: 'post',
    destination_name: 'Guatemala - Tikalt',
    file_url: '/assets/material/guatemala-tikal.jpg',
    thumbnail_url: '/assets/material/guatemala-tikal.jpg',
    dimensions: '1280x1600',
  }
];

const typeIcons: Record<string, LucideIcon> = {
  banner: Layout,
  post: Image,
  flyer: FileText,
  cover: Layout,
};

const typeColors: Record<string, string> = {
  banner: 'bg-primary text-primary-foreground border-transparent',
  post: 'bg-secondary text-secondary-foreground border-transparent',
  flyer: 'bg-muted text-muted-foreground border-transparent',
  cover: 'bg-accent text-accent-foreground border-transparent',
};

export default function MaterialsPage() {
  const [materials, setMaterials] = useState<Material[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(null);
  const [countdown, setCountdown] = useState(0);
  
  const { toast } = useToast();

  useEffect(() => {
    if (!selectedMaterial) return;

    const timer = window.setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          window.clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [selectedMaterial]);

  useEffect(() => {
    const fetchMaterials = async () => {
      setLoading(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 800));
        setMaterials(MOCK_MATERIALS);
      } catch (err) {
        console.error('Error fetching materials:', err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchMaterials();
  }, []);

  const filtered = materials.filter((m) => {
    const matchesType = filterType === 'all' || m.type === filterType;
    const matchesSearch = 
      m.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      m.destination_name.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesType && matchesSearch;
  });

  // Función de descarga que se ejecuta al confirmar en el popup
  const handleConfirmDownload = () => {
    if (!selectedMaterial) return;

    toast({ title: 'Descarga Iniciada', description: `Preparando archivo de "${selectedMaterial.title}"...` });
    
    const link = document.createElement('a');
    link.href = selectedMaterial.file_url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    const extension = selectedMaterial.file_url.split('.').pop() || 'jpg';
    link.download = `DCA-${selectedMaterial.title.replace(/\s+/g, '-')}.${extension}`;
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setSelectedMaterial(null);
  };

  const types = ['all', 'banner', 'post', 'flyer', 'cover'];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <main className="pt-12 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow w-full">
        
        {/* Header Decorativo */}
        <div className="bg-primary/5 rounded-3xl p-8 md:p-12 mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Materiales de Marketing</h1>
            <p className="text-muted-foreground text-lg max-w-xl">Descarga banners, posts y flyers sin marca listos para impulsar las ventas en tu agencia.</p>
          </div>
          <div className="hidden md:flex bg-primary/10 p-4 rounded-2xl">
            <Image className="w-12 h-12 text-primary" />
          </div>
        </div>

        {/* Toolbar: Search + Filter Tabs */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-10 bg-card p-2 rounded-2xl">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 w-full lg:w-auto">
            {types.map((type) => (
              <Button
                key={type}
                variant={filterType === type ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setFilterType(type)}
                className={`rounded-xl px-4 py-2 transition-all ${
                  filterType === type 
                    ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                {type === 'all' ? 'Todos' : type.charAt(0).toUpperCase() + type.slice(1)}
              </Button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full lg:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar por destino o título..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-muted/40 border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-background text-sm text-foreground placeholder:text-muted-foreground transition-all"
            />
          </div>
        </div>

        {/* Materials Grid */}
        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="animate-pulse bg-muted/30 rounded-2xl overflow-hidden">
                <div className="h-52 bg-muted/50" />
                <div className="p-6 space-y-4">
                  <div className="h-5 bg-muted rounded w-3/4" />
                  <div className="h-4 bg-muted/70 rounded w-1/2" />
                  <div className="h-10 bg-muted rounded-xl w-full mt-4" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((material) => {
              const Icon = typeIcons[material.type] || Image;
              return (
                <div key={material.id} className="relative group">
                  {/* Capa tonal asimétrica trasera */}
                  <div className="absolute inset-0 bg-secondary/10 rounded-2xl translate-x-2.5 translate-y-2.5 -z-10 transition-transform group-hover:translate-x-3.5 group-hover:translate-y-3.5"></div>
                  
                  {/* Tarjeta Principal */}
                  <Card className="overflow-hidden border-transparent shadow-none bg-card rounded-2xl h-full flex flex-col">
                    <div className="h-52 overflow-hidden relative bg-muted">
                      <img
                        src={material.thumbnail_url}
                        alt={material.title}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="outline" className={`${typeColors[material.type]} shadow-sm font-medium px-3 py-1 rounded-lg border-0`}>
                          <Icon className="w-3.5 h-3.5 mr-2" />
                          <span className="capitalize">{material.type}</span>
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6 flex flex-col flex-1">
                      <h3 className="font-bold text-foreground text-lg mb-2 line-clamp-2">{material.title}</h3>
                      <div className="flex items-center text-sm text-muted-foreground mb-6 font-medium">
                        <span className="bg-muted/50 px-2 py-1 rounded-md">{material.destination_name}</span>
                        <span className="mx-2 opacity-30">•</span> 
                        <span>{material.dimensions}</span>
                      </div>
                      
                      <Button
                        variant="outline"
                        className="w-full mt-auto rounded-xl border-transparent bg-primary/5 text-primary hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer font-semibold py-5"
                        onClick={() => {
                          setCountdown(5); // Inicia el temporizador
                          setSelectedMaterial(material); // Abre el modal
                        }}
                      >
                        <Download className="w-4 h-4 mr-2" /> 
                        Descargar
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        )}

        {/* Empty State */}
        {!loading && filtered.length === 0 && (
          <div className="text-center py-24 bg-muted/20 rounded-3xl mt-4">
            <div className="bg-background w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
              <Layout className="w-8 h-8 text-muted-foreground opacity-50" />
            </div>
            <p className="text-foreground font-semibold text-xl">No hay materiales disponibles</p>
            <p className="text-muted-foreground mt-2">Prueba ajustando tu búsqueda o seleccionando otra categoría.</p>
          </div>
        )}
      </main>

      {/* ========================================= */}
      {/* POPUP DE DESCARGA CON TIMER               */}
      {/* ========================================= */}
      {selectedMaterial && (
        <div 
          onClick={() => setSelectedMaterial(null)} 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-all duration-300"
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="bg-background rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative animate-in fade-in zoom-in duration-200"
          >
            {/* Botón Cerrar */}
            <button
              onClick={() => setSelectedMaterial(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground bg-muted hover:bg-muted/80 rounded-full p-1.5 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Cabecera del Popup */}
            <div className="bg-primary/10 pt-8 pb-6 px-6 flex flex-col items-center border-b border-border">
              <div className="bg-primary text-primary-foreground p-3 rounded-full mb-4 shadow-md">
                <Heart className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-foreground text-center">
                ¡Únete a nuestra comunidad!
              </h2>
            </div>

            {/* Contenido del Popup */}
            <div className="p-6 text-center">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Antes de descargar <strong className="text-foreground">{selectedMaterial.title}</strong>, te invitamos a seguirnos en nuestras redes sociales para no perderte ningún material nuevo ni promociones exclusivas.
              </p>
              
              <div className="bg-muted/40 rounded-xl p-5 mb-6 border border-border">
                <p className="text-sm font-semibold text-foreground mb-4">
                  Síguenos en:
                </p>
                
                <div className="flex justify-center gap-4">
                  <a 
                    href="https://www.facebook.com/people/DCA-Travel/61590488308493/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-[#1877F2] transition-transform hover:scale-110 p-2.5 bg-background rounded-full shadow-sm border border-border hover:border-[#1877F2]/30"
                  >
                    <SiFacebook className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://instagram.com/dca.travel" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-[#E4405F] transition-transform hover:scale-110 p-2.5 bg-background rounded-full shadow-sm border border-border hover:border-[#E4405F]/30"
                  >
                    <SiInstagram className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Botón Principal (Con Timer) */}
              <button
                onClick={handleConfirmDownload}
                disabled={countdown > 0}
                className={`w-full font-semibold py-3 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 ${
                  countdown > 0 
                    ? 'bg-muted text-muted-foreground cursor-not-allowed' 
                    : 'bg-secondary hover:bg-secondary/90 text-secondary-foreground cursor-pointer'
                }`}
              >
                <Download className="w-5 h-5" />
                {countdown > 0 ? `Espera ${countdown}s para descargar...` : 'Continuar a la descarga'}
              </button>
              
              {/* Botón Secundario (Sin Timer) */}
              <button
                onClick={handleConfirmDownload}
                className="w-full mt-3 text-sm text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline cursor-pointer"
              >
                Ya los sigo, descargar material
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}