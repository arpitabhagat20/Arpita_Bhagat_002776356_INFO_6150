import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Menu } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/auth';
import { Navigate, useNavigate } from 'react-router-dom';

export default (props) => {

  let navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector(state => state.auth);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout())
      .then( () => {
        navigate("/");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  if(!isLoggedIn) {
    return <Navigate to="/"/>;
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="fixed" 
        sx={{
          width: `100%`,
        }}
      >
        <Toolbar style={{ backgroundColor: '#57c7cb' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenu}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                sx={{
                  marginTop: '30px',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <a href='/employees'><MenuItem>Employee Data</MenuItem></a>
                <a href='/addjob'><MenuItem>Add Jobs</MenuItem></a>
              </Menu>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {props.name}
          </Typography>
          <Button 
            color="inherit"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}