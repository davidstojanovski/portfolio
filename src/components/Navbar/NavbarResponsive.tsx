import React from 'react';
import { AppBar, CssBaseline, Toolbar } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import navLogo from '../../static/nav-logo.svg';
import { MenuItem } from '../styled/Navbar.styled';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { IconButton, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import close from '../../static/Icons/close.svg';

const pages = [
  { label: 'Home', path: '/' },
  { label: 'About Me', path: '/about' },
  { label: 'Skills', path: '/skills' },
];

export const NavbarResponsive = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <img src={close} alt="" style={{ width: '18px', margin: '20px 20px 0 0' }} onClick={handleDrawerToggle} />
      </div>
      <Box
        onClick={handleDrawerToggle}
        sx={{ textAlign: 'center' }}
        style={{ display: 'grid', justifyContent: 'center' }}
      >
        <List>
          {pages.map((page, index) => (
            <ListItem key={page.label} disablePadding sx={{ textAlign: 'center' }}>
              <Link to={page.path} key={index} className="no-decoration" style={{ width: '100%' }}>
                <ListItemButton>
                  <ListItemText
                    sx={{
                      '& .MuiListItemText-primary': {
                        fontSize: '25px',
                        textAlign: 'center',
                        margin: '10px 0',
                        color: 'white',
                      },
                    }}
                    primary={page.label}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );

  return (
    <AppBar position="static" style={{ backgroundColor: 'transparent' }}>
      <CssBaseline />
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }} disableGutters={true}>
        <Avatar alt="nav-logo" src={navLogo} sx={{ width: 70, height: 70 }} />
        <div>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {pages.map((page, index) => (
              <Link to={page.path} key={index} className="no-decoration">
                <MenuItem active={location.pathname === page.path}>{page.label}</MenuItem>
              </Link>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
            <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerToggle} edge="start">
              <MenuIcon />
            </IconButton>
          </Box>
        </div>
      </Toolbar>

      <div>
        <React.Fragment key="right">
          <Drawer
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'flex', sm: 'flex' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: 240,
                backgroundColor: '#191919',
                borderLeft: '3px solid #0df18d',
              },
            }}
          >
            {drawer}
          </Drawer>
        </React.Fragment>
      </div>
    </AppBar>
  );
};
