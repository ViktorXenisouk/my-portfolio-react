import React from "react";
import { Modal, Box, Paper, Typography, IconButton,Rating,Divider ,Icon} from "@mui/material";
import { Close,Person } from "@mui/icons-material";
import { IReview } from "../types";
import parseDate from '../../../utils/parse-date';

type Props = {
    open: boolean,
    review?: IReview,
    onClose: () => void,
}

const ReviewModal: React.FC<Props> = ({ open, review, onClose }) => {

    return (
        <Modal onClose={onClose} open={open}sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Paper sx={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'column', width: '800px', height: 'auto', gap: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <IconButton onClick={onClose} sx={{ mr: 2,my:2 }}>
                        <Close />
                    </IconButton>
                </Box>
                <Rating size="medium" max={10} value={review?.rate} readOnly sx={{ p: 2 }} />
                <Typography variant="subtitle1" align="left" sx={{ p: 1 }}>
                    {review && parseDate(review?.date)}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 1 }}>
                    <Icon>
                        <Person />
                    </Icon>
                    <Typography>
                        {review?.name}
                    </Typography>
                </Box>
                <Divider sx={{ my: 1 }} />
                <Typography color="text.secondary" align="left" variant="body1" sx={{ whiteSpace: 'pre-line', p: 2 }}>
                    {review?.text}
                </Typography>
            </Paper>
        </Modal>
    )
}

export default ReviewModal