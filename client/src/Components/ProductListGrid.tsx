import * as React from 'react';
import {IProduct} from "../Interfaces/ModelInterfaces";
import {Grid} from "@mui/material";
import ProductCard from "./Cards/ProductCard";


export default function ProductListGrid(props: {products: IProduct[]}) {
    const components = props.products.map((product: IProduct) => {
        return (
            <Grid key={product.id} item xs={12} sm={6} md={3} sx={{ mb: 1 }}>
                <ProductCard {...product}/>
            </Grid>
        )
    });

    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {components}
        </Grid>
    );
}