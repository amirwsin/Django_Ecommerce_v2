import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Box, IconButton} from "@mui/material";
import {AddShoppingCart, Favorite} from "@mui/icons-material";

let p = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ante metus dictum at tempor commodo. Enim diam vulputate ut pharetra sit. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Faucibus turpis in eu mi bibendum neque egestas. Sed lectus vestibulum mattis ullamcorper. Risus viverra adipiscing at in. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Eget dolor morbi non arcu risus quis varius. Risus quis varius quam quisque id. A condimentum vitae sapien pellentesque habitant morbi. Eget velit aliquet sagittis id consectetur purus ut. Gravida cum sociis natoque penatibus et magnis dis parturient. Sit amet porttitor eget dolor morbi non arcu risus quis. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum."

const ProductCard = ({data}) => {
    return (
        <Card sx={{maxWidth: 250}} className={"product-card"}>
            <Box sx={{overflow:"hidden"}}>
                <CardMedia
                    sx={{height: 160}}
                    component="img"
                    className={"product-card-image"}
                    alt={"product image"}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY87Gp2WH3PkTHQ7ZlBx_1QGp6rUMw0iJpiQ&usqp=CAU"
                />
                <Typography component={"span"} className={"product-card-discount"}>10%</Typography>
            </Box>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Cream
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {p.length > 20 ? p.substring(0, 50) + " . . . " : p}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton>
                    <AddShoppingCart/>
                </IconButton>
                <IconButton>
                    <Favorite/>
                </IconButton>
            </CardActions>
        </Card>
    )
}
export default ProductCard