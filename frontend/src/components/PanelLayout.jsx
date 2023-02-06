import {
    Box,
    Container,
    Grid,
    List,
    ListItem,
    ListItemButton, ListItemIcon,
    ListItemText,
    radioClasses,
    Typography
} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {AccountBox, Dashboard, Logout, ShoppingBasket, Signpost} from "@mui/icons-material";
import {logout} from "../features/actions/authActions";

const PanelLayout = ({children}) => {
    const {user} = useSelector(state => state.authReducer)
    const readyData = JSON.parse(user)
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <Container maxWidth={"xl"} sx={{marginY: 5}}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={4} lg={3} display={"grid"} gap={3}>
                    <Box sx={Style} padding={3}>
                        <Typography variant={"h5"} component={"p"} align={"center"} fontWeight={600}>
                            {readyData.username}
                        </Typography>
                        <Typography variant={"h5"} component={"p"} align={"center"} fontWeight={400}>
                            {readyData.email}
                        </Typography>
                    </Box>
                    <Box sx={Style}>
                        <List>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Dashboard/>
                                </ListItemIcon>
                                <ListItemText primary={"Dashboard"}/>
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon>
                                    <AccountBox/>
                                </ListItemIcon>
                                <ListItemText primary={"Account"}/>
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ShoppingBasket/>
                                </ListItemIcon>
                                <ListItemText primary={"Orders"}/>
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Signpost/>
                                </ListItemIcon>
                                <ListItemText primary={"Address"}/>
                            </ListItemButton>
                            <ListItemButton onClick={handleLogout}>
                                <ListItemIcon>
                                    <Logout/>
                                </ListItemIcon>
                                <ListItemText primary={"Logout"}/>
                            </ListItemButton>
                        </List>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={8} lg={9}>
                    {children}
                </Grid>
            </Grid>
        </Container>
    )
}

export const Style = {boxShadow: "2px 2px 8px grey", borderRadius: "7px", display: "grid", gap: 2,backgroundColor:"background.main"}

export default PanelLayout