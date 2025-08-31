import { useEffect, useRef } from "react"
import { Box, Typography, Button, Paper } from "@mui/material"
import { Link } from "react-router-dom"
import img from "../assets/images/robot-error-404.png"
import { animate, AnimatableParams } from "animejs"

const NoFoundErrorPage = () => {

    const scope = useRef<HTMLElement>(null)

    const params = {} as AnimatableParams

    useEffect(() => {
        if (scope.current) {
            const params: AnimatableParams = {
                translateX: '0px',
                rotate: "1turn",
                duration: 2000,
                easing: "easeInOutQuad",
            };

            animate(scope.current, params);
        }
    }, [scope.current])

    return (
        <Paper
            variant="outlined"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                pt: '10px',
                width: '600px',
                mx: 'auto',
                mt: '30px',
                p: '30px'
            }}
        >
            <Typography variant="h2" ref={scope}>
                Error Page
            </Typography>

            <Box
                component='img'
                src={img}
                sx={{
                    width: '500px',
                    height: 'auto'
                }}
            />

            <Typography variant="h3">
                Sorry We can not find this Page Plese go back or go to main Page
            </Typography>

            <Button component={Link} to='/' variant="contained" sx={{ mt: '40px' }}>RETURN TO MAIN PAGE</Button>
        </Paper>
    )
}

export default NoFoundErrorPage