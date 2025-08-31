import { Link as RouterLink } from 'react-router-dom';
import {  usePages } from "../usePages"
import { Box, Container, Grid, IconButton, Link, Typography, useMediaQuery, useTheme, BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { Facebook, Twitter, Instagram, GitHub, LinkedIn, Person2, SportsMartialArts, Home, Restore, Comment, Computer } from '@mui/icons-material';
import { useLabel } from '../../hooks/useLabel';

const Footer = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const pages = usePages()

  const labels = useLabel()

  if (isMobile) {

    return (
      <BottomNavigation sx={{
        borderTop: '1px solid',
        borderTopColor: 'divider',
        position: 'fixed',
        zIndex: 3,
        bottom: 0,
        left: 0,
        right: 0
      }}>
        <BottomNavigationAction component={RouterLink} to='/' icon={<Home />} label='Main' />
        <BottomNavigationAction component={RouterLink} to='/skills' icon={<SportsMartialArts />} label='Basket' />
        <BottomNavigationAction component={RouterLink} to='/portfolios' icon={<Computer />} label='Basket' />
        <BottomNavigationAction component={RouterLink} to='/reviews' icon={<Comment />} label='Favorite' />
        <BottomNavigationAction component={RouterLink} to='/contacts' icon={<Person2 />} label='My Acount' />
      </BottomNavigation>
    )
  }
  else
    return (
      <Paper
        component="footer"
        sx={{
          borderRadius: 0,
          position: 'relative',
          paddingY: 4,
          marginTop: 'auto',
          borderTopWidth: '1px',
          borderTopStyle: 'solid',
          borderTopColor: 'divider',
          zIndex: '2'
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="space-between">
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="h6" gutterBottom>
                {labels.cvi}
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
                <IconButton href="https://facebook.com" target="_blank" aria-label="Facebook">
                  <Facebook />
                </IconButton>
                <IconButton href="https://twitter.com" target="_blank" aria-label="Twitter">
                  <Twitter />
                </IconButton>
                <IconButton href="https://instagram.com" target="_blank" aria-label="Instagram">
                  <Instagram />
                </IconButton>
                <IconButton href="https://github.com" target="_blank" aria-label="GitHub">
                  <GitHub />
                </IconButton>
                <IconButton href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                  <LinkedIn />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    );
};

export default Footer;