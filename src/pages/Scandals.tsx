
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Eye, Clock, Flame } from "lucide-react";

const Scandals = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Escándalos <span className="text-primary">del Espectáculo</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Las polémicas más sonadas del mundo del espectáculo español
            </p>
          </div>

          {/* Warning Banner */}
          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 mb-12 flex items-start gap-4">
            <AlertTriangle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-orange-900 mb-2">Contenido Sensible</h3>
              <p className="text-orange-800 text-sm">
                Esta sección contiene información sobre polémicas y escándalos. 
                Todo el contenido está verificado y se presenta con fines informativos.
              </p>
            </div>
          </div>

          {/* Hot Topics */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Flame className="h-6 w-6 text-red-500" />
              <h2 className="font-heading text-3xl font-bold">Más Candentes</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-red-50 to-pink-50 border border-red-100 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-red-600 font-semibold text-sm">EN VIVO</span>
                </div>
                <h3 className="font-semibold text-xl mb-3">Última Hora</h3>
                <p className="text-muted-foreground mb-4">
                  Mantente al día con las polémicas que están sucediendo ahora mismo
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-100 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Eye className="h-4 w-4 text-orange-600" />
                  <span className="text-orange-600 font-semibold text-sm">TENDENCIA</span>
                </div>
                <h3 className="font-semibold text-xl mb-3">Más Vistos</h3>
                <p className="text-muted-foreground mb-4">
                  Los escándalos que más están comentando nuestros lectores
                </p>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="mb-12">
            <h2 className="font-heading text-3xl font-bold mb-8 text-center">
              Tipos de Escándalos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-card border rounded-2xl p-6 hover:shadow-lg transition-all">
                <h3 className="font-semibold text-xl mb-3">💔 Romances</h3>
                <p className="text-muted-foreground mb-4">
                  Separaciones, triángulos amorosos y relaciones polémicas
                </p>
              </div>
              <div className="bg-card border rounded-2xl p-6 hover:shadow-lg transition-all">
                <h3 className="font-semibold text-xl mb-3">💰 Dinero</h3>
                <p className="text-muted-foreground mb-4">
                  Problemas financieros, deudas y disputas económicas
                </p>
              </div>
              <div className="bg-card border rounded-2xl p-6 hover:shadow-lg transition-all">
                <h3 className="font-semibold text-xl mb-3">🏛️ Legales</h3>
                <p className="text-muted-foreground mb-4">
                  Demandas, juicios y problemas con la justicia
                </p>
              </div>
              <div className="bg-card border rounded-2xl p-6 hover:shadow-lg transition-all">
                <h3 className="font-semibold text-xl mb-3">📱 Redes Sociales</h3>
                <p className="text-muted-foreground mb-4">
                  Polémicas nacidas en Instagram, Twitter y TikTok
                </p>
              </div>
              <div className="bg-card border rounded-2xl p-6 hover:shadow-lg transition-all">
                <h3 className="font-semibold text-xl mb-3">🎭 Profesionales</h3>
                <p className="text-muted-foreground mb-4">
                  Conflictos laborales y disputas en el mundo del espectáculo
                </p>
              </div>
              <div className="bg-card border rounded-2xl p-6 hover:shadow-lg transition-all">
                <h3 className="font-semibold text-xl mb-3">👨‍👩‍👧‍👦 Familiares</h3>
                <p className="text-muted-foreground mb-4">
                  Disputas familiares y problemas de herencias
                </p>
              </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="bg-gradient-subtle rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="h-6 w-6 text-primary" />
              <h2 className="font-heading text-2xl font-bold">Línea de Tiempo</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Explora los escándalos más impactantes de los últimos años, 
              organizados cronológicamente para que no te pierdas ningún detalle.
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
              Ver Cronología Completa
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Scandals;
