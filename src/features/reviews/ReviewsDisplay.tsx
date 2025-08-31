import React, { useState, useMemo } from "react"
import { Box, Grid } from "@mui/material"
import RewiewCard from "./ReviewCard"
import { REVIEWS } from "./data"
import Filter from "./Filter"
import { SortOrder, SortOption } from "./types"

const ReviewsDisplay: React.FC = () => {

    const [option, setOption] = useState<SortOption>('date')
    const [order, setOrder] = useState<SortOrder>('asc')


    const sortedRewiews = useMemo(() => {
        return REVIEWS.sort((a, b) => {
            const first = order === 'asc' ? a[option] : b[option] as number | string
            const second = order === 'asc' ? b[option] : a[option] as number | string
            if (typeof first === 'number' && typeof second === 'number') {
                return first - second
            }
            else if (typeof first === 'string' && typeof second === 'string') {
                return first.localeCompare(second)
            }
            return -1
        })
    }, [option, order])

    return (
        <Box>
            <Box sx={{ m: 1, p: 1 }}>
                <Filter
                    order={order}
                    option={option}
                    onOptionChange={(opt) => setOption(opt)}
                    onOrderChange={(ord) => setOrder(ord)}
                />
                <Grid container spacing={2}>
                    {sortedRewiews.map((rewiew) =>
                        <Grid size={{xs:12,sm:6,md:4,lg:3}}>
                            <RewiewCard {...rewiew} />
                        </Grid>)}
                </Grid>
            </Box>
        </Box>
    )
}

export default ReviewsDisplay