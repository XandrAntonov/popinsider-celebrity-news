import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Cookie, X } from "lucide-react";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setShowBanner(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    setShowBanner(false);
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem('cookieConsent', 'necessary');
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-8 md:right-8">
      <Card className="card-shadow border border-border/50 backdrop-blur-sm bg-background/95">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <Cookie className="h-6 w-6 text-primary" />
            </div>
            
            <div className="flex-1 space-y-3">
              <div className="flex items-start justify-between">
                <h3 className="font-heading text-lg font-bold">
                  Usamos cookies para mejorar tu experiencia
                </h3>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={handleReject}
                  className="h-6 w-6 -mt-1"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                Utilizamos cookies propias y de terceros para analizar el tráfico, personalizar contenido 
                y mostrar publicidad. Al continuar navegando, aceptas el uso de cookies según nuestra{" "}
                <a href="/cookies" className="text-primary hover:underline">
                  política de cookies
                </a>{" "}
                y{" "}
                <a href="/privacidad" className="text-primary hover:underline">
                  política de privacidad
                </a>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  variant="cta" 
                  onClick={handleAcceptAll}
                  className="cta-shadow"
                >
                  Aceptar todas
                </Button>
                <Button 
                  variant="outline" 
                  onClick={handleAcceptNecessary}
                >
                  Solo necesarias
                </Button>
                <Button 
                  variant="ghost" 
                  onClick={handleReject}
                  className="text-muted-foreground"
                >
                  Rechazar
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CookieBanner;