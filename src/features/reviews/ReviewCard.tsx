import React, { useState } from "react";
import { Box, Paper, Rating, Typography, Button, Icon,Divider } from "@mui/material";
import { Person } from "@mui/icons-material"
import { IReview } from "./types";
import parseDate from '../../utils/parse-date';

const maxLength = 200

const RewiewsCard: React.FC<IReview> = (props) => {
    const { name, text, rate, date } = props

    const [expanded, setExpanded] = useState(false);
    const isLong = text.length > maxLength;
    const displayText = expanded || !isLong
        ? text
        : text.slice(0, maxLength) + '...';

    return (
        <Paper variant="elevation" sx={{ height: '100%' }}>
            <Rating size="medium" max={10} value={rate} readOnly sx={{p:2}}/>
            <Typography variant="subtitle1" align="left" sx={{ p: 1 }}>
                {parseDate(date)}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1,ml:1 }}>
                <Icon>
                    <Person />
                </Icon>
                <Typography>
                    {name}
                </Typography>
            </Box>
            <Divider sx={{my:1}}/>
            <Typography color="text.secondary" align="left" variant="body1" sx={{ whiteSpace: 'pre-line', p: 2 }}>
                {displayText}
            </Typography>
            {isLong && (
                <Box sx={{ p: '12px' }}>
                    <Button
                        variant="text"
                        size="small"
                        onClick={() => setExpanded(!expanded)}
                        sx={{ mt: 1, width: '100%', px: '30px' }}
                    >
                        {expanded ? 'hide' : 'show'}
                    </Button>
                </Box>
            )}
        </Paper>
    )
}

export default RewiewsCard