import React, { useState } from "react";
import { Box, Paper, Rating, Typography, Button, Icon, Divider } from "@mui/material";
import { Person } from "@mui/icons-material"
import { IReview } from "../types";
import parseDate from '../../../utils/parse-date';
import { useLabels } from "../../labels/useLabels";


type Props = {
    review: IReview,
    onClick: (rev: IReview) => void
}

const maxLength = 100

const ReviewItem: React.FC<Props> = ({ review, onClick }) => {
    const { name, text, rate, date } = review

    const labels = useLabels()

    const isLong = text.length > maxLength;
    const displayText = !isLong
        ? text
        : text.slice(0, maxLength) + '...';

    const clickHandler = () => {
        onClick(review)
    }

    return (
        <Paper sx={{ height: '100%',display:'flex',flexDirection:'column',justifyContent:'space-between' }}>
            <Box>
                <Rating size="medium" max={10} value={rate} readOnly sx={{ p: 2 }} />
                <Typography variant="subtitle1" align="left" sx={{ p: 1 }}>
                    {parseDate(date)}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 1 }}>
                    <Icon>
                        <Person />
                    </Icon>
                    <Typography>
                        {name}
                    </Typography>
                </Box>
                <Divider sx={{ my: 1 }} />
                <Typography color="text.secondary" align="left" variant="body1" sx={{ whiteSpace: 'pre-line', p: 2 }}>
                    {displayText}
                </Typography>
            </Box>
            <Button onClick={clickHandler} sx={{m:1}}>
                {labels.show_more}
            </Button>
        </Paper>
    )
}

export default ReviewItem