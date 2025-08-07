
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Search, Filter, Clock, Archive as ArchiveIcon, Star } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Archive = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <ArchiveIcon className="h-12 w-12 text-primary" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Archivo <span className="text-primary">PopInsider</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explora años de cobertura exclusiva del mundo del espectáculo español. 
              Más de 10,000 artículos esperándote.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-card border rounded-2xl p-6 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Buscar por celebrity, evento, fecha..." 
                    className="pl-10"
                  />
                </div>
              </div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Categoría" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas las categorías</SelectItem>
                  <SelectItem value="celebrities">Celebridades</SelectItem>
                  <SelectItem value="scandals">Escándalos</SelectItem>
                  <SelectItem value="exclusives">Exclusivas</SelectItem>
                  <SelectItem value="interviews">Entrevistas</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Año" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2025">2025</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                  <SelectItem value="older">Anteriores</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Más filtros
              </Button>
              <Button variant="outline" size="sm">
                <Calendar className="h-4 w-4 mr-2" />
                Por fecha
              </Button>
              <Button variant="outline" size="sm">
                <Star className="h-4 w-4 mr-2" />
                Más populares
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-subtle rounded-2xl p-6 text-center">
              <h3 className="text-2xl font-bold mb-1">10,247</h3>
              <p className="text-muted-foreground">Artículos totales</p>
            </div>
            <div className="bg-gradient-subtle rounded-2xl p-6 text-center">
              <h3 className="text-2xl font-bold mb-1">5</h3>
              <p className="text-muted-foreground">Años de historia</p>
            </div>
            <div className="bg-gradient-subtle rounded-2xl p-6 text-center">
              <h3 className="text-2xl font-bold mb-1">500+</h3>
              <p className="text-muted-foreground">Celebridades cubiertas</p>
            </div>
            <div className="bg-gradient-subtle rounded-2xl p-6 text-center">
              <h3 className="text-2xl font-bold mb-1">50M</h3>
              <p className="text-muted-foreground">Lecturas totales</p>
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-12">
            <h2 className="font-heading text-3xl font-bold mb-8 text-center">
              Momentos Históricos
            </h2>
            <div className="space-y-6">
              <div className="bg-card border rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        2025
                      </span>
                      <h3 className="font-semibold text-lg">Año Actual</h3>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      Las últimas noticias y eventos que están marcando el año en el mundo del espectáculo español.
                    </p>
                    <Button variant="outline" size="sm">Ver 2025</Button>
                  </div>
                </div>
              </div>

              <div className="bg-card border rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 rounded-full p-3 flex-shrink-0">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                        2024
                      </span>
                      <h3 className="font-semibold text-lg">El Año de los Escándalos</h3>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      Un año lleno de polémicas, separaciones mediáticas y revelaciones que marcaron la historia.
                    </p>
                    <Button variant="outline" size="sm">Explorar 2024</Button>
                  </div>
                </div>
              </div>

              <div className="bg-card border rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                        2023
                      </span>
                      <h3 className="font-semibold text-lg">Bodas y Celebraciones</h3>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      El año de las grandes bodas y celebraciones en el mundo del espectáculo español.
                    </p>
                    <Button variant="outline" size="sm">Ver 2023</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Collections */}
          <div className="mb-12">
            <h2 className="font-heading text-3xl font-bold mb-8 text-center">
              Colecciones Especiales
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-gold/10 to-yellow-500/10 border border-gold/20 rounded-2xl p-6">
                <h3 className="font-semibold text-xl mb-3">🏆 Lo Más Leído</h3>
                <p className="text-muted-foreground mb-4">
                  Los artículos que más han impactado a nuestros lectores
                </p>
                <Button variant="outline" size="sm">Ver colección</Button>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-pink-50 border border-red-100 rounded-2xl p-6">
                <h3 className="font-semibold text-xl mb-3">💔 Grandes Separaciones</h3>
                <p className="text-muted-foreground mb-4">
                  Las rupturas que más han dado que hablar
                </p>
                <Button variant="outline" size="sm">Ver colección</Button>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 rounded-2xl p-6">
                <h3 className="font-semibold text-xl mb-3">💍 Bodas del Año</h3>
                <p className="text-muted-foreground mb-4">
                  Las ceremonias más espectaculares y emotivas
                </p>
                <Button variant="outline" size="sm">Ver colección</Button>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-subtle rounded-2xl p-8 text-center">
            <h2 className="font-heading text-2xl font-bold mb-4">
              ¿Buscas algo específico?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Nuestro equipo puede ayudarte a encontrar esa noticia o información específica 
              que estás buscando en nuestro extenso archivo.
            </p>
            <Button 
              size="lg" 
              variant="cta"
              onClick={() => {
                const newsletterElement = document.getElementById('newsletter-signup');
                if (newsletterElement) {
                  newsletterElement.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/#newsletter-signup';
                }
              }}
            >
              Solicitar Búsqueda Personalizada
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Archive;
