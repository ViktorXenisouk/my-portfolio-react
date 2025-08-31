import React from "react"
import { Paper, Grid, Box, Stack, Typography, Chip, Rating } from "@mui/material"
import TagsContainer from "../../UI/TagsContainer"
import type { ISkill } from "./types"
import { useLabel } from "../../hooks/useLabel"

const SkillCard: React.FC<ISkill & { selectedTags: string[] }> = (props) => {

    const { title, shortDescription, experienceDescription, image, tags, knowledgeTitle, knowledge, selectedTags } = props

    const labels = useLabel()

    return (
        <Paper variant="elevation" sx={{ height: '100%', display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
            <Typography color="text.primary" variant='h3' sx={{ textDecoration: 'underline', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, p: 2 }}>
                <Box sx={{ width: '100px', height: '100px', display: 'flex', alignItems: 'center' }}>
                    {image}
                </Box>
                {title}
            </Typography>
            <Stack spacing={3} sx={{ p: 2 }}>
                <Typography
                    align="left"
                    color="text.secondary"
                    variant="subtitle1">
                    <Box component='span' color='text.primary'>{labels.description}:</Box> {shortDescription},
                </Typography>
                <Typography
                    align="left"
                    color="text.secondary"
                    variant="subtitle1">
                    <Box component='span' color='text.primary'>{labels.exprereance}:</Box> {experienceDescription},
                </Typography>
            </Stack>
            <Box sx={{ p: 2, display: 'flex', flexDirection: "column", justifyContent: 'flex-start', height: '220px', gap: 1 }}>
                <Paper variant="outlined" sx={{ p: 1 }}>
                    <Typography
                        color="success.main"
                        variant="h4">
                        <Box component='span' color='text.primary' >{labels.level}: </Box>{knowledgeTitle}
                    </Typography>
                    <Rating size="medium" max={10} readOnly value={knowledge} />
                </Paper>
                <TagsContainer
                    tags={tags}
                    selectedTags={selectedTags}
                />
            </Box>
        </Paper>
    )
}

export default SkillCard