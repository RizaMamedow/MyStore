import {Container, Grid} from "@mui/material";
import React from "react";
import FeauturesCard from "../Cards/FeauturesCard";


export default function FeaturesSide() {
    return(
        <Container sx={{ my: { xs: 3, sm: 7}}}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} md={4} sx={{ mb: 1 }}>
                    <FeauturesCard icon={"bolt"} text="Fusce ut placerat orci nulla pellentesque dignissim enim sit. Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. "/>
                </Grid>
                <Grid item xs={12} md={4} sx={{ mb: 1 }}>
                    <FeauturesCard icon={'soft'} text="Sed cras ornare arcu dui vivamus arcu felis bibendum. Odio aenean sed adipiscing diam donec adipiscing tristique risus nec."/>
                </Grid>
                <Grid item xs={12} md={4} sx={{ mb: 1 }}>
                    <FeauturesCard icon={'list'} text="Eget sit amet tellus cras adipiscing enim. Turpis egestas integer eget aliquet nibh praesent tristique magna sit."/>
                </Grid>
            </Grid>
        </Container>
    )
}
