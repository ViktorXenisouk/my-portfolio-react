import { useState, useEffect } from 'react'
import { ru, en } from './data'
import { useLanguageStore } from '../../store/useLanguageStore'

const getLabels = (lan: 'ru' | 'en') => {
    return lan === 'ru' ? ru : en
}

const useLabels = () => {
    const { language } = useLanguageStore()
    const [labels, setLabels] = useState(getLabels(language))

    useEffect(() => {
        setLabels(getLabels(language))
    }, [language])

    return labels
}

export { useLabels }