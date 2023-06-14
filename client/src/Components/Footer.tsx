import {Container, Box, Typography, Link} from "@mui/material";
import {GitHub as GitHubIcon, Telegram as TelegramIcon} from "@mui/icons-material";

export default function Footer(){

    return(
        <Container sx={{ mt: 20 }}>
            <Box sx={{ p: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box>
                    <GitHubIcon />
                    <Typography component={Link} href="https://github.com/RizaMamedow"
                                sx={{ fontSize: 20, color: '#000', ml: 1, fontWeight: 700, textDecoration: 'none' }}>
                        RizaMamedow
                    </Typography>
                </Box>
                <Box sx={{ ml: 3}}>
                    <TelegramIcon />
                    <Typography component={Link} href="https://t.me/ponchik_kruglyy"
                                sx={{ ml: 1, fontSize: 20, color: '#000', fontWeight: 700, textDecoration: 'none' }}>
                        ponchik_kruglyy
                    </Typography>
                </Box>
            </Box>
        </Container>
    )
}