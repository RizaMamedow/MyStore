import { Stack } from '@mui/material';
import React, { useEffect } from 'react';

import TopBox from "../Components/Homepage/TopSide";
import FeaturesSide from "../Components/Homepage/FeauturesSide";
import CategorySide from "../Components/CategorySide";
import ProductSide from "../Components/Homepage/ProductSide";




export default function IndexPage() {
    return (
        <Stack>
            <TopBox />
            <FeaturesSide/>
            <ProductSide />
            <CategorySide/>
        </Stack>
    );
}







