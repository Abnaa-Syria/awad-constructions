import { ArrowUpLeft } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

function ProjectCard({ title, label, image }) {
  return (
    <Card className="project-card">
      <div className="project-image">
        {image ? (
          <img className="project-image-media" src={image} alt={title} loading="lazy" />
        ) : (
          <span className="image-chip">{label}</span>
        )}
        <span className="project-image-scrim" aria-hidden="true" />
        <span className="project-tag">{title}</span>
      </div>
      <CardContent className="project-content">
        <h3 className="project-card-title">{title}</h3>
        <a className="project-card-link" href="#contact">
          <span>استعرض التفاصيل</span>
          <ArrowUpLeft className="project-card-link-icon" size={16} aria-hidden />
        </a>
      </CardContent>
    </Card>
  )
}

export default ProjectCard
