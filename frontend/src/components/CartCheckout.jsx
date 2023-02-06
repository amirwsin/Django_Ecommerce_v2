import {Box, Typography} from "@mui/material";
import {useSelector} from "react-redux";

const CartCheckout = () => {
    const {qty, price} = useSelector(state => state.cartReducer)
    return (
        <Box sx={{boxShadow: "2px 2px 8px grey", padding: 3, borderRadius: "7px",backgroundColor:"background.main"}}>
            <ul className={"checkout-list"}>
                <li className={"checkout-list-item"}>
                    <Typography variant={"h5"} fontWeight={600} component={"span"}>
                        Quantity
                    </Typography>
                    <Typography variant={"h6"} fontWeight={400} component={"span"}>
                        {qty}
                    </Typography>
                </li>
                <li className={"checkout-list-item"}>
                    <Typography variant={"h5"} fontWeight={600} component={"span"}>
                        Price
                    </Typography>
                    <Typography variant={"h6"} fontWeight={400} component={"span"}>
                        ${price}
                    </Typography>
                </li>
            </ul>
        </Box>
    )
}
export default CartCheckout