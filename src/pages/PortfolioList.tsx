import React, { useEffect } from 'react';
import PortfolioListDisplay from '../features/portfolios/portfolio-list/PortfolioList';

const PortfolioList = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
    }, [])

    return (
        <PortfolioListDisplay />
    )
}

export default PortfolioList