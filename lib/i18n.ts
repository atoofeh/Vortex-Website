export type Locale = "en" | "ar";

export const defaultLocale: Locale = "en";

export const translations = {
  en: {
    language: { english: "English", arabic: "العربية", switchTo: "Switch to Arabic" },
    navigation: {
      capabilities: "Capabilities",
      architecture: "Architecture",
      about: "About",
      book: "Book Consultation",
      menu: "Main navigation",
    },
    hero: {
      eyebrow: "Sovereign intelligence",
      title: "Intelligence without boundaries",
      description: "VORTEX engineers private AI infrastructure, intelligent software, enterprise platforms, premium digital experiences, and production-ready applications from architecture to deployment.",
      bridge: "From private AI infrastructure to the digital products that run on it.",
      primary: "Start a Project",
      secondary: "Explore Capabilities",
      strip: "AI Infrastructure · Intelligent Software · Web · Mobile · Enterprise Systems",
    },
    architecture: {
      eyebrow: "One connected engineering system",
      title: "We engineer every layer.",
      description: "Infrastructure, intelligence, software, and experience are designed as one system — so the technology works together in production.",
      infrastructure: "Private Infrastructure",
      intelligence: "AI & Intelligence",
      application: "Application & Business Logic",
      experience: "Web / Mobile / Enterprise Experiences",
      note: "Architecture is the product. Every layer is accountable.",
    },
    build: {
      eyebrow: "Capabilities",
      title: "What We Build",
      subtitle: "From infrastructure to interface, VORTEX engineers complete digital systems.",
      explore: "Explore",
      ai: { title: "Artificial Intelligence", short: "Private intelligence and AI-native systems.", description: "Private AI systems that reason over your knowledge, act across your tools, and remain inside your control.", points: ["Private AI", "Machine Learning", "AI Agents", "RAG Systems", "Intelligent Automation", "Computer Vision"], cta: "Explore AI" },
      web: { title: "Digital Experiences", short: "Premium websites and web platforms.", description: "High-performance websites, portals, and web applications engineered for clarity, speed, and scale.", points: ["Corporate websites", "Interactive websites", "Web applications", "Customer portals", "Landing experiences", "Custom frontend platforms"], cta: "Explore Web Engineering" },
      mobile: { title: "Mobile Products", short: "Production applications for mobile environments.", description: "iOS, Android, and cross-platform products connected to secure backend infrastructure and real business workflows.", points: ["iOS applications", "Android applications", "Cross-platform applications", "API-connected systems", "Enterprise mobile tools"], cta: "Explore Mobile" },
      enterprise: { title: "Enterprise Platforms", short: "Systems built around real operations.", description: "ERP modules, dashboards, internal platforms, and workflow systems that turn complex operations into clear action.", points: ["ERP modules", "Internal operations platforms", "Dashboards", "Workflow systems", "Management portals", "Database-driven applications"], cta: "Explore Enterprise Systems" },
      infrastructure: { title: "Infrastructure & Cloud", short: "Private compute, cloud, and deployment.", description: "Secure foundations for demanding systems — from private GPU clusters and Kubernetes to cloud architecture and on-premise deployment.", points: ["Private AI infrastructure", "GPU clusters", "Cloud architecture", "On-premise systems", "DevOps", "Kubernetes"], cta: "Explore Infrastructure" },
    },
    beyond: {
      eyebrow: "The bridge from compute to impact",
      title: "Beyond Infrastructure",
      statement: "We engineer the software that runs on it.",
      description: "VORTEX combines infrastructure engineering, AI, software development, and product design to create complete technology systems rather than disconnected components.",
      digital: { title: "Digital Experiences", description: "Premium websites and customer-facing platforms engineered for performance, scalability, and strong user experience." },
      mobile: { title: "Mobile Products", description: "Production-ready mobile applications connected to secure backend infrastructure." },
      enterprise: { title: "Enterprise Software", description: "ERP modules, dashboards, internal systems, portals, and workflow platforms built around real business operations." },
      intelligent: { title: "Intelligent Applications", description: "AI-native products, automation systems, assistants, agents, and decision-support platforms." },
    },
    process: {
      eyebrow: "Engineering method",
      title: "From Idea to Production",
      description: "A disciplined path from a business problem to a secure, observable system that can keep evolving.",
      discover: { title: "Discover", description: "Understand the business problem, users, workflows, infrastructure, objectives, and requirements." },
      architect: { title: "Architect", description: "Define system architecture, technology stack, security model, user experience, and deployment strategy." },
      design: { title: "Design", description: "Create the interface, product experience, interaction system, and visual direction." },
      engineer: { title: "Engineer", description: "Build frontend, backend, APIs, AI components, databases, mobile applications, and infrastructure." },
      deploy: { title: "Deploy", description: "Move the solution into production with security, monitoring, optimization, and documentation." },
      evolve: { title: "Evolve", description: "Continue improving and extending the system as requirements change." },
    },
    trust: {
      eyebrow: "Capability-based trust",
      title: "Specificity is the signal.",
      description: "No inflated numbers or borrowed logos. Credibility comes from the engineering capabilities VORTEX brings to every engagement.",
      items: ["Full-Stack Engineering", "AI-Native Development", "Web & Mobile Engineering", "Private Deployment Capability", "Enterprise Architecture", "Security-First Engineering", "End-to-End Ownership"],
    },
    technology: {
      eyebrow: "Engineering layers",
      title: "A stack built for ownership.",
      description: "A focused technology palette across intelligence, applications, data, and infrastructure — selected for the system, not for a logo wall.",
      intelligence: { title: "Intelligence", items: ["LLMs", "Computer Vision", "RAG", "Agent Systems", "Machine Learning"] },
      applications: { title: "Applications", items: ["React", "Next.js", "TypeScript", "Python", "FastAPI", "Node.js"] },
      data: { title: "Data & Integrations", items: ["SQL", "NoSQL", "Vector databases", "APIs", "Enterprise integrations"] },
      infrastructure: { title: "Infrastructure", items: ["Docker", "Kubernetes", "Cloud", "Private GPU infrastructure", "CI/CD"] },
    },
    about: {
      eyebrow: "Who we are",
      title: "A technology engineering company.",
      description: "VORTEX AI & IT Solutions builds intelligent software, digital products, enterprise platforms, and private AI infrastructure.",
      detail: "We work across the complete technology stack — from infrastructure and intelligence to backend systems, interfaces, mobile applications, and production deployment.",
    },
    closing: {
      eyebrow: "Direct engineering engagement",
      title: "Ready to build your intelligence infrastructure?",
      description: "Direct engineering collaboration with the team designing the infrastructure, intelligence, and software behind your next system.",
      primary: "Start a Project",
      secondary: "Explore Capabilities",
      status: "Private perimeter · Ready for the next system",
    },
    booking: {
      eyebrow: "VORTEX consultation",
      title: "Start with the system.",
      step: "Step",
      of: "of",
      serviceQuestion: "What would you like us to build?",
      briefQuestion: "Describe the solution you need",
      briefHint: "Include important features, integrations, users, or constraints.",
      briefPlaceholder: "Describe the solution that you need...",
      contactQuestion: "Who should receive the technical assessment?",
      name: "Full Name",
      email: "Work Email",
      company: "Organisation / Company",
      next: "Next",
      back: "Back",
      submit: "Submit Assessment Brief",
      sending: "Sending...",
      close: "Close consultation form",
      successTitle: "Assessment brief prepared.",
      successDescription: "Your request has been sent to our engineering team. We will reply to",
      return: "Return to VORTEX",
      categories: {
        aiGroup: "Artificial Intelligence",
        softwareGroup: "Software Engineering",
        infrastructureGroup: "Infrastructure",
        ai: "Artificial Intelligence",
        website: "Website Development",
        webapp: "Web Application",
        mobile: "Mobile Application",
        custom: "Custom Software",
        enterprise: "Enterprise Platform",
        erp: "ERP Development",
        automation: "Intelligent Automation",
        cloud: "Cloud Architecture",
        private: "Private Infrastructure",
        devops: "DevOps",
        gpu: "GPU Infrastructure",
      },
    },
    footer: { location: "Amman, Jordan · Engineering every layer.", capabilities: "Capabilities", architecture: "Architecture", about: "About", email: "Email" },
  },
  ar: {
    language: { english: "English", arabic: "العربية", switchTo: "التبديل إلى الإنجليزية" },
    navigation: { capabilities: "القدرات", architecture: "الهندسة المعمارية", about: "من نحن", book: "احجز استشارة", menu: "التنقل الرئيسي" },
    hero: {
      eyebrow: "ذكاء سيادي",
      title: "ذكاء بلا حدود",
      description: "تطوّر VORTEX بنية تحتية خاصة للذكاء الاصطناعي، وبرمجيات ذكية، ومنصات مؤسسية، وتجارب رقمية متقدمة، وتطبيقات جاهزة للإنتاج — من التصميم المعماري حتى الإطلاق.",
      bridge: "من البنية التحتية الخاصة للذكاء الاصطناعي إلى المنتجات الرقمية التي تعمل فوقها.",
      primary: "ابدأ مشروعاً",
      secondary: "استكشف القدرات",
      strip: "بنية AI التحتية · البرمجيات الذكية · الويب · الجوال · الأنظمة المؤسسية",
    },
    architecture: { eyebrow: "نظام هندسي متصل", title: "نهندس كل طبقة.", description: "البنية التحتية، والذكاء، والبرمجيات، والتجربة تُصمّم كنظام واحد — لتعمل التقنية معاً في بيئة الإنتاج.", infrastructure: "البنية التحتية الخاصة", intelligence: "الذكاء الاصطناعي والذكاء", application: "التطبيق ومنطق الأعمال", experience: "تجارب الويب / الجوال / المؤسسات", note: "المعمارية هي المنتج. وكل طبقة تحت مسؤوليتنا." },
    build: {
      eyebrow: "القدرات", title: "ما الذي نبنيه؟", subtitle: "من البنية التحتية إلى الواجهة، تطوّر VORTEX أنظمة رقمية متكاملة.", explore: "استكشف",
      ai: { title: "الذكاء الاصطناعي", short: "ذكاء خاص وأنظمة مبنية حول AI.", description: "أنظمة AI خاصة تفهم معرفتك، وتتفاعل مع أدواتك، وتبقى تحت سيطرتك.", points: ["Private AI", "التعلم الآلي", "وكلاء AI", "أنظمة RAG", "الأتمتة الذكية", "الرؤية الحاسوبية"], cta: "استكشف AI" },
      web: { title: "التجارب الرقمية", short: "مواقع ومنصات ويب متقدمة.", description: "مواقع وتطبيقات ويب وبوابات عالية الأداء، مصممة للوضوح والسرعة وقابلية التوسع.", points: ["مواقع الشركات", "مواقع تفاعلية", "تطبيقات الويب", "بوابات العملاء", "تجارب الهبوط", "منصات الواجهة المخصصة"], cta: "استكشف هندسة الويب" },
      mobile: { title: "المنتجات الجوالة", short: "تطبيقات إنتاج لبيئات الجوال.", description: "منتجات iOS وAndroid ومتعددة المنصات، متصلة ببنية خلفية آمنة وبعمليات أعمال حقيقية.", points: ["تطبيقات iOS", "تطبيقات Android", "تطبيقات متعددة المنصات", "أنظمة متصلة عبر API", "أدوات جوالة للمؤسسات"], cta: "استكشف الجوال" },
      enterprise: { title: "المنصات المؤسسية", short: "أنظمة مبنية حول العمليات الحقيقية.", description: "وحدات ERP ولوحات معلومات ومنصات داخلية وأنظمة سير عمل تحوّل العمليات المعقدة إلى قرارات واضحة.", points: ["وحدات ERP", "منصات العمليات الداخلية", "لوحات المعلومات", "أنظمة سير العمل", "بوابات الإدارة", "تطبيقات مرتبطة بقواعد البيانات"], cta: "استكشف الأنظمة المؤسسية" },
      infrastructure: { title: "البنية التحتية والسحابة", short: "حوسبة خاصة وسحابة وإطلاق آمن.", description: "أسس آمنة للأنظمة الحساسة — من عناقيد GPU الخاصة وKubernetes إلى البنية السحابية والنشر المحلي.", points: ["بنية AI خاصة", "عناقيد GPU", "المعمارية السحابية", "الأنظمة المحلية", "DevOps", "Kubernetes"], cta: "استكشف البنية التحتية" },
    },
    beyond: { eyebrow: "الجسر من الحوسبة إلى الأثر", title: "ما بعد البنية التحتية", statement: "نطوّر البرمجيات التي تعمل فوقها.", description: "تجمع VORTEX بين هندسة البنية التحتية والذكاء الاصطناعي وتطوير البرمجيات وتصميم المنتجات لبناء أنظمة تقنية متكاملة، لا مكونات منفصلة.", digital: { title: "التجارب الرقمية", description: "مواقع ومنصات موجهة للعملاء، مصممة للأداء وقابلية التوسع وتجربة استخدام قوية." }, mobile: { title: "المنتجات الجوالة", description: "تطبيقات جوال جاهزة للإنتاج ومتصلة ببنية خلفية آمنة." }, enterprise: { title: "البرمجيات المؤسسية", description: "وحدات ERP ولوحات معلومات وأنظمة داخلية وبوابات ومنصات سير عمل مبنية حول الأعمال." }, intelligent: { title: "التطبيقات الذكية", description: "منتجات AI وأنظمة أتمتة ومساعدون ووكلاء ومنصات دعم القرار." } },
    process: { eyebrow: "المنهجية الهندسية", title: "من الفكرة إلى الإنتاج", description: "مسار منضبط ينتقل من مشكلة الأعمال إلى نظام آمن وقابل للمراقبة والتطوير.", discover: { title: "اكتشاف", description: "فهم مشكلة الأعمال والمستخدمين وسير العمل والبنية التحتية والأهداف والمتطلبات." }, architect: { title: "معمارية", description: "تحديد معمارية النظام ومكدس التقنية ونموذج الأمان وتجربة الاستخدام واستراتيجية الإطلاق." }, design: { title: "تصميم", description: "إنشاء الواجهة وتجربة المنتج ونظام التفاعل والاتجاه البصري." }, engineer: { title: "هندسة", description: "بناء الواجهة والخلفية وواجهات API ومكونات AI وقواعد البيانات وتطبيقات الجوال والبنية التحتية." }, deploy: { title: "إطلاق", description: "نقل الحل إلى الإنتاج مع الأمان والمراقبة والتحسين والتوثيق." }, evolve: { title: "تطوير مستمر", description: "الاستمرار في تحسين النظام وتوسيعه مع تغير المتطلبات." } },
    trust: { eyebrow: "الثقة المبنية على القدرة", title: "التحديد هو الإشارة.", description: "لا أرقام مبالغاً فيها ولا شعارات مستعارة. تأتي المصداقية من القدرات الهندسية التي تقدمها VORTEX في كل مشروع.", items: ["هندسة متكاملة Full-Stack", "تطوير أصلي بالذكاء الاصطناعي", "هندسة الويب والجوال", "إمكانات النشر الخاص", "المعمارية المؤسسية", "هندسة تضع الأمان أولاً", "ملكية كاملة من البداية للنهاية"] },
    technology: { eyebrow: "طبقات الهندسة", title: "مكدس تقني مصمم للملكية.", description: "مجموعة تقنية مركزة عبر الذكاء والتطبيقات والبيانات والبنية التحتية — تُختار للنظام، لا لعرض الشعارات.", intelligence: { title: "الذكاء", items: ["LLMs", "الرؤية الحاسوبية", "RAG", "أنظمة الوكلاء", "التعلم الآلي"] }, applications: { title: "التطبيقات", items: ["React", "Next.js", "TypeScript", "Python", "FastAPI", "Node.js"] }, data: { title: "البيانات والتكاملات", items: ["SQL", "NoSQL", "قواعد البيانات المتجهية", "APIs", "تكاملات المؤسسات"] }, infrastructure: { title: "البنية التحتية", items: ["Docker", "Kubernetes", "Cloud", "بنية GPU خاصة", "CI/CD"] } },
    about: { eyebrow: "من نحن", title: "شركة هندسة تقنية.", description: "VORTEX AI & IT Solutions شركة هندسة تقنية تبني البرمجيات الذكية والمنتجات الرقمية والمنصات المؤسسية والبنية التحتية الخاصة للذكاء الاصطناعي.", detail: "نعمل عبر كامل المكدس التقني — من البنية التحتية والذكاء إلى الأنظمة الخلفية والواجهات وتطبيقات الجوال والإطلاق في الإنتاج." },
    closing: { eyebrow: "تعاون هندسي مباشر", title: "هل أنت مستعد لبناء بنية الذكاء الاصطناعي الخاصة بك؟", description: "تعاون هندسي مباشر مع الفريق الذي يصمم البنية التحتية والذكاء والبرمجيات خلف نظامك القادم.", primary: "ابدأ مشروعاً", secondary: "استكشف القدرات", status: "محيط خاص · جاهزون للنظام القادم" },
    booking: { eyebrow: "استشارة VORTEX", title: "ابدأ من النظام.", step: "الخطوة", of: "من", serviceQuestion: "ما الذي تريد منا بناءه؟", briefQuestion: "صف الحل الذي تحتاجه", briefHint: "أضف الميزات والتكاملات والمستخدمين أو القيود المهمة.", briefPlaceholder: "صف الحل الذي تحتاجه...", contactQuestion: "من يجب أن يستلم التقييم التقني؟", name: "الاسم الكامل", email: "البريد الإلكتروني للعمل", company: "المؤسسة / الشركة", next: "التالي", back: "رجوع", submit: "إرسال موجز التقييم", sending: "جارٍ الإرسال...", close: "إغلاق نموذج الاستشارة", successTitle: "تم إعداد موجز التقييم.", successDescription: "تم إرسال طلبك إلى فريقنا الهندسي. سنرد على", return: "العودة إلى VORTEX", categories: { aiGroup: "الذكاء الاصطناعي", softwareGroup: "هندسة البرمجيات", infrastructureGroup: "البنية التحتية", ai: "تطوير نظام AI", website: "تطوير موقع", webapp: "تطبيق ويب", mobile: "تطبيق جوال", custom: "برمجيات مخصصة", enterprise: "منصة مؤسسية", erp: "تطوير ERP", automation: "أتمتة ذكية", cloud: "معمارية سحابية", private: "بنية تحتية خاصة", devops: "DevOps", gpu: "بنية GPU" } },
    footer: { location: "عمّان، الأردن · نهندس كل طبقة.", capabilities: "القدرات", architecture: "المعمارية", about: "من نحن", email: "البريد" },
  },
} as const;

type Widen<T> = T extends string
  ? string
  : T extends readonly (infer Item)[]
    ? ReadonlyArray<Widen<Item>>
    : T extends object
      ? { [Key in keyof T]: Widen<T[Key]> }
      : T;

type TranslationTree = Widen<typeof translations.en>;

export function getTranslation(locale: Locale, path: string): string {
  const value = path.split(".").reduce<unknown>((current, key) => {
    if (current && typeof current === "object" && key in current) return (current as Record<string, unknown>)[key];
    return undefined;
  }, translations[locale] as unknown);

  return typeof value === "string" ? value : path;
}

export type Translations = TranslationTree;
