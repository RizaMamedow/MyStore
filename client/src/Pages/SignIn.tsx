import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import API from '../Utils/ApiHelper';
import {Cookie} from "../Utils/Cookie";
import { Link } from 'react-router-dom';
import { ErrorAlert, SuccessAlert } from '../Components/FormAlerts';
import { Config } from '../Utils/Config';
import {IErrorResponse} from "../Interfaces/ComponentInteraces";
import routes from "../Routes";

export default function SignInPage() {
    const [error, setError] = React.useState<IErrorResponse | null>(null);
    const [successLogin, setSuccess] = React.useState<boolean>(false);

    const refreshPage = () => {
        window.location.reload();
    };

    const handleSubmit = (event:  React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        API.post('api/accounts/login/', {
            email: data.get('email'),
            password: data.get('password'),
        })
            .then(res => {
                if(res.data.token){
                    setSuccess(true);
                    setError(null);
                    Cookie.set('user_token', res.data.token);
                    refreshPage();
                } else{
                    setError(res.data);
                    console.log(res.data);
                }
            });
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                    <LockOutlinedIcon color="secondary" />
                </Avatar>
                <Typography component="h1" variant="h5" sx={{ fontWeight: 700 }}>
                    Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    {error !== null ? <ErrorAlert {...error}/> : null}
                    {successLogin ? <SuccessAlert text="Authorization was successful!" isSignUpPage={false}/> : null}
                    <TextField
                        type="email"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Box component={Link} to={routes.signup.path} sx={{color: "secondary.main"}}>
                                Not Have an account? Registration here!
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}