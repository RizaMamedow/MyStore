import {Box, Typography} from "@mui/material";
import React from "react";

const TopBoxStyles = {
    height: 300,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'primary.main'
};

export default function TopBox() {
    return (
        <Box sx={TopBoxStyles}>
            <Typography
                variant="h2"
                component="div"
                sx={{ mb: 0, mt: 0, fontWeight: 700, letterSpacing: "2px", textAlign: 'center'  }}
            >
                Shop with nice prices.
            </Typography>
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mt: 0, fontWeight: 500, letterSpacing: "0.04px" }}
            >
                Buy everything you need here!
            </Typography>
        </Box>
    )
}