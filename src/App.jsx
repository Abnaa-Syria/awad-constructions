import {
  Building2,
  CalendarCheck2,
  CheckCircle2,
  ShieldCheck,
  Home,
  Store,
  Landmark,
  Wrench,
  Hammer,
  PaintBucket,
  Zap,
  Droplets,
  ArrowUpLeft,
} from 'lucide-react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SectionHeader from './components/SectionHeader'
import FeatureCard from './components/FeatureCard'
import ServiceCard from './components/ServiceCard'
import ProjectCard from './components/ProjectCard'
import BlogCard from './components/BlogCard'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import GroupCompanyCard from './components/GroupCompanyCard'
import VisionGoalsBlock from './components/VisionGoalsBlock'
import Reveal from './components/Reveal'
import mosqueProjectImage from './imgs/Screenshot 2026-04-20 183629.png'
import aboutSectionImage from './imgs/Screenshot 2026-04-20 183739.png'
import heroBackgroundImage from './imgs/ej-yao-D46mXLsQRJw-unsplash (1).jpg'

const imageModules = import.meta.glob('./imgs/*.png', {
  eager: true,
  import: 'default',
})

const clientImages = Object.entries(imageModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, imagePath]) => imagePath)

const pickImage = (index) =>
  clientImages.length > 0 ? clientImages[index % clientImages.length] : undefined

const features = [
  {
    icon: CheckCircle2,
    title: 'جودة التنفيذ',
    text: 'نلتزم بتقديم أعمال تنفيذ عالية الجودة وفق أفضل الممارسات الفنية والمعايير المعتمدة.',
  },
  {
    icon: CalendarCheck2,
    title: 'الالتزام بالمواعيد',
    text: 'نحرص على تنفيذ وتسليم المشاريع ضمن الجداول الزمنية المتفق عليها.',
  },
  {
    icon: Building2,
    title: 'خبرة فنية وهندسية',
    text: 'يمتلك فريقنا خبرة عملية ومهنية في تنفيذ مختلف أنواع المشاريع بكفاءة عالية.',
  },
  {
    icon: ShieldCheck,
    title: 'ثقة ومصداقية',
    text: 'نبني علاقتنا مع عملائنا على الوضوح، وحسن التعامل، وتحقيق النتائج.',
  },
]

const services = [
  { icon: Home, title: 'المشاريع السكنية', text: 'حلول تنفيذ متكاملة للمباني السكنية.' },
  { icon: Store, title: 'المشاريع التجارية', text: 'تنفيذ يواكب متطلبات الأعمال الحديثة.' },
  { icon: Landmark, title: 'المشاريع التعليمية والإدارية', text: 'بيئات عمل وتعليم عملية وآمنة.' },
  { icon: Wrench, title: 'مشاريع المساجد والترميم', text: 'عناية بالتفاصيل والطابع المعماري.' },
  { icon: Hammer, title: 'تنفيذ الأعمال الإنشائية', text: 'أساس متين وفق المواصفات المعتمدة.' },
  { icon: PaintBucket, title: 'التشطيبات المعمارية', text: 'تشطيبات دقيقة بمظهر احترافي راقٍ.' },
  { icon: Zap, title: 'الأعمال الكهربائية', text: 'أنظمة كهربائية موثوقة وعالية الكفاءة.' },
  { icon: Droplets, title: 'أعمال المياه والصرف', text: 'شبكات متقنة بخبرة تنفيذية متخصصة.' },
]

const projects = [
  { title: 'مشاريع سكنية', label: 'صورة بديلة: مشاريع سكنية' },
  { title: 'مشاريع تجارية', label: 'صورة بديلة: مشاريع تجارية' },
  { title: 'مشاريع تعليمية وإدارية', label: 'صورة بديلة: مشاريع تعليمية وإدارية' },
  { title: 'مشاريع مساجد وترميم', label: 'صورة بديلة: مشاريع مساجد وترميم' },
]

const blogs = [
  {
    title: 'كيف تختار شركة مقاولات مناسبة لمشروعك؟',
    excerpt:
      'مجموعة من العوامل الأساسية التي تساعدك في اختيار الجهة المناسبة لتنفيذ مشروعك بكفاءة واحترافية.',
    placeholder: 'صورة بديلة: اختيار شركة المقاولات',
  },
  {
    title: 'أهمية الالتزام بالجودة في تنفيذ المشاريع',
    excerpt:
      'الجودة ليست خيارًا إضافيًا، بل عنصر أساسي ينعكس على عمر المشروع وكفاءته وقيمته.',
    placeholder: 'صورة بديلة: جودة التنفيذ',
  },
  {
    title: 'مراحل التنفيذ الناجح لأي مشروع إنشائي',
    excerpt:
      'من التخطيط الأولي وحتى التسليم النهائي، هناك مراحل رئيسية تضمن نجاح التنفيذ وتحقيق أفضل النتائج.',
    placeholder: 'صورة بديلة: مراحل التنفيذ',
  },
]

const groupCompanies = [
  {
    name: 'شركة عواد الظفيري للمقاولات العامة',
    activity: 'المقاولات',
    summary: 'تنفذ المشاريع الإنشائية والبنية التحتية والتشطيبات باحترافية عالية.',
  },
  {
    name: 'شركة عواد الظفيري للعقارات',
    activity: 'العقارات',
    summary: 'تطوير وإدارة الأملاك وبيع وتأجير العقارات وفق أفضل الممارسات.',
  },
  {
    name: 'شركة نسيم البرد للتبريد والتكييف',
    activity: 'التبريد والتكييف',
    summary: 'تصميم وتنفيذ وصيانة أنظمة التكييف والتبريد للمشاريع السكنية والتجارية.',
  },
  {
    name: 'فرع 3M الخفجي',
    activity: 'زينة السيارات',
    summary: 'وكالة حصرية ومعتمدة لتقديم حلول حماية وتجميل السيارات بجودة موثوقة.',
  },
  {
    name: 'جيوشيلد فرع الخفجي',
    activity: 'زينة السيارات',
    summary: 'خدمات متخصصة لحماية السيارات والعناية بها وفق معايير فنية دقيقة.',
  },
  {
    name: 'جيوشيلد فرع الأحساء',
    activity: 'زينة السيارات',
    summary: 'امتداد لخدمات الحماية والعزل والزينة بخبرة تشغيلية معتمدة.',
  },
  {
    name: 'مغسلة عواد الظفيري للسيارات',
    activity: 'غسيل وتلميع السيارات',
    summary: 'مغسلة متخصصة في غسيل وتلميع وتنظيف السيارات والشاحنات والباصات.',
  },
  {
    name: 'شركة عواد الظفيري التجارية بلس',
    activity: 'استيراد المشروبات',
    summary: 'نشاط تجاري لاستيراد وتوزيع المشروبات بجودة واعتمادية عالية.',
  },
  {
    name: 'مطعم هليل فرع الخفجي',
    activity: 'تقديم الوجبات',
    summary: 'وكالة حصرية لتقديم الوجبات والخدمات الغذائية بمستوى احترافي.',
  },
  {
    name: 'شركة The Bright View للشقق المخدومة',
    activity: 'ضيافة وسياحة',
    summary: 'تقديم خدمات إقامة مريحة للشقق المخدومة بمعايير جودة عالية.',
  },
  {
    name: 'شركة وتد الشرق للشقق المخدومة',
    activity: 'ضيافة وسياحة',
    summary: 'حلول ضيافة متكاملة تستهدف راحة الضيوف وتجربة إقامة مميزة.',
  },
  {
    name: 'شركة إيوان للشقق المخدومة',
    activity: 'ضيافة وسياحة',
    summary: 'خدمات سكن وضيافة احترافية مدعومة بإدارة تشغيلية موثوقة.',
  },
]

function App() {
  const heroImages = [heroBackgroundImage]
  const aboutImage = aboutSectionImage
  const featuredProjectImage = mosqueProjectImage

  const projectsWithImages = projects.map((project, index) => ({
    ...project,
    image: pickImage(6 + index),
  }))

  const blogsWithImages = blogs.map((blog, index) => ({
    ...blog,
    image: pickImage(10 + index),
  }))

  const companiesWithImages = groupCompanies.map((company, index) => ({
    ...company,
    image: pickImage(13 + index),
  }))

  return (
    <div className="app-shell" id="home">
      <Navbar />

      <main>
        <Hero images={heroImages} />

        <section className="section section-light">
          <Reveal>
            <div className="container">
              <SectionHeader
                title="لماذا يختارنا عملاؤنا؟"
                subtitle="نعمل وفق منهج واضح يجمع بين الجودة، الالتزام، والخبرة الفنية، لنقدم تجربة تنفيذ احترافية تليق بثقة عملائنا."
              />
              <div className="feature-grid reveal-stagger">
                {features.map((item) => (
                  <FeatureCard key={item.title} {...item} />
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section className="section section-white" id="about">
          <Reveal>
            <div className="container">
            <div className="about-grid reveal-stagger">
              <div className="about-media">
                {aboutImage ? (
                  <img className="media-image" src={aboutImage} alt="صورة فريق العمل بالموقع" />
                ) : (
                  <span className="image-chip">صورة بديلة: فريق هندسي بالموقع</span>
                )}
              </div>
              <div className="about-content">
                <span className="eyebrow">تعريف بالشركة</span>
                <h2>من نحن</h2>
                <p>
                  نحن في شركة عواد الظفيري للمقاولات نعمل على تقديم خدمات تنفيذ احترافية ترتكز على
                  الجودة، والالتزام، والدقة، ونسعى إلى تلبية احتياجات عملائنا في مختلف أنواع
                  المشاريع من خلال فريق عمل هندسي وفني يمتلك الخبرة والقدرة على تنفيذ الأعمال
                  بكفاءة عالية.
                </p>
                <ul className="about-points">
                  <li>حلول تنفيذ متكاملة</li>
                  <li>كفاءات فنية وهندسية</li>
                  <li>التزام بالجودة في جميع المراحل</li>
                </ul>
              </div>
            </div>
            <VisionGoalsBlock />
            </div>
          </Reveal>
        </section>

        <section className="section section-light" id="services">
          <Reveal>
            <div className="container">
              <SectionHeader
                title="خدماتنا"
                subtitle="نقدم مجموعة متكاملة من الخدمات التنفيذية والفنية التي تلبي احتياجات المشاريع بمختلف أنواعها، مع الحرص على جودة التنفيذ والالتزام بالمواصفات الفنية ومتطلبات كل مشروع."
              />
              <div className="service-grid reveal-stagger">
                {services.map((service) => (
                  <ServiceCard key={service.title} {...service} />
                ))}
              </div>
              <div className="center-action">
                <a className="outline-action" href="#contact">
                  عرض المزيد
                  <ArrowUpLeft size={16} />
                </a>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="section section-white" id="group-companies">
          <Reveal>
            <div className="container">
              <SectionHeader
                title="شركات المجموعة"
                subtitle="تضم مجموعة عواد الظفيري التجارية باقة متنوعة من الشركات والخدمات المتكاملة، ما يعزز قدرتنا على تلبية احتياجات العملاء عبر قطاعات متعددة."
              />
              <div className="group-company-grid reveal-stagger">
                {companiesWithImages.map((company, index) => (
                  <GroupCompanyCard key={company.name} index={index + 1} {...company} />
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <CTASection />

        <section className="section section-white" id="projects">
          <Reveal>
            <div className="container">
              <SectionHeader
                title="مشاريعنا"
                subtitle="نفخر بتنفيذ مجموعة متنوعة من المشاريع التي تعكس جودة أعمالنا وحرصنا على تقديم نتائج تليق بثقة عملائنا."
              />

              <article className="featured-project">
              <div className="featured-project-media">
                {featuredProjectImage ? (
                  <img
                    className="media-image"
                    src={featuredProjectImage}
                    alt="مشروع جامع الملك عبدالعزيز بمحافظة الخفجي"
                  />
                ) : (
                  <span className="image-chip">
                    صورة بديلة: جامع الملك عبدالعزيز بمحافظة الخفجي
                  </span>
                )}
              </div>
              <div className="featured-project-content">
                <h3>جامع الملك عبدالعزيز بمحافظة الخفجي</h3>
                <p>
                  يعد هذا المشروع من المشاريع المميزة التي نفخر بتنفيذها، حيث يعكس مستوى العناية
                  بالتفاصيل وجودة التنفيذ في الأعمال المعمارية والإنشائية والتشطيبية، كما يعبر عن
                  قدرتنا على تنفيذ المشاريع ذات الطابع الخاص باحترافية عالية.
                </p>
              </div>
              </article>

              <div className="project-grid reveal-stagger">
                {projectsWithImages.map((project) => (
                  <ProjectCard key={project.title} {...project} />
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section className="section section-light" id="blog">
          <Reveal>
            <div className="container">
              <SectionHeader
                title="المدونة"
                subtitle="تابع أحدث المقالات والموضوعات المرتبطة بقطاع المقاولات والتنفيذ والتشطيبات، واستفد من محتوى يعكس خبرتنا ورؤيتنا المهنية."
              />
              <div className="blog-grid reveal-stagger">
                {blogsWithImages.map((blog) => (
                  <BlogCard key={blog.title} {...blog} />
                ))}
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
