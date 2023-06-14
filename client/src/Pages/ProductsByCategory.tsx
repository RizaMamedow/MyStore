import React, {useEffect} from "react";
import API from "../Utils/ApiHelper";
import {Container, Typography} from "@mui/material";
import {ICategory, IProduct} from "../Interfaces/ModelInterfaces";
import ProductListGrid from "../Components/ProductListGrid";
import {useParams} from "react-router";

export default function ProductSide(){
    const params = useParams();
    const [products, setProductList] = React.useState<IProduct[]>([]);
    const [category, setCategory] = React.useState<ICategory | null>(null);

    useEffect(() => {
        API.get(`api/store/products/category/${params.categoryId}/`).then(res => {
            setProductList(res.data);
            setCategory(res.data[0].category)
        });
    }, []);

    return (
        <Container sx={{ mt: 2 }}>
            <Typography variant="h3" component="div" sx={{ mb: 1, fontWeight: 700}}>
                {category != null ? category.name : null}
            </Typography>
            <ProductListGrid products={products} />
        </Container>
    )
}