import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios'


const pages = ['Doctors', 'Our Store', 'Blog'];

const ResponsiveAppBar = () => {

  const [loggedUser, setLoggedUser]=useState("")
  useEffect(()=>{
    axios.get(`https://kolacare.herokuapp.com/api/account/getuser/`,
    {
        headers:{
            Authorization:localStorage.getItem('access_token')
            ? 'JWT ' + localStorage.getItem('access_token')
            : null,
            'Content-Type': 'application/json',
            accept: 'application/json'
        }
    })
    .then((res)=>{
      setLoggedUser(res.data.username)
    })
    
  },[])
  
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{
   
      backgroundColor:"#20c0f3"
    }}  >
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          
          <Typography
            variant="h6"
            noWrap
           
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          ><Link to='/' style={{textDecoration:"none", color:"inherit"}}>
            Bluecare
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon style={{color:"#fff",fontSize:"30px"}}/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Typography
            variant="h5"
            noWrap
  
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >

            <Link to='/' style={{textDecoration:"none", color:"inherit"}}>
            Bluecare
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
              <h3 className='welcome'>Welcome {loggedUser}</h3>
          <Box sx={{ flexGrow: 0 }}>
            
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <MenuIcon style={{color:"#fff",fontSize:"30px"}} />
              </IconButton>
          
            <Menu
              sx={{ mt: '45px' }}
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
              <div className='nav-pop'>
              
                
                <Link to='/login' style={{textDecoration:"none", color:"inherit", }}>
                  <div className='nav-in'>
                  Login
                  </div> 
                </Link>
                  
                  <Link to='/signup' style={{textDecoration:"none", color:"inherit", }}>
                  <div className='nav-in'>
                     Signup 
                  </div>
                </Link>
              
                  
                  <Link to='/patient' style={{textDecoration:"none", color:"inherit", }}>
                 <div className='nav-in'>
                  Dashboard
                  </div>
                </Link>
                  
                  <Link to='/logout' style={{textDecoration:"none", color:"inherit", }}>
                 <div className='nav-in'>
                  Logout
                  </div>
                </Link>
             
              </div>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
