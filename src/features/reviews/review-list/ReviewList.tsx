import React, { useState, Fragment } from "react";
import { Box, Grid, useTheme, useMediaQuery } from "@mui/material";
import ReviewItem from './ReviewItem';
import ReviewModal from "../review-modal/ReviewModal";
import { IReview } from "../types";
import { useBreakpointValue } from "../../../hooks/useBreakpointValue";
import { useReviews } from "../useReviews";

const ReviewList = () => {

    const count = useBreakpointValue<number>({
        xs:3,
        sm:4,
        md:6,
        lg:6,
        xl:6,
    })

    const [review, setReview] = useState<IReview>()

    const reviews = useReviews()

    const sortedReviews = reviews.sort((a, b) => b.rate - a.rate).slice(0, count)

    const closeHandler = () => {
        setReview(undefined)
    }

    const clickHandler = (rev: IReview) => {
        setReview(rev)
    }

    return (
        <Fragment>
            <Box>
                <Box sx={{ m: 2 }}>
                    <Grid container spacing={3}>
                        {sortedReviews.map((item) =>
                            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                                <ReviewItem review={item} onClick={clickHandler} />
                            </Grid>)}
                    </Grid>
                </Box>
            </Box>
            <ReviewModal open={review ? true : false} review={review} onClose={closeHandler} />
        </Fragment>
    )
}

export default ReviewList