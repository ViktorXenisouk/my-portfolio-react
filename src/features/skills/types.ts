import { ReactNode } from "react"

interface ISkill {
    title: string,
    description: string,
    experienceDescription: string,
    image: ReactNode,
    tags: string[]
    knowledgeTitle: string,
    knowledge: number, // 0 - 10
}

interface ISkillData {
    title: string,
    description_ru: string,
    description_en: string,
    experienceDescription_ru: string,
    experienceDescription_en: string,
    image: ReactNode,
    tags: string[]
    knowledgeTitle_ru: string,
    knowledgeTitle_en: string,
    knowledge: number, // 0 - 10
}

export type { ISkill, ISkillData }