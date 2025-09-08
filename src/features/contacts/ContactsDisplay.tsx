import React, { useEffect } from "react";
import { Box, Typography, Paper } from "@mui/material";
import { Work, GitHub } from "@mui/icons-material"

const ContactsDisplay = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
    }, [])

    return (
        <Box>
            <Paper sx={{ m: 2, p: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, m: 1, p: 1 }}>
                    <Work color="warning" /> <Box component='span' color='text.secondary'>kwork: </Box>
                    <Typography color="text.primary" component='a' href="https://kwork.ru/user/vixcode">
                        https://kwork.ru/user/vixcode
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, m: 1, p: 1 }}>
                    <GitHub color="inherit" /> <Box component='span' color='text.secondary'>GitHub: </Box>
                    <Typography color="text.primary" component='a' href="https://github.com/ViktorXenisouk">
                        https://github.com/ViktorXenisouk
                    </Typography>
                </Box>
            </Paper>
        </Box>
    )
}

export default ContactsDisplay