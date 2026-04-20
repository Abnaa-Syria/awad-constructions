import ctaBackgroundImage from '../imgs/daniel-mccullough-HtBlQdxfG9k-unsplash.jpg'
import Reveal from '@/components/Reveal'

function CTASection() {
  return (
    <section
      className="section cta-section"
      style={{
        backgroundImage: `linear-gradient(125deg, rgba(12, 36, 62, 0.88), rgba(46, 97, 160, 0.8)), url(${ctaBackgroundImage})`,
      }}
    >
      <Reveal>
        <div className="container">
          <div className="cta-wrap reveal-stagger">
            <span className="cta-badge">جاهزون لخدمتكم</span>
            <h2>هل لديكم مشروع جديد؟</h2>
            <p>
              يسعدنا أن نكون شريككم في التنفيذ، وأن نقدم لكم حلولًا احترافية تناسب طبيعة مشروعكم
              واحتياجاتكم.
            </p>
            <div className="cta-actions">
              <a href="#contact" className="primary-btn cta-primary">
                اطلب استشارة
              </a>
              <a href="#contact" className="secondary-btn light cta-secondary">
                تواصل معنا
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default CTASection
