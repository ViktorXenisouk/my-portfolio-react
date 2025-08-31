import React, { useState } from "react"
import { Box, Grid, Paper } from "@mui/material"
import FilterItam from "./FilterItem"
import { TAGS } from "../tags.data"

type Props = {
    tags: string[]
    onChange: (tags: string[]) => void;
}

const Filter: React.FC<Props> = ({ tags, onChange }) => {

    const clickHandler = (value: string) => {
        let newTags = [...tags]
        if (tags.includes(value)) {
            newTags = newTags.filter((tag => tag !== value))
        }
        else {
            newTags.push(value)
        }

        onChange([...newTags])
    }

    return (
        <Paper sx={{ p: 1, my: 2 }} variant="outlined">
            <Grid container columns={24} direction='row' spacing={2}>
                {TAGS.map((item) =>
                    <Grid size='auto'>
                        <FilterItam value={item} isSelected={tags.includes(item)} onClick={clickHandler} />
                    </Grid>
                )}
            </Grid>
        </Paper>
    )
}

export default Filter