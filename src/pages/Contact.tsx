import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensaje enviado",
        description: "Gracias por contactarnos. Te responderemos pronto.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Contacta con nosotros
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            ¿Tienes una exclusiva? ¿Sugerencias? ¿Preguntas? Nos encantaría escucharte. 
            Estamos aquí para brindarte el mejor contenido sobre celebridades españolas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Envíanos un mensaje</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Nombre completo *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Asunto *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="¿De qué quieres hablarnos?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Mensaje *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Cuéntanos los detalles..."
                      rows={6}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="cta" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full cta-shadow"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                  </Button>
                  
                  <p className="text-sm text-muted-foreground">
                    * Campos obligatorios. Responderemos en un plazo máximo de 24 horas.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Office Info */}
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="font-heading text-xl">Nuestra oficina</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Dirección</p>
                    <p className="text-muted-foreground text-sm">
                      Calle de Fuencarral 105<br />
                      Madrid, España<br />
                      28004
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a 
                      href="mailto:contacto@popinsider.net" 
                      className="text-primary hover:underline text-sm"
                    >
                      contacto@popinsider.net
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Teléfono</p>
                    <a 
                      href="tel:+34912345678" 
                      className="text-primary hover:underline text-sm"
                    >
                      +34 912 345 678
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Horario</p>
                    <p className="text-muted-foreground text-sm">
                      Lunes - Viernes: 9:00 - 18:00<br />
                      Fines de semana: Cerrado
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card className="gradient-red text-white">
              <CardHeader>
                <CardTitle className="font-heading text-xl">¿Tienes una exclusiva?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 mb-4">
                  Si tienes información confidencial sobre celebridades españolas, 
                  contacta directamente con nuestro equipo editorial.
                </p>
                <Button variant="secondary" className="w-full">
                  Enviar exclusiva
                </Button>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="font-heading text-xl">Síguenos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <a 
                    href="https://instagram.com/popinsider.net" 
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-fast"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"></div>
                    <div>
                      <div className="font-medium">Instagram</div>
                      <div className="text-sm text-muted-foreground">@popinsider.net</div>
                    </div>
                  </a>
                  <a 
                    href="https://twitter.com/popinsider" 
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-fast"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <div className="w-8 h-8 bg-blue-500 rounded-lg"></div>
                    <div>
                      <div className="font-medium">Twitter</div>
                      <div className="text-sm text-muted-foreground">@popinsider</div>
                    </div>
                  </a>
                  <a 
                    href="https://tiktok.com/@popinsider" 
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-fast"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <div className="w-8 h-8 bg-black rounded-lg"></div>
                    <div>
                      <div className="font-medium">TikTok</div>
                      <div className="text-sm text-muted-foreground">@popinsider</div>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;