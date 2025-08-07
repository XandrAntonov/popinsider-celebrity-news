import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface NewsletterFormProps {
  variant?: "default" | "hero" | "sidebar";
  title?: string;
  description?: string;
}

const NewsletterForm = ({ 
  variant = "default", 
  title = "Recibe las últimas noticias de tus celebridades favoritas",
  description = "Sé el primero en conocer los escándalos, romances y exclusivas de las estrellas españolas"
}: NewsletterFormProps) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "¡Suscripción exitosa!",
        description: "Te has suscrito correctamente a nuestro newsletter.",
      });
      setEmail("");
      setIsLoading(false);
      
      // Redirect to thank you page (simulate)
      window.location.href = "/gracias";
    }, 1000);
  };

  const isHero = variant === "hero";
  const isSidebar = variant === "sidebar";

  return (
    <div className={`${isHero ? "text-center max-w-2xl mx-auto" : ""} ${isSidebar ? "bg-brand-light p-6 rounded-lg" : ""}`}>
      <h3 className={`font-heading font-bold mb-3 ${isHero ? "text-3xl md:text-4xl text-white" : isSidebar ? "text-xl" : "text-2xl"}`}>
        {title}
      </h3>
      <p className={`mb-6 ${isHero ? "text-lg text-white/90" : "text-muted-foreground"}`}>
        {description}
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className={`flex gap-3 ${isSidebar ? "flex-col" : "flex-col sm:flex-row"}`}>
          <Input
            type="email"
            placeholder="Tu dirección de email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={`flex-1 ${isHero ? "h-12 text-lg" : ""}`}
          />
          <Button
            type="submit"
            variant="cta"
            disabled={isLoading}
            className={`cta-shadow ${isHero ? "h-12 px-8 text-lg font-semibold" : ""} ${isSidebar ? "w-full" : ""}`}
          >
            {isLoading ? "Suscribiendo..." : "Suscríbete Gratis"}
          </Button>
        </div>
        
        <p className={`text-sm ${isHero ? "text-white/80" : "text-muted-foreground"}`}>
          Al suscribirte, aceptas nuestra{" "}
          <a href="/privacidad" className={`underline ${isHero ? "text-white" : "text-primary"} hover:no-underline`}>
            política de privacidad
          </a>
          . Sin spam, solo las mejores exclusivas.
        </p>
      </form>
    </div>
  );
};

export default NewsletterForm;