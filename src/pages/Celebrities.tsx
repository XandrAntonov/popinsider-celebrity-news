
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { articles } from "@/data/articles";
import { Star, Heart, Users, TrendingUp } from "lucide-react";

const Celebrities = () => {
  // Получаем статьи для каждой категории знаменитостей
  const actorsArticle = articles.find(a => a.title.includes('Elena Rivera'));
  const singersArticle = articles.find(a => a.title.includes('Aitana'));
  const tvArticle = articles.find(a => a.title.includes('Pilar Rubio'));
  const sportsArticle = articles.find(a => a.title.includes('Georgina'));
  const royaltyArticle = articles.find(a => a.title.includes('Georgina'));
  const businessArticle = articles.find(a => a.title.includes('Miguel Herrán'));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Celebridades Españolas
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Descubre las últimas noticias, exclusivas y curiosidades de tus famosos favoritos
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-subtle rounded-2xl p-6 text-center">
              <Star className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="text-2xl font-bold mb-1">500+</h3>
              <p className="text-muted-foreground">Celebridades</p>
            </div>
            <div className="bg-gradient-subtle rounded-2xl p-6 text-center">
              <Heart className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="text-2xl font-bold mb-1">1M+</h3>
              <p className="text-muted-foreground">Fans</p>
            </div>
            <div className="bg-gradient-subtle rounded-2xl p-6 text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="text-2xl font-bold mb-1">200K+</h3>
              <p className="text-muted-foreground">Suscriptores</p>
            </div>
            <div className="bg-gradient-subtle rounded-2xl p-6 text-center">
              <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="text-2xl font-bold mb-1">24/7</h3>
              <p className="text-muted-foreground">Cobertura</p>
            </div>
          </div>

          {/* Categories Section */}
          <div className="mb-12">
            <h2 className="font-heading text-3xl font-bold mb-8 text-center">
              Categorías Populares
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-card border rounded-2xl p-6 hover:shadow-lg transition-all">
                <h3 className="font-semibold text-xl mb-3">🎬 Actores</h3>
                <p className="text-muted-foreground mb-4">
                  Las estrellas más brillantes del cine y la televisión española
                </p>
                <Link to={actorsArticle ? `/articulo/${actorsArticle.id}` : '/'}> 
                  <Button variant="outline" size="sm">Ver más</Button>
                </Link>
              </div>
              <div className="bg-card border rounded-2xl p-6 hover:shadow-lg transition-all">
                <h3 className="font-semibold text-xl mb-3">🎵 Cantantes</h3>
                <p className="text-muted-foreground mb-4">
                  Los artistas musicales que marcan tendencia en España
                </p>
                <Link to={singersArticle ? `/articulo/${singersArticle.id}` : '/'}>
                  <Button variant="outline" size="sm">Ver más</Button>
                </Link>
              </div>
              <div className="bg-card border rounded-2xl p-6 hover:shadow-lg transition-all">
                <h3 className="font-semibold text-xl mb-3">📺 TV</h3>
                <p className="text-muted-foreground mb-4">
                  Presentadores y personalidades de la televisión
                </p>
                <Link to={tvArticle ? `/articulo/${tvArticle.id}` : '/'}>
                  <Button variant="outline" size="sm">Ver más</Button>
                </Link>
              </div>
              <div className="bg-card border rounded-2xl p-6 hover:shadow-lg transition-all">
                <h3 className="font-semibold text-xl mb-3">⚽ Deportistas</h3>
                <p className="text-muted-foreground mb-4">
                  Los atletas españoles más reconocidos mundialmente
                </p>
                <Link to={sportsArticle ? `/articulo/${sportsArticle.id}` : '/'}>
                  <Button variant="outline" size="sm">Ver más</Button>
                </Link>
              </div>
              <div className="bg-card border rounded-2xl p-6 hover:shadow-lg transition-all">
                <h3 className="font-semibold text-xl mb-3">👑 Realeza</h3>
                <p className="text-muted-foreground mb-4">
                  Noticias y eventos de la familia real española
                </p>
                <Link to={royaltyArticle ? `/articulo/${royaltyArticle.id}` : '/'}>
                  <Button variant="outline" size="sm">Ver más</Button>
                </Link>
              </div>
              <div className="bg-card border rounded-2xl p-6 hover:shadow-lg transition-all">
                <h3 className="font-semibold text-xl mb-3">💼 Empresarios</h3>
                <p className="text-muted-foreground mb-4">
                  Los magnates y emprendedores más influyentes
                </p>
                <Link to={businessArticle ? `/articulo/${businessArticle.id}` : '/'}>
                  <Button variant="outline" size="sm">Ver más</Button>
                </Link>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-subtle rounded-2xl p-8 text-center">
            <h2 className="font-heading text-2xl font-bold mb-4">
              ¿No encuentras a tu celebrity favorito?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Contáctanos y te mantendremos informado sobre las últimas noticias 
              de la celebridad que más te interese
            </p>
            <Button 
              size="lg" 
              variant="cta"
              onClick={() => {
                const newsletterElement = document.getElementById('newsletter-signup');
                if (newsletterElement) {
                  newsletterElement.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/#newsletter-signup';
                }
              }}
            >
              Solicitar Cobertura
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Celebrities;
