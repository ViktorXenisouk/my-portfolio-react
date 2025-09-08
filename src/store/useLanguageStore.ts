import { create } from "zustand"
import { persist } from 'zustand/middleware'
import { Language } from "../types/Language"

type LanguageState = {
    setLanguage: (lan: Language) => void,
    language: Language
}

const useLanguageStore = create<LanguageState>()(persist(
    (set) => ({
        language: 'ru',
        setLanguage: (value) => {
            set({ language: value })
        }
    }),
    { name: 'language-storage' }
))

export { useLanguageStore }