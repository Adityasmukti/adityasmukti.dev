### [2026-05-10] - Portfolio Website (adityasmukti.dev)

**Perubahan:**
- Inisialisasi proyek Next.js 16 dengan App Router, TypeScript, dan Tailwind CSS v4
- Install dependencies: `framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`
- Membangun clean architecture dengan struktur: `components/`, `sections/`, `layouts/`, `data/`, `lib/`
- Membuat 9 section: Navbar, Hero, About, Projects, TechStack, Architecture, Experience, Contact, Footer
- Mengimplementasikan animasi Framer Motion: FadeIn, StaggerContainer, animated background grid, flow particles
- Mengimplementasikan design system: dark mode `#050505`, glassmorphism cards, glow effects, custom cursor
- Menambahkan fitur: project filter, contact form dengan state management, scroll indicator, mobile responsive

**Alasan:**
- Membuat website portfolio premium modern bergaya Vercel/Linear/Supabase untuk Aditias Muktiyanto

**Dampak:**
- Proyek baru di `/home/adityasmukti/Projects/adityasmukti.dev`
- Tidak ada dampak ke sistem existing

**File yang dibuat:**
- `src/app/layout.tsx` - Root layout dengan SEO metadata
- `src/app/page.tsx` - Halaman utama (assembly semua sections)
- `src/app/globals.css` - Design tokens + Tailwind v4 @theme + global styles
- `src/data/portfolio.ts` - Data statis portfolio terpusat
- `src/lib/utils.ts` - Utility cn() untuk class merging
- `src/components/animations/FadeIn.tsx` - FadeIn & StaggerContainer
- `src/components/animations/AnimatedGrid.tsx` - Animated background
- `src/components/ui/Button.tsx` - Button reusable (4 variants)
- `src/components/ui/Section.tsx` - Section wrapper & header
- `src/components/ui/CursorGlow.tsx` - Custom cursor glow
- `src/layouts/Navbar.tsx` - Sticky navbar dengan blur effect
- `src/layouts/Footer.tsx` - Footer minimalis
- `src/sections/HeroSection.tsx` - Hero dengan animated background
- `src/sections/AboutSection.tsx` - About dengan specialization cards
- `src/sections/ProjectsSection.tsx` - Projects dengan filter dan card premium
- `src/sections/TechStackSection.tsx` - Tech stack grid cards
- `src/sections/ArchitectureSection.tsx` - Architecture flow diagram
- `src/sections/ExperienceSection.tsx` - Experience timeline

### [2026-05-10] - Optimasi Proporsi UI & Perbaikan Integrasi CSS

**Perubahan:**
- Meningkatkan ukuran font global: `text-xs` -> `text-sm`, `text-sm` -> `text-base` di seluruh section utama
- Memperbesar ukuran icon Lucide: dari `16px` menjadi `20px` dan `24px` di tempat strategis
- Update `Button.tsx`: Meningkatkan padding dan ukuran font untuk varian `md` dan `lg`
- Update `ContactSection.tsx`: Menyeimbangkan layout grid menjadi 50:50 (2 kolom seimbang) dan memperbaiki visual social cards
- Update `HeroSection.tsx`: Menyamakan container ke `max-w-6xl` agar konsisten
- Update `Button.tsx`: Meningkatkan estetika dengan shadow glow premium, backdrop blur, dan font semibold
- Update `app/globals.css`: Meningkatkan kontras `input-modern` (border lebih tegas, hover state, focus ring yang lebih halus)
- Update `postcss.config.mjs`: Menambahkan `autoprefixer` untuk kompatibilitas CSS di berbagai browser
- Install `autoprefixer`: Menambahkan dependency yang diperlukan untuk PostCSS
- Update `src/app/globals.css`: Menambahkan directive `@config` eksplisit untuk memastikan Tailwind v4 memproses konfigurasi dengan benar

**Alasan:**
- Memperbaiki keluhan user mengenai estetika tampilan yang "tidak enak dilihat" dengan meningkatkan keseimbangan layout (symmetry), kontras visual pada elemen interaktif, dan sentuhan desain premium pada komponen UI.

**Dampak:**
- Website terlihat jauh lebih profesional, seimbang, dan memiliki hierarki visual yang jelas.
- Interaksi pada form dan tombol terasa lebih responsif dan premium.

### [2026-05-10] - Migrasi Desain ke Typefolio & Sinkronisasi GitHub

**Perubahan:**
- Melakukan perombakan total desain website (full migration) mengikuti template **Typefolio**.
- Update `src/app/globals.css`: Mengadopsi sistem warna oklch, tipografi premium, dan layout minimalis berbasis border.
- Pembuatan 7 komponen baru di `src/components/typefolio/`: `HeroSection`, `AboutMe`, `FeaturedWork`, `Experience`, `ProjectOverview`, `Divider`, `Layout/Header`, `Layout/Footer`.
- Sinkronisasi data project: Menggunakan `gh repo list` untuk mengambil data repository asli dan memperbarui `src/data/portfolio.ts`.
- Penambahan proyek nyata: `Makloon Manufacturing System` dan `Project-MAI (Advanced C#)` dari GitHub user.
- Perbaikan path asset: Memindahkan dan memperbaiki referensi gambar/icon dari paket Typefolio ke folder `public`.
- Install dependencies baru: `tw-animate-css`, `class-variance-authority`, `@radix-ui/react-slot`.

**Alasan:**
- Mengikuti permintaan USER untuk mengubah tampilan secara keseluruhan mengikuti referensi Typefolio yang lebih bersih, modern, dan fokus pada konten tipografi.
- Sinkronisasi dengan GitHub untuk memastikan portofolio menampilkan data proyek yang nyata dan up-to-date.

**Dampak:**
- Website bertransformasi menjadi desain minimalis premium dengan sistem warna light/dark yang solid.
- Navigasi dan struktur halaman menjadi lebih ringkas dan profesional.
### [2026-05-13] - Optimasi Performa (LCP & CLS)

**Perubahan:**
- Update `HeroSection`: Menambahkan atribut `priority` pada banner dan foto profil untuk mempercepat LCP.
- Update `ProjectDetailPage`: Migrasi dari tag `<img>` ke `<Image />` Next.js untuk optimasi otomatis (WebP, lazy loading) dan menambahkan `priority` pada gambar utama proyek.
- Verifikasi Font: Memastikan penggunaan `next/font/google` untuk eliminasi render-blocking resources.
- Perbaikan CLS: Memastikan semua gambar memiliki `width` dan `height` yang eksplisit.
- Update Data: Menambahkan pengalaman kerja terbaru sebagai IT Senior Developer di PT. Thor Teknologi Digital.

**Alasan:**
- Meningkatkan skor PageSpeed Insights, khususnya metrik Largest Contentful Paint (LCP) dan Cumulative Layout Shift (CLS) untuk pengalaman pengguna yang lebih mulus dan ranking SEO yang lebih baik.

**Dampak:**
- Waktu pemuatan visual utama menjadi lebih cepat.
- Tidak ada pergeseran tata letak (layout shift) saat gambar dimuat.
- Aset gambar dikirimkan dalam format modern (WebP) dengan ukuran yang lebih kecil.
