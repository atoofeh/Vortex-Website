import { BrainCircuit, Code2, Globe2, Server, Smartphone, Workflow } from "lucide-react";

export const marketingServices = [
  { slug: "artificial-intelligence", icon: BrainCircuit,
    en: { title: "Private AI", outcome: "Your knowledge. Under your control.", description: "AI assistants, search, and agents built around your data. Keep control over where they run and who can access them.", scope: "Private assistants · Knowledge search · AI agents" },
    ar: { title: "الذكاء الاصطناعي الخاص", outcome: "معرفتك، تحت سيطرتك.", description: "مساعدون وأدوات بحث ووكلاء ذكاء اصطناعي مبنية حول بياناتك، مع التحكم في مكان تشغيلها ومن يصل إليها.", scope: "مساعدون خاصون · البحث في المعرفة · وكلاء الذكاء الاصطناعي" } },
  { slug: "infrastructure", icon: Server,
    en: { title: "Cloud & Infrastructure", outcome: "A reliable home for your systems.", description: "Private compute, cloud environments, and deployment systems designed around your security, performance, and operating needs.", scope: "Private GPU infrastructure · Cloud · DevOps" },
    ar: { title: "السحابة والبنية التحتية", outcome: "أساس موثوق لأنظمتك.", description: "حوسبة خاصة وبيئات سحابية وأنظمة نشر مصممة لتناسب احتياجاتك من الأمان والأداء والتشغيل.", scope: "حوسبة GPU خاصة · السحابة · عمليات التطوير" } },
  { slug: "enterprise-software", icon: Code2,
    en: { title: "Business Software", outcome: "Make everyday operations easier.", description: "Custom dashboards, internal tools, and enterprise platforms built around the way your team actually works.", scope: "Internal tools · Dashboards · ERP modules" },
    ar: { title: "برمجيات الأعمال", outcome: "بسّط العمل اليومي.", description: "لوحات معلومات وأدوات داخلية ومنصات مؤسسية مصممة حول الطريقة التي يعمل بها فريقك.", scope: "أدوات داخلية · لوحات معلومات · أنظمة إدارة الموارد" } },
  { slug: "automation", icon: Workflow,
    en: { title: "Automation & Integrations", outcome: "Let your tools work together.", description: "Connect your systems and automate repetitive steps so information moves without copying, chasing, and manual handoffs.", scope: "Workflow automation · APIs · System integrations" },
    ar: { title: "الأتمتة والتكامل", outcome: "اجعل أدواتك تعمل معاً.", description: "اربط أنظمتك وأتمت الخطوات المتكررة لتنتقل المعلومات دون النسخ والمتابعة والنقل اليدوي.", scope: "أتمتة سير العمل · واجهات برمجية · تكامل الأنظمة" } },
  { slug: "web-development", icon: Globe2,
    en: { title: "Websites & Web Apps", outcome: "A better front door for your business.", description: "Fast, accessible websites and web applications that help people understand your business and take the next step.", scope: "Company websites · Customer portals · Web apps" },
    ar: { title: "المواقع وتطبيقات الويب", outcome: "واجهة أفضل لعملك.", description: "مواقع وتطبيقات ويب سريعة وسهلة الاستخدام، تساعد الناس على فهم عملك واتخاذ الخطوة التالية.", scope: "مواقع الشركات · بوابات العملاء · تطبيقات الويب" } },
  { slug: "mobile-development", icon: Smartphone,
    en: { title: "Mobile Apps", outcome: "Meet your customers where they are.", description: "iOS and Android applications with clear interfaces, reliable backends, and connections to the systems you already use.", scope: "iOS · Android · Cross-platform apps" },
    ar: { title: "تطبيقات الجوال", outcome: "كن حيث يوجد عملاؤك.", description: "تطبيقات iOS وAndroid بواجهات واضحة وأنظمة خلفية موثوقة، متصلة بالأدوات التي تستخدمها بالفعل.", scope: "iOS · Android · تطبيقات متعددة المنصات" } },
] as const;

export const marketingCopy = {
  en: {
    eyebrow: "VORTEX / Private AI & software engineering", title: "Your AI.", accent: "Your control.",
    description: "Private AI built around your business, running in an environment you control. We build the infrastructure and software to make it useful, from internal tools to websites and apps.",
    primary: "Talk to our team", secondary: "Explore our services", location: "Amman, Jordan · Working worldwide", index: "Built around what you need", indexNote: "Start with the problem. We’ll help with the how.",
    servicesLabel: "01 / Our services", servicesTitle: "Private AI. And what comes with it.", servicesIntro: "Start with AI, or come to us for a standalone software project. We’ll shape the work around what you need.", details: "Explore service",
    methodLabel: "02 / Working together", methodTitle: "From a conversation\nto something useful.", methodIntro: "You don’t need a technical brief to get started. Bring the problem, the idea, or the part that isn’t working.",
    steps: [
      ["Find the right starting point", "We talk through your goals, users, and existing tools, then agree on the scope and a practical approach.", "A clear scope and proposal"],
      ["Build, review, refine", "Design and engineering move together. You review the work as it develops, so decisions stay connected to what you need.", "Work you can see and give feedback on"],
      ["Launch with a plan", "We test, prepare deployment, and document the system. Together, we agree on handover and any ongoing support.", "A tested launch and clear next steps"],
    ],
    approach: "Want to look under the hood?", approachText: "Explore our approach to architecture, security, and maintainability.", engineering: "Our engineering approach",
    aboutLabel: "03 / Meet VORTEX", aboutTitle: "Know who you’re\nbuilding with.", aboutText: "We’re an AI and software engineering company based in Amman, Jordan. You work directly with the team designing and building your project.", aboutDetail: "Led by Mustafa Al-Refaee, our team starts with a shared understanding of your business and a clear plan for what comes next.", aboutLink: "Meet our leadership",
    contactLabel: "Your next step", contactTitle: "What would you like\nto build?", contactText: "Tell us a little about your idea. We’ll reply to your enquiry within 12 hours to discuss the next step.", contactNote: "A few sentences are enough. No technical brief needed.", emailLabel: "Prefer email?",
  },
  ar: {
    eyebrow: "VORTEX / الذكاء الاصطناعي الخاص وهندسة البرمجيات", title: "ذكاؤك الاصطناعي.", accent: "تحت سيطرتك.",
    description: "ذكاء اصطناعي خاص مبني حول عملك، يعمل في بيئة تتحكم بها. نبني البنية التحتية والبرمجيات التي تجعله مفيداً، من الأدوات الداخلية إلى المواقع والتطبيقات.",
    primary: "تحدث مع فريقنا", secondary: "استكشف خدماتنا", location: "عمّان، الأردن · نعمل حول العالم", index: "نبني حول احتياجاتك", indexNote: "ابدأ بالمشكلة. ونساعدك في تحديد الطريقة.",
    servicesLabel: "01 / خدماتنا", servicesTitle: "ذكاء اصطناعي خاص. وما يحتاجه من حلول.", servicesIntro: "ابدأ بالذكاء الاصطناعي أو بمشروع برمجي مستقل. نحدد العمل وفق ما تحتاجه.", details: "استكشف الخدمة",
    methodLabel: "02 / كيف نعمل معاً", methodTitle: "من حديث أولي\nإلى حل مفيد.", methodIntro: "لا تحتاج إلى وصف تقني للبدء. أخبرنا بالمشكلة أو الفكرة أو الجانب الذي يحتاج إلى تحسين.",
    steps: [
      ["نحدد نقطة البداية", "نتحدث عن أهدافك ومستخدميك وأدواتك الحالية، ثم نتفق على نطاق العمل والطريقة المناسبة للتنفيذ.", "نطاق واضح وعرض للمشروع"],
      ["نبني ونراجع ونحسّن", "يتقدم التصميم والتطوير معاً. تراجع العمل أثناء تنفيذه، لتبقى القرارات مرتبطة باحتياجاتك.", "عمل يمكنك مراجعته وإبداء رأيك فيه"],
      ["نطلق بخطة واضحة", "نختبر النظام ونجهّز النشر والتوثيق، ونتفق معك على التسليم وأي دعم مستمر.", "إطلاق مدروس وخطوات تالية واضحة"],
    ],
    approach: "تريد معرفة التفاصيل التقنية؟", approachText: "تعرّف على نهجنا في المعمارية والأمان وسهولة الصيانة.", engineering: "نهجنا الهندسي",
    aboutLabel: "03 / تعرّف على VORTEX", aboutTitle: "تعرّف على من\nيبني معك.", aboutText: "نحن شركة للذكاء الاصطناعي وهندسة البرمجيات مقرها عمّان، الأردن. تعمل مباشرة مع الفريق الذي يصمم مشروعك ويطوّره.", aboutDetail: "بقيادة مصطفى الرفاعي، يبدأ فريقنا بفهم مشترك لعملك وخطة واضحة للخطوة التالية.", aboutLink: "تعرّف على فريق القيادة",
    contactLabel: "خطوتك القادمة", contactTitle: "ما الذي ترغب\nفي بنائه؟", contactText: "أخبرنا قليلاً عن فكرتك. سنرد على استفسارك خلال 12 ساعة لمناقشة الخطوة التالية.", contactNote: "تكفي بضعة أسطر. لا تحتاج إلى وصف تقني.", emailLabel: "تفضّل البريد الإلكتروني؟",
  },
} as const;
