import React from "react"
import { Box, Grid } from "@mui/material"
import { PORTFOLIOS } from "../data"
import PortfolioCard from "./PortfolioCard"

type Props = {
    exceptId?: string
}

const PortfolioList: React.FC<Props> = ({ exceptId }) => {

    const portfolios = exceptId ? PORTFOLIOS.filter((value) => value.id !== exceptId) : PORTFOLIOS

    return (
        <Box>
            <Box sx={{ m: 1, p: 1 }}>
                <Grid container spacing={2}>
                    {portfolios.map((item, i) =>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <PortfolioCard
                                portfolio={item}
                            />
                        </Grid>)}
                </Grid>
            </Box>
        </Box>
    )
}

export default PortfolioList