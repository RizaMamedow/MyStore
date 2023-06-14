import React, {useEffect} from "react";
import API from "../Utils/ApiHelper";
import {Box, Container, Typography} from "@mui/material";
import CategoryBadge from "./CategoryBadge";
import {ICategory} from "../Interfaces/ModelInterfaces";

export default function CategorySide(){
    const [categoryList, setCategoryList] = React.useState([]);

    useEffect(() => {
        API.get('api/store/categories/limit/20/?format=json').then(res => {
            setCategoryList(res.data)
        });
    }, []);

    return (
        <Container sx={{ mt: 5, mb: 1}}>
            <Typography variant="h3"
                        component="div" sx={{ mb: 1, fontWeight: 700}}>
                Categories
            </Typography>
            <Box>
                {categoryList.map((category: ICategory) => {
                    return (
                        <CategoryBadge key={category.id} {...category}/>
                    )
                })}
            </Box>
        </Container>
    )
};