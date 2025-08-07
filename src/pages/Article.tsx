import { useParams, Link } from "react-router-dom";
import { articles } from "@/data/articles";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react";
import NewsletterForm from "@/components/NewsletterForm";
import { useToast } from "@/hooks/use-toast";

const Article = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const article = articles.find(a => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Artículo no encontrado</h1>
          <p className="text-muted-foreground mb-8">El artículo que buscas no existe o ha sido eliminado.</p>
          <Link to="/">
            <Button variant="cta">Volver al inicio</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      });
    } else {
      // Fallback to clipboard
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "¡Enlace copiado!",
        description: "El enlace del artículo se ha copiado al portapapeles.",
      });
    }
  };

  // Split content into paragraphs
  const paragraphs = article.content.split('\n\n');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-fast mb-6">
            <ArrowLeft className="h-4 w-4" />
            Volver a inicio
          </Link>

          {/* Article header */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <Badge variant="default" className="bg-primary/90 text-white">
                {article.category}
              </Badge>
              {article.featured && (
                <Badge variant="destructive" className="bg-accent">
                  Exclusiva
                </Badge>
              )}
            </div>

            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(article.publishDate).toLocaleDateString('es-ES', { 
                  day: 'numeric', 
                  month: 'long', 
                  year: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{article.readTime} min de lectura</span>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <Button
                variant="outline"
                size="sm"
                onClick={handleShare}
                className="flex items-center gap-2"
              >
                <Share2 className="h-4 w-4" />
                Compartir
              </Button>
            </div>
          </div>

          {/* Article image */}
          <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article content */}
          <div className="prose prose-lg max-w-none">
            <div className="text-xl text-muted-foreground mb-8 font-medium leading-relaxed">
              {article.excerpt}
            </div>
            
            <div className="space-y-6">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="text-foreground leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Newsletter signup */}
          <div className="mt-12 pt-12 border-t" id="newsletter-signup">
            <NewsletterForm 
              variant="default"
              title="¿Te gustó este artículo?"
              description="Suscríbete para recibir más exclusivas como esta directamente en tu email"
            />
          </div>

          {/* Related articles */}
          <div className="mt-12 pt-12 border-t">
            <h3 className="font-heading text-2xl font-bold mb-6">Artículos relacionados</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articles
                .filter(a => a.id !== article.id && a.category === article.category)
                .slice(0, 2)
                .map(relatedArticle => (
                  <Link key={relatedArticle.id} to={`/articulo/${relatedArticle.id}`}>
                    <div className="bg-card border rounded-2xl p-4 hover:shadow-lg transition-all group">
                      <div className="flex gap-4">
                        <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={relatedArticle.image}
                            alt={relatedArticle.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm leading-tight group-hover:text-primary transition-fast line-clamp-2 mb-2">
                            {relatedArticle.title}
                          </h4>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            <span>{new Date(relatedArticle.publishDate).toLocaleDateString('es-ES')}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Article;