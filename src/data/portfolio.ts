// Data statis untuk portfolio website
// Semua konten portfolio terpusat di sini untuk kemudahan maintenance

export const personalInfo = {
  name: "Aditias Muktiyanto",
  title: "Fullstack Developer & System Architect",
  subtitle:
    "Membangun aplikasi realtime, omnichannel platform, AI integration, dan scalable backend architecture menggunakan Node.js, React, Redis, dan MySQL.",
  email: "aditias@example.com",
  github: "https://github.com/adityasmukti",
  linkedin: "https://linkedin.com/in/adityasmukti",
  whatsapp: "https://wa.me/628xxxxxxxxxx",
  location: "Indonesia",
};

export const aboutDescription =
  "Fokus membangun aplikasi modern dengan scalable architecture, realtime communication, dan AI integration. Berpengalaman dalam merancang sistem yang mampu menangani traffic tinggi dengan infrastruktur yang efisien dan maintainable.";

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
      "Platform komunikasi realtime yang mengintegrasikan WhatsApp, Instagram, Facebook, Email, dan Live Chat dalam satu dashboard terpadu.",
    features: [
      "Realtime messaging",
      "WebSocket architecture",
      "Redis queue",
      "Multi-agent support",
      "Webhook processing",
      "Analytics dashboard",
    ],
    tech: ["Node.js", "Socket.IO", "Redis", "MySQL", "React"],
    color: "from-violet-500/10 to-indigo-500/10",
    borderColor: "border-violet-500/20",
    accentColor: "text-violet-400",
    liveUrl: "#",
    githubUrl: "https://github.com/Adityasmukti/omnichannel-v2",
    category: "Backend",
  },
  {
    id: "makloon",
    title: "Makloon Manufacturing System",
    description:
      "Sistem manajemen produksi dan pemesanan makloon untuk efisiensi alur kerja manufaktur.",
    features: [
      "Order tracking",
      "Inventory management",
      "Production workflow",
      "Vendor management",
    ],
    tech: ["PHP", "Laravel", "MySQL"],
    color: "from-emerald-500/10 to-teal-500/10",
    borderColor: "border-emerald-500/20",
    accentColor: "text-emerald-400",
    liveUrl: "#",
    githubUrl: "https://github.com/Adityasmukti/makloon",
    category: "Fullstack",
  },
  {
    id: "project-mai",
    title: "Project MAI (Advanced C#)",
    description:
      "Project pengembangan aplikasi menggunakan C# dengan fokus pada efisiensi pemrosesan data.",
    features: [
      "Advanced data processing",
      "C# Optimization",
      "Desktop integration",
    ],
    tech: ["C#", ".NET"],
    color: "from-orange-500/10 to-amber-500/10",
    borderColor: "border-orange-500/20",
    accentColor: "text-orange-400",
    liveUrl: "#",
    githubUrl: "https://github.com/Adityasmukti/Project-MAI",
    category: "Backend",
  },
  {
    id: "api-monitoring",
    title: "API Monitoring Dashboard",
    description:
      "Dashboard monitoring API komprehensif untuk analytics, JWT authentication, caching, dan rate limiting.",
    features: [
      "API analytics",
      "JWT security",
      "Request monitoring",
      "Cache system",
      "Rate limiting",
    ],
    tech: ["Node.js", "Express", "Redis", "MySQL"],
    color: "from-sky-500/10 to-blue-500/10",
    borderColor: "border-sky-500/20",
    accentColor: "text-sky-400",
    liveUrl: "#",
    githubUrl: "#",
    category: "Backend",
  },
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
    id: "freelance",
    period: "2022 – Sekarang",
    role: "Freelance Fullstack Developer",
    company: "Independent",
    description:
      "Mengerjakan berbagai proyek freelance mulai dari pembangunan sistem omnichannel, dashboard analytics, hingga integrasi AI untuk klien dari berbagai industri.",
    tags: ["Node.js", "React", "MySQL", "Redis"],
    isCurrent: true,
  },
  {
    id: "backend-eng",
    period: "2021 – 2022",
    role: "Backend Engineer",
    company: "Startup Tech",
    description:
      "Membangun dan memaintain REST API dengan arsitektur scalable. Bertanggung jawab atas optimasi query database, implementasi caching, dan keamanan endpoint.",
    tags: ["Node.js", "Express", "MySQL", "Docker"],
    isCurrent: false,
  },
  {
    id: "ai-projects",
    period: "2023 – Sekarang",
    role: "AI Integration Specialist",
    company: "Multiple Clients",
    description:
      "Mengintegrasikan LLM dan AI model ke dalam aplikasi klien dengan fokus pada context management, knowledge base, dan automation workflow.",
    tags: ["OpenAI API", "LangChain", "Node.js", "Redis"],
    isCurrent: true,
  },
  {
    id: "realtime-dev",
    period: "2022 – Sekarang",
    role: "Realtime System Developer",
    company: "Multiple Projects",
    description:
      "Spesialisasi dalam pembangunan sistem komunikasi realtime menggunakan WebSocket dan event-driven architecture untuk aplikasi high-concurrency.",
    tags: ["Socket.IO", "Redis Pub/Sub", "WebSocket", "Node.js"],
    isCurrent: true,
  },
];

export const projectCategories = ["Semua", "Backend", "AI", "Fullstack"];
