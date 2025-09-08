import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import NoFoundErrorPage from "../../../pages/NoFoundErrorPage";
import { usePortfolio } from "../usePortfolio";
import PortfolioView from "./PortfolioView";

const Portfolio: React.FC = () => {
    const portfolios = usePortfolio()

    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname])

    const { id } = useParams()

    const portfolio = portfolios.find((value) => value.id === id)

    if (!portfolio) {
        return (
            <NoFoundErrorPage />
        )
    }

    return (
        <PortfolioView {...portfolio} />
    )
}

export default Portfolio