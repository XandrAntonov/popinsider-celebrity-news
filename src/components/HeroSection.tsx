import { Button } from "@/components/ui/button";
import NewsletterForm from "./NewsletterForm";
import { Sparkles, TrendingUp, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary-hover to-accent text-white py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main headline */}
          <div className="space-y-4">
            <div className="flex justify-center">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                <Sparkles className="h-4 w-4" />
                <span>Las últimas exclusivas del mundo del espectáculo</span>
              </div>
            </div>
            
            <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight">
              Todas las exclusivas de tus{" "}
              <span className="bg-white/20 backdrop-blur-sm rounded-lg px-2 py-1">
                celebridades españolas
              </span>{" "}
              favoritas
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Escándalos, romances, éxitos y fracasos. Descubre todo lo que pasa 
              en el mundo del espectáculo español antes que nadie.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <TrendingUp className="h-8 w-8 text-white/80" />
              </div>
              <div className="text-2xl font-bold">50K+</div>
              <div className="text-white/80">Exclusivas publicadas</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="h-8 w-8 text-white/80" />
              </div>
              <div className="text-2xl font-bold">200K+</div>
              <div className="text-white/80">Suscriptores activos</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Sparkles className="h-8 w-8 text-white/80" />
              </div>
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-white/80">Cobertura en tiempo real</div>
            </div>
          </div>

          {/* Newsletter signup */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <NewsletterForm 
              variant="hero"
              title="🔥 Recibe las exclusivas más calientes directo en tu email"
              description="Únete a más de 200,000 suscriptores que ya reciben noticias antes que nadie. Sin spam, solo las mejores exclusivas."
            />
          </div>

          {/* Social proof */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-white/60 text-sm">
            <span>Recomendado por:</span>
            <span className="font-medium">El Mundo</span>
            <span>•</span>
            <span className="font-medium">La Vanguardia</span>
            <span>•</span>
            <span className="font-medium">20 Minutos</span>
            <span>•</span>
            <span className="font-medium">Hola!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;