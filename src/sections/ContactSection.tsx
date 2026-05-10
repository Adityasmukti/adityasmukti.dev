"use client";

// Contact Section - Form premium dengan social links

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle, Mail, MapPin, CheckCircle, AlertCircle, Link2 } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { Section, SectionHeader } from "@/components/ui/Section";
import { FadeIn } from "@/components/animations/FadeIn";
import { cn } from "@/lib/utils";

// Custom SVG icons
function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

type FormState = "idle" | "sending" | "success" | "error";

export function ContactSection() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    // Simulasi pengiriman
    await new Promise((r) => setTimeout(r, 1500));
    setFormState("success");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setFormState("idle"), 4000);
  };

  const socialLinks = [
    {
      icon: GitHubIcon,
      label: "GitHub",
      href: personalInfo.github,
      desc: "@adityasmukti",
      color: "hover:border-white/30 hover:text-white",
    },
    {
      icon: Link2,
      label: "LinkedIn",
      href: personalInfo.linkedin,
      desc: "Aditias Muktiyanto",
      color: "hover:border-blue-500/40 hover:text-blue-400",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: personalInfo.whatsapp,
      desc: "Chat langsung",
      color: "hover:border-emerald-500/40 hover:text-emerald-400",
    },
  ];

  return (
    <Section id="contact">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[400px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <FadeIn>
        <SectionHeader
          badge="Contact"
          title="Mari Berkolaborasi"
          description="Terbuka untuk proyek freelance, kolaborasi, atau diskusi teknis. Jangan ragu untuk menghubungi saya."
        />
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-6xl mx-auto">
        {/* Left: Social & Info */}
        <FadeIn direction="left" delay={0.1}>
          <div className="space-y-6">
            {/* Info cards */}
            <div className="space-y-4">
              <div className="p-6 rounded-2xl border border-border bg-bg-card/50 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-white text-base font-semibold">Email</p>
                    <p className="text-text-secondary text-sm">{personalInfo.email}</p>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-2xl border border-border bg-bg-card/50 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-white text-base font-semibold">Lokasi</p>
                    <p className="text-text-secondary text-sm">{personalInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-text-muted text-xs mb-4 uppercase tracking-widest font-bold px-1">
                Social Presence
              </p>
              <div className="grid grid-cols-1 gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "flex items-center gap-4 p-4 rounded-2xl border border-border bg-bg-card text-text-secondary transition-all duration-300",
                      social.color
                    )}
                    whileHover={{ x: 4, scale: 1.01, backgroundColor: "rgba(255,255,255,0.02)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <social.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-base font-semibold leading-none mb-1 text-white">
                        {social.label}
                      </p>
                      <p className="text-sm text-text-muted">{social.desc}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Right: Contact Form */}
        <FadeIn direction="right" delay={0.2}>
          <div className="relative p-6 md:p-8 rounded-2xl border border-border bg-bg-card overflow-hidden">
            {/* Corner glow */}
            <div className="absolute top-0 right-0 w-40 h-40 pointer-events-none">
              <div
                className="w-full h-full opacity-20"
                style={{
                  background: "radial-gradient(circle at 100% 0%, rgba(99, 102, 241, 0.4) 0%, transparent 70%)",
                }}
              />
            </div>

            <h3 className="text-white font-semibold text-lg mb-6 relative z-10">
              Kirim Pesan
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-text-secondary text-sm font-medium mb-2">
                  Nama
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Nama Anda"
                  className="input-modern w-full px-5 py-3.5 rounded-xl text-base"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-text-secondary text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="email@anda.com"
                  className="input-modern w-full px-5 py-3.5 rounded-xl text-base"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-text-secondary text-sm font-medium mb-2">
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Ceritakan proyek atau kolaborasi yang Anda inginkan..."
                  className="input-modern w-full px-5 py-3.5 rounded-xl text-base resize-none"
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={formState === "sending" || formState === "success"}
                className={cn(
                  "w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-medium transition-all duration-200",
                  formState === "success"
                    ? "bg-emerald-500/20 border border-emerald-500/30 text-emerald-400"
                    : formState === "error"
                    ? "bg-red-500/20 border border-red-500/30 text-red-400"
                    : "bg-accent hover:bg-accent-hover text-white shadow-glow-sm hover:shadow-glow-md disabled:opacity-60 disabled:cursor-not-allowed"
                )}
                whileTap={formState === "idle" ? { scale: 0.98 } : {}}
              >
                {formState === "sending" ? (
                  <>
                    <motion.div
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    />
                    Mengirim...
                  </>
                ) : formState === "success" ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Pesan Terkirim!
                  </>
                ) : formState === "error" ? (
                  <>
                    <AlertCircle className="w-4 h-4" />
                    Gagal, coba lagi
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Kirim Pesan
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
