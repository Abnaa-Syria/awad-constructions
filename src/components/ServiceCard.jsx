function ServiceCard({ icon, title, text }) {
  const IconComponent = icon

  return (
    <article className="service-card">
      <div className="service-card-top">
        <span className="service-icon" aria-hidden>
          <IconComponent size={22} strokeWidth={2.1} />
        </span>
      </div>
      <h3 className="service-card-title">{title}</h3>
      <p className="service-card-text">{text}</p>
    </article>
  )
}

export default ServiceCard
