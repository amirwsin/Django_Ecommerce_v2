import {Container, Grid} from "@mui/material";
import CartProducts from "../components/CartProducts";
import CartCheckout from "../components/CartCheckout";

const ShoppingCart = () => {
    return (
        <Container maxWidth={"xl"} sx={{marginY:5,minHeight:"63vh"}}>
            <Grid container spacing={4}>
                <Grid item xs={12} lg={8}>
                    <CartProducts />
                </Grid>
                <Grid item xs={12} lg={4}>
                    <CartCheckout />
                </Grid>
            </Grid>
        </Container>
    )
}

export default ShoppingCart