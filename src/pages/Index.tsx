import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ArticleCard from "@/components/ArticleCard";
import NewsletterForm from "@/components/NewsletterForm";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { articles } from "@/data/articles";
import { TrendingUp, Clock, Star } from "lucide-react";

const Index = () => {
  const featuredArticles = articles.filter(article => article.featured);
  const latestArticles = articles.filter(article => !article.featured).slice(0, 4);
  const sidebarArticles = articles.slice(0, 5);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Featured Articles */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Star className="h-6 w-6 text-primary" />
            <h2 className="font-heading text-3xl font-bold">Exclusivas Destacadas</h2>
            <div className="flex-1 h-px bg-border"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} variant="featured" />
            ))}
          </div>
        </section>

        {/* Latest News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center gap-3 mb-8">
              <Clock className="h-6 w-6 text-primary" />
              <h2 className="font-heading text-3xl font-bold">Últimas Noticias</h2>
              <div className="flex-1 h-px bg-border"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {latestArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>

            {/* Load more button */}
            <div className="text-center pt-8">
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.location.href = '/celebridades'}
              >
                Ver más noticias
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Newsletter Signup */}
            <div className="sticky top-20" id="newsletter-signup">
              <NewsletterForm 
                variant="sidebar"
                title="¡No te pierdas nada!"
                description="Recibe las últimas exclusivas directo en tu email"
              />
            </div>

            <Separator />

            {/* Trending Articles */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="h-5 w-5 text-primary" />
                <h3 className="font-heading text-xl font-bold">Más Leídas</h3>
              </div>
              <div className="space-y-4">
                {sidebarArticles.map((article, index) => (
                  <Link key={article.id} to={`/articulo/${article.id}`}>
                    <div className="flex gap-3 group cursor-pointer hover:bg-secondary/50 p-2 rounded-lg transition-fast">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium leading-tight group-hover:text-primary transition-fast line-clamp-2">
                          {article.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {article.readTime} min • {article.category}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <Separator />

            {/* Social Links */}
            <div>
              <h3 className="font-heading text-xl font-bold mb-4">Síguenos</h3>
              <div className="space-y-3">
                <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-fast">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"></div>
                  <div>
                    <div className="font-medium">Instagram</div>
                    <div className="text-sm text-muted-foreground">@popinsider.net</div>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-fast">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg"></div>
                  <div>
                    <div className="font-medium">Twitter</div>
                    <div className="text-sm text-muted-foreground">@popinsider</div>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-fast">
                  <div className="w-8 h-8 bg-black rounded-lg"></div>
                  <div>
                    <div className="font-medium">TikTok</div>
                    <div className="text-sm text-muted-foreground">@popinsider</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <section className="mt-20 gradient-red rounded-2xl p-12 text-center text-white">
          <h2 className="font-heading text-3xl font-bold mb-4">
            ¿Te gustan nuestras exclusivas?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Únete a nuestra comunidad VIP y recibe contenido exclusivo antes que nadie
          </p>
          <Button 
            variant="secondary" 
            size="lg" 
            className="cta-shadow"
            onClick={() => {
              const newsletterElement = document.getElementById('newsletter-signup');
              if (newsletterElement) {
                newsletterElement.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Suscríbete Premium
          </Button>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
