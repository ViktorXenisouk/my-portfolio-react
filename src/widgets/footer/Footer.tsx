import { Link as RouterLink } from 'react-router-dom';
import { usePages } from "../usePages"
import { Box, Container, Grid, IconButton, Link, Typography, useMediaQuery, useTheme, Paper, Tooltip } from '@mui/material';
import { GitHub, Work } from '@mui/icons-material';
import { useLabels } from '../../features/labels/useLabels';
import MobileFooter from './MobileFooter';

const Footer = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const pages = usePages()

  const labels = useLabels()

  if (isMobile)
    return (
      <MobileFooter />
    )
  else
    return (
      <Paper
        component="footer"
        sx={{
          borderRadius: 0,
          position: 'relative',
          py: 4,
          marginTop: 'auto',
          borderTopWidth: '1px',
          borderTopStyle: 'solid',
          borderTopColor: 'divider',
          zIndex: '2',
          height: '200px'
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="space-between">
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="h6" gutterBottom>
                {labels.cv}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                © {new Date().getFullYear()} CVI. All rights reserved.
              </Typography>
            </Grid>
            <Grid size={{ xs: 6, md: 4 }}>
              <Typography variant="subtitle1" gutterBottom>
                {labels.navigation}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {pages.map((item) =>
                  <Link component={RouterLink} to={item.to} underline="hover" color="text.secondary">
                    {item.title}
                  </Link>)}
              </Box>
            </Grid>
            <Grid size={{ xs: 6, md: 4 }}>
              <Typography variant="subtitle1" gutterBottom>
                {labels.contact_info}
              </Typography>
              <Box>
                <Tooltip title='GitHub' placement='top'>
                  <IconButton href="https://github.com/ViktorXenisouk" target="_blank" aria-label="GitHub">
                    <GitHub />
                  </IconButton>
                </Tooltip>
                <Tooltip title='Kwork' placement='top'>
                  <IconButton href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                    <Work />
                  </IconButton>
                </Tooltip>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    );
};

export default Footer;