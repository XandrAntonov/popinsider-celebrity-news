import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Mail, Heart, Home } from "lucide-react";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Success icon */}
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
              ¡Bienvenido a la familia PopInsider!
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Te has suscrito exitosamente a nuestro newsletter. Ahora recibirás las 
              exclusivas más calientes directo en tu bandeja de entrada.
            </p>
          </div>

          {/* What to expect */}
          <div className="bg-gradient-subtle rounded-2xl p-8 text-left">
            <h2 className="font-heading text-2xl font-bold mb-6 text-center">
              ¿Qué puedes esperar?
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Exclusivas semanales</h3>
                  <p className="text-muted-foreground">
                    Recibe las noticias más importantes cada martes y viernes
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Heart className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Contenido exclusivo</h3>
                  <p className="text-muted-foreground">
                    Acceso a noticias que no publicamos en la web
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Sin spam garantizado</h3>
                  <p className="text-muted-foreground">
                    Solo contenido de calidad, puedes cancelar cuando quieras
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Next steps */}
          <div className="space-y-6">
            <h2 className="font-heading text-2xl font-bold">
              Mientras tanto...
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <a href="/">
                  <Home className="h-5 w-5 mr-2" />
                  Explorar más noticias
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://instagram.com/popinsider.net" target="_blank" rel="noopener noreferrer">
                  Síguenos en Instagram
                </a>
              </Button>
            </div>
          </div>

          {/* Social proof */}
          <div className="bg-primary/5 rounded-lg p-6">
            <p className="text-sm text-muted-foreground">
              Te has unido a más de <strong>200,000 suscriptores</strong> que confían en PopInsider.net 
              para mantenerse al día con el mundo del espectáculo español.
            </p>
          </div>

          {/* Check email reminder */}
          <div className="border border-border rounded-lg p-6 bg-card">
            <h3 className="font-semibold mb-2">📧 Revisa tu email</h3>
            <p className="text-sm text-muted-foreground">
              Te hemos enviado un email de confirmación. Si no lo encuentras, 
              revisa tu carpeta de spam o promociones.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYou;