import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home"
import Navbar from "./components/Navbar";
import {ThemeProvider} from "@mui/material";
import theme from "./theme";
import Footer from "./components/Footer";


function App() {

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route index path={"/"} element={<Home/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
