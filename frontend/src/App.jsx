import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home"
import Navbar from "./components/Navbar";
import {ThemeProvider} from "@mui/material";
import theme from "./theme";
import Footer from "./components/Footer";
import GoTopButton from "./components/GoTopButton";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {useDispatch} from "react-redux";
import {loadUser} from "./actions/authActions";
import React, {useEffect} from "react";
import Profile from "./pages/Profile";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";


let token, user;


function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        token = localStorage.getItem("access_token")
        user = localStorage.getItem("user")
        if (token && user) {
            dispatch(loadUser(token))
        }
        return () => {
            token = null;
            user = null;
        }

    }, [dispatch])


    return (
        <ThemeProvider theme={theme}>

            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route index path={"/"} element={<Home/>}/>
                    <Route path={"/login"} element={<Login/>}/>
                    <Route path={"/register"} element={<Register/>}/>
                    <Route path={"/profile"} element={<Profile/>}/>
                    <Route path={"/products/:category?/"} element={<Products/>}/>
                    <Route path={"/product/:slug/"} element={<ProductDetails/>}/>
                    <Route path={"*"} element={<h1>not found</h1>}/>
                </Routes>
                <GoTopButton/>
                <Footer/>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
