import * as React from 'react';
import Typography from '@mui/material/Typography';
import {Button, Card, CardContent, CardMedia, CardActionArea, CardActions, Box,} from '@mui/material';
import {Config} from "../../Utils/Config";
import {IProduct} from "../../Interfaces/ModelInterfaces";
import {Link} from "react-router-dom";
import routes from "../../Routes";
import moment from "moment";

export default function ProductCard({ id, thumbnail, title, description, price, category_id, created }: IProduct) {
    let thumbnail_path = Config.BACKEND_URL + thumbnail;
    return (
        <Box component={Link} to={routes.product_details.path + `${id}`}>
            <Card sx={{maxWidth: 345}} elevation={3}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="250"
                        src={thumbnail_path}
                    />
                    <CardContent sx={{ p: 3 }}>
                        <Typography gutterBottom variant="h6" noWrap component="div" fontWeight={700}>
                            {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" noWrap>
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Typography variant="body1" noWrap color="text.primary" fontWeight={600} sx={{ letterSpacing: "0.4px", mr: 1 }} align='center'>
                        ${price}
                    </Typography>
                    <Typography variant="body1" noWrap color="text.primary" fontWeight={600} sx={{ letterSpacing: "0.4px", mr: 1 }} align='center'>
                        {moment(created).startOf('day').fromNow()}
                    </Typography>
                </CardActions>
            </Card>
        </Box>
    );
}