import React from "react";
import { Box, Typography, IconButton, Paper, Divider, Modal } from "@mui/material";
import { Close } from "@mui/icons-material";
import TagsContainer from "../../../UI/TagsContainer";
import { IPortfolio } from "../types";
import ImageCarousel from "../../../components/image-carousel/ImageCarousel";
import NoFoundErrorPage from "../../../pages/NoFoundErrorPage";
import { useLabels } from "../../labels/useLabels";

type Props = {
    portfolio?: IPortfolio,
    open: boolean,
    onClose: () => void
}

const PortfolioModal: React.FC<Props> = ({ open, portfolio, onClose }) => {
    const labels = useLabels()

    if (!portfolio) {
        return (
            <Modal open={open}>
                <NoFoundErrorPage />
            </Modal>
        )
    }

    const { title, description, tags, imgs } = portfolio

    return (
        <Modal open={open} onClose={onClose} sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Paper sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', width: '800px', height: '1000px', gap: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <IconButton onClick={onClose} sx={{ mr: 2 }}>
                        <Close />
                    </IconButton>
                </Box>
                <Typography
                    variant="h2"
                    sx={{
                        color: 'text.primary',
                        textAlign: 'center',
                        my: 1
                    }}>
                    {title}
                </Typography>
                <Box sx={{ m: 2 }}>
                    <ImageCarousel imgs={imgs.map((v) => { return { url: v, name: 'image' } })} />
                    <Paper
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            flexDirection: 'column',
                            p: 2
                        }}>
                        <Typography align="left" color="text.secondary">
                            <Box component='span' color='text.primary'>
                                {labels.description}:
                            </Box> {description}
                        </Typography>
                        <Divider sx={{ my: 4 }} />
                        <TagsContainer tags={tags} />
                    </Paper>
                </Box>
            </Paper>
        </Modal>
    )

}

export default PortfolioModal