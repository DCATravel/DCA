import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Image, FileText, Layout } from 'lucide-react';
import Navbar from '@/components/Navbar';
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

// 1. Creamos la data simulada (Mock Data) para reemplazar la base de datos
const MOCK_MATERIALS: Material[] = [
  {
    id: 1,
    title: 'Campaña Verano Riviera Maya',
    type: 'banner',
    destination_name: 'Riviera Maya',
    file_url: '#',
    thumbnail_url: '',
    dimensions: '1920x1080',
  },
  {
    id: 2,
    title: 'Post Instagram Santorini',
    type: 'post',
    destination_name: 'Santorini',
    file_url: '#',
    thumbnail_url: '',
    dimensions: '1080x1080',
  },
  {
    id: 3,
    title: 'Folleto Informativo Bali',
    type: 'flyer',
    destination_name: 'Bali',
    file_url: '#',
    thumbnail_url: '',
    dimensions: 'A4',
  },
  {
    id: 4,
    title: 'Portada Facebook Punta Cana',
    type: 'cover',
    destination_name: 'Punta Cana',
    file_url: '#',
    thumbnail_url: '',
    dimensions: '820x312',
  },
  {
    id: 5,
    title: 'Carrusel Descuentos Tulum',
    type: 'post',
    destination_name: 'Tulum',
    file_url: '#',
    thumbnail_url: '',
    dimensions: '1080x1350',
  },
  {
    id: 6,
    title: 'Catálogo Resort Maldivas',
    type: 'flyer',
    destination_name: 'Maldivas',
    file_url: '#',
    thumbnail_url: '',
    dimensions: 'A4',
  }
];

const typeIcons: Record<string, any> = {
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

const getMaterialThumbnail = (destName: string): string => {
  // Placeholder por destino, usando colores más alineados a la marca (Azul/Naranja en hex)
  const map: Record<string, string> = {
    'Riviera Maya': 'https://placehold.co/600x400/056099/fff?text=Riviera+Maya',
    'Punta Cana': 'https://placehold.co/600x400/ed6a20/fff?text=Punta+Cana',
    'Bali': 'https://placehold.co/600x400/056099/fff?text=Bali',
    'Santorini': 'https://placehold.co/600x400/ed6a20/fff?text=Santorini',
    'Maldivas': 'https://placehold.co/600x400/056099/fff?text=Maldivas',
    'Tulum': 'https://placehold.co/600x400/ed6a20/fff?text=Tulum',
  };
  return map[destName] || 'https://placehold.co/600x400/056099/fff?text=Material';
};

export default function MaterialsPage() {
  const [materials, setMaterials] = useState<Material[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState<string>('all');
  const { toast } = useToast();

  useEffect(() => {
    // 2. Simulamos la latencia de una petición a red (ej. 800ms)
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

  const filtered = filterType === 'all'
    ? materials
    : materials.filter((m) => m.type === filterType);

  const handleDownload = (material: Material) => {
    toast({ title: 'Descarga Iniciada', description: `Preparando archivo de "${material.title}"...` });
    
    // Opcional: Simular que se abre o descarga el archivo
    // window.open(material.file_url, '_blank');
  };

  const types = ['all', 'banner', 'post', 'flyer', 'cover'];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <div className="pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-4xl font-bold text-foreground mb-3">Materiales de Marketing</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">Descarga banners, posts y flyers listos para usar en las campañas de tu agencia.</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center md:justify-start">
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
                      src={getMaterialThumbnail(material.destination_name)}
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
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors"
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

        {!loading && filtered.length === 0 && (
          <div className="text-center py-24 bg-card rounded-xl border border-dashed border-border shadow-sm">
            <Layout className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
            <p className="text-foreground font-semibold text-lg">No hay materiales disponibles</p>
            <p className="text-muted-foreground mt-1">Prueba seleccionando otra categoría en los filtros.</p>
          </div>
        )}
      </div>
    </div>
  );
}