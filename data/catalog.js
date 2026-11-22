/**
 * Study With Me — Dynamic Materials Catalog
 * -----------------------------------------
 * No database or backend required!
 *
 * HOW TO ADD A NEW MATERIAL TO AN EXISTING SECTION:
 *   1. Drop your .html file inside the section's folder (e.g., "System Design/").
 *   2. Add an entry to that section's `items` array below (or run `python3 scripts/sync_catalog.py`).
 *
 * HOW TO ADD A NEW SECTION:
 *   1. Create a new folder in the root directory (e.g., "Algorithms/").
 *   2. Add a new section object to `window.STUDY_CATALOG` below with its `id`, `folder`, `title`,
 *      `titleEn`, `description`, `accent`, `gradient`, `icon`, and `items`.
 */
window.STUDY_CATALOG = [
  {
    id: "system-design",
    folder: "System Design",
    title: "تصميم الأنظمة",
    titleEn: "System Design",
    subtitle: "من خادم واحد إلى أنظمة تخدم ملايين المستخدمين",
    description:
      "سلسلة عملية متكاملة تشرح أساسيات تصميم الأنظمة القابلة للتوسع، موازنة الأحمال، قواعد البيانات، طوابير الرسائل، نظرية CAP، الخدمات المصغرة، والمراقبة بأمثلة Python.",
    icon: "🏗️",
    accent: "#2563eb",
    gradient: "linear-gradient(135deg, #1e3a8a, #2563eb 60%, #10b981)",
    level: "متوسط إلى متقدم",
    language: "العربية + Python",
    items: [
      {
        id: "sd-1",
        order: 1,
        subfolder: "",
        file: "System Design/index.html",
        title: "أساسيات تصميم الأنظمة وقابلية التوسع",
        titleEn: "System Design Fundamentals & Scalability",
        description: "ستتعلم كيف ينمو نظام من خادم واحد إلى نظام يخدم ملايين المستخدمين بدون أن يتوقف.",
        duration: "35 دقيقة",
        durationMinutes: 35,
        level: "متوسط",
        tags: ["Scalability", "Python", "الدرس 1 من 8"]
      },
      {
        id: "sd-2",
        order: 2,
        subfolder: "",
        file: "System Design/index (1).html",
        title: "موازنة الأحمال والـ Caching بعمق",
        titleEn: "Load Balancing & Caching",
        description: "ستتعلم كيف توزّع الطلبات بذكاء، وكيف تجعل النظام أسرع 10 مرات بدون أن تعرض بيانات قديمة.",
        duration: "40 دقيقة",
        durationMinutes: 40,
        level: "متوسط",
        tags: ["Load Balancing", "Caching", "الدرس 2 من 8"]
      },
      {
        id: "sd-3",
        order: 3,
        subfolder: "",
        file: "System Design/index (2).html",
        title: "قواعد البيانات: النسخ المتماثل والتقسيم",
        titleEn: "Replication & Sharding",
        description: "ستتعلم كيف تجعل قاعدة البيانات تتحمل ملايين العمليات، وكيف لا تضيع عملية دفع واحدة إذا توقف خادم.",
        duration: "45 دقيقة",
        durationMinutes: 45,
        level: "متوسط",
        tags: ["Databases", "Replication", "Sharding", "الدرس 3 من 8"]
      },
      {
        id: "sd-4",
        order: 4,
        subfolder: "",
        file: "System Design/index (3).html",
        title: "طوابير الرسائل والأنظمة غير المتزامنة",
        titleEn: "Message Queues & Async Systems",
        description: "ستتعلم كيف ينتهي الدفع في 50ms، بينما تُرسل الإشعارات للتجار في الخلفية بدون أن تضيع رسالة واحدة.",
        duration: "45 دقيقة",
        durationMinutes: 45,
        level: "متوسط",
        tags: ["Message Queues", "Async", "الدرس 4 من 8"]
      },
      {
        id: "sd-5",
        order: 5,
        subfolder: "",
        file: "System Design/index (4).html",
        title: "نظرية CAP ونماذج الاتساق ونمط Saga",
        titleEn: "CAP, Consistency & Sagas",
        description: "ستتعلم ماذا يختار النظام عندما تنقطع الشبكة، وكيف تنفذ عملية دفع تمر بعدة خدمات بدون أن يضيع جنيه واحد.",
        duration: "45 دقيقة",
        durationMinutes: 45,
        level: "متوسط",
        tags: ["CAP Theorem", "Saga", "Consistency", "الدرس 5 من 8"]
      },
      {
        id: "sd-6",
        order: 6,
        subfolder: "",
        file: "System Design/index (5).html",
        title: "الخدمات المصغرة و API Gateway وقاطع الدائرة",
        titleEn: "Microservices, API Gateway & Circuit Breaker",
        description: "ستتعلم متى تقسّم النظام إلى خدمات، وكيف تمنع خدمة بطيئة واحدة من إسقاط النظام كله.",
        duration: "45 دقيقة",
        durationMinutes: 45,
        level: "متوسط",
        tags: ["Microservices", "API Gateway", "Circuit Breaker", "الدرس 6 من 8"]
      },
      {
        id: "sd-7",
        order: 7,
        subfolder: "",
        file: "System Design/index (6).html",
        title: "الموثوقية: تحديد المعدل ومنع التكرار وإعادة المحاولة",
        titleEn: "Rate Limiting, Idempotency & Retries",
        description: "ستتعلم كيف تحمي النظام من طوفان الطلبات، وكيف تضمن ألا يُخصم العميل مرتين أبدًا، حتى لو أعاد المحاولة عشر مرات.",
        duration: "45 دقيقة",
        durationMinutes: 45,
        level: "متوسط",
        tags: ["Rate Limiting", "Idempotency", "Reliability", "الدرس 7 من 8"]
      },
      {
        id: "sd-8",
        order: 8,
        subfolder: "",
        file: "System Design/index (7).html",
        title: "مقابلة تصميم كاملة: صمّم بوابة دفع من الصفر",
        titleEn: "Design a Payment Gateway",
        description: "ستتعلم كيف تدير مقابلة تصميم في 45 دقيقة، وكيف تبني نظامًا لا يضيع فيه قرش واحد، مستخدمًا كل ما تعلمته في السلسلة.",
        duration: "50 دقيقة",
        durationMinutes: 50,
        level: "متوسط إلى متقدم",
        tags: ["Interview", "Payment Gateway", "الدرس 8 من 8"]
      },
      {
        id: "sd-9",
        order: 9,
        subfolder: "",
        file: "System Design/index (8).html",
        title: "المراقبة والرصد: المقاييس والسجلات والتتبع",
        titleEn: "Observability: Metrics, Logs, Traces & SLOs",
        description: "ستتعلم كيف تعرف أن النظام مريض قبل أن يتصل بك التاجر، وكيف تجد السبب في دقائق بدلًا من ساعات.",
        duration: "40 دقيقة",
        durationMinutes: 40,
        level: "متوسط",
        tags: ["Observability", "Metrics", "Traces", "درس إضافي (9)"]
      }
    ]
  },
  {
    id: "english",
    folder: "English",
    title: "اللغة الإنجليزية",
    titleEn: "English",
    subtitle: "دروس تفاعلية مع النطق والبطاقات والتمارين",
    description:
      "دروس لغة إنجليزية تفاعلية تشمل القواعد، النطق الصوتي، البطاقات التعليمية (Flashcards)، المحادثات، والتمارين العملية مع تتبع الدرجات.",
    icon: "🗣️",
    accent: "#4f46e5",
    gradient: "linear-gradient(135deg, #312e81, #4f46e5 55%, #06b6d4)",
    level: "B1 / B2",
    language: "العربية + English",
    items: [
      {
        id: "en-b1-1",
        order: 1,
        subfolder: "English B2 level",
        file: "English/English B2 level/lesson-english-b1-1.html",
        title: "الدرس 1: هل سبق لك أن...؟",
        titleEn: "Have you ever...?",
        description: "تحدّث عن تجاربك في الحياة والسفر.",
        duration: "30 دقيقة",
        durationMinutes: 30,
        level: "B1",
        tags: ["Present Perfect vs Past Simple", "English B2 level"]
      },
      {
        id: "en-b1-2",
        order: 2,
        subfolder: "English B2 level",
        file: "English/English B2 level/lesson-english-b1-2.html",
        title: "الدرس 2: أسكن هنا منذ سنوات",
        titleEn: "I've lived here for years",
        description: "تحدّث عن التغيّرات في حياتك وعن الأخبار الجديدة.",
        duration: "30 دقيقة",
        durationMinutes: 30,
        level: "B1",
        tags: ["for · since · already · yet · just", "English B2 level"]
      },
      {
        id: "en-b1-3",
        order: 3,
        subfolder: "English B2 level",
        file: "English/English B2 level/lesson-english-b1-3.html",
        title: "الدرس 3: عندما كنت طفلًا...",
        titleEn: "When I was a child...",
        description: "تحدّث عن عاداتك في الماضي وذكريات الطفولة.",
        duration: "30 دقيقة",
        durationMinutes: 30,
        level: "B1",
        tags: ["used to · would", "English B2 level"]
      },
      {
        id: "en-b1-4",
        order: 4,
        subfolder: "English B2 level",
        file: "English/English B2 level/lesson-english-b1-4.html",
        title: "الدرس 4: بينما كنت أنتظر...",
        titleEn: "While I was waiting...",
        description: "احكِ قصة قصيرة عن موقف أو حادث.",
        duration: "30 دقيقة",
        durationMinutes: 30,
        level: "B1",
        tags: ["Past continuous · when · while", "English B2 level"]
      },
      {
        id: "en-b1-5",
        order: 5,
        subfolder: "English B2 level",
        file: "English/English B2 level/lesson-english-b1-5.html",
        title: "الدرس 5: إذا أمطرت، سنبقى في البيت",
        titleEn: "If it rains, we'll stay home",
        description: "تحدّث عن الطقس والخطط والاحتمالات الحقيقية.",
        duration: "30 دقيقة",
        durationMinutes: 30,
        level: "B1",
        tags: ["First conditional · when · unless", "English B2 level"]
      },
      {
        id: "en-b1-6",
        order: 6,
        subfolder: "English B2 level",
        file: "English/English B2 level/lesson-english-b1-6.html",
        title: "الدرس 6: لو كنتُ غنيًا...",
        titleEn: "If I were rich...",
        description: "تحدّث عن المواقف الخيالية والأحلام، وقدّم النصيحة.",
        duration: "30 دقيقة",
        durationMinutes: 30,
        level: "B1",
        tags: ["Second conditional · If I were you", "English B2 level"]
      },
      {
        id: "en-b1-7",
        order: 7,
        subfolder: "English B2 level",
        file: "English/English B2 level/lesson-english-b1-7.html",
        title: "الدرس 7: صُنع في مصر",
        titleEn: "It's made in Egypt",
        description: "صِف كيف تُصنع الأشياء ومن أين تأتي.",
        duration: "30 دقيقة",
        durationMinutes: 30,
        level: "B1",
        tags: ["Passive: present & past", "English B2 level"]
      }
    ]
  }
];
