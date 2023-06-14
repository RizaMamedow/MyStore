/* eslint-disable no-unused-expressions */
/* eslint-disable no-lone-blocks */


import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import * as React from "react";
import {IConsumerValidatorResponse, IErrorResponse, ISuccessAlert} from "../Interfaces/ComponentInteraces";


export function ErrorAlert({code, detail}: IErrorResponse) {
    return(
        <Alert severity="error"><AlertTitle>Error</AlertTitle>{detail}</Alert>
    )
}

export function SuccessAlert({text, isSignUpPage = false}: ISuccessAlert) {
    return(
        <Alert severity="success">
            {text}
            {isSignUpPage ? <Box component={Link} to={"/login"}> <br/> Please Sign In</Box> : null}
        </Alert>
    )
}

export function ValidatorErrorAlert(validator: IConsumerValidatorResponse) {
    return(
        <Alert severity="error">
            <AlertTitle>Entered data is invalid</AlertTitle>
            {validator.username}
            {validator.email}
            {validator.password}
        </Alert>
    )
}