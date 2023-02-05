import {Box, Button, Checkbox, Container, FormControlLabel, TextField, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {Visibility} from "@mui/icons-material";
import {useState} from "react";

const Register = () => {

    const [checkBox, setCheckBox] = useState(false)
    const [visibility, setVisibility] = useState(false)

    const handleCheckBox = () => {
        setCheckBox(prevState => !checkBox)
    }

    const handleVisibility = () => {
        setVisibility(prevState => !visibility)
    }

    return (
        <Container maxWidth={"md"} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Box className={"form-wrapper"}>
                <Typography variant={"h3"} component={"p"} sx={{textAlign: "center", fontWeight: "bold"}}>
                    Register
                </Typography>
                <Typography variant={"subtitle2"} component={"p"}
                            sx={{textAlign: "center", fontWeight: "lighter", color: "text.text"}}>
                    you have to have an account to use our services
                </Typography>
                <form style={{display: "grid", gap: "2rem"}} autoComplete={false}>
                    <TextField type={"text"} label={"username"} color={"primary"} placeholder={"your username"}
                               title={"username"}
                               aria-label={"username"} helperText={"username that you want to register"}
                               fullWidth={true} required={true} name={"username"} id="username" autoComplete={false}/>
                    <TextField type={"email"} label={"Email"} color={"primary"} placeholder={"example@gmail.com"}
                               title={"email"}
                               aria-label={"email"} helperText={"an valid email like mack@gmail.com"}
                               fullWidth={true} required={true} name={"email"} id="email" autoComplete={false}/>
                    <TextField type={visibility ? "text" : "password"} label={"password"} color={"primary"}
                               placeholder={"your password"}
                               title={"password"}
                               aria-label={"password"}
                               helperText={"type an strong password that are more then 8 character"}
                               fullWidth={true} required={true} name={"password"} id="password" autoComplete={false}
                               InputProps={{
                                   endAdornment: <Visibility color={"primary"} cursor={"pointer"}
                                                             onClick={handleVisibility}/>
                               }}/>

                    <TextField type={visibility ? "text" : "password"} label={"confirm password"} color={"primary"}
                               placeholder={"retype your password"}
                               title={"confirm password"}
                               aria-label={"cpassword"}
                               helperText={"retype your password so we know you didnt make any mistakes"}
                               fullWidth={true} required={true} name={"cpassword"} id="cpassword" autoComplete={false}
                               InputProps={{
                                   endAdornment: <Visibility color={"primary"} cursor={"pointer"}
                                                             onClick={handleVisibility}/>
                               }}/>

                    <FormControlLabel control={<Checkbox defaultChecked={checkBox} onChange={handleCheckBox}/>}
                                      label="accept term and policy"/>
                    <Button variant={"contained"} color={"primary"} fullWidth={true} type={"submit"}
                            disabled={!checkBox ? true : false}>Submit</Button>
                </form>
                <Typography variant={"subtitle2"} component={"p"}>
                    already have an account ? <Link to={"/login"}>login</Link>
                </Typography>
            </Box>
        </Container>
    )
}

export default Register