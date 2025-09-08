import React from "react";
import { IPortfolio } from "../types";
import { Box, Typography, Paper, Button } from "@mui/material";
import parseDate from '../../../utils/parse-date';
import { useLabels } from "../../labels/useLabels";

const maxLength = 100

type Props = {
    portfolio: IPortfolio,
    onClick: (id: string) => void
}

const PortfolioCarouselItem: React.FC<Props> = ({ portfolio, onClick }) => {
    const { title, description, imgs, tags, git, id, date } = portfolio

    const labels = useLabels()

    const displayDescription = description.length > maxLength ? `${description.slice(0, maxLength)}...` : description

    const clickHandler = () => {
        onClick(id)
    }

    return (
        <Box sx={{ width: '300px', height: '100%', flexShrink: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: 1 }}>
            <Box>
                <Typography color="text.primary">
                    {title}
                </Typography>
                <Paper variant="outlined" sx={{ width: 'auto', display: 'flex', justifyContent: 'center', m: 1, p: 1 }}>
                    <Box
                        component='img'
                        src={imgs[0]}
                        sx={{ height: '150px', width: 'auto', maxWidth: '100%' }}
                    />
                </Paper>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, m: 1, p: 1 }}>
                    <Typography align="left" color="text.secondary">
                        <Box component='span' color='text.primary'>{labels.date}: </Box>{parseDate(date)}
                    </Typography>
                    <Typography align="left" color="text.secondary" sx={{ whiteSpace: 'break-spaces' }}>
                        <Box component='span' color='text.primary'>{labels.description}: </Box> {displayDescription}
                    </Typography>
                </Box>
            </Box>
            <Button variant="outlined" onClick={clickHandler} sx={{ m: 1 }}>
                {labels.show_more}
            </Button>
        </Box>
    )
}

export default PortfolioCarouselItem