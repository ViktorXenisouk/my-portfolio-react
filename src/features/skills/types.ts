import { ReactNode } from "react"

interface ISkill {
    title: string,
    shortDescription: string,
    experienceDescription:string,
    image: ReactNode,
    tags: string[]
    knowledgeTitle:string,
    knowledge: number, // 0 - 10
}

export type { ISkill }