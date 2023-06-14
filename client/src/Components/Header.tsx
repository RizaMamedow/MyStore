import * as React from 'react';
import {AppBar, Box, Toolbar, IconButton, Typography, Badge } from '@mui/material';
import Logout from '@mui/icons-material/Logout';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import IconLogo from '@mui/icons-material/ShoppingBasketOutlined';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { Config } from "../Utils/Config";
import { Link } from 'react-router-dom';
import {IHeader} from "../Interfaces/ComponentInteraces";
import routes from "../Routes";
import logout from "../Controllers/LogoutController";


function UnauthenticatedUserRightSide(){
    return (
        <>
            <Box component={Link} to={routes.signin.path}>
                <IconButton
                    size="large"
                    edge="end"
                    color="secondary"
                    sx={{mr: 0.5}}
                >
                    <LoginIcon />
                </IconButton>
            </Box>
            <Box component={Link} to={Config.ROUTES.REGISTRATION}>
                <IconButton
                    size="large"
                    edge="end"
                    color="secondary"
                    sx={{ml: 0.5}}
                >
                    <PersonAddAltIcon />
                </IconButton>
            </Box>
        </>
    )
}

function AuthenticatedUserRightSide(){
    return (
        <>
            <IconButton
                size="large"
                edge="end"
                color="inherit"
                onClick={() => {logout()}}
            >
                <Logout />
            </IconButton>
        </>
    )
}


function BrandSide(){
    return (
        <Box component={Link} to={Config.ROUTES.MAIN}
             sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: 'secondary.main' }}>
            <IconLogo sx={{ mb: 0.2, mr: {sm: 0.5, xs: 2}, fontSize: 35 }} />
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: 'none', sm: 'block' }, fontWeight: 800 }}
            >
                MyStore
            </Typography>
        </Box>
    )
}

export default function AppHeader({isAuthenticated}: IHeader) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" elevation={0}>
                <Toolbar sx={{ mx: {sm: 5, xs: 0 } }}>
                    <BrandSide/>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: 'flex'}}>
                        {isAuthenticated === true ? <AuthenticatedUserRightSide />	 : <UnauthenticatedUserRightSide />}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}