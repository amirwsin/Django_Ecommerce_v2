import {Box, Divider, Tooltip, Typography} from "@mui/material";
import {Category, Dashboard, Group, Inventory} from "@mui/icons-material";
import {Link} from "react-router-dom";

const SideBar = () => {
    const handleClick = (e) => {
        const lists = document.getElementsByClassName("sidebar-wrapper-inner-list-item")
        for (let i = 0; i < lists.length; i++) {
            lists[i].classList.remove("active")
        }
        e.currentTarget.classList.toggle("active")
    }
    return (
        <Box id={"sidebar"} className={"sidebar"} sx={{backgroundColor: "background.main"}}>
            <Box className={"sidebar-wrapper"}>
                <Box className={"sidebar-wrapper-inner"}>
                    <ul className={"sidebar-wrapper-inner-list"}>
                        <Link to={"/admin/dashboard"} className={"sidebar-link"}>
                            <li className={"sidebar-wrapper-inner-list-item"} onClick={handleClick}>
                                <Tooltip title={"Dashboard"} arrow>
                                    <Dashboard/>
                                </Tooltip>
                                <Typography variant={"h6"}>
                                    Dashboard
                                </Typography>

                            </li>
                        </Link>
                        <Link to={"/admin/users"} className={"sidebar-link"}>
                            <li className={"sidebar-wrapper-inner-list-item"} onClick={handleClick}>
                                <Tooltip title={"users"} arrow>
                                    <Group/>
                                </Tooltip>
                                <Typography variant={"h6"}>
                                    Users
                                </Typography>
                            </li>
                        </Link>
                        <li className={"sidebar-wrapper-inner-list-item"} onClick={handleClick}>
                            <Tooltip title={"Inventory"} arrow>
                                <Inventory/>
                            </Tooltip>
                            <Typography variant={"h6"}>
                                Inventory
                            </Typography>
                        </li>
                        <li className={"sidebar-wrapper-inner-list-item"} onClick={handleClick}>
                            <Tooltip title={"Categories"} arrow>
                                <Category/>
                            </Tooltip>
                            <Typography variant={"h6"}>
                                Categories
                            </Typography>
                        </li>
                        <Divider variant={"fullWidth"}/>
                        <li className={"sidebar-wrapper-inner-list-item"} onClick={handleClick}>
                            <Tooltip title={"Categories"} arrow>
                                <Category/>
                            </Tooltip>
                            <Typography variant={"h6"}>
                                Categories
                            </Typography>
                        </li>
                        <li className={"sidebar-wrapper-inner-list-item"} onClick={handleClick}>
                            <Tooltip title={"Categories"} arrow>
                                <Category/>
                            </Tooltip>
                            <Typography variant={"h6"}>
                                Categories
                            </Typography>
                        </li>
                    </ul>
                </Box>
            </Box>
        </Box>
    )
}

export default SideBar