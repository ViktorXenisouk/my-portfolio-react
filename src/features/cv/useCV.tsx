import { useState, useEffect } from "react";
import { ru, en } from "./data";
import { Language } from "../../types/Language";
import { useLanguageStore } from "../../store/useLanguageStore";

const getCVData = (lan: Language) => {
    return lan === 'ru' ? ru : en
}

const useCV = () => {
    const { language } = useLanguageStore()
    const [reviews, setReviews] = useState(getCVData(language))

    useEffect(() => {
        setReviews(getCVData(language))
    }, [language])

    return reviews
}

export { useCV }