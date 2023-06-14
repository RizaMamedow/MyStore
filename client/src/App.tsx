import React, {useEffect, useState} from 'react';

import AppHeader from './Components/Header';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {ThemeProvider} from "@mui/material";
import {theme} from "./Theme";
import Footer from "./Components/Footer";
import IndexPage from "./Pages/Index";
import {Cookie} from "./Utils/Cookie";
import {Config} from "./Utils/Config";
import SignUpPage from "./Pages/SignUp";
import NotFound from "./Pages/NotFound";
import SignInPage from "./Pages/SignIn";
import routes from "./Routes";
import CategoryPage from "./Pages/ProductsByCategory";
import ProductDetailsPage from "./Pages/Details";


const App: React.FC = () => {
    const [isAuth, setAuth] = useState<boolean>(false);

    const checkUser = () => {
        if(Cookie.get('user_token') === undefined){
            setAuth(false)
        } else{
            setAuth(true)
        }
    };

    useEffect(() => {
        checkUser();
        console.warn(Config.FIGLET_MSG)
    });

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <AppHeader isAuthenticated={isAuth}/>
                <Routes>
                    <Route index path={routes.main.path} element={<IndexPage/>} />
                    <Route path={routes.signup.path}
                           element={isAuth ? <Navigate to="/"/> : <SignUpPage/>} />
                    <Route path={routes.signin.path}
                           element={isAuth ? <Navigate to="/"/> : <SignInPage/>} />
                    <Route path={routes.category.path_with_params}
                           element={<CategoryPage/>} />
                    <Route path={routes.product_details.path_with_params}
                           element={<ProductDetailsPage/>} />
                    <Route path="*" element={<NotFound/>} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
