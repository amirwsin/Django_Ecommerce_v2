import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";
import {MoreVert, ShoppingCartOutlined} from "@mui/icons-material";
import {
    Avatar,
    Collapse,
    Container,
    Drawer,
    IconButton,
    Tooltip
} from "@mui/material";
import {useState} from "react";
import CategoryMenuList from "./CategoryMenuList";
import SideBarMenu from "./SideBarMenu";
import {useSelector} from "react-redux";
import {useQuery} from "@tanstack/react-query";
import {BasicCategoriesApi} from "../api/CategoriesApi";


const Navbar = () => {

    const [categoryMenuList, setCategoryMenuList] = useState(false)
    const [sideBar, setSideBar] = useState(false)
    const {user, isAuthenticated} = useSelector(state => state.authReducer)

    const handleSideBar = () => {
        setSideBar(prevState => !prevState)
    }

    const handleCategoryTriggerClick = () => {
        setCategoryMenuList(prevState => !prevState)
    }

    const categoryQuery = useQuery({
        queryKey: ["categories"],
        queryFn: BasicCategoriesApi
    })


    return (
        <Box sx={{flexGrow: 1, zIndex: 2, height: "60px"}} component={"header"}>
            <AppBar position="sticky" sx={{backgroundColor: "background.main"}}>
                <Toolbar sx={{paddingX: {xs: 2, sm: 5, md: 10, lg: 30}, justifyContent: "space-between"}}>
                    <IconButton onClick={handleSideBar} size={"large"} sx={{display: {xs: "block", md: "none"}}}>
                        <MoreVert/>
                    </IconButton>
                    <Typography className={"logo-text"} component={Link} to={"/"} sx={{flexGrow: {xs: 0, md: 1}}}>
                        Logo
                    </Typography>
                    <Box sx={{display: {xs: "none", sm: "none", md: "flex"}, flexGrow: 1, gap: 3}} component={"nav"}>
                        <Link to={"/"} className={"navbar-link"}>
                            Home
                        </Link>
                        <Link to={"/products"} className={"navbar-link"}>
                            Products
                        </Link>
                        <span className={"navbar-link category-trigger"} onClick={handleCategoryTriggerClick}>
                            Categories
                        </span>
                        <Link to={"/"} className={"navbar-link"}>
                            Term
                        </Link>
                    </Box>
                    <Box sx={{display: "flex", flexGrow: 0, gap: 2}}>
                        <IconButton color={"background.main"} aria-label={"shopping cart"}>
                            <ShoppingCartOutlined/>
                            <span className={"basket-qty"} id={"basket-qty"}>1</span>
                        </IconButton>
                        {isAuthenticated && user ?
                            <>
                                <Tooltip title="Profile">
                                    <IconButton component={Link} to={"/profile"} sx={{p: 0}}>
                                        <Avatar>A</Avatar>
                                    </IconButton>
                                </Tooltip>
                            </> :
                            <Button component={Link} to={"/login"} color="black" sx={{color: "white"}}
                                    variant={"contained"}>Login</Button>}

                    </Box>
                </Toolbar>
            </AppBar>
            <Collapse in={categoryMenuList} className={"category-menu"} timeout="auto" unmountOnExit>
                <Container maxWidth={"xl"}>
                    <CategoryMenuList data={categoryQuery.data} isLoading={categoryQuery.isLoading}/>
                </Container>
            </Collapse>
            <Drawer
                anchor={"left"}
                open={sideBar}
                onClose={handleSideBar}
            >
                <SideBarMenu/>
            </Drawer>
        </Box>
    )
}

export default Navbar