import {createTheme, PaletteOptions} from "@mui/material";
import {red, yellow} from "@mui/material/colors";


export const theme = createTheme({
    palette: {
        primary: {
            main: yellow[700],
        },
        secondary: {
            main: "#111",
        },
        error: {
            main: red[600],
        },
    },
    typography: {
        "fontFamily": `"Raleway", "Montserrat", "Arial", sans-serif`,
        "fontSize": 14,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500
    }
});
