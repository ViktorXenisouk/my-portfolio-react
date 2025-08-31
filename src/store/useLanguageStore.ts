import { create } from "zustand"
import { persist } from 'zustand/middleware'

type Language = 'en' | 'ru'

type LanguageState = {
    setLanguage: (lan: Language) => void,
    language: Language
}

const useLanguageStore = create<LanguageState>()(persist(
    (set) => ({
        language: 'en',
        setLanguage: (value) => {
            set({ language: value })
        }
    }),
    { name: 'language-storage' }
))

export { useLanguageStore }