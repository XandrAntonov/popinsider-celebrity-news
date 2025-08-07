import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="font-heading text-4xl font-bold mb-8">Política de Privacidad</h1>
          
          <p className="text-muted-foreground mb-8">
            <strong>Última actualización:</strong> 15 de enero de 2025
          </p>

          <section className="mb-8">
            <h2 className="font-heading text-2xl font-bold mb-4">1. Información que recopilamos</h2>
            <p className="mb-4">
              En PopInsider.net recopilamos la siguiente información personal cuando te suscribes a nuestro newsletter:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Dirección de correo electrónico</li>
              <li>Dirección IP (para fines de seguridad)</li>
              <li>Información de cookies y tecnologías similares</li>
              <li>Datos de navegación y preferencias de contenido</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl font-bold mb-4">2. Cómo utilizamos tu información</h2>
            <p className="mb-4">Utilizamos tu información personal para:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Enviarte nuestro newsletter con noticias de celebridades</li>
              <li>Personalizar el contenido según tus intereses</li>
              <li>Mejorar nuestros servicios y experiencia de usuario</li>
              <li>Cumplir con obligaciones legales</li>
              <li>Prevenir fraude y garantizar la seguridad</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl font-bold mb-4">3. Base legal para el tratamiento (GDPR)</h2>
            <p className="mb-4">
              El tratamiento de tus datos personales se basa en:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Consentimiento:</strong> Para el envío de newsletters</li>
              <li><strong>Interés legítimo:</strong> Para la mejora de nuestros servicios</li>
              <li><strong>Cumplimiento legal:</strong> Para cumplir con obligaciones fiscales y legales</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl font-bold mb-4">4. Compartir información con terceros</h2>
            <p className="mb-4">
              No vendemos, intercambiamos ni transferimos tu información personal a terceros, excepto:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Proveedores de servicios de email marketing (MailChimp, etc.)</li>
              <li>Servicios de análisis web (Google Analytics)</li>
              <li>Cuando sea requerido por ley</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl font-bold mb-4">5. Tus derechos (GDPR)</h2>
            <p className="mb-4">Tienes derecho a:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Acceso:</strong> Solicitar una copia de tus datos personales</li>
              <li><strong>Rectificación:</strong> Corregir datos inexactos</li>
              <li><strong>Supresión:</strong> Solicitar la eliminación de tus datos</li>
              <li><strong>Portabilidad:</strong> Recibir tus datos en formato estructurado</li>
              <li><strong>Oposición:</strong> Oponerte al tratamiento</li>
              <li><strong>Limitación:</strong> Solicitar la limitación del tratamiento</li>
            </ul>
            <p className="mb-4">
              Para ejercer estos derechos, contacta con nosotros en: <strong>contacto@popinsider.net</strong>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl font-bold mb-4">6. Cookies</h2>
            <p className="mb-4">
              Utilizamos cookies para mejorar tu experiencia. Puedes gestionar las preferencias de cookies 
              a través de nuestro banner de cookies o la configuración de tu navegador.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl font-bold mb-4">7. Seguridad de datos</h2>
            <p className="mb-4">
              Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger 
              tus datos personales contra acceso no autorizado, alteración, divulgación o destrucción.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl font-bold mb-4">8. Retención de datos</h2>
            <p className="mb-4">
              Conservamos tus datos personales solo durante el tiempo necesario para los fines 
              para los que fueron recopilados, o según lo requiera la ley.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl font-bold mb-4">9. Contacto</h2>
            <p className="mb-4">
              Si tienes preguntas sobre esta política de privacidad, contacta con nosotros:
            </p>
            <div className="bg-secondary/50 p-6 rounded-lg">
              <p><strong>PopInsider.net</strong></p>
              <p>Calle de Fuencarral 105, Madrid, España</p>
              <p>Email: contacto@popinsider.net</p>
              <p>Teléfono: +34 912 345 678</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl font-bold mb-4">10. Cambios en esta política</h2>
            <p className="mb-4">
              Nos reservamos el derecho de actualizar esta política de privacidad. 
              Te notificaremos de cualquier cambio significativo por email o mediante 
              un aviso prominente en nuestro sitio web.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;