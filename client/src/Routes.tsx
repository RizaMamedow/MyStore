const routes = {
    main: {
        path: "/",
        index: true,
    },
    signup: {
        path: "/signup",
    },
    signin: {
        path: "/login",
    },
    category: {
        path_with_params: "/category/:categoryId",
        path: "/category/"
    },
    product_details: {
        path_with_params: "/product/:productId",
        path: "/product/"
    }
};

export default routes;