import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Contact */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-red rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <h3 className="font-heading text-xl font-bold">
                PopInsider<span className="text-primary">.net</span>
              </h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Tu fuente más confiable de noticias sobre celebridades españolas. 
              Exclusivas, escándalos y todo lo que necesitas saber del mundo del espectáculo.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>📍 Calle de Fuencarral 105, Madrid, España</p>
              <p>📧 contacto@popinsider.net</p>
              <p>📞 +34 912 345 678</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-fast">Inicio</Link></li>
              <li><a href="#celebridades" className="text-muted-foreground hover:text-primary transition-fast">Celebridades</a></li>
              <li><a href="#escandalos" className="text-muted-foreground hover:text-primary transition-fast">Escándalos</a></li>
              <li><a href="#exclusivas" className="text-muted-foreground hover:text-primary transition-fast">Exclusivas</a></li>
              <li><a href="#archivo" className="text-muted-foreground hover:text-primary transition-fast">Archivo</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacidad" className="text-muted-foreground hover:text-primary transition-fast">Política de Privacidad</Link></li>
              <li><Link to="/cookies" className="text-muted-foreground hover:text-primary transition-fast">Política de Cookies</Link></li>
              <li><Link to="/terminos" className="text-muted-foreground hover:text-primary transition-fast">Términos de Uso</Link></li>
              <li><Link to="/contacto" className="text-muted-foreground hover:text-primary transition-fast">Contacto</Link></li>
              <li><Link to="/aviso-legal" className="text-muted-foreground hover:text-primary transition-fast">Aviso Legal</Link></li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Síguenos</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-fast">Instagram</a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-fast">Twitter</a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-fast">TikTok</a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-fast">YouTube</a>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2025 PopInsider.net. Todos los derechos reservados.</p>
          <p>Hecho con ❤️ para los amantes del espectáculo español</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;