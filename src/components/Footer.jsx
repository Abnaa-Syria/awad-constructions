import companyLogo from '@/imgs/Logo.png'
import Reveal from '@/components/Reveal'

const links = ['الرئيسية', 'من نحن', 'خدماتنا', 'أعمالنا', 'المدونة', 'تواصل معنا']

function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <Reveal>
        <>
          <div className="container footer-grid reveal-stagger">
            <div>
              <div className="footer-brand">
                <img
                  className="footer-logo"
                  src={companyLogo}
                  alt=""
                  width={140}
                  height={42}
                  decoding="async"
                />
                <h3>شركة عواد الظفيري للمقاولات</h3>
              </div>
              <p>تنفيذ احترافي، جودة عالية، والتزام يليق بثقة عملائنا.</p>
            </div>

            <div>
              <h4>روابط سريعة</h4>
              <ul>
                {links.map((link) => (
                  <li key={link}>
                    <a href="#home">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4>معلومات التواصل</h4>
              <ul className="contact-list">
                <li>المنطقة الشرقية - الخفجي - حي الريان</li>
                <li>طريق الملك عبدالله بن عبدالعزيز</li>
                <li>aldhefeeri@awadest.com</li>
                <li>0500005952</li>
                <li>0563059593</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              جميع الحقوق محفوظة © {new Date().getFullYear()} تصميم{' '}
              <a
                href="https://www.qeematech.net/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Qeema-Tech
              </a>
            </p>
          </div>
        </>
      </Reveal>
    </footer>
  )
}

export default Footer
