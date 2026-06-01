import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Image, FileText, Layout, Search, LucideIcon } from 'lucide-react';
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
    title: 'Campaña Redes Brasil Expreso',
    type: 'post',
    destination_name: 'Brasil',
    file_url: '#',
    thumbnail_url: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=800&q=80',
    dimensions: '1080x1080',
  },
  {
    id: 2,
    title: 'Flyer Colombia 3 Joyas',
    type: 'flyer',
    destination_name: 'Colombia',
    file_url: '#',
    thumbnail_url: 'https://images.unsplash.com/photo-1536308037887-165852797016?auto=format&fit=crop&w=800&q=80',
    dimensions: 'A4',
  },
  {
    id: 3,
    title: 'Banner Web Costa Rica Para Todos',
    type: 'banner',
    destination_name: 'Costa Rica',
    file_url: '#',
    thumbnail_url: 'https://images.unsplash.com/photo-1536709017021-ce8f99c17e38?auto=format&fit=crop&w=800&q=80',
    dimensions: '1920x1080',
  },
  {
    id: 4,
    title: 'Portada Facebook Cuba',
    type: 'cover',
    destination_name: 'Cuba',
    file_url: '#',
    thumbnail_url: 'https://images.unsplash.com/photo-1500759285222-a95626b934cb?auto=format&fit=crop&w=800&q=80',
    dimensions: '820x312',
  },
  {
    id: 5,
    title: 'Carrusel Promo Dominicana',
    type: 'post',
    destination_name: 'República Dominicana',
    file_url: '#',
    thumbnail_url: 'https://images.unsplash.com/photo-1575950674322-3a1977724f2e?auto=format&fit=crop&w=800&q=80',
    dimensions: '1080x1350',
  },
  {
    id: 6,
    title: 'Catálogo Guatemala Espectacular',
    type: 'flyer',
    destination_name: 'Guatemala',
    file_url: '#',
    thumbnail_url: 'https://images.unsplash.com/photo-1528543606781-2f6e6857f318?auto=format&fit=crop&w=600&q=80',
    dimensions: 'A4',
  }
];

const typeIcons: Record<string, LucideIcon> = {
  banner: Layout,
  post: Image,
  flyer: FileText,
  cover: Layout, // Usando Layout genérico para mantener consistencia
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
  const { toast } = useToast();

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

  const handleDownload = (material: Material) => {
    toast({ title: 'Descarga Iniciada', description: `Preparando archivo de "${material.title}"...` });
    // window.open(material.file_url, '_blank');
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
                        onClick={() => handleDownload(material)}
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

      <Footer />
    </div>
  );
}