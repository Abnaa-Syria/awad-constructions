import { Eye, Flag } from 'lucide-react'

function VisionGoalsBlock() {
  return (
    <div className="vision-goals-wrap">
      <div className="vision-goals-intro">
        <span className="eyebrow">رؤيتنا وأهدافنا</span>
      </div>
      <div className="vision-goals-grid reveal-stagger">
        <article className="vision-goal-card">
          <header className="vision-goal-head">
            <span className="vision-goal-icon" aria-hidden>
              <Eye size={22} strokeWidth={2.25} />
            </span>
            <h3>رؤيتنا</h3>
          </header>
          <div className="vision-goal-body">
            <p>
              تقديم عمل فني يتسم بالدقة والحرفية ويراعي أصول الصناعة المتعارف عليها وفق أعلى معايير
              الجودة والاشتراطات المنظمة لعمليات البناء بالمملكة والالتزام بكود البناء السعودي.
            </p>
            <p>
              تقديم الحلول الفنية والاقتصادية الملائمة لظروف العملاء المختلفة وأنواع المشروعات
              المتنوعة، حريصين في ذلك على استخدام أفضل التقنيات ووسائل البناء لكسب ثقة عملاؤنا.
            </p>
          </div>
        </article>

        <article className="vision-goal-card vision-goal-card--accent">
          <header className="vision-goal-head">
            <span className="vision-goal-icon vision-goal-icon--accent" aria-hidden>
              <Flag size={22} strokeWidth={2.25} />
            </span>
            <h3>أهدافنا</h3>
          </header>
          <div className="vision-goal-body">
            <p>
              نهدف منذ دخولنا إلى عالم المقاولات إلى إضافة قيمة فنية وعملية إلى القطاع عن طريق
              الاستعانة بالكوادر الفنية والإدارية الرائدة لضمان تعزيز الكفاءة في تنفيذ المشروعات،
              ونسعى إلى التواجد ضمن الفئة الرائدة من مقاولي المملكة.
            </p>
            <p>
              نهدف لقطع خطوة للأمام مع كل مشروع نتشرف بتنفيذه، مثمنين ما لدينا من قدرات وكوادر
              وطموحين للتطور اللامحدود.
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}

export default VisionGoalsBlock
