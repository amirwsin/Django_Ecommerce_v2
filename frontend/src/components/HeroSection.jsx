import {Box, Button, Grid, Typography} from "@mui/material";
import {Facebook, Instagram, LinkedIn, Pinterest, Twitter} from "@mui/icons-material";
import HeroImage2 from "./../assets/hero-image2.png"


const HeroSection = () => {
    return (
        <Box component={"div"} className={"hero-section"}>
            <Grid container spacing={2} sx={{padding: 5}} height={"100%"} zIndex={1}>
                <Grid item xs={12} sm={12} md={12} lg={6} sx={{display: "flex", position: "relative"}}>
                    <img src={HeroImage2} alt={"hero image "} className={"hero-section-image"}/>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} zIndex={2}>
                    <Box component={"div"}
                         sx={{textAlign: "center", display: "grid", gap: 5, justifyContent: "center"}}>
                        <Typography component={"p"} variant={"h5"}
                                    className={"hero-section-title"}>
                            Click What You Like And Buy It Instantly
                        </Typography>
                        <Typography component={"p"} variant={"subtitle1"} className={"hero-section-p"} sx={{width:{xs:"100%",sm:"100%",md:"80%",lg:"60%",xl:"50%"}}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Typography>
                        <Button variant={"contained"} color="black"
                                sx={{color: "white", width: "25%", justifySelf: "center"}}>
                            Products
                        </Button>
                    </Box>
                    <Box sx={{
                        position: "relative",
                        display: "flex",
                        gap: 5,
                        justifyContent: "center",
                        alignItems: "center",
                        marginY: "20%"
                    }}>
                        <Twitter className={"hero-section-icon"}/>
                        <Instagram className={"hero-section-icon"}/>
                        <Facebook className={"hero-section-icon"}/>
                        <Pinterest className={"hero-section-icon"}/>
                        <LinkedIn className={"hero-section-icon"}/>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default HeroSection