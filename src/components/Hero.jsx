function Hero({ images = [] }) {
  const [heroMain] = images

  const heroBackgroundStyle = heroMain
    ? {
        backgroundImage: `linear-gradient(115deg, rgba(9, 28, 51, 0.72), rgba(46, 97, 160, 0.58)), url("${heroMain}")`,
      }
    : undefined

  return (
    <section className="hero-section" aria-labelledby="hero-title" style={heroBackgroundStyle}>
      <div className="hero-bg-layers" aria-hidden="true">
        <span className="hero-bg-layer one"></span>
        <span className="hero-bg-layer two"></span>
        <span className="hero-bg-layer three"></span>
      </div>

      <div className="container hero-center">
        <div className="hero-content centered">
          <span className="eyebrow hero-eyebrow">شركة عواد الظفيري للمقاولات</span>
          <h1 id="hero-title">نبني مشاريعنا بثقة... وننفذها بجودة تليق بتطلعاتكم</h1>
          <p>
            شركة عواد الظفيري للمقاولات تقدم حلولًا متكاملة في تنفيذ المشاريع السكنية والتجارية
            والتعليمية وأعمال الترميم والتشطيبات، وفق أعلى معايير الجودة والالتزام والدقة في
            التنفيذ.
          </p>
          <div className="hero-actions centered">
            <a href="#about" className="primary-btn">
              تعرف علينا
            </a>
            <a href="#contact" className="secondary-btn light">
              تواصل معنا
            </a>
          </div>
          <div className="hero-badges centered">
            <span>+15 عامًا خبرة تنفيذية</span>
            <span>التزام كامل بالمواصفات</span>
            <span>فريق هندسي متخصص</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
