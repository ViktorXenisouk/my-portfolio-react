import { useState, useEffect } from "react";
import { Language } from "../../types/Language";
import { useLanguageStore } from "../../store/useLanguageStore";
import { ISkill } from "./types";
import { SKILLS } from "./data";

const getSkills = (lan: Language) => {
    const array: ISkill[] = []
    SKILLS.forEach((item) => {
        const { description_en, description_ru, experienceDescription_ru, experienceDescription_en, knowledgeTitle_en, knowledgeTitle_ru, ...rest } = item
        array.push({
            ...rest,
            description: lan === 'ru' ? description_ru : description_en,
            experienceDescription: lan === 'ru' ? experienceDescription_ru : experienceDescription_en,
            knowledgeTitle: lan === 'ru' ? knowledgeTitle_ru : knowledgeTitle_en
        })
    })
    return array
}

const useSkills = () => {
    const { language } = useLanguageStore()
    const [skills, setSkills] = useState(getSkills('ru'))

    useEffect(() => {
        setSkills(getSkills(language))
    }, [language])

    return skills
}

export { useSkills }
