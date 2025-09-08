import React, { useState } from "react";
import CarouselWithButtons from "../../../components/carousel-with-buttons/CarouselWithButtons";
import PortfolioCarouselItem from "./PortfolioCarouselItem";
import { usePortfolio } from "../usePortfolio";


const PortfolioCarousel = () => {

    const portfolios = usePortfolio()

    return (
            <CarouselWithButtons height="500px">
                {portfolios.map((item) =>
                    <PortfolioCarouselItem
                        portfolio={item}
                    />
                )}
            </CarouselWithButtons>
    )
}

export default PortfolioCarousel