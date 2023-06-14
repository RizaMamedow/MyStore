import React, {useEffect} from "react";
import API from "../../Utils/ApiHelper";
import {Container} from "@mui/material";
import {IProduct} from "../../Interfaces/ModelInterfaces";
import ProductListGrid from "../ProductListGrid";

export default function ProductSide(){
    const [products, setProductList] = React.useState<IProduct[]>([]);

    useEffect(() => {
        API.get('api/store/products/limit/10?format=json').then(res => {
            setProductList(res.data)
        });
    }, []);

    return (
        <Container>
                <ProductListGrid products={products} />
        </Container>
    )
}