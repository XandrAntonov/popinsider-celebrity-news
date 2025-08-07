import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";
import type { Article } from "@/data/articles";

interface ArticleCardProps {
  article: Article;
  variant?: "default" | "featured" | "compact";
}

const ArticleCard = ({ article, variant = "default" }: ArticleCardProps) => {
  const isCompact = variant === "compact";
  const isFeatured = variant === "featured";

  return (
    <Link to={`/articulo/${article.id}`}>
      <Card className={`group hover:scale-[1.02] transition-smooth card-shadow cursor-pointer ${isFeatured ? "border-primary/20" : ""}`}>
        <div className={`${isCompact ? "flex gap-4" : ""}`}>
          {/* Image */}
          <div className={`${isCompact ? "w-32 h-24 flex-shrink-0" : "w-full h-48"} relative overflow-hidden ${isCompact ? "rounded-l-lg" : "rounded-t-lg"}`}>
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
            />
            <div className="absolute top-3 left-3">
              <Badge variant="default" className="bg-primary/90 text-white">
                {article.category}
              </Badge>
            </div>
            {isFeatured && (
              <div className="absolute top-3 right-3">
                <Badge variant="destructive" className="bg-accent">
                  Exclusiva
                </Badge>
              </div>
            )}
          </div>

          {/* Content */}
          <CardContent className={`${isCompact ? "flex-1 py-4 pl-0 pr-4" : "p-6"}`}>
            <div className="space-y-3">
              {/* Meta info */}
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <User className="h-3 w-3" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>{new Date(article.publishDate).toLocaleDateString('es-ES', { 
                    day: 'numeric', 
                    month: 'long', 
                    year: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{article.readTime} min</span>
                </div>
              </div>

              {/* Title */}
              <h3 className={`font-heading font-bold leading-tight group-hover:text-primary transition-fast ${
                isFeatured ? "text-xl md:text-2xl" : isCompact ? "text-base" : "text-lg"
              }`}>
                {article.title}
              </h3>

              {/* Excerpt */}
              {!isCompact && (
                <p className="text-muted-foreground leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              )}

              {/* Read more */}
              <div className="pt-2">
                <span className="text-primary font-medium hover:underline text-sm">
                  Leer más →
                </span>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </Link>
  );
};

export default ArticleCard;