import { Container, Typography, Grid } from '@mui/material';
import React from 'react';

import {
    Link
} from 'react-router-dom';


const GridItemStyles = {
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    textAlign: 'center',
    flexDirection: 'column'
};

function NotFound() {
    return (
        <Container component="main" maxWidth="md" sx={{ minHeight: "75vh" }}>
            <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={12} sx={ GridItemStyles }>
                    <Typography
                        fontWeight={800}
                        fontSize={"150px"}
                        color={"primary.main"}
                        sx={{ fontFamily: "Montserrat"}}
                    >404</Typography>
                </Grid>
                <Grid item xs={12} sx={ GridItemStyles }>
                    <Typography
                        fontWeight={700}
                        variant={"h4"}
                    >
                        Sorry... Page Not Found
                    </Typography>
                    <Typography fontSize={ "20px" }>
                        Please go to <Link to={"/"}>Main Page</Link>
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default NotFound;
