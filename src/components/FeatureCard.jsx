function FeatureCard({ icon, title, text }) {
  const IconComponent = icon

  return (
    <article className="feature-card">
      <div className="feature-card-top">
        <span className="feature-icon" aria-hidden>
          <IconComponent size={22} strokeWidth={2.1} />
        </span>
      </div>
      <h3 className="feature-card-title">{title}</h3>
      <p className="feature-card-text">{text}</p>
    </article>
  )
}

export default FeatureCard
