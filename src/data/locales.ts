export type Locale = 'id' | 'en';

const locales: Record<Locale, Record<string, string>> = {
  id: {
    'hero.badge': '👋 Tersedia untuk proyek freelance baru',
    'hero.cta.viewProjects': 'Lihat Proyek',
    'hero.cta.github': 'GitHub',
    'hero.cta.contact': 'Hubungi Saya',
    'hero.scroll': 'Scroll',

    'about.badge': 'Tentang Saya',
    'about.title': 'Halo, saya {name} — {title} yang {focus} yang skalabel dan efisien.',
    'about.focus': 'berfokus membangun produk digital',
    'about.stat.years': 'Tahun Pengalaman',
    'about.stat.projects': 'Proyek Dibangun',
    'about.stat.systems': 'Sistem Berjalan',
    'about.specialization': 'Spesialisasi',
    'about.education': 'Pendidikan',

    'techstack.title': 'Tech Stack',
    'techstack.description':
      'Teknologi dan alat yang saya gunakan untuk membangun sistem yang skalabel, performant, dan tangguh.',

    'featured.title': 'Proyek Pilihan',
    'featured.cta': 'Lihat Semua Proyek',

    'projectoverview.services': 'Layanan Lainnya',
    'projectoverview.customApi': 'Custom API Development',
    'projectoverview.systemMigration': 'System Migration',
    'projectoverview.sideProjects': 'Side Projects',
    'projectoverview.comingSoon': 'Coming Soon',

    'contact.badge': 'Kontak',
    'contact.title': 'Ayo diskusi tentang proyek Anda berikutnya.',
    'contact.description':
      'Saya selalu terbuka untuk kolaborasi menarik, proyek freelance, atau sekadar berbagi ide tentang pengembangan sistem.',
    'contact.email': 'Email',
    'contact.location': 'Lokasi',
    'contact.social': 'Media Sosial',
    'contact.start': 'Mulai Percakapan',

    'footer.copyright': '© 2026 {name} — Membangun dengan kualitas dan integritas.',
    'footer.contact': 'Hubungi Saya',

    'projects.all.title': 'Semua Proyek',
    'projects.all.description':
      'Jelajahi koleksi lengkap aplikasi, sistem arsitektur, dan produk digital yang telah saya bangun.',
    'projects.all.back': 'Kembali ke Beranda',
    'projects.all.badge': 'Case Study',

    'projects.detail.back': 'Kembali ke Projects',
    'projects.detail.about': 'Tentang Proyek',
    'projects.detail.features': 'Fitur Utama',
    'projects.detail.tech': 'Teknologi',
    'projects.detail.links': 'Tautan',
    'projects.detail.liveDemo': 'Live Demo',
    'projects.detail.privateRepo': 'Private Repository',
    'projects.detail.githubRepo': 'GitHub Repository',
    'projects.detail.caseStudyBadge': 'Engineering Deep Dive',
    'projects.detail.caseStudyTitle': 'Case Study',
    'projects.detail.problem': 'The Problem',
    'projects.detail.solution': 'The Solution',
    'projects.detail.architecture': 'System Architecture',
    'projects.detail.scalability': 'Scalability & Performance',
    'projects.detail.cta': 'Tertarik dengan proyek seperti ini?',
    'projects.detail.ctaButton': 'Mulai Diskusi',

    'lang.switch': 'EN',
  },
  en: {
    'hero.badge': '👋 Available for new freelance projects',
    'hero.cta.viewProjects': 'View Projects',
    'hero.cta.github': 'GitHub',
    'hero.cta.contact': 'Contact Me',
    'hero.scroll': 'Scroll',

    'about.badge': 'About Me',
    'about.title': "Hi, I'm {name} — a {title} who {focus} that are scalable and efficient.",
    'about.focus': 'focuses on building digital products',
    'about.stat.years': 'Years Experience',
    'about.stat.projects': 'Projects Built',
    'about.stat.systems': 'Systems Running',
    'about.specialization': 'Specializations',
    'about.education': 'Education',

    'techstack.title': 'Tech Stack',
    'techstack.description':
      'Technologies and tools I use to build scalable, performant, and robust systems.',

    'featured.title': 'Featured Projects',
    'featured.cta': 'View All Projects',

    'projectoverview.services': 'Other Services',
    'projectoverview.customApi': 'Custom API Development',
    'projectoverview.systemMigration': 'System Migration',
    'projectoverview.sideProjects': 'Side Projects',
    'projectoverview.comingSoon': 'Coming Soon',

    'contact.badge': 'Contact',
    'contact.title': "Let's discuss your next project.",
    'contact.description':
      "I'm always open to interesting collaborations, freelance projects, or just sharing ideas about system development.",
    'contact.email': 'Email',
    'contact.location': 'Location',
    'contact.social': 'Social Media',
    'contact.start': 'Start a Conversation',

    'footer.copyright': '© 2026 {name} — Building with quality and integrity.',
    'footer.contact': 'Contact Me',

    'projects.all.title': 'All Projects',
    'projects.all.description':
      'Explore the complete collection of applications, system architectures, and digital products I have built.',
    'projects.all.back': 'Back to Home',
    'projects.all.badge': 'Case Study',

    'projects.detail.back': 'Back to Projects',
    'projects.detail.about': 'About the Project',
    'projects.detail.features': 'Key Features',
    'projects.detail.tech': 'Technologies',
    'projects.detail.links': 'Links',
    'projects.detail.liveDemo': 'Live Demo',
    'projects.detail.privateRepo': 'Private Repository',
    'projects.detail.githubRepo': 'GitHub Repository',
    'projects.detail.caseStudyBadge': 'Engineering Deep Dive',
    'projects.detail.caseStudyTitle': 'Case Study',
    'projects.detail.problem': 'The Problem',
    'projects.detail.solution': 'The Solution',
    'projects.detail.architecture': 'System Architecture',
    'projects.detail.scalability': 'Scalability & Performance',
    'projects.detail.cta': 'Interested in a project like this?',
    'projects.detail.ctaButton': 'Start a Discussion',

    'lang.switch': 'ID',
  },
};

export default locales;
