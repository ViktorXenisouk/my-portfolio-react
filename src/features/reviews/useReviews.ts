import React, { useState, useEffect } from "react";
import { REVIEWS } from "./data";
import { Language } from "../../types/Language";
import { useLanguageStore } from "../../store/useLanguageStore";
import { IReview, IReviewData } from "./types";

const getReviews = (lan: Language) => {
    const array: IReview[] = []

    REVIEWS.forEach((item) => {
        const { text_en, text_ru, name_en, name_ru, ...rest } = item
        array.push({
            ...rest,
            text: lan === 'ru' ? text_ru : text_en,
            name: lan === 'ru' ? name_ru : name_en
        })
    })

    return array
}

const useReviews = () => {
    const { language } = useLanguageStore()
    const [reviews, setReviews] = useState(getReviews(language))

    useEffect(() => {
        setReviews(getReviews(language))
    }, [language])

    return reviews
}

export { useReviews }