import { useEffect, useRef, useState } from 'react'

function prefersReducedMotion() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * يظهر المحتوى بحركة خفيفة عند دخول القسم إلى منطقة العرض التقريبية (مرة واحدة لكل عنصر).
 */
function Reveal({ className = '', children, ...rest }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(prefersReducedMotion)

  useEffect(() => {
    if (visible) return

    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          setVisible(true)
          observer.unobserve(entry.target)
        })
      },
      {
        root: null,
        threshold: 0.06,
        rootMargin: '0px 0px -6% 0px',
      }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [visible])

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'reveal--visible' : ''} ${className}`.trim()}
      {...rest}
    >
      {children}
    </div>
  )
}

export default Reveal
