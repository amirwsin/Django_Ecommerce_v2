import {Box, Button, Container, TextField, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <Container maxWidth={"md"}>
            <Box className={"form-wrapper"}>
                <Typography variant={"h3"} component={"p"} sx={{textAlign: "center", fontWeight: "bold"}}>
                    Login
                </Typography>
                <Typography variant={"subtitle2"} component={"p"}
                            sx={{textAlign: "center", fontWeight: "lighter", color: "text.text"}}>
                    you have to login to your account so you can use our services
                </Typography>
                <form style={{display: "grid", gap: "2rem"}} autoComplete={false}>
                    <TextField type={"text"} label={"username"} color={"primary"} placeholder={"your username"}
                               title={"username"}
                               aria-label={"username"} helperText={"Your Username That You Register With"}
                               fullWidth={true} required={true} name={"username"} id="username" autoComplete={false}/>
                    <TextField type={"password"} label={"password"} color={"primary"} placeholder={"your password"}
                               title={"password"}
                               aria-label={"password"} helperText={"Your Password That You Register With"}
                               fullWidth={true} required={true} name={"password"} id="password" autoComplete={false}/>

                    <Button variant={"contained"} color={"primary"} fullWidth={true} type={"submit"}>Submit</Button>
                </form>
                <Typography variant={"subtitle2"} component={"p"}>
                    dont have an account ? <Link to={"/register"}>register</Link>
                </Typography>
            </Box>
        </Container>
    )
}

export default Login