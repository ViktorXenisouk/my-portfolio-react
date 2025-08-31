import { ru } from "../data/labels"
import { useLanguageStore } from "../store/useLanguageStore"

const usePages = () => {
    const { language } = useLanguageStore()

    return [
        { title: ru.cvi, to: '/cvi' },
        { title: ru.portfolio, to: '/portfolios' },
        { title: ru.skills, to: '/skills' },
        { title: ru.contacts, to: '/contacts' },
        { title: ru.reviews, to: '/reviews' }
    ]
}


export { usePages }