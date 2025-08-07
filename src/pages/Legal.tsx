import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Legal = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="font-heading text-4xl font-bold mb-8">Aviso Legal</h1>
          
          <p className="text-muted-foreground mb-8">
            <strong>Última actualización:</strong> 15 de enero de 2025
          </p>

          <section className="mb-8">
            <h2 className="font-heading text-2xl font-bold mb-4">1. Datos identificativos</h2>
            <div className="bg-secondary/50 p-6 rounded-lg mb-6">
              <p><strong>Denominación social:</strong> PopInsider Media S.L.</p>
              <p><strong>Domicilio social:</strong> Calle de Fuencarral 105, 28004 Madrid, España</p>
              <p><strong>CIF:</strong> B-12345678</p>
              <p><strong>Email:</strong> contacto@popinsider.net</p>
              <p><strong>Teléfono:</strong> +34 912 345 678</p>
              <p><strong>Registro Mercantil:</strong> Madrid, Tomo 1234, Folio 567, Hoja M-123456</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl font-bold mb-4">2. Objeto y actividad</h2>
            <p className="mb-4">
              PopInsider.net es un medio digital especializado en noticias de entretenimiento y 
              celebridades del ámbito español. Nuestras principales actividades incluyen:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Publicación de noticias y artículos sobre famosos españoles</li>
              <li>Gestión de newsletter y comunicaciones por email</li>
              <li>Creación y distribución de contenido multimedia</li>
              <li>Servicios de publicidad y marketing digital</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl font-bold mb-4">3. Condiciones de acceso y uso</h2>
            <p className="mb-4">
              El acceso a este sitio web es gratuito y no requiere registro previo, salvo para 
              servicios específicos como la suscripción al newsletter.
            </p>
            <p className="mb-4">
              El usuario se compromete a hacer un uso responsable del sitio web y a no desarrollar 
              actividades ilícitas o que puedan dañar la imagen, intereses o derechos de PopInsider.net.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl font-bold mb-4">4. Propiedad intelectual e industrial</h2>
            <p className="mb-4">
              Los contenidos, diseños, estructura, bases de datos y, en general, todos los elementos 
              que forman parte del sitio web están protegidos por los derechos de propiedad intelectual 
              e industrial.
            </p>
            <p className="mb-4">
              Queda prohibida la reproducción, distribución, comunicación pública, transformación 
              o cualquier otra actividad que se pueda realizar con los contenidos sin autorización 
              expresa de PopInsider.net.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl font-bold mb-4">5. Protección de datos</h2>
            <p className="mb-4">
              PopInsider.net cumple con el Reglamento General de Protección de Datos (RGPD) y la 
              Ley Orgánica de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).
            </p>
            <p className="mb-4">
              Para más información sobre el tratamiento de datos personales, consulta nuestra 
              <a href="/privacidad" className="text-primary hover:underline"> Política de Privacidad</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl font-bold mb-4">6. Cookies</h2>
            <p className="mb-4">
              Este sitio web utiliza cookies para mejorar la experiencia del usuario y ofrecer 
              contenidos adaptados a sus intereses. Para más información, consulta nuestra 
              <a href="/cookies" className="text-primary hover:underline"> Política de Cookies</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl font-bold mb-4">7. Enlaces a terceros</h2>
            <p className="mb-4">
              El sitio web puede contener enlaces a otros sitios de internet. PopInsider.net no 
              se hace responsable del contenido de dichos sitios web ni de las políticas de 
              privacidad que puedan implementar.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl font-bold mb-4">8. Modificaciones</h2>
            <p className="mb-4">
              PopInsider.net se reserva el derecho de realizar cambios en el sitio web sin previo 
              aviso, al objeto de mantener actualizada su información, pudiendo limitar o denegar 
              el acceso, cancelar, suspender o interrumpir unilateralmente, en cualquier momento, 
              el acceso al sitio web o alguno de sus servicios.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl font-bold mb-4">9. Legislación aplicable y jurisdicción</h2>
            <p className="mb-4">
              Las presentes condiciones se rigen por la legislación española. Para la resolución 
              de cualquier conflicto derivado de la navegación por este sitio web, las partes se 
              someterán a los Juzgados y Tribunales de Madrid.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl font-bold mb-4">10. Contacto</h2>
            <p className="mb-4">
              Para cualquier consulta relacionada con este aviso legal, puedes contactarnos:
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

export default Legal;