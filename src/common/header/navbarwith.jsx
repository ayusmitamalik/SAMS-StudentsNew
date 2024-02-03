import React from 'react';
import { AppBar, Toolbar, Grid, Typography, Box, IconButton, Menu, Avatar, Tooltip, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import style from '../css/navbarwith.module.css';
import MainLogo from '../image/logonew.png';

const settings = ['Profile', 'Logout'];

export default function ResponsiveAppBar() {
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar component="nav" className={style.appBar}>
        <Toolbar>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Grid container alignItems="center">
                <Grid item className={style.clglogo}>
                  <Grid item className={style.Logo}>
                    <img src={MainLogo} alt="" />
                  </Grid>
                  <Typography variant="h6" style={{ marginLeft: '38%', color: 'rgb(235, 200, 4)',marginTop:'-6%',fontSize:'300%' }}>
                    EDUCATIONAL UNIVERSITY
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item className={style.component}>
              <Grid className={style.navList}>
                <ul>

                  <li onClick={() => navigate('/department')}>Department</li>
                  <li onClick={() => navigate('/gallery')}>Gallery</li>
                  <li onClick={() => navigate('/faculty')}>Faculty</li>
                  <li onClick={() => navigate('/facility')}>Facility</li>
                  <li onClick={() => navigate('/notice')}>Notice</li>
                  <li onClick={() => navigate('/placement')}>Placement</li>
                  <li onClick={() => navigate('/about')}>About</li>
                  
                 
                </ul>
              </Grid>


              <Grid item>
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0,marginLeft:'500%',marginTop:'-200%' }}>
                      <Avatar alt="Remy Sharp" src="" />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: '50px',ml:'20px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem key={setting} onClick={handleCloseUserMenu} style={{color:'rgb(10, 100, 100)'}}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}
