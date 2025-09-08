import React from "react";
import { Box } from "@mui/material";

type Props = {
    url: string
}

const Image: React.FC<Props> = ({ url }) => {

    return (
        <Box
            component='img'
            src={url}
            alt="React Icon"
            sx={{
                width: '100%',
                height: "auto", // сохраняем пропорции
                display: "block", // убирает лишние пробелы под img
            }}>
        </Box>
    )
}

export default Image