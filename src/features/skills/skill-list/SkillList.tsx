import React from "react"
import { Box,Grid } from "@mui/material"
import SkillCard from "../SkillCard"
import { useSkills } from "../useSkills"

const SkillList = () => {

    const skills = useSkills()

    const slicedSkills = skills.sort((a,b) => b.knowledge - a.knowledge).slice(0,4)

    return (
          <Box>
            <Box sx={{ m: 2, p: 3 }}>
                <Grid container spacing={1}>
                    {slicedSkills.map((skill) =>
                        <Grid size={{xs:12,sm:6}}>
                            <SkillCard selectedTags={[]} {...skill} />
                        </Grid>)}
                </Grid>
            </Box>
        </Box>
    )
}

export default SkillList