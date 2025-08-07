import { Button } from "@/components/ui/button";
import { Search, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-md border-b header-shadow sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-fast">
            <div className="w-8 h-8 gradient-red rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <h1 className="font-heading text-2xl font-bold text-foreground">
              PopInsider
              <span className="text-primary">.net</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-fast font-medium">
              Inicio
            </Link>
            <Link to="/celebridades" className="text-foreground hover:text-primary transition-fast font-medium">
              Celebridades
            </Link>
            <Link to="/escandalos" className="text-foreground hover:text-primary transition-fast font-medium">
              Escándalos
            </Link>
            <Link to="/exclusivas" className="text-foreground hover:text-primary transition-fast font-medium">
              Exclusivas
            </Link>
            <Link to="/contacto" className="text-foreground hover:text-primary transition-fast font-medium">
              Contacto
            </Link>
          </nav>

          {/* Search & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button 
              variant="cta" 
              className="cta-shadow"
              onClick={() => {
                const newsletterElement = document.getElementById('newsletter-signup');
                if (newsletterElement) {
                  newsletterElement.scrollIntoView({ behavior: 'smooth' });
                } else {
                  // Si estamos en una página sin newsletter, ir a la página principal
                  window.location.href = '/#newsletter-signup';
                }
              }}
            >
              Suscríbete
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
              <Link to="/" className="text-foreground hover:text-primary transition-fast font-medium">
                Inicio
              </Link>
              <Link to="/celebridades" className="text-foreground hover:text-primary transition-fast font-medium">
                Celebridades
              </Link>
              <Link to="/escandalos" className="text-foreground hover:text-primary transition-fast font-medium">
                Escándalos
              </Link>
              <Link to="/exclusivas" className="text-foreground hover:text-primary transition-fast font-medium">
                Exclusivas
              </Link>
              <Link to="/contacto" className="text-foreground hover:text-primary transition-fast font-medium">
                Contacto
              </Link>
              <Button 
                variant="cta" 
                className="cta-shadow w-full"
                onClick={() => {
                  const newsletterElement = document.getElementById('newsletter-signup');
                  if (newsletterElement) {
                    newsletterElement.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.location.href = '/#newsletter-signup';
                  }
                }}
              >
                Suscríbete
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
