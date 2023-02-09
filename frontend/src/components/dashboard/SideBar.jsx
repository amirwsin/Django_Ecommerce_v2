import {useState} from "react";
import {Avatar, Box, Button, Divider, Drawer, IconButton, Typography} from "@mui/material";
import {Group, MoreVert} from "@mui/icons-material";
import {useSelector} from "react-redux";

const SideBar = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(prevState => !prevState)
    }
    const {user} = useSelector(state => state.authReducer)
    const readyUser = JSON.parse(user)
    return (
        <Box className={open ? "sidebar active" : "sidebar"}>
            <Box className={"sidebar-wrapper"}>
                <IconButton onClick={handleOpen} sx={{width: "50px"}}>
                    <MoreVert fontSize={"large"}/>
                </IconButton>
                <Divider variant={"fullWidth"}/>
                <Box className={"sidebar-wrapper-inner"}>
                    <Avatar>
                        {readyUser?.username.charAt(0)}
                    </Avatar>
                    <ul className={"sidebar-wrapper-inner-list"}>
                        <li className={open ? "sidebar-wrapper-inner-list-item open" : "sidebar-wrapper-inner-list-item"}>
                            <Group/>
                            <p>test</p>
                        </li>
                        <li className={open ? "sidebar-wrapper-inner-list-item open" : "sidebar-wrapper-inner-list-item"}>
                            <Group/>
                            <p>test</p>
                        </li>
                        <li className={open ? "sidebar-wrapper-inner-list-item open" : "sidebar-wrapper-inner-list-item"}>
                            <Group/>
                            <p>test</p>
                        </li>
                        <li className={open ? "sidebar-wrapper-inner-list-item open" : "sidebar-wrapper-inner-list-item"}>
                            <Group/>
                            <p>test</p>
                        </li>
                    </ul>
                </Box>
            </Box>
        </Box>
    )
}

export default SideBar