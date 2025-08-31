import React from "react"
import { Chip } from "@mui/material"

type Props = {
    isSelected: boolean,
    value: string,
    onClick: (value: string) => void
}

const FilterItam: React.FC<Props> = ({ isSelected, value, onClick }) => {

    return (
        <Chip
        sx={{p:2}}
            size="medium"
            label={value}
            onClick={() => onClick(value)}
            clickable
            variant={isSelected ? 'filled' : 'outlined'}
        />
    )
}

export default FilterItam