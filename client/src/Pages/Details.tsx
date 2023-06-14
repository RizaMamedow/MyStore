import React, {useEffect} from "react";
import API from "../Utils/ApiHelper";
import {Grid, Container, Typography, Box} from "@mui/material";
import {IProductDetails} from "../Interfaces/ModelInterfaces";
import {Config} from "../Utils/Config";
import CategoryBadge from "../Components/CategoryBadge";
import moment from 'moment';

export default function ProductDetailsPage(){
    const [productDetails, setProductDetails] = React.useState<IProductDetails[]>([]);

    useEffect(() => {
        API.get('api/store/products/1/').then(res => {
            setProductDetails(res.data)
        });
    }, []);

    const getThumbnailUrl = (): string => {
        console.log(productDetails[0].created)
        return Config.BACKEND_URL + productDetails[0].thumbnail;
    };

    return (
        <Container sx={{ mt: 5, mb: 1}}>
            {productDetails.map((product: IProductDetails) => {
               return(
                   <Grid container spacing={12} key={product.id}>
                       <Grid item xs={12} sm={6}>
                            <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                                <Box
                                    component="img"
                                    src={getThumbnailUrl()}
                                    alt="Base Image"
                                    sx={{width: {xs: 350, md: 460},}}
                                />
                            </Box>
                       </Grid>
                       <Grid item xs={12} sm={6}>
                           <Box sx={{ display: 'flex', justifyContent: 'start', flexDirection: 'column' }}>
                               <CategoryBadge {...product.category}/>
                               <Typography sx={{ fontWeight: '900', fontSize: '30px' }}>
                                   {product.title}
                               </Typography>
                               <Typography sx={{ fontSize: '12px'}}>
                                   {moment(product.created).startOf('day').fromNow()}
                               </Typography>
                               <Typography sx={{ fontSize: '15px', mt: 1}}>
                                   {product.description}
                               </Typography>
                           </Box>
                           <Box sx={{ display: 'flex', justifyContent: 'end', flexDirection: 'row', mt: 2 }}>
                               <Typography sx={{ fontWeight: '800', fontSize: '35px' }}>
                                   ${product.price}
                               </Typography>
                           </Box>
                       </Grid>
                   </Grid>
               )
            })};
        </Container>
    )
};