import React from "react";
import { Box, Paper, Button, ButtonGroup, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import { IPortfolio } from "../types";
import TagsContainer from "../../../UI/TagsContainer";
import parseDate from '../../../utils/parse-date';
import { useLabels } from "../../../features/labels/useLabels";

const maxLength = 200

type Props = {
    portfolio: IPortfolio,
}

const PortfolioCard: React.FC<Props> = ({ portfolio }) => {
    const { title, description, imgs, tags, git, id, date } = portfolio

    const labels = useLabels()

    const displayDescription = description.length > maxLength ? `${description.slice(0, maxLength)}...` : description
    return (
        <Paper variant="elevation" sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Box sx={{m:1,p:1,display:'flex',flexDirection:'column',gap:2}}>
                <Typography color="text.primary" variant="h3" sx={{ height: '2.5em', alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                    {title}
                </Typography>
                <Paper variant="outlined" sx={{ width: 'auto', display: 'flex', justifyContent: 'center'}}>
                    <Box
                        component='img'
                        src={imgs[0]}
                        sx={{ height: '200px', width: 'auto', maxWidth: '100%' }}
                    />
                </Paper>
                <Typography align="left" color="text.secondary">
                    <Box component='span' color='text.primary'>{labels.date}: </Box>{parseDate(date)}
                </Typography>
                <Typography align="left" color="text.secondary">
                    <Box component='span' color='text.primary'>{labels.description}: </Box>{displayDescription}
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, m: 1, p: 1 }}>
                <TagsContainer tags={tags} />
                    <Button component={Link} to={`/portfolio/${id}`} variant="contained" sx={{width:'100%'}}>
                       {labels.show_more}
                    </Button>
            </Box>
        </Paper>
    )
}

export default PortfolioCard