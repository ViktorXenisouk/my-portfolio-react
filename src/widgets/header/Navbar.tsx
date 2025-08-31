import React, { useEffect, useState,Fragment } from "react"
import { NavigationDesktop } from "./components/navigation-desktop/NavigationDesktop"
import { NavigationMobile } from "./components/navigation-mobile/NavigationMobile"
import { AppBar, Toolbar, useMediaQuery, useTheme, Slide, useScrollTrigger } from '@mui/material';

const HideOnScroll = ({ children }: { children: React.ReactElement }) => {
  const trigger = useScrollTrigger({ threshold: 60 });


  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const Navbar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // md = 960px

  return (
    <Fragment>
      <HideOnScroll>
        <AppBar color="default" position="sticky" elevation={4} sx={{
          borderBottomStyle: 'solid',
          borderBottomWidth: '1px',
          borderBottomColor: 'divider',
        }}>
          <Toolbar>
            {isMobile ? (
              <NavigationMobile />
            ) : (
              <NavigationDesktop />
            )}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </Fragment>
  );
};

export default Navbar;