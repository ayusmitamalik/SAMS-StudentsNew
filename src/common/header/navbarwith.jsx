
import { AppBar, Toolbar } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Typography ,Box,IconButton,Menu,Avatar,Tooltip, MenuItem} from '@mui/material';



import style from "../css/navbarwith.module.css";//css
import MainLogo from "../image/logo.webp";//logo

const settings = ['Profile',  'Logout'];

export default function ResponsiveAppBarr() {

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
          <Grid className={style.Head}>
            <Grid className={style.clglogo}>
              <Grid className={style.Logo}>
                <img src={MainLogo} alt='' />
              </Grid>
              <h2 style={{ marginLeft: "375px", marginTop: "-90px", fontSize: "50px", color: "rgb(217, 200, 101)", display: "flex" }}>UNKNOWN UNIVERSITY</h2>
            </Grid>
            


           
          </Grid>
          <Grid className={style.component}>

              <ul>
                <li onClick={() => navigate("/")}>Home</li>
                <li onClick={() => navigate("/department")}>Department</li>
                <li onClick={() => navigate("/about")}>About</li>
                <li onClick={() => navigate("/gallery")}>Gallery</li>
                <li onClick={() => navigate("/notice")}>Notice</li>
                <li onClick={() => navigate("/training")}>Training & Placement</li>
                <li onClick={() => navigate("/facility")}>Facility</li>
                <li onClick={() => navigate("/contact")}>Contact</li>
                <li onClick={() => navigate("/feedback")}>Feedback</li>



              </ul>
            </Grid>

            <Box sx={{ flexGrow: 0 ,marginLeft:"1250px",marginTop:"-50px",width:"20px"}}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '50px' ,marginLeft:"20px"}}
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
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>



        </Toolbar>
      </AppBar>
    </>
  );

};

