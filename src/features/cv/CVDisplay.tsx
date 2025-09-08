import React from "react";
import { Paper, Stack, Box, Typography, List, ListItem, ListItemText, Divider } from "@mui/material";
import { ContactsDisplay } from "../contacts";
import { useCV } from "./useCV";

const CVDisplay: React.FC = () => {
    const data = useCV()

    const mapTechnicalSkills = () => {
        const nodes = []
        for (let name in data.technicalSkills_nodes) {
            nodes.push(
                <ListItem>
                    <Typography color='text.secondary'>
                        <Box component='span' color="text.primary">{name}: </Box>{data.technicalSkills_nodes[name]}
                    </Typography>
                </ListItem>
            )
        }
        return nodes
    }

    const mapFreelanceProjects = () => {
        const nodes = []
        for (let name in data.freelanceProjects_nodes) {
            nodes.push(
                <ListItem>
                    <Typography color='text.secondary'>
                        <Box component='span' color="text.primary">{name}- </Box>{data.freelanceProjects_nodes[name]}
                    </Typography>
                </ListItem>
            )
        }
        return nodes
    }

    return (
        <Box>
            <Paper sx={{ mx: 5, p: 3,mt:'20px' }}>
                <Stack spacing={2}>
                    <Typography align="left" color="text.primary">
                        {data.personalInformation}
                    </Typography>
                    <Typography align="left" color="text.secondary">
                        <Box component={'span'} color='text.primary'>{data.name_label}</Box>: {data.name_text}
                    </Typography>
                    <Typography align="left" color="text.primary">
                        {data.languages_label}:
                    </Typography>
                    <List>
                        {data.languages_nodes.map((item) =>
                            <ListItem>
                                <ListItemText primary={item} slotProps={{ primary: { color: 'textPrimary' } }} />
                            </ListItem>)}
                    </List>
                    <Divider />
                    <Typography align="left" color="text.primary">
                        {data.profileSummary_label}
                    </Typography>
                    <Typography align="left" color="text.secondary" sx={{ ml: 2 }}>
                        {data.profileSummary_text}
                    </Typography>
                    <Divider />
                    <Typography align="left" color="text.primary">
                        {data.technicalSkills_label}
                    </Typography>
                    <List>
                        {
                            mapTechnicalSkills()
                        }
                    </List>
                    <Divider />
                    <Typography align="left" color="text.primary">
                        {data.freelanceProjects_label}
                    </Typography>
                    <List>
                        {
                            mapFreelanceProjects()
                        }
                    </List>
                </Stack>
            </Paper>
            <Typography align="center" variant="h3" color="text.primary" sx={{mt:1}}>
                {data.contacts_label}
            </Typography>
            <ContactsDisplay />
        </Box>
    )
}

export default CVDisplay