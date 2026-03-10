import { useState, useEffect } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

declare global {
    interface Window {
        googleTranslateElementInit: () => void;
        google: any;
    }
}

const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'sw', name: 'Kiswahili', flag: '🇹🇿' },
    { code: 'zh-CN', name: '中文 (Chinese)', flag: '🇨🇳' },
    { code: 'ar', name: 'العربية (Arabic)', flag: '🇸🇦' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'pt', name: 'Português', flag: '🇧🇷' }
];

const LanguageChanger = ({ isScrolled }: { isScrolled?: boolean }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState(languages[0]);

    useEffect(() => {
        // Add Google Translate Script if it doesn't exist
        if (!document.getElementById('google-translate-script')) {
            const script = document.createElement('script');
            script.id = 'google-translate-script';
            script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            script.async = true;
            document.body.appendChild(script);

            window.googleTranslateElementInit = () => {
                new window.google.translate.TranslateElement(
                    {
                        pageLanguage: 'en',
                        includedLanguages: 'en,sw,zh-CN,ar,de,fr,es,pt',
                        autoDisplay: false,
                    },
                    'google_translate_element'
                );
            };
        }

        // Attempt to read current language from cookie
        const match = document.cookie.match(/googtrans=\/en\/([^;]+)/);
        if (match && match[1]) {
            const found = languages.find((l) => l.code === match[1]);
            if (found) setCurrentLang(found);
        }
    }, []);

    const changeLanguage = (langCode: string) => {
        const lang = languages.find((l) => l.code === langCode);
        if (lang) setCurrentLang(lang);
        setIsOpen(false);

        // Set google translate cookie (domain specific)
        const domain = window.location.hostname;
        document.cookie = `googtrans=/en/${langCode}; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/; domain=${domain}`;
        document.cookie = `googtrans=/en/${langCode}; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/;`;

        // Attempt non-reload change first via the hidden google element
        const gtSelect = document.querySelector('.goog-te-combo') as HTMLSelectElement;
        if (gtSelect) {
            gtSelect.value = langCode;
            gtSelect.dispatchEvent(new Event('change'));
        } else {
            window.location.reload();
        }
    };

    return (
        <div className="relative">
            {/* Hidden element for Google Translate to attach to */}
            <div id="google_translate_element" className="hidden"></div>

            {/* Custom Dropdown Trigger */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg font-montserrat text-sm font-semibold transition-all duration-300
          ${isScrolled
                        ? "text-foreground hover:bg-black/5"
                        : "text-white hover:bg-white/10"
                    }`}
            >
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline-block">{currentLang.name}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className={`absolute top-full right-0 mt-2 w-48 rounded-xl shadow-lg border overflow-hidden z-50
              ${isScrolled ? "bg-card border-border" : "bg-[#3d5219]/95 backdrop-blur-md border-white/10"}`}
                    >
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => changeLanguage(lang.code)}
                                className={`w-full text-left px-4 py-3 flex items-center gap-3 transition-colors
                  ${isScrolled
                                        ? "hover:bg-primary/10 text-foreground"
                                        : "hover:bg-white/10 text-white"}
                  ${currentLang.code === lang.code ? (isScrolled ? "bg-primary/5 font-bold" : "bg-white/10 font-bold") : ""}`}
                            >
                                <span className="text-lg">{lang.flag}</span>
                                <span className="text-sm font-medium">{lang.name}</span>
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default LanguageChanger;
