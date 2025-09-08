import React, { useState, useMemo, useEffect } from "react"
import { Box, Grid, } from "@mui/material"
import SkillCard from "./SkillCard"
import Filter from "./components/Filter"
import { useSkills } from "./useSkills"

const SkillsDisplay: React.FC = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [])

    const [selectedTags, setSelectedTags] = useState<string[]>([])

    const skills = useSkills()

    const filtredSkills = useMemo(() => {
        if (selectedTags.length === 0)
            return skills

        const isValid = (tagsArray: string[]) => {
            for (let i = 0; i < selectedTags.length; i++) {
                if (!tagsArray.includes(selectedTags[i]))
                    return false
            }
            return true
        }

        return skills.filter((skill) => isValid(skill.tags))
    }, [selectedTags, skills])

    return (
        <Box>
            <Box sx={{ m: 2, p: 3 }}>
                <Filter tags={selectedTags} onChange={(value) => setSelectedTags([...value])} />
                <Grid container spacing={1}>
                    {filtredSkills.map((skill) =>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <SkillCard selectedTags={selectedTags} {...skill} />
                        </Grid>)}
                </Grid>
            </Box>
        </Box>
    )
}

export default SkillsDisplay