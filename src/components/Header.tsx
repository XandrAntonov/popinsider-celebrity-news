import { Button } from "@/components/ui/button";
import { Search, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-md border-b header-shadow sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-red rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <h1 className="font-heading text-2xl font-bold text-foreground">
              PopInsider
              <span className="text-primary">.net</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-fast font-medium">
              Inicio
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-fast font-medium">
              Celebridades
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-fast font-medium">
              Escándalos
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-fast font-medium">
              Exclusivas
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-fast font-medium">
              Contacto
            </a>
          </nav>

          {/* Search & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="cta" className="cta-shadow">
              Suscríbete Gratis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-foreground hover:text-primary transition-fast font-medium">
                Inicio
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-fast font-medium">
                Celebridades
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-fast font-medium">
                Escándalos
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-fast font-medium">
                Exclusivas
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-fast font-medium">
                Contacto
              </a>
              <Button variant="cta" className="cta-shadow w-full">
                Suscríbete Gratis
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;