import {AppBar, Box, IconButton, Toolbar} from "@mui/material";
import {AccountCircle, Settings} from "@mui/icons-material";

const Content = ({children}) => {
    return (
        <Box className={"content"}>
            <AppBar position={"static"} color={"background"}
                    sx={{boxShadow: "4px 2px 4px grey", borderLeft: "1px solid lightgrey"}}>
                <Toolbar sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <Box>
                        search
                    </Box>
                    <Box>
                        <IconButton>
                            <AccountCircle fontSize={"large"}/>
                        </IconButton>
                        <IconButton>
                            <Settings fontSize={"large"}/>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {children}
        </Box>
    )
}
export default Content