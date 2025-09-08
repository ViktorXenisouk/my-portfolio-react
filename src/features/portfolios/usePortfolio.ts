import { useState, useEffect } from "react";
import { IPortfolio } from "./types";
import { PORTFOLIOS } from "./data";
import { useLanguageStore } from "../../store/useLanguageStore";
import { Language } from "../../types/Language";

const getPortfolios = (lan: Language) => {
    const array: IPortfolio[] = []

    PORTFOLIOS.forEach((item) => {
        const { description_en, description_ru, title_ru, title_en, ...rest } = item
        array.push({
            ...rest,
            title: lan === 'ru' ? title_ru : title_en,
            description: lan === 'ru' ? description_ru : description_en
        })
    })

    return array
}

const usePortfolio = () => {
    const { language } = useLanguageStore()
    const [portfolios, setPortfolios] = useState(getPortfolios(language))

    useEffect(() => {
        setPortfolios(getPortfolios(language))
    }, [language])

    return portfolios
}

export { usePortfolio }