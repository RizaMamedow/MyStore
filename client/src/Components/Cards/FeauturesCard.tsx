import * as React from "react";
import { Box, Typography }from "@mui/material";
import Soft from "@mui/icons-material/Chair";
import Bolt from "@mui/icons-material/Bolt";
import List from "@mui/icons-material/ListAlt";
import {IFeauturesCard} from '../../Interfaces/ComponentInteraces';

export default function FeauturesCard({icon, text}: IFeauturesCard){
    let IconComponent;
    if (icon == 'list'){
        IconComponent = <List sx={{ fontSize: 80, }} color="primary"/>
    } else if(icon == 'bolt'){
        IconComponent = <Bolt sx={{ fontSize: 80, }} color="primary"/>
    } else if(icon == 'soft'){
        IconComponent = <Soft sx={{ fontSize: 80, }} color="primary"/>
    }

    switch (icon) {
        case 'bolt': IconComponent = <List sx={{ fontSize: 80, }} color="primary"/>;
    }

    return (
        <Box sx={{ display: 'flex', mt: 2 }}>
            <Box sx={{ maxHeight: 500, mr: 1 }}>
                {IconComponent}
            </Box>
            <Box>
                <Typography sx={{ fontWeight: 600, fontSize: 15 }} component="p">
                    {text}
                </Typography>
            </Box>
        </Box>
    );
}

