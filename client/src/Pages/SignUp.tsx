/* eslint-disable eqeqeq */


import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import API from '../Utils/ApiHelper';
import { ErrorAlert, SuccessAlert, ValidatorErrorAlert } from '../Components/FormAlerts'
import { Config } from '../Utils/Config';
import {IConsumerValidatorResponse, IErrorResponse} from "../Interfaces/ComponentInteraces";
import routes from "../Routes";


export default function SignUpPage() {
    const [validatorError, setValidatorError] = React.useState<IConsumerValidatorResponse | null>(null);
    const [error, setError] = React.useState<IErrorResponse | null>(null);
    const [successSignUp, setSuccess] = React.useState<boolean>(false);

    const cleanStates = (): void => {
        setValidatorError(null);
        setError(null);
        setSuccess(false);
    };

    const handleSubmit = (event:  React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        API.post('api/accounts/register/', {
            email: data.get('email'),
            username: data.get('username'),
            password: data.get('password'),
        })
            .then(res => {
                cleanStates();
                if (res.data.email || res.data.username || res.data.password){
                    setValidatorError(res.data);
                } else if (res.data.code == 0){
                    setError(res.data);
                } else{
                    setValidatorError(null);
                    setSuccess(res.data)
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
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5" sx={{ fontWeight: 700 }}>
                    Sign up
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    {validatorError !== null ? <ValidatorErrorAlert {...validatorError} /> : null}
                    {error !== null ? <ErrorAlert  {...error} /> : null}
                    {successSignUp ? <SuccessAlert text={"Account created success"} isSignUpPage={true}/> : null}
                    <Grid container spacing={2} sx={{ mt: 1 }}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="username"
                                label="Username"
                                type="text"
                                id="username"
                                autoComplete="username"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="password"
                                required
                                fullWidth
                                id="password"
                                label="Password"
                                type="password"
                                autoComplete="password"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link to={routes.signin.path}>
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}