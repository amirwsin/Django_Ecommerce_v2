import './App.css'
import './Admin.css'
import {BrowserRouter, Outlet, Routes, Route} from "react-router-dom";
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
import Account from "./pages/panel/Account";
import Address from "./pages/panel/Address";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import SideBar from "./components/dashboard/SideBar";
import Content from "./components/dashboard/Content";


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
                    <Routes>
                        <Route path={"/"} element={<MainLayout/>}>
                            <Route index path={"/"} element={
                                <Home/>
                            }/>
                            <Route path={"/login"} element={
                                <RestrictPage path={"/"} type={"isAnonymous"}>
                                    <Login/>
                                </RestrictPage>
                            }/>
                            <Route path={"/register"} element={
                                <RestrictPage path={"/"} type={"isAnonymous"}>
                                    <Register/>
                                </RestrictPage>
                            }/>
                            <Route path={"/user/dashboard"} element={
                                <RestrictPage path={"/login"} type={"isAuthenticated"}>
                                    <PanelLayout><Dashboard/></PanelLayout>
                                </RestrictPage>
                            }/>
                            <Route path={"/user/dashboard/account"} element={
                                <RestrictPage path={"/login"} type={"isAuthenticated"}>
                                    <PanelLayout><Account/></PanelLayout>
                                </RestrictPage>
                            }/>
                            <Route path={"/user/dashboard/address"} element={
                                <RestrictPage path={"/login"} type={"isAuthenticated"}>
                                    <PanelLayout><Address/></PanelLayout>
                                </RestrictPage>
                            }/>
                            <Route path={"/products/:category?/"} element={
                                <Products/>
                            }/>
                            <Route path={"/product/:slug/"} element={
                                <ProductDetails/>}/>
                            <Route path={"/cart"} element={<ShoppingCart/>
                            }/>
                            <Route path={"*"} element={<h1>not found</h1>}/>
                        </Route>
                        <Route path={"/"} element={<AdminLayout/>}>
                            <Route path={"/admin/dashboard"} element={<AdminDashboard/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </AlertContext.Provider>
        </ThemeProvider>
    )
}

function AdminLayout() {
    return (
        <>
            <div id={"root-admin"}>
                <SideBar/>
                <Content>
                    <Outlet/>
                </Content>
            </div>
        </>
    );
}

function MainLayout() {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <GoTopButton/>
            <MySnackBar/>
            <Footer/>
        </>
    );
}


export default App
