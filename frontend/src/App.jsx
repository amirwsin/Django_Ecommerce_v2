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
import React, {useEffect, useMemo, useState} from "react";
import Profile from "./pages/Profile";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import {AlertContext} from "./AlertContext";
import MySnackBar from "./components/MySnackBar";
import {loadLocal} from "./actions/cartActions";
import ShoppingCart from "./pages/ShoppingCart";


let token, user, shoppingCart;


function App() {
    const dispatch = useDispatch()
    const [alertState, setAlertState] = useState({"open": false, "msg": "", "color": "info"})
    const providerValue = useMemo(() => ({alertState, setAlertState}), [alertState, setAlertState])


    useEffect(() => {
        token = localStorage.getItem("access_token")
        user = localStorage.getItem("user")
        dispatch(loadLocal())
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
            <AlertContext.Provider value={providerValue}>
                <BrowserRouter>
                    <Navbar/>
                    <Routes>
                        <Route index path={"/"} element={<Home/>}/>
                        <Route path={"/login"} element={<Login/>}/>
                        <Route path={"/register"} element={<Register/>}/>
                        <Route path={"/profile"} element={<Profile/>}/>
                        <Route path={"/products/:category?/"} element={<Products/>}/>
                        <Route path={"/product/:slug/"} element={<ProductDetails/>}/>
                        <Route path={"/cart"} element={<ShoppingCart/>}/>
                        <Route path={"*"} element={<h1>not found</h1>}/>
                    </Routes>
                    <GoTopButton/>
                    <MySnackBar/>
                    <Footer/>
                </BrowserRouter>
            </AlertContext.Provider>
        </ThemeProvider>
    )
}

export default App
