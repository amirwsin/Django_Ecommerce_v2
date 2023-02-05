import {useSelector} from "react-redux";
import {Container} from "@mui/material";

const Profile = () => {
    const {user} = useSelector(state => state.authReducer)
    return (
        <Container>
            <p>{user}</p>
        </Container>
    )
}

export default Profile