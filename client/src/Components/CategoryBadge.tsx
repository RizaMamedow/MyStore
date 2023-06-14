import React from "react";
import Chip from "@mui/material/Chip";
import {ICategory} from "../Interfaces/ModelInterfaces";
import {Box} from "@mui/material";
import {Link} from "react-router-dom";
import routes from "../Routes";


export default function CategoryBadge({id, name}: ICategory) {
    return (
        <Box component={Link} to={routes.category.path + `${id}`}>
            <Chip key={id} clickable
                  sx={{ my: 0.5, fontSize: 15, fontWeight: 600 }}
                  label={name}
            />
        </Box>
    )
}