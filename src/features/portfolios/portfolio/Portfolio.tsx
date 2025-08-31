import React from "react";
import { useParams } from "react-router-dom";
import NoFoundErrorPage from "../../../pages/NoFoundErrorPage";
import { PORTFOLIOS } from "../data";
import PortfolioView from "./PortfolioView";

const Portfolio: React.FC = () => {

    const { id } = useParams()

    const portfolio = PORTFOLIOS.find((value) => value.id === id)

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