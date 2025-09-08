import { ru, en } from "../features/labels/data"
import { useLanguageStore } from "../store/useLanguageStore"

const usePages = () => {
    const { language } = useLanguageStore()

    return [
        { title: language === 'ru' ? ru.cv : en.cv, to: '/cv' },
        { title: language === 'ru' ? ru.portfolio : en.portfolio, to: '/portfolios' },
        { title: language === 'ru' ? ru.skills : en.skills, to: '/skills' },
        { title: language === 'ru' ? ru.reviews : en.reviews, to: '/reviews' }
    ]
}


export { usePages }