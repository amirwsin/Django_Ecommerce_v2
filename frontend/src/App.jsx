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


function App() {

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route index path={"/"} element={<Home/>}/>
                    <Route index path={"/login"} element={<Login/>}/>
                    <Route index path={"/register"} element={<Register/>}/>
                </Routes>
                <GoTopButton/>
                <Footer/>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
