import { ArrowUpLeft } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

function BlogCard({ title, excerpt, placeholder, image }) {
  return (
    <Card className="blog-card">
      <div className="blog-image">
        {image ? (
          <img className="blog-image-media" src={image} alt={title} loading="lazy" />
        ) : (
          <span className="image-chip">{placeholder}</span>
        )}
        <span className="blog-image-scrim" aria-hidden="true" />
      </div>
      <CardContent className="blog-content">
        <h3 className="blog-card-title">{title}</h3>
        <p className="blog-card-excerpt">{excerpt}</p>
        <a className="blog-card-link" href="#contact">
          <span>اقرأ المزيد</span>
          <ArrowUpLeft className="blog-card-link-icon" size={16} aria-hidden />
        </a>
      </CardContent>
    </Card>
  )
}

export default BlogCard
