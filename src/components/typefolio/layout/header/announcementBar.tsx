import Link from "next/link";
import { personalInfo } from "@/data/portfolio";

const AnnouncementBar = () => {
    return (
        <div className="bg-primary py-3">
            <div className="container">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white text-sm font-medium">
                        👋 Tersedia untuk proyek freelance baru
                    </p>
                    <div className="flex items-center gap-6">
                        <Link href={personalInfo.linkedin} target="_blank" className="text-white/80 hover:text-white text-xs transition-colors">LinkedIn</Link>
                        <Link href={personalInfo.github} target="_blank" className="text-white/80 hover:text-white text-xs transition-colors">GitHub</Link>
                        <Link href={`mailto:${personalInfo.email}`} className="text-white/80 hover:text-white text-xs transition-colors">Email</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnnouncementBar
