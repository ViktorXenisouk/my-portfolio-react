import React, { useState, useMemo } from "react"
import { Box, Grid, } from "@mui/material"
import { SKILLS } from "./skils.data"
import SkillCard from "./SkillCard"
import Filter from "./components/Filter"

const SkillsDisplay: React.FC = () => {

    const [selectedTags, setSelectedTags] = useState<string[]>([])

    const skills = useMemo(() => {
        if (selectedTags.length === 0)
            return SKILLS

        const isValid = (tagsArray: string[]) => {
            for (let i = 0; i < selectedTags.length; i++) {
                if (!tagsArray.includes(selectedTags[i]))
                    return false
            }
            return true
        }

        return SKILLS.filter((skill) => isValid(skill.tags))
    }, [selectedTags])

    return (
        <Box>
            <Box sx={{ m: 2, p: 3 }}>
                <Filter tags={selectedTags} onChange={(value) => setSelectedTags([...value])} />
                <Grid container spacing={1}>
                    {skills.map((skill) =>
                        <Grid size={{xs:12,sm:6,md:4}}>
                            <SkillCard selectedTags={selectedTags} {...skill} />
                        </Grid>)}
                </Grid>
            </Box>
        </Box>
    )
}

export default SkillsDisplay