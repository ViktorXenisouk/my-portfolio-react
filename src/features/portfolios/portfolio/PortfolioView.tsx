import React from "react";
import { Box, Typography, Grid, Paper, Divider,useTheme,useMediaQuery } from "@mui/material";
import TagsContainer from "../../../UI/TagsContainer";
import { IPortfolio } from "../types";
import ImageCarousel from "../../../components/image-carousel/ImageCarousel";
import PortfolioList from "../portfolio-list/PortfolioList";
import { useLabels } from "../../labels/useLabels";

const PortfolioView: React.FC<IPortfolio> = (props: IPortfolio) => {
    const { title, description, tags, imgs, id } = props

    const theme = useTheme()

    const isMobile = useMediaQuery(theme.breakpoints.down('md'))

    const labels = useLabels()

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            <Typography
                variant="h2"
                sx={{
                    color: 'text.primary',
                    textAlign: 'center',
                    textDecoration: 'underline',
                    mt: '30px'
                }}>
                {title}
            </Typography>
            <Box
                sx={{
                    p: 5
                }}>
                <Grid container spacing={3}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <ImageCarousel isMobile={isMobile} imgs={imgs.map((v) => { return { url: v, name: 'my-image' } })} />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Paper
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                flexDirection: 'column',
                                height: '100%'
                            }}>
                            <Box sx={{ p: '12px' }}>
                                <Typography color='text.secondary' align="left">
                                    <Box component='span' color='text.primary'>{labels.description}: </Box>
                                    {description}
                                </Typography>
                                <Divider sx={{ mt: '10px', mb: '20px' }} />
                                <TagsContainer tags={tags} />
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <Box sx={{ mb: '50px' }}>
                            <Divider sx={{ mt: '30px', mb: '50px' }} />
                            <PortfolioList exceptId={id} />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default PortfolioView