import {Box, Button, Container, TextField, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {useState} from "react";
import {Visibility} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../actions/authActions";

const Login = () => {

    const [formData, setFormData] = useState({
        username: "",
        password: "LkS0U8iilSXGOlEIL8An5DE7Bs6llOTSJwXP8JX8Qd3VY9QiJGAdrz9qgNFvhOdsfkvlw6D71gsFmB7D3HUyvqk0nguU9EF0qgDxeluTupGSHUEoDJGu4P5G8u4XeDyu",
    })
    const [visibility, setVisibility] = useState(false)

    const dispatch = useDispatch()

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value.trim(),})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login(formData))
    }

    const handleVisibility = () => {
        setVisibility(prevState => !visibility)
    }

    return (
        <Container maxWidth={"md"} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Box className={"form-wrapper"}>
                <Typography variant={"h3"} component={"p"} sx={{textAlign: "center", fontWeight: "bold"}}>
                    Login
                </Typography>
                <Typography variant={"subtitle2"} component={"p"}
                            sx={{textAlign: "center", fontWeight: "lighter", color: "text.text"}}>
                    you have to login to your account so you can use our services
                </Typography>
                <form style={{display: "grid", gap: "2rem"}} onSubmit={handleSubmit}>
                    <TextField type={"text"} label={"username"} color={"primary"} placeholder={"your username"}
                               title={"username"}
                               aria-label={"username"} helperText={"Your Username That You Register With"}
                               fullWidth={true} required={true} name={"username"} id="username" autoComplete={"off"}
                               onChange={handleChange}/>
                    <TextField type={visibility ? "text" : "password"} label={"password"} color={"primary"}
                               placeholder={"your password"}
                               title={"password"}
                               aria-label={"password"} helperText={"Your Password That You Register With"}
                               fullWidth={true} required={true} name={"password"} id="password" autoComplete={"off"}
                               onChange={handleChange}
                               InputProps={{
                                   endAdornment: <Visibility color={"primary"} cursor={"pointer"}
                                                             onClick={handleVisibility}/>
                               }}/>

                    <Button variant={"contained"} color={"primary"} fullWidth={true} type={"submit"}>
                        Login To Your Account
                    </Button>
                </form>
                <Typography variant={"subtitle2"} component={"p"}>
                    dont have an account ? <Link to={"/register"}>register</Link>
                </Typography>
            </Box>
        </Container>
    )
}

export default Login