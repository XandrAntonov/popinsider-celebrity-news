
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Crown, Lock, Zap, Users, Calendar, Award } from "lucide-react";

const Exclusives = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Crown className="h-12 w-12 text-primary" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Contenido <span className="text-primary">Exclusivo</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Las noticias que no verás en ningún otro sitio. Acceso VIP al mundo del espectáculo español.
            </p>
          </div>

          {/* Premium Banner */}
          <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20 rounded-2xl p-8 mb-12 text-center">
            <div className="flex justify-center mb-4">
              <Lock className="h-8 w-8 text-primary" />
            </div>
            <h2 className="font-heading text-2xl font-bold mb-3">
              Área Premium
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Suscríbete a nuestro newsletter para recibir contenido exclusivo que no publicamos en la web. 
              Entrevistas privadas, fotos inéditas y primicias absolutas.
            </p>
            <Button size="lg" variant="cta" className="cta-shadow">
              Acceso Exclusivo
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-card border rounded-2xl p-6 text-center">
              <Zap className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-3">Primicias</h3>
              <p className="text-muted-foreground">
                Sé el primero en conocer las noticias más impactantes
              </p>
            </div>
            <div className="bg-card border rounded-2xl p-6 text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-3">Entrevistas VIP</h3>
              <p className="text-muted-foreground">
                Conversaciones íntimas con las estrellas más grandes
              </p>
            </div>
            <div className="bg-card border rounded-2xl p-6 text-center">
              <Calendar className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-3">Eventos Privados</h3>
              <p className="text-muted-foreground">
                Cobertura exclusiva desde galas y fiestas VIP
              </p>
            </div>
          </div>

          {/* Exclusive Categories */}
          <div className="mb-12">
            <h2 className="font-heading text-3xl font-bold mb-8 text-center">
              Nuestras Exclusivas
            </h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-gold/10 to-yellow-500/10 border border-gold/20 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <Award className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Entrevistas Exclusivas</h3>
                    <p className="text-muted-foreground mb-4">
                      Conversaciones íntimas con celebrities que no hablan con nadie más. 
                      Revelaciones, confesiones y secretos que marcan la diferencia.
                    </p>
                    <Button variant="outline" size="sm">Ver Entrevistas</Button>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <Crown className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Investigaciones Especiales</h3>
                    <p className="text-muted-foreground mb-4">
                      Reportajes en profundidad que van más allá de la superficie. 
                      Investigaciones que revelan la verdad detrás de los rumores.
                    </p>
                    <Button variant="outline" size="sm">Leer Reportajes</Button>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <Zap className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Adelantos y Filtraciones</h3>
                    <p className="text-muted-foreground mb-4">
                      Información privilegiada sobre proyectos secretos, casting, 
                      romances y decisiones antes que nadie.
                    </p>
                    <Button variant="outline" size="sm">Ver Adelantos</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-subtle rounded-2xl p-8 text-center">
            <h2 className="font-heading text-3xl font-bold mb-4">
              ¿Tienes información exclusiva?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Si tienes una historia exclusiva, fotos inéditas o información que crees 
              que nuestros lectores deberían conocer, contáctanos de forma confidencial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="cta">
                Enviar Tip Confidencial
              </Button>
              <Button size="lg" variant="outline">
                Contactar Redacción
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />    </div>
  );
};

export default Exclusives;
