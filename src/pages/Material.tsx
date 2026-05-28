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
  cover: Image,
};

const typeColors: Record<string, string> = {
  banner: 'bg-primary/10 text-primary border-primary/20',
  post: 'bg-secondary/10 text-secondary border-secondary/20',
  flyer: 'bg-green-100 text-green-700 border-green-200',
  cover: 'bg-purple-100 text-purple-700 border-purple-200',
};

export default function MaterialsPage() {
  const [materials, setMaterials] = useState<Material[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState(''); // Estado para el buscador
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

  // Lógica de filtrado combinada 
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

      <main className="pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow w-full">
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-4xl font-bold text-foreground mb-3">Materiales de Marketing</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">Descarga banners, posts y flyers listos para usar en las campañas de tu agencia.</p>
        </div>

        {/* Toolbar: Search + Filter Tabs */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {types.map((type) => (
              <Button
                key={type}
                variant={filterType === type ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilterType(type)}
                className={filterType === type ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm' : 'border-border text-muted-foreground hover:text-foreground hover:bg-muted/50'}
              >
                {type === 'all' ? 'Todos' : type.charAt(0).toUpperCase() + type.slice(1)}
              </Button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar por destino o título..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-card border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm text-foreground placeholder:text-muted-foreground transition-shadow"
            />
          </div>
        </div>

        {/* Materials Grid */}
        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="animate-pulse bg-card border-border shadow-sm">
                <div className="h-48 bg-muted" />
                <CardContent className="p-5 space-y-3">
                  <div className="h-5 bg-muted rounded w-3/4" />
                  <div className="h-4 bg-muted/70 rounded w-1/2" />
                  <div className="h-9 bg-muted rounded w-full mt-4" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((material) => {
              const Icon = typeIcons[material.type] || Image;
              return (
                <Card key={material.id} className="overflow-hidden border border-border shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300 bg-card group">
                  <div className="h-48 overflow-hidden relative bg-muted">
                    <img
                      src={material.thumbnail_url}
                      alt={material.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge variant="outline" className={`${typeColors[material.type] || 'bg-background text-foreground border-border'} backdrop-blur-md shadow-sm font-medium`}>
                        <Icon className="w-3.5 h-3.5 mr-1.5" />
                        <span className="capitalize">{material.type}</span>
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-foreground text-lg mb-1 line-clamp-1">{material.title}</h3>
                    <p className="text-sm text-muted-foreground mb-5 font-medium">{material.destination_name} <span className="mx-1 opacity-50">•</span> {material.dimensions}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors cursor-pointer"
                      onClick={() => handleDownload(material)}
                    >
                      <Download className="w-4 h-4 mr-2" /> 
                      Descargar Material
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        {/* Empty State */}
        {!loading && filtered.length === 0 && (
          <div className="text-center py-24 bg-card rounded-xl border border-dashed border-border shadow-sm mt-4">
            <Layout className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
            <p className="text-foreground font-semibold text-lg">No hay materiales disponibles</p>
            <p className="text-muted-foreground mt-1">Prueba ajustando tu búsqueda o seleccionando otra categoría.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}