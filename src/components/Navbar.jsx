import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import companyLogo from '@/imgs/Logo.png'

const navItems = [
  { label: 'الرئيسية', href: '#home' },
  { label: 'من نحن', href: '#about' },
  { label: 'خدماتنا', href: '#services' },
  { label: 'أعمالنا', href: '#projects' },
  { label: 'المدونة', href: '#blog' },
  { label: 'تواصل معنا', href: '#contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setIsOpen(false)

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-wrap">
        <a href="#home" className="brand">
          <img
            className="brand-logo"
            src={companyLogo}
            alt="شركة عواد الظفيري للمقاولات"
            width={160}
            height={48}
            decoding="async"
          />
          <span className="brand-text">شركة عواد الظفيري للمقاولات</span>
        </a>

        <nav className="desktop-nav" aria-label="روابط رئيسية">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="header-cta">
          اطلب استشارة
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-label={isOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={`mobile-panel ${isOpen ? 'open' : ''}`}>
        <nav className="mobile-nav" aria-label="روابط الجوال">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a href="#contact" className="header-cta mobile" onClick={closeMenu}>
            اطلب استشارة
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
