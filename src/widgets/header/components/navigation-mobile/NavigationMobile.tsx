import React, { useState, Fragment } from "react"
import { usePages } from "../../../usePages"
import { Link as RouterLink } from "react-router-dom"
import { Logo } from "../Logo";
import LanguageSwitcher from "../../../../UI/LanguageSwitcher"
import {
  Box,
  Drawer,
  IconButton,
  Button,
  List,
  ListItem,
  Divider,
  Typography,
  Stack,
} from '@mui/material';
import { Menu } from "@mui/icons-material"

const NavigationMobile: React.FC = () => {

  const pages = usePages()

  const [open, setOpen] = useState(false);

  const toggleDrawer = (value: boolean) => () => {
    setOpen(value);
  };

  return (
    <Fragment>
      <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
        <IconButton
          onClick={toggleDrawer(true)}>
          <Menu />
        </IconButton>
        <Stack direction='row'>
  <LanguageSwitcher/>
        </Stack>
      </Box>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <Box width={250} role="presentation" p={2}>
          <IconButton onClick={toggleDrawer(false)} component={RouterLink} to='/'>
            <Logo />
          </IconButton>
          <Divider sx={{ my: 1 }} />
          <Typography
            color="text.primary"
            fontWeight="bold">
            Pages
          </Typography>
          <List>
             <ListItem
                key={`link-main-page`}
                disablePadding>
                <Button
                  component={RouterLink}
                  to={'/'}
                  onClick={toggleDrawer(false)}
                  sx={{
                    color: 'text.secondary'
                  }}>
                  Main
                </Button>
              </ListItem>
            {pages.map((item) => (
              <ListItem
                key={`link-${item.title}`}
                disablePadding>
                <Button
                  component={RouterLink}
                  to={item.to}
                  onClick={toggleDrawer(false)}
                  sx={{
                    color: 'text.secondary'
                  }}>
                  {item.title}
                </Button>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Fragment>
  );
};

export { NavigationMobile };