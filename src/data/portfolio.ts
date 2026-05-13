// Data statis untuk portfolio website
// Semua konten portfolio terpusat di sini untuk kemudahan maintenance

export const personalInfo = {
  name: "Aditias Muktiyanto",
  title: "Fullstack Developer & System Architect",
  subtitle:
    "Membangun aplikasi realtime, omnichannel platform, AI integration, dan scalable backend architecture menggunakan Node.js, React, Redis, dan MySQL.",
  email: "tyas.102@gmail.com",
  phone: "+6287873507353",
  github: "https://github.com/adityasmukti",
  linkedin: "https://linkedin.com/in/adityasmukti",
  whatsapp: "https://wa.me/6287873507353",
  location: "Cianjur, Jawa Barat",
};

export const aboutDescription =
  "Sebagai Full-Stack Developer yang berorientasi pada hasil dengan pengalaman lebih dari 5 tahun dalam pengembangan aplikasi web komprehensif, dari backend hingga frontend. Saya juga memiliki latar belakang yang kuat dalam pengembangan aplikasi desktop C# sejak tahun 2016. Saya terampil dalam membangun solusi yang efisien, skalabel, dan berkinerja tinggi, dengan kemampuan yang terbukti dalam mengoptimalkan performa aplikasi dan database.";

export const specializations = [
  {
    id: "backend-arch",
    title: "Backend Architecture",
    description: "Merancang layered architecture scalable dengan separation of concern yang bersih.",
    icon: "Server",
  },
  {
    id: "realtime-sys",
    title: "Realtime Systems",
    description: "Membangun sistem komunikasi realtime menggunakan WebSocket dan Socket.IO.",
    icon: "Zap",
  },
  {
    id: "ai-integration",
    title: "AI Integration",
    description: "Mengintegrasikan AI dan LLM ke dalam aplikasi dengan context management cerdas.",
    icon: "Brain",
  },
  {
    id: "dashboard",
    title: "Dashboard Analytics",
    description: "Membangun dashboard monitoring dan analytics dengan visualisasi data realtime.",
    icon: "BarChart3",
  },
  {
    id: "api-gateway",
    title: "API Gateway",
    description: "Desain dan implementasi API Gateway dengan rate limiting, caching, dan auth.",
    icon: "Network",
  },
  {
    id: "websocket",
    title: "WebSocket Engineering",
    description: "Engineering koneksi persistent untuk komunikasi bi-directional low-latency.",
    icon: "Radio",
  },
];

export const projects = [
  {
    id: "omnichannel",
    title: "Omnichannel Customer Service Platform",
    description:
      "Platform layanan pelanggan terpadu yang mengintegrasikan WhatsApp, Email, dan Live Chat dalam satu dashboard. Dilengkapi dengan sistem distribusi tiket otomatis, manajemen jam kerja, dan analitik kepuasan pelanggan (CSAT).",
    features: [
      "Auto Distribution System",
      "Merge Ticket across channels",
      "Working Hour Management",
      "Customer Satisfaction (CSAT)",
      "Realtime Dashboard & Analytics",
      "IMAP Email Integration",
    ],
    tech: ["Node.js", "Express", "React", "MySQL", "Redis", "Socket.IO", "Minio"],
    color: "from-violet-500/10 to-indigo-500/10",
    borderColor: "border-violet-500/20",
    accentColor: "text-violet-400",
    liveUrl: "#",
    githubUrl: "https://github.com/Thor-Teknologi-Digital/omni-latera-digimap",
    category: "Backend",
    isPrivate: true,
    images: [
      "/images/feature-work/omni-channel.webp",
    ],
    caseStudy: {
      problem: "Perusahaan memerlukan sistem yang dapat menangani ribuan pesan per menit dari berbagai saluran (WhatsApp, Email, Live Chat) ke ratusan agen customer service, tanpa mengalami bottleneck pada database utama atau kehilangan pesan saat koneksi terputus.",
      solution: "Kami menerapkan Event-Driven Architecture menggunakan Node.js dan Socket.IO untuk komunikasi dua arah yang efisien. Untuk mencegah database terbebani oleh insert rate yang tinggi, seluruh pesan masuk diantrekan (queued) dan di-cache menggunakan Redis, kemudian diproses secara asynchronous ke MySQL.",
      architecture: `graph TD
    Client[Client Apps / Web] -->|WebSocket / HTTP| LB[Load Balancer]
    LB --> API1[Node.js Instance 1]
    LB --> API2[Node.js Instance 2]
    
    API1 <--> Redis[(Redis Pub/Sub & Cache)]
    API2 <--> Redis
    
    Redis --> Worker[Background Worker]
    Worker --> MySQL[(MySQL Database)]
    
    API1 --> Minio[Minio Object Storage]
    API2 --> Minio
    
    API1 --> IMAP[Mail Server]
    API2 --> IMAP`,
      scalability: [
        "Horizontal scaling dengan Load Balancer untuk aplikasi Node.js.",
        "Menggunakan Redis Pub/Sub untuk sinkronisasi state antar instance Socket.IO.",
        "Implementasi message queue (Redis) untuk meredam lonjakan traffic (Traffic Spikes) sebelum data ditulis ke MySQL.",
        "Penyimpanan media eksternal yang di-offload ke Minio (S3 Compatible)."
      ]
    }
  },
  {
    id: "office-ai",
    title: "Office AI Automation Platform",
    description:
      "Platform cerdas untuk mengotomatisasi alur kerja perkantoran menggunakan teknologi Large Language Models (LLM). Aplikasi ini membantu memproses dokumen, menjadwalkan tugas, dan melakukan analisis sentimen secara otomatis.",
    features: [
      "Document Parsing & Classification",
      "Automated Workflow Engine",
      "AI-driven Task Assignment",
      "Sentiment Analysis",
      "Realtime Notifications",
    ],
    tech: ["Node.js", "React", "OpenAI API", "PostgreSQL", "Redis"],
    color: "from-sky-500/10 to-blue-500/10",
    borderColor: "border-sky-500/20",
    accentColor: "text-sky-400",
    liveUrl: "#",
    githubUrl: "https://github.com/Adityasmukti/OfficeFlow-AI",
    category: "AI",
    isPrivate: false,
    images: [
      "/images/feature-work/officeflow-1.webp",
      "/images/feature-work/officeflow-2.webp",
    ],
    caseStudy: {
      problem: "Proses administrasi kantor tradisional sangat rentan terhadap human error dan memakan waktu, terutama dalam hal pemrosesan dokumen masal dan routing tugas ke departemen yang tepat.",
      solution: "Mengembangkan platform otomasi yang mengintegrasikan LLM untuk membaca konteks dokumen dan membuat keputusan routing. Antrian tugas berat ditangani di background menggunakan Redis.",
      architecture: `graph TD
    User[Web Client] -->|HTTPS| API[Node.js API Gateway]
    API --> DB[(PostgreSQL)]
    API --> Redis[(Redis Queue)]
    Redis --> Worker[AI Worker Service]
    Worker <--> LLM[OpenAI API]
    Worker --> DB`,
      scalability: [
        "Pemisahan API Server dan Worker Server untuk memastikan UI tetap responsif saat AI sedang memproses dokumen.",
        "Menggunakan Redis sebagai Message Broker untuk asynchronous processing.",
        "Menerapkan Rate Limiting untuk mencegah over-billing pada penggunaan API OpenAI."
      ]
    }
  },
  {
    id: "project-mai",
    title: "Sistem Informasi Management Boutique",
    description:
      "Sistem Informasi Manajemen (MIS) skala enterprise untuk memantau inventaris, penjualan, dan rekonsiliasi stok multi-cabang secara realtime.",
    features: [
      "Realtime Stock Monitoring",
      "Multi-branch Synchronization",
      "Role-Based Access Control",
      "Financial Reporting",
      "Optimized Data Processing",
    ],
    tech: ["C#", ".NET", "MySQL"],
    color: "from-orange-500/10 to-amber-500/10",
    borderColor: "border-orange-500/20",
    accentColor: "text-orange-400",
    liveUrl: "#",
    githubUrl: "https://github.com/Adityasmukti/Project-MAI",
    category: "Backend",
    isPrivate: false,
    images: [
      "/images/feature-work/simb.webp",
    ],
    caseStudy: {
      problem: "Terjadinya perbedaan stok antara gudang pusat dan cabang karena pencatatan manual. Sistem membutuhkan kalkulasi laporan keuangan dari jutaan baris transaksi secara instan tanpa membuat aplikasi hang.",
      solution: "Membangun sistem desktop menggunakan C# dengan fokus pada efisiensi thread dan memory management. Query MySQL dioptimasi menggunakan Stored Procedure dan Indexing yang ketat.",
      architecture: `graph LR
    App[C# Desktop Client] -->|ADO.NET| DB[(MySQL Server)]
    App --> Local[Local Cache]
    DB --> SP[Stored Procedures]
    DB --> Index[Database Indexes]`,
      scalability: [
        "Penerapan C# BackgroundWorker untuk mencegah UI Thread blocking saat query data besar.",
        "Database Indexing pada kolom pencarian utama (SKU, Tanggal Transaksi) mempercepat query hingga 400%.",
        "Penggunaan Local Memory Cache untuk Master Data yang jarang berubah."
      ]
    }
  },
  {
    id: "bookgenville",
    title: "Bookgenville Reservation System",
    description:
      "Sistem reservasi dan manajemen properti sentral yang dirancang untuk mencegah masalah double-booking dan kebocoran pendapatan.",
    features: [
      "Centralized Booking Engine",
      "Concurrent Transaction Handling",
      "Billing & Invoicing",
      "Customer Management",
    ],
    tech: ["CodeIgniter 3", "PHP", "MySQL", "Node.js", "Socket.IO", "Midtrans"],
    color: "from-emerald-500/10 to-teal-500/10",
    borderColor: "border-emerald-500/20",
    accentColor: "text-emerald-400",
    liveUrl: "#",
    githubUrl: "https://github.com/Adityasmukti/bookgenville-2",
    category: "Fullstack",
    isPrivate: false,
    images: [
      "/images/feature-work/bookgenville.webp",
    ],
    caseStudy: {
      problem: "Sering terjadinya 'Race Condition' di mana dua pelanggan berhasil memesan fasilitas atau ruangan yang sama pada detik yang bersamaan karena validasi tingkat aplikasi yang lemah.",
      solution: "Mengimplementasikan Pessimistic Locking pada tingkat database (MySQL) dan menerapkan prinsip ACID (Atomicity, Consistency, Isolation, Durability) di dalam CodeIgniter database transactions.",
      architecture: `graph TD
    Browser[Browser] -->|HTTP| CI[CodeIgniter Backend]
    Browser -->|WebSocket| WS[Node.js Socket Server]
    CI --> DB[(MySQL)]
    WS --> DB
    CI --> Lock[Pessimistic Lock]
    Lock --> DB`,
      scalability: [
        "DB Transactions dengan level isolasi 'Serializable' untuk proses pembayaran dan booking.",
        "Query Caching untuk jadwal dan ketersediaan ruangan publik."
      ]
    }
  },
  {
    id: "kopi-senja",
    title: "Kopi Senja",
    description: "Single-file web application interaktif untuk kedai kopi modern, menggunakan animasi smooth scrolling.",
    features: ["Single-page Architecture", "AOS Scroll Animations", "Responsive Design"],
    tech: ["HTML5", "CSS3", "Bootstrap 5", "AOS"],
    color: "from-stone-500/10 to-neutral-500/10",
    borderColor: "border-stone-500/20",
    accentColor: "text-stone-400",
    liveUrl: "#",
    githubUrl: "https://github.com/Adityasmukti/kopi-senja",
    category: "Frontend",
    isPrivate: false,
    images: [
      "/images/feature-work/kopi-senja.webp",
    ],
  },
  {
    id: "klinik-gigi",
    title: "Website Klinik Gigi",
    description: "Website statis untuk profil klinik gigi dengan event form kontak simulasi dan tipografi modern.",
    features: ["Static Architecture", "Responsive Navbar", "Interactive Frontend"],
    tech: ["HTML5", "CSS3", "Bootstrap 5", "AOS"],
    color: "from-cyan-500/10 to-teal-500/10",
    borderColor: "border-cyan-500/20",
    accentColor: "text-cyan-400",
    liveUrl: "#",
    githubUrl: "https://github.com/Adityasmukti/klinik-gigi",
    category: "Fullstack",
    isPrivate: false,
    images: [
      "/images/feature-work/klinik-gigi.webp",
    ],
  },
  {
    id: "nec",
    title: "National English Center (NEC)",
    description: "Sistem manajemen institusi pendidikan dengan fitur testing online, pembayaran, dan pembuatan sertifikat.",
    features: ["Role-based Access Control", "Online Testing System", "PDF Certificate Generation", "Email Notifications"],
    tech: ["CodeIgniter 3", "PHP", "MySQL", "Dompdf", "PHPMailer"],
    color: "from-blue-500/10 to-indigo-500/10",
    borderColor: "border-blue-500/20",
    accentColor: "text-blue-400",
    liveUrl: "#",
    githubUrl: "https://github.com/Adityasmukti/nec",
    category: "Fullstack",
    isPrivate: false,
    images: [
      "/images/feature-work/nec.webp",
    ],
  },
  {
    id: "koperasi-smk14",
    title: "Sistem Billing Koperasi SMKN 14",
    description: "Sistem penagihan dan pelaporan koperasi dengan dukungan import data dari Spreadsheet dan REST API endpoint.",
    features: ["Spreadsheet Import/Export", "REST API System", "Transaction Recording", "Bulk Data Operations"],
    tech: ["CodeIgniter 3", "PHP", "MySQL", "REST API", "PhpSpreadsheet"],
    color: "from-green-500/10 to-emerald-500/10",
    borderColor: "border-green-500/20",
    accentColor: "text-green-400",
    liveUrl: "#",
    githubUrl: "https://github.com/Adityasmukti/KOPERASISMKN14BDG",
    category: "Fullstack",
    isPrivate: false,
    images: [
      "/images/feature-work/koperasi.webp",
    ],
  },
  {
    id: "hmrt-psytest",
    title: "HMRT Psykotest",
    description: "Aplikasi psikotes digital dengan arsitektur dua lapis (Web UI dan REST API) untuk keperluan rekrutmen.",
    features: ["Dual-Layer Controllers (Web/API)", "Sanctum Authentication", "Online Testing", "Result Analytics"],
    tech: ["Laravel 9", "PHP 8", "MySQL", "Sanctum API"],
    color: "from-purple-500/10 to-violet-500/10",
    borderColor: "border-purple-500/20",
    accentColor: "text-purple-400",
    liveUrl: "#",
    githubUrl: "https://github.com/Adityasmukti/hmrt-psytest",
    category: "Fullstack",
    isPrivate: false,
    images: [
      "/images/feature-work/psytest.webp",
    ],
  },
  {
    id: "garuda-anak",
    title: "Garuda Anak Nusantara",
    description: "Sistem informasi dan manajemen sepak bola usia dini dengan portal terpisah untuk admin, klub, dan pemain.",
    features: ["Multi-portal Authentication", "Club Management", "Media Retrieval", "Device Fingerprint Tracking"],
    tech: ["CodeIgniter 3", "PHP", "MySQL"],
    color: "from-red-500/10 to-rose-500/10",
    borderColor: "border-red-500/20",
    accentColor: "text-red-400",
    liveUrl: "#",
    githubUrl: "https://github.com/Adityasmukti/generasibola",
    category: "Fullstack",
    isPrivate: false,
    images: [
      "/images/feature-work/generasibola.webp",
    ],
  },
  {
    id: "dekranasda",
    title: "Dekranasda e-Government",
    description: "Sistem informasi manajemen untuk Dewan Kerajinan Nasional Daerah dengan endpoint REST API dan export Excel.",
    features: ["REST API Endpoints", "Data Export to Excel", "Interactive Dashboard", "Product Showcase"],
    tech: ["CodeIgniter 3", "PHP 7", "MySQL", "Bootstrap 4"],
    color: "from-yellow-500/10 to-amber-500/10",
    borderColor: "border-yellow-500/20",
    accentColor: "text-yellow-400",
    liveUrl: "#",
    githubUrl: "https://github.com/Adityasmukti/dekranasda",
    category: "Fullstack",
    isPrivate: false,
    images: [
      "/images/feature-work/dekranasda.webp",
    ],
  },
  {
    id: "emonev",
    title: "E-Monev (Monitoring & Evaluasi)",
    description: "Aplikasi e-government untuk monitoring program K3L (Kesehatan, Keselamatan Kerja dan Lingkungan).",
    features: ["CRUD Monitoring System", "Evaluation Reports", "REST Controller API"],
    tech: ["CodeIgniter 3", "PHP", "MySQL", "REST API"],
    color: "from-slate-500/10 to-gray-500/10",
    borderColor: "border-slate-500/20",
    accentColor: "text-slate-400",
    liveUrl: "#",
    githubUrl: "https://github.com/Adityasmukti/emonev",
    category: "Fullstack",
    isPrivate: false,
    images: [
      "/images/feature-work/emonev.webp",
    ],
  },
  {
    id: "makloon-system",
    title: "Makloon Manufacturing System(Dev)",
    description: "Sistem manajemen produksi dan pemesanan makloon untuk pabrik.",
    features: ["Order Tracking", "Production Workflow", "Vendor Management"],
    tech: ["Laravel", "PHP", "MySQL"],
    color: "from-emerald-500/10 to-teal-500/10",
    borderColor: "border-emerald-500/20",
    accentColor: "text-emerald-400",
    liveUrl: "#",
    githubUrl: "https://github.com/Adityasmukti/makloon",
    category: "Fullstack",
    isPrivate: false,
  }
];

export const techStack = {
  Frontend: [
    { name: "React", icon: "⚛️", description: "UI Library" },
    { name: "Next.js", icon: "▲", description: "React Framework" },
    { name: "Tailwind CSS", icon: "🎨", description: "Utility CSS" },
    { name: "Framer Motion", icon: "✨", description: "Animation" },
  ],
  Backend: [
    { name: "Node.js", icon: "🟢", description: "Runtime" },
    { name: "Express", icon: "⚡", description: "HTTP Framework" },
    { name: "CodeIgniter", icon: "🔥", description: "PHP Framework" },
    { name: "Socket.IO", icon: "🔌", description: "WebSocket" },
  ],
  Database: [
    { name: "MySQL", icon: "🐬", description: "Relational DB" },
    { name: "Redis", icon: "🔴", description: "Cache & Queue" },
  ],
  DevOps: [
    { name: "Docker", icon: "🐳", description: "Container" },
    { name: "PM2", icon: "⚙️", description: "Process Manager" },
    { name: "Nginx", icon: "🌐", description: "Web Server" },
    { name: "Cloudflare", icon: "☁️", description: "CDN & Tunnel" },
  ],
  "AI & Automation": [
    { name: "OpenAI API", icon: "🤖", description: "LLM Integration" },
    { name: "Knowledge Base", icon: "📚", description: "AI Context" },
    { name: "AI Agent", icon: "🧠", description: "Automation" },
    { name: "Webhooks", icon: "🔗", description: "Integration" },
  ],
};

export const architectureLayers = [
  {
    id: "client",
    label: "Client Layer",
    description: "React / Next.js",
    icon: "Monitor",
    color: "text-blue-400",
    borderColor: "border-blue-500/30",
    bgColor: "bg-blue-500/5",
  },
  {
    id: "api-gateway",
    label: "API Gateway",
    description: "Express / Nginx",
    icon: "Shield",
    color: "text-violet-400",
    borderColor: "border-violet-500/30",
    bgColor: "bg-violet-500/5",
  },
  {
    id: "redis-queue",
    label: "Redis Queue",
    description: "Bull / BullMQ",
    icon: "Database",
    color: "text-red-400",
    borderColor: "border-red-500/30",
    bgColor: "bg-red-500/5",
  },
  {
    id: "worker",
    label: "Worker Service",
    description: "Node.js / PM2",
    icon: "Cpu",
    color: "text-emerald-400",
    borderColor: "border-emerald-500/30",
    bgColor: "bg-emerald-500/5",
  },
  {
    id: "database",
    label: "Database Layer",
    description: "MySQL / Redis",
    icon: "HardDrive",
    color: "text-orange-400",
    borderColor: "border-orange-500/30",
    bgColor: "bg-orange-500/5",
  },
];

export const experiences = [
  {
    id: "thor2",
    period: "Oct 2025 – Sekarang",
    role: "IT Senior Developer",
    company: "PT. Thor Teknologi Digital",
    description:
      "Bertanggung jawab untuk memimpin pengembangan produk software dan memonitor performa sistem, memastikan skalabilitas, keamanan, dan kualitas kode. Berkolaborasi dengan tim produk untuk menerjemahkan kebutuhan bisnis menjadi solusi teknis yang efisien dan inovatif.",
    tags: ["Node.js", "Express", "Next.js", "Docker", "MySQL", "AI Agent", "Knowledge Base", "Webhooks", "Nginx", "Cloudflare"],
    isCurrent: true,
  },
  {
    id: "mai",
    period: "Dec 2019 – Sep 2025",
    role: "SPV IT & Programmer",
    company: "PT Mulya Angel Imani",
    description:
      "Bertanggung jawab mengelola infrastruktur IT dan mengawasi tim programmer. Merancang, mengembangkan, dan memelihara aplikasi desktop untuk manajemen operasional dan pelaporan menggunakan C# dan MySQL. Mengoptimalkan database untuk performa aplikasi yang cepat dan handal.",
    tags: ["C#", "MySQL", "IT Infrastructure", "Team Lead"],
    isCurrent: true,
  },
  {
    id: "thor",
    period: "2022 – 2025",
    role: "Freelance Web Programmer",
    company: "PT. Thor Teknologi Digital",
    description:
      "Mengembangkan dan memelihara aplikasi berbasis web sesuai kebutuhan klien. Berkolaborasi dengan tim untuk mengimplementasikan fitur baru dan mengoptimalkan fungsionalitas web menggunakan teknologi web modern (HTML, CSS, JavaScript, dan PHP).",
    tags: ["PHP", "JavaScript", "HTML/CSS", "Web Development"],
    isCurrent: false,
  },
  {
    id: "pondasindo",
    period: "Jun 2016 – Dec 2019",
    role: "Staff IT & Programmer",
    company: "PT Pondasindo Jaya",
    description:
      "Berpartisipasi dalam pengembangan dan pemeliharaan aplikasi desktop internal menggunakan C#. Mengembangkan dan mengelola database MySQL. Memberikan dukungan teknis dan pemecahan masalah untuk sistem IT dan aplikasi.",
    tags: ["C#", "MySQL", "Technical Support"],
    isCurrent: false,
  },
];

export const education = [
  {
    id: "suryakancana",
    degree: "Bachelor of Informatics",
    institution: "University of Suryakancana",
    location: "Cianjur, West Java",
    year: "2015",
  }
];

export const projectCategories = ["Semua", "Backend", "AI", "Fullstack"];
