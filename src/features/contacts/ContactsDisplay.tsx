import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { WhatsApp, Telegram, Email, LinkedIn, Work, GitHub } from "@mui/icons-material"

const ContactsDisplay = () => {

    return (
        <Box>
            <Paper sx={{ m: 2, p: 2 }}>
                <Typography color="text.primary" sx={{ display: 'flex', alignItems: 'center', gap: 1, m: 1, p: 1 }}>
                    <LinkedIn color="primary" /> <Box component='span' color='text.secondary'>LinkedIn: </Box> ejucfcej
                </Typography>
                <Typography color="text.primary" sx={{ display: 'flex', alignItems: 'center', gap: 1, m: 1, p: 1 }}>
                    <Email color="secondary" /> <Box component='span' color='text.secondary'>email: </Box> vikktorx2005@gmail.com
                </Typography>
                <Typography color="text.primary" sx={{ display: 'flex', alignItems: 'center', gap: 1, m: 1, p: 1 }}>
                    <WhatsApp color="success" /> <Box component='span' color='text.secondary'>whatsApp: </Box> +420 778 434 453
                </Typography>
                <Typography color="text.primary" sx={{ display: 'flex', alignItems: 'center', gap: 1, m: 1, p: 1 }}>
                    <Telegram color="secondary" /> <Box component='span' color='text.secondary'>telegram: </Box> +420 778 434 453
                </Typography>
                <Typography color="text.primary" sx={{ display: 'flex', alignItems: 'center', gap: 1, m: 1, p: 1 }}>
                    <Work color="warning" /> <Box component='span' color='text.secondary'>kwork: </Box> www.dfv.qwede
                </Typography>
                <Typography color="text.primary" sx={{ display: 'flex', alignItems: 'center', gap: 1, m: 1, p: 1 }}>
                    <GitHub color="inherit" /> <Box component='span' color='text.secondary'>GitHub: </Box> www.dfv.qwede
                </Typography>
            </Paper>
        </Box>
    )
}

export default ContactsDisplay