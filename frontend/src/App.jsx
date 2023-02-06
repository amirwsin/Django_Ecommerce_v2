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
import {loadUser} from "./features/actions/authActions";
import React, {useEffect, useMemo, useState} from "react";
import Dashboard from "./pages/panel/Dashboard";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import {AlertContext} from "./AlertContext";
import MySnackBar from "./components/MySnackBar";
import {loadLocal} from "./features/actions/cartActions";
import ShoppingCart from "./pages/ShoppingCart";
import RestrictPage from "./RestrictPage";
import PanelLayout from "./components/PanelLayout";


let token, user;


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
                        <Route index path={"/"} element={
                            <Home/>
                        }/>
                        <Route path={"/login"} element={
                            <RestrictPage path={"/"} type={"isAnonymous"}><Login/></RestrictPage>
                        }/>
                        <Route path={"/register"} element={
                            <RestrictPage path={"/"} type={"isAnonymous"}><Register/></RestrictPage>
                        }/>
                        <Route path={"/user/dashboard"} element={
                            <RestrictPage path={"/login"} type={"isAuthenticated"}><PanelLayout><Dashboard/></PanelLayout></RestrictPage>
                        }/>
                        <Route path={"/products/:category?/"} element={
                            <Products/>
                        }/>
                        <Route path={"/product/:slug/"} element={
                            <ProductDetails/>}/>
                        <Route path={"/cart"} element={<ShoppingCart/>
                        }/>
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
