import React, { useState, Fragment } from "react";
import CarouselWithButtons from "../../../components/carousel-with-buttons/CarouselWithButtons";
import PortfolioCarouselItem from "./PortfolioCarouselItem";
import PortfolioModal from "../portfolio_modal/PortofolioModal";
import { PORTFOLIOS } from "../data";
import { IPortfolio } from "../types";


const PortfolioCarousel = () => {

    const portfolios = PORTFOLIOS

    const [portfolio, setPorfolio] = useState<IPortfolio>()

    const clickHandler = (id: string) => {
        const item = PORTFOLIOS.find((item) => item.id === id)
        setPorfolio(item)
    }

    const closeHandler = () => {
        setPorfolio(undefined)
    }

    return (
        <Fragment>
            <CarouselWithButtons height="500px">
                {portfolios.map((item) =>
                    <PortfolioCarouselItem
                        onClick={clickHandler}
                        portfolio={item}
                    />
                )}
            </CarouselWithButtons>
            <PortfolioModal
             portfolio={portfolio} 
             onClose={closeHandler}
              open={portfolio ? true : false} 
              />
        </Fragment>
    )
}

export default PortfolioCarousel