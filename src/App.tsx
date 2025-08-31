import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Box, Container, useMediaQuery, useTheme } from '@mui/material';
import Navbar from './widgets/header/Navbar';
import Footer from './widgets/footer/Footer';
import pages from './pages'
import './App.css';

function App() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box className="App" sx={{ m: 0, p: 0, bgcolor: 'primary' }}>
      <Navbar />
      <Container
        maxWidth={isSmall ? false : undefined}
        disableGutters={isSmall}
        component={'main'} sx={{ minHeight: 1500, bgcolor: 'background.default', pl: '0px!important', pr: '0px!important', pt: 0, overflowY: 'hidden', mb: isMobile ? "60px" : undefined }}>
        <Routes>
          <Route path='/' element={<pages.Main />} />
          <Route path='/skills' element={<pages.Skills />} />
          <Route path='/contacts' element={<pages.Contacts />} />
          <Route path='/reviews' element={<pages.Reviews />} />
          <Route path='/portfolios' element={<pages.PortfolioList />} />
          <Route path='/portfolio/:id' element={<pages.Portfolio />} />
          <Route path='/cvi' element />

        </Routes>
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
