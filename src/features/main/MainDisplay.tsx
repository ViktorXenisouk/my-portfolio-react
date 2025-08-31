import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import ReviewList from '../reviews/review-list/ReviewList';
import SkillList from "../skills/skill-list/SkillList";
import PortfolioCarousel from "../portfolios/portfolio-carousel/PortfolioCarousel";

import { ContactsDisplay } from "../contacts";
import { useLabel } from "../../hooks/useLabel";

const MainDisplay = () => {

    const labels = useLabel()

    return (
        <Box>
            <Typography color='text.primary' variant="h4" sx={{ mt: 2 }}>
                {labels.reviews}
            </Typography>
            <ReviewList />
            <Divider variant="middle" sx={{ my: 2 }} />
            <Typography color='text.primary' variant="h4">
                {labels.portfolio}
            </Typography>
            <PortfolioCarousel />
            <Divider variant="middle" sx={{ my: 2 }} />
            <Typography color='text.primary' variant="h4">
                {labels.skill_list}
            </Typography>
            <SkillList />
            <Divider variant="middle" sx={{ my: 2 }} />
            <Typography color='text.primary' variant="h4">
                {labels.contact_info}
            </Typography>
            <ContactsDisplay />
        </Box>
    )
}

export default MainDisplay