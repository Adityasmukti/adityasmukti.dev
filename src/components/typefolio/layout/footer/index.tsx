import Link from "next/link"
import { personalInfo } from "@/data/portfolio"

const Footer = () => {
    return (
        <footer className="-translate-y-[1px] bg-white border-t border-primary/10">
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 px-4 sm:px-7 py-8 md:py-12">
                        <p className="text-secondary text-sm italic">
                            © 2026 {personalInfo.name} — Membangun dengan kualitas dan integritas.
                        </p>
                        <div className="flex gap-4">
                           <Link href="#contact" className="text-sm font-semibold hover:text-violet-600 transition-colors">Hubungi Saya</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
