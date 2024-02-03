import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import IconButton from '@mui/material/IconButton';



// css
import style from "../css/navbar.module.css";

// images
import MainLogo from "../image/logonew.png";



// export default DrawerAppBar;
export default function ButtonAppBar() {
  const navigate = useNavigate();
  return (
    <>


      <Grid className={style.social}>
        <i className='fab fa-facebook-f icon'style={{color:'blue'}}></i>
        <i className='fab fa-instagram icon' style={{color:'#FF3399'}}></i>
        <i className='fab fa-twitter icon'style={{color:'teal'}}></i>
        <i className='fab fa-youtube icon'style={{color:'red'}}></i>
      </Grid>

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: "rgb(10, 164, 164)" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >

            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

              <Grid className={style.logo}>
                <img src={MainLogo} alt='' style={{ width: "10%" }} />
                <h4 style={{color:'gold'}}>EDUCATIONAL UNIVERSITY</h4>
              </Grid>
            </Typography>
            <Grid className={style.compo}>
              <ul>
                {/* <li onClick={() => navigate("/")}>Home</li> */}
                <li onClick={() => navigate("/admission")}>Admission</li>
                <li onClick={() => navigate("/department")}>Department</li>
                <li onClick={() => navigate("/facility")}>Facility</li>                
                <li onClick={() => navigate("/gallery")}>Gallery</li>
                <li onClick={() => navigate("/faculty")}>Faculty</li>
                <li onClick={() => navigate("/about")}>About</li>

              </ul>
            </Grid>
            
            <PopupState variant="popover" popupId="demo-popup-popover">
              {(popupState) => (
                <Grid>
                  <button variant="contained" {...bindTrigger(popupState)}>
                    SIGNUP
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
                    <Typography sx={{ p: 1.5, color: "teal" }}onClick={() => navigate("/signup")}>SIGN UP</Typography>
                    <Typography sx={{ p: 1.5, color: "teal" }}>Login</Typography>
                    <Typography sx={{ p: 1.5, color: "teal" }}>Logout</Typography>
                  </Popover>
                </Grid>
              )}
            </PopupState>
          </Toolbar>
        </AppBar>
      </Box></>
  );
}