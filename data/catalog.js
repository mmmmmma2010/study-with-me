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
      },
      {
        id: "en-b1-8",
        order: 8,
        subfolder: "English B2 level",
        file: "English/English B2 level/lesson-english-b1-8.html",
        title: "الدرس 8: الرجل الذي ساعدني",
        titleEn: "The man who helped me",
        description: "صِف الناس والأشياء والأماكن بوضوح.",
        duration: "30 دقيقة",
        durationMinutes: 30,
        level: "B1",
        tags: ["who · which · that · where", "English B2 level"]
      },
      {
        id: "en-b1-9",
        order: 9,
        subfolder: "English B2 level",
        file: "English/English B2 level/lesson-english-b1-9.html",
        title: "الدرس 9: ينبغي أن تذهب إلى الطبيب",
        titleEn: "You should see a doctor",
        description: "قدّم النصيحة وتحدّث عن الصحة والأعراض.",
        duration: "30 دقيقة",
        durationMinutes: 30,
        level: "B1",
        tags: ["should · ought to · had better", "English B2 level"]
      }
    ]
  },
  {
    id: "problem-solving",
    folder: "Problem Solving",
    title: "حل المشكلات البرمجية",
    titleEn: "Problem Solving",
    subtitle: "من منهجية الحل إلى البرمجة الديناميكية والرسوم البيانية",
    description:
      "سلسلة عملية من 8 دروس لتعلم مهارات حل المشكلات البرمجية وتحليل التعقيد، المؤشران، الـ Hashing، العودية، البحث الثنائي، البرمجة الديناميكية، والرسوم البيانية بلغة Python.",
    icon: "🧩",
    accent: "#2563eb",
    gradient: "linear-gradient(135deg, #1e3a8a, #2563eb 60%, #10b981)",
    level: "متوسط",
    language: "العربية + Python",
    items: [
      {
        id: "ps-1",
        order: 1,
        subfolder: "",
        file: "Problem Solving/درس: منهجية حل المشكلات البرمجية.html",
        title: "منهجية حل المشكلات البرمجية",
        titleEn: "Problem Solving Framework",
        description: "ستتعلم طريقة من 6 خطوات تساعدك على حل أي مسألة برمجية بثقة، بدل التخمين.",
        duration: "30 دقيقة",
        durationMinutes: 30,
        level: "متوسط",
        tags: ["Framework", "Python", "الدرس 1 من 8"]
      },
      {
        id: "ps-2",
        order: 2,
        subfolder: "",
        file: "Problem Solving/درس 2: تحليل التعقيد (Big-O).html",
        title: "تحليل التعقيد (Big-O Notation)",
        titleEn: "Big-O Notation",
        description: "ستتعلم في هذا الدرس كيف تعرف سرعة أي كود وحجم الذاكرة التي يحتاجها قبل أن تشغّله.",
        duration: "35 دقيقة",
        durationMinutes: 35,
        level: "متوسط",
        tags: ["Big-O", "Complexity", "الدرس 2 من 8"]
      },
      {
        id: "ps-3",
        order: 3,
        subfolder: "",
        file: "Problem Solving/درس 3: المؤشران والنافذة المنزلقة.html",
        title: "المؤشران والنافذة المنزلقة",
        titleEn: "Two Pointers & Sliding Window",
        description: "ستتعلم كيف تحوّل حلولًا بتعقيد O(n²) إلى O(n) عندما تحرّك مؤشرين بذكاء بدل تجربة كل الاحتمالات.",
        duration: "40 دقيقة",
        durationMinutes: 40,
        level: "متوسط",
        tags: ["Two Pointers", "Sliding Window", "الدرس 3 من 8"]
      },
      {
        id: "ps-4",
        order: 4,
        subfolder: "",
        file: "Problem Solving/درس 4: الـ Hashing والعدّ.html",
        title: "الـ Hashing والعدّ",
        titleEn: "Hashing & Counting",
        description: "ستتعلم كيف يعمل dict و set من الداخل، ولماذا البحث فيهما سريع، وخمسة أنماط تحل بها عددًا كبيرًا من المسائل.",
        duration: "40 دقيقة",
        durationMinutes: 40,
        level: "متوسط",
        tags: ["Hashing", "Counting", "الدرس 4 من 8"]
      },
      {
        id: "ps-5",
        order: 5,
        subfolder: "",
        file: "Problem Solving/درس 5: العودية والتراجع.html",
        title: "العودية والتراجع",
        titleEn: "Recursion & Backtracking",
        description: "ستتعلم كيف تكتب دالة تستدعي نفسها بثقة، وكيف تجرّب كل الاختيارات الممكنة بقالب واحد، وكيف توقف البحث مبكرًا عندما لا يفيد.",
        duration: "45 دقيقة",
        durationMinutes: 45,
        level: "متوسط",
        tags: ["Recursion", "Backtracking", "الدرس 5 من 8"]
      },
      {
        id: "ps-6",
        order: 6,
        subfolder: "",
        file: "Problem Solving/درس 6: البحث الثنائي.html",
        title: "البحث الثنائي",
        titleEn: "Binary Search",
        description: "ستتعلم كيف تجد ما تبحث عنه بين مليون عنصر في 20 خطوة فقط، وكيف تكتب الحدود بدون أخطاء، وكيف تبحث عن الجواب نفسه حتى لو لم تكن هناك قائمة.",
        duration: "40 دقيقة",
        durationMinutes: 40,
        level: "متوسط",
        tags: ["Binary Search", "Python", "الدرس 6 من 8"]
      },
      {
        id: "ps-7",
        order: 7,
        subfolder: "",
        file: "Problem Solving/درس 7: البرمجة الديناميكية.html",
        title: "البرمجة الديناميكية",
        titleEn: "Dynamic Programming",
        description: "ستتعلم كيف تحوّل حلولًا أُسّية إلى حلول سريعة، لأنك تحفظ جواب كل مسألة صغيرة ولا تحسبه مرتين، وستتعلم وصفة من خمس خطوات تبني بها أي حل.",
        duration: "45 دقيقة",
        durationMinutes: 45,
        level: "متوسط",
        tags: ["Dynamic Programming", "Memoization", "الدرس 7 من 8"]
      },
      {
        id: "ps-8",
        order: 8,
        subfolder: "",
        file: "Problem Solving/درس 8: الرسوم البيانية (BFS -DFS).html",
        title: "الرسوم البيانية (Graphs: BFS & DFS)",
        titleEn: "Graphs: BFS & DFS",
        description: "ستتعلم كيف تمثل العلاقات بين الأشياء، وكيف تجد أقصر طريق، والمجموعات المتصلة، والحلقات، وترتيب الاعتماديات، وأرخص مسار عندما يكون لكل خطوة تكلفة.",
        duration: "50 دقيقة",
        durationMinutes: 50,
        level: "متوسط",
        tags: ["Graphs", "BFS", "DFS", "الدرس 8 من 8"]
      }
    ]
  }
];
