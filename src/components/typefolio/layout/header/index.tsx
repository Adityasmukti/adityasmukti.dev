'use client';

import AnnouncementBar from "./announcementBar"
import { useLocale } from "@/lib/i18n"

const Header = () => {
    const { locale, setLocale, t } = useLocale()

    return (
        <header className="sticky top-0 z-50">
            <div className="bg-primary py-1">
                <div className="container">
                    <div className="flex justify-end">
                        <button
                            onClick={() => setLocale(locale === 'en' ? 'id' : 'en')}
                            className="text-white/80 hover:text-white text-xs font-medium transition-colors px-2 py-0.5 rounded hover:bg-white/10"
                        >
                            {t('lang.switch')}
                        </button>
                    </div>
                </div>
            </div>
            <AnnouncementBar/>
        </header>
    )
}

export default Header
