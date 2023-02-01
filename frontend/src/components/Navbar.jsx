import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";
import {ShoppingCartOutlined} from "@mui/icons-material";
import {IconButton} from "@mui/material";


const Navbar = () => {
    return (
        <Box sx={{flexGrow: 1,zIndex:2}} component={"header"}>
            <AppBar position="static" sx={{backgroundColor: "background.main"}}>
                <Toolbar sx={{paddingX: {xs: 2,sm:5,md:10, lg: 30}}}>
                    <Typography className={"logo-text"} component="p" sx={{flexGrow: 1}}>
                        Logo
                    </Typography>
                    <Box sx={{display: {xs:"none",sm:"none",md:"flex"}, flexGrow: 1, gap: 3}} component={"nav"}>
                        <Link to={"/"} className={"navbar-link"}>
                            Home
                        </Link>
                        <Link to={"/"} className={"navbar-link"}>
                            Categories
                        </Link>
                        <Link to={"/"} className={"navbar-link"}>
                            Term
                        </Link>
                    </Box>
                    <Box sx={{display: "flex", flexGrow: 0, gap: 1}}>
                        <IconButton color={"background.main"} aria-label={"shopping cart"}>
                            <ShoppingCartOutlined/>
                        </IconButton>
                        <Button color="black" sx={{color:"white"}} variant={"contained"}>Login</Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar