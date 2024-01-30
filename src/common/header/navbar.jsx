import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Popover from '@mui/material/Popover';
import PopupState,{ bindTrigger, bindPopover } from 'material-ui-popup-state';




//css
import style from "../css/navbar.module.css"

//images
import MainLogo from "../image/logo.webp"

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" className={style.appBar}>
        <Toolbar>
          <Grid className={style.Head}>
            <Grid className={style.clglogo}>
              <Grid className={style.Logo}>
                <img src={MainLogo} alt='' />
              </Grid>
              <h2 style={{ marginLeft: "555px", marginTop: "-15px", fontSize: "20px",color:"rgb(217, 200, 101)" }}>UNKNOWN UNIVERSITY</h2>
            </Grid>
            <Grid className={style.component}>
              <Grid className={style.component1}>
                <ul>
                  <li onClick={() => navigate("/")}>Home</li>
                  <li onClick={() => navigate("/department")}>Department</li>
                  <li onClick={() => navigate("/about")}>About</li>

                </ul>
              </Grid>
              <Grid className={style.component2}>
                <ul>
                  <li onClick={() => navigate("/gallery")}>Gallery</li>
                  <li onClick={() => navigate("/faculty")}>Faculty</li>
                  <li onClick={() => navigate("/contact")}>Contact</li>
                </ul>
              </Grid>
              
              
              <PopupState variant="popover" popupId="demo-popup-popover">
                {(popupState) => (
                  <Grid>
                    <button variant="contained" {...bindTrigger(popupState)}>
                      SIGN UP
                    </button>
                    <Popover
                      {...bindPopover(popupState)}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                      }}
                    >
                      
                      <Typography sx={{ p: 1.5 ,color:"teal"}}>Student LOGIN</Typography>
                      <Typography sx={{ p: 1.5 ,color:"teal"}}>Admin LOGIN</Typography>
                      <Typography sx={{ p: 1.5 ,color:"teal"}}>LOG OUT</Typography>
                    </Popover>
                  </Grid>
                )}
              </PopupState>

            </Grid>
          </Grid>


          


        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

    </Box >
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;