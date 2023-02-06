import {useSelector} from "react-redux";
import {Container} from "@mui/material";

const Dashboard = () => {
    const {user} = useSelector(state => state.authReducer)
    const readyData = JSON.parse(user)
    return (
        <Container>
            profile
        </Container>
    )
}

export default Dashboard