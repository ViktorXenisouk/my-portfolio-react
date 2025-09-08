import React from "react"
import { Paper, Box, Stack, Typography, Rating } from "@mui/material"
import TagsContainer from "../../UI/TagsContainer"
import type { ISkill } from "./types"
import { useLabels } from "../../features/labels/useLabels"
import Image from "./components/Image"

const SkillCard: React.FC<ISkill & { selectedTags: string[] }> = (props) => {

    const { title, description, experienceDescription, image, tags, knowledgeTitle, knowledge, selectedTags } = props

    const labels = useLabels()

    return (
        <Paper variant="elevation" sx={{ height: '100%', display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
            <Typography color="text.primary" variant='h3' sx={{ textDecoration: 'underline', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, p: 2 }}>
                <Box sx={{ width: '100px', height: '100px', display: 'flex', alignItems: 'center' }}>
                    <Image url={image}/>
                </Box>
                {title}
            </Typography>
            <Stack spacing={3} sx={{ p: 2 }}>
                <Typography
                    align="left"
                    color="text.secondary"
                    variant="subtitle1">
                    <Box component='span' color='text.primary'>{labels.description}:</Box> {description}
                </Typography>
                <Typography
                    align="left"
                    color="text.secondary"
                    variant="subtitle1">
                    <Box component='span' color='text.primary'>{labels.exprereance}:</Box> {experienceDescription}
                </Typography>
            </Stack>
            <Box sx={{ p: 2, display: 'flex', flexDirection: "column", justifyContent: 'flex-start', minHeight: '220px', gap: 1 }}>
                <Paper variant="outlined" sx={{ p: 1 }}>
                    <Typography
                        color="success.main"
                        variant="h5">
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