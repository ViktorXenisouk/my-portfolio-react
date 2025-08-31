import MyLink from "../../UI/MyLink"
import { Logo } from "../Logo"
import { usePages } from "../../../usePages"
import { Link } from "react-router-dom"

import { Box, Button, Stack, IconButton, Badge } from '@mui/material';

const NavigationDesktop = () => {
const pages = usePages()

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
      <Button component={Link} to={'/'}>
        <Logo />
      </Button>

      <Stack
        direction="row"
        spacing={2}
        sx={{
          borderBottomStyle: 'solid',
          borderBottomWidth: '1px',
          borderBottomColor: 'divider',
        }}>
        {pages.map((item) => (
          <MyLink
            key={`nav-link-${item.title.replace(' ', '_')}`}
            to={item.to}>
            {item.title}
          </MyLink>
        ))}
      </Stack>

      <Stack
        direction="row"
        spacing={2}
        sx={{
          mr: 4
        }}>
      </Stack>
    </Box>
  );
};

export { NavigationDesktop };
