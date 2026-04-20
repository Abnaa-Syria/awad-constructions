import gmPortrait from '@/imgs/WhatsApp-Image-2023-02-21-at-9.58.22-AM.jpeg'

function GeneralManagerMessage() {
  return (
    <article className="gm-message" aria-labelledby="gm-message-heading">
      <div className="gm-message-grid reveal-stagger">
        <div className="gm-message-copy">
          <h2 id="gm-message-heading" className="gm-message-title">
            كلمة المدير العام
          </h2>
          <p className="gm-message-eyebrow">لمجموعة عواد الظفيري</p>
          <div className="gm-message-body">
            <p>
              نفتخر بما حققناه على مدى سنوات من الخبرة الفنية والعملية في مختلف مشاريع المقاولات
              السكنية والتجارية، وما بنيناه من علاقات ثقة مع عملائنا شركاء النجاح في كل مرحلة من
              مراحل التنفيذ.
            </p>
            <p>
              نؤمن بأن التميز ليس خياراً بل التزام؛ لذلك نواصل العمل بكل طموح على تطوير أدائنا
              والحفاظ على أعلى معايير الجودة في كل مشروع نتشرف بتسليمه، لنكون عند حسن ظن من
              اختاروا العمل معنا.
            </p>
          </div>
          <p className="gm-message-signature">المهندس / عواد جدوع الظفيري</p>
        </div>
        <figure className="gm-message-media">
          <img
            src={gmPortrait}
            alt="المهندس عواد جدوع الظفيري — المدير العام لمجموعة عواد الظفيري"
            width={640}
            height={480}
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>
    </article>
  )
}

export default GeneralManagerMessage
