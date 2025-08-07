import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="font-heading text-4xl font-bold mb-8">Términos de Uso</h1>
          
          <p className="text-muted-foreground mb-8">
            <strong>Última actualización:</strong> 15 de enero de 2025
          </p>

          <section className="mb-8">
            <h2 className="font-heading text-2xl font-bold mb-4">1. Aceptación de los términos</h2>
            <p className="mb-4">
              Al acceder y utilizar PopInsider.net, aceptas estar sujeto a estos términos de uso y 
              todas las leyes y regulaciones aplicables. Si no estás de acuerdo con alguno de estos 
              términos, no debes utilizar este sitio web.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl font-bold mb-4">2. Uso del sitio web</h2>
            <p className="mb-4">Este sitio web está destinado para:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Lectura de noticias y artículos sobre celebridades españolas</li>
              <li>Suscripción a nuestro newsletter</li>
              <li>Compartir contenido en redes sociales</li>
              <li>Contactar con nuestro equipo editorial</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl font-bold mb-4">3. Conducta del usuario</h2>
            <p className="mb-4">Te comprometes a:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>No utilizar el sitio para fines ilegales o no autorizados</li>
              <li>No interferir con el funcionamiento del sitio</li>
              <li>No intentar acceder a áreas restringidas</li>
              <li>Respetar los derechos de propiedad intelectual</li>
              <li>No distribuir malware o contenido malicioso</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl font-bold mb-4">4. Contenido y propiedad intelectual</h2>
            <p className="mb-4">
              Todo el contenido de PopInsider.net, incluyendo pero no limitado a textos, imágenes, 
              logotipos, videos y diseño, está protegido por derechos de autor y otras leyes de 
              propiedad intelectual.
            </p>
            <h3 className="font-heading text-xl font-semibold mb-3">Uso permitido</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Leer y navegar por el contenido para uso personal</li>
              <li>Compartir artículos a través de los botones sociales proporcionados</li>
              <li>Citar fragmentos con atribución adecuada</li>
            </ul>
            <h3 className="font-heading text-xl font-semibold mb-3">Uso prohibido</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Reproducir, distribuir o modificar el contenido sin autorización</li>
              <li>Utilizar el contenido para fines comerciales sin permiso</li>
              <li>Eliminar marcas de agua o atribuciones</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl font-bold mb-4">5. Newsletter y comunicaciones</h2>
            <p className="mb-4">
              Al suscribirte a nuestro newsletter:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Consientes recibir comunicaciones periódicas por email</li>
              <li>Puedes cancelar la suscripción en cualquier momento</li>
              <li>Tu email se utilizará únicamente para los fines declarados</li>
              <li>No compartiremos tu información con terceros sin consentimiento</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl font-bold mb-4">6. Limitación de responsabilidad</h2>
            <p className="mb-4">
              PopInsider.net se proporciona "tal como está" sin garantías de ningún tipo. 
              No seremos responsables de:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Daños directos, indirectos, incidentales o consecuentes</li>
              <li>Pérdida de datos o interrupción del servicio</li>
              <li>Exactitud completa de toda la información publicada</li>
              <li>Contenido de sitios web de terceros enlazados</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl font-bold mb-4">7. Modificaciones del servicio</h2>
            <p className="mb-4">
              Nos reservamos el derecho de:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Modificar o discontinuar el servicio en cualquier momento</li>
              <li>Actualizar estos términos de uso</li>
              <li>Cambiar el diseño y funcionalidad del sitio</li>
              <li>Suspender el acceso por violación de estos términos</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl font-bold mb-4">8. Ley aplicable</h2>
            <p className="mb-4">
              Estos términos se rigen por las leyes de España. Cualquier disputa será 
              resuelta en los tribunales competentes de Madrid, España.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl font-bold mb-4">9. Contacto</h2>
            <p className="mb-4">
              Para preguntas sobre estos términos de uso, contacta con nosotros:
            </p>
            <div className="bg-secondary/50 p-6 rounded-lg">
              <p><strong>PopInsider.net</strong></p>
              <p>Calle de Fuencarral 105, Madrid, España</p>
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

export default Terms;