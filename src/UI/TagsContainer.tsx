import React from "react"
import { Grid, Chip } from "@mui/material"

type Props = {
    tags: string[],
    selectedTags?: string[]
}

const TagsContainer: React.FC<Props> = ({ tags, selectedTags }) => {

    return (
        <Grid container spacing={2}>
            {tags.map((tag) =>
                <Grid size={'auto'}>
                    <Chip color={selectedTags?.includes(tag) ? 'success' : 'default'} label={tag} />
                </Grid>)}
        </Grid>
    )
}

export default TagsContainer