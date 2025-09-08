

interface ICV {
    personalInformation: string,
    name_label: string,
    name_text: string,
    languages_label: string,
    languages_nodes: string[],
    profileSummary_label: string,
    profileSummary_text: string,
    technicalSkills_label: string,
    technicalSkills_nodes: { [name: string]: string },
    freelanceProjects_label: string,
    freelanceProjects_nodes: { [name: string]: string },
    contacts_label: string,
    contacts_nodes: { [name: string]: string }
}

export type { ICV }