import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Cookies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="font-heading text-4xl font-bold mb-8">Política de Cookies</h1>
          
          <p className="text-muted-foreground mb-8">
            <strong>Última actualización:</strong> 15 de enero de 2025
          </p>

          <section className="mb-8">
            <h2 className="font-heading text-2xl font-bold mb-4">¿Qué son las cookies?</h2>
            <p className="mb-4">
              Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. 
              Estas nos permiten recordar tus preferencias y mejorar tu experiencia de navegación en PopInsider.net.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl font-bold mb-4">Tipos de cookies que utilizamos</h2>
            
            <h3 className="font-heading text-xl font-semibold mb-3">Cookies estrictamente necesarias</h3>
            <p className="mb-4">
              Estas cookies son esenciales para el funcionamiento del sitio web y no se pueden desactivar:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Cookies de sesión para mantener tu navegación</li>
              <li>Cookies de seguridad para prevenir fraudes</li>
              <li>Cookies de preferencias de idioma</li>
            </ul>

            <h3 className="font-heading text-xl font-semibold mb-3">Cookies de análisis</h3>
            <p className="mb-4">
              Nos ayudan a entender cómo interactúas con nuestro sitio:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li><strong>Google Analytics:</strong> Para medir el tráfico y comportamiento de usuarios</li>
              <li><strong>Hotjar:</strong> Para análisis de mapas de calor y grabaciones de sesiones</li>
            </ul>

            <h3 className="font-heading text-xl font-semibold mb-3">Cookies de marketing</h3>
            <p className="mb-4">
              Utilizadas para personalizar la publicidad y medir su efectividad:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li><strong>Google Ads:</strong> Para mostrar anuncios relevantes</li>
              <li><strong>Facebook Pixel:</strong> Para rastrear conversiones y optimizar campañas</li>
              <li><strong>Twitter:</strong> Para análisis de engagement en redes sociales</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl font-bold mb-4">Cookies de terceros</h2>
            <p className="mb-4">
              PopInsider.net utiliza servicios de terceros que pueden establecer sus propias cookies:
            </p>
            <div className="bg-secondary/50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-2">Google Analytics</h4>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Propósito:</strong> Análisis de tráfico web
              </p>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Duración:</strong> 2 años
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Más información:</strong> 
                <a href="https://policies.google.com/privacy" className="text-primary hover:underline ml-1">
                  Política de Google
                </a>
              </p>
            </div>
            
            <div className="bg-secondary/50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-2">MailChimp</h4>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Propósito:</strong> Gestión de newsletter y email marketing
              </p>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Duración:</strong> 1 año
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Más información:</strong> 
                <a href="https://mailchimp.com/legal/privacy/" className="text-primary hover:underline ml-1">
                  Política de MailChimp
                </a>
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl font-bold mb-4">Cómo gestionar las cookies</h2>
            <p className="mb-4">
              Puedes controlar y/o eliminar las cookies como desees. Tienes varias opciones:
            </p>
            
            <h3 className="font-heading text-xl font-semibold mb-3">A través de tu navegador</h3>
            <ul className="list-disc pl-6 mb-6">
              <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
              <li><strong>Firefox:</strong> Preferencias → Privacidad y seguridad</li>
              <li><strong>Safari:</strong> Preferencias → Privacidad</li>
              <li><strong>Edge:</strong> Configuración → Cookies y permisos del sitio</li>
            </ul>

            <h3 className="font-heading text-xl font-semibold mb-3">A través de nuestro banner</h3>
            <p className="mb-4">
              Puedes cambiar tus preferencias en cualquier momento haciendo clic en "Configurar cookies" 
              en el banner que aparece en tu primera visita.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl font-bold mb-4">Cookies de redes sociales</h2>
            <p className="mb-4">
              Nuestro sitio incluye plugins de redes sociales que pueden establecer cookies:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Botones de compartir en Facebook, Twitter, Instagram</li>
              <li>Widgets de feed de redes sociales</li>
              <li>Píxeles de seguimiento para remarketing</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl font-bold mb-4">Consentimiento y base legal</h2>
            <p className="mb-4">
              El uso de cookies está basado en:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Consentimiento:</strong> Para cookies no esenciales</li>
              <li><strong>Interés legítimo:</strong> Para cookies de análisis que mejoran nuestro servicio</li>
              <li><strong>Necesidad contractual:</strong> Para cookies esenciales del funcionamiento del sitio</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl font-bold mb-4">Actualizaciones de esta política</h2>
            <p className="mb-4">
              Podemos actualizar esta política de cookies periódicamente. Te notificaremos de cambios 
              significativos a través de nuestro sitio web o por email.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl font-bold mb-4">Contacto</h2>
            <p className="mb-4">
              Si tienes preguntas sobre nuestra política de cookies, puedes contactarnos:
            </p>
            <div className="bg-secondary/50 p-6 rounded-lg">
              <p><strong>PopInsider.net</strong></p>
              <p>Email: contacto@popinsider.net</p>
              <p>Teléfono: +34 912 345 678</p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cookies;