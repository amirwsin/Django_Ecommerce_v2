import HeroSection from "../components/HeroSection";
import {Box, Container} from "@mui/material";
import ProductBox from "../components/ProductBox";

const Home = () => {
    return (
        <Box component={"main"} sx={{marginY: 2.4, zIndex: 1}}>
            <HeroSection/>
            <Container sx={{paddingY:5}}>
                <ProductBox/>
            </Container>
        </Box>
    );
}

export default Home