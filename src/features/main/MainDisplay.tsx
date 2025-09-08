import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Divider, Typography, Button } from "@mui/material";
import ReviewList from '../reviews/review-list/ReviewList';
import SkillList from "../skills/skill-list/SkillList";
import PortfolioCarousel from "../portfolios/portfolio-carousel/PortfolioCarousel";

import { ContactsDisplay } from "../contacts";
import { useLabels } from "../../features/labels/useLabels";

const MainDisplay = () => {

    const labels = useLabels()

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [])

    return (
        <Box>
            <Typography color='text.primary' variant="h4" sx={{ mt: 2 }}>
                {labels.reviews}
            </Typography>
            <ReviewList />
            <Button component={Link} to='/reviews' variant="outlined">
                {labels.show_more}
            </Button>
            <Divider variant="middle" sx={{ my: 2 }} />
            <Typography color='text.primary' variant="h4">
                {labels.portfolio}
            </Typography>
            <PortfolioCarousel />
            <Button component={Link} to='/portfolios' variant="outlined" sx={{mt:2}}>
                {labels.show_more}
            </Button>
            <Divider variant="middle" sx={{ my: 2 }} />
            <Typography color='text.primary' variant="h4">
                {labels.skill_list}
            </Typography>
            <SkillList />
            <Button component={Link} to='/skills' variant="outlined">
                {labels.show_more}
            </Button>
            <Divider variant="middle" sx={{ my: 2 }} />
            <Typography color='text.primary' variant="h4">
                {labels.contact_info}
            </Typography>
            <ContactsDisplay />
        </Box>
    )
}

export default MainDisplay