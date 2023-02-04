import {Container, Grid} from "@mui/material";
import ProductDetail from "../components/ProductDetail";
import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {ProductBySlug} from "../api/ProductsApi";
import {useState} from "react";
import ProductDetailGallery from "../components/ProductDetailGallery";

const ProductDetails = () => {

    const [selection,setSelection] = useState()

    let {slug} = useParams()

    const ProductQuery = useQuery({
        queryKey: ["product", "slug"],
        queryFn: () => ProductBySlug(slug),
    })


    return (
        <Container sx={{marginY: 5}} maxWidth={"xl"}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4} lg={5}>
                    <ProductDetailGallery data={ProductQuery.data} selection={selection} setSelection={setSelection} isLoading={ProductQuery.isLoading}/>
                </Grid>
                <Grid item xs={12} md={8} lg={7}>
                    <ProductDetail setSelection={setSelection} data={ProductQuery.data} isLoading={ProductQuery.isLoading}/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ProductDetails