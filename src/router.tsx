import {createBrowserRouter} from "react-router-dom";
import Home from "./pages/home/home.tsx";
import NotFound from "./pages/notFound/notFount.tsx";
import Register from "./pages/auth/register/register.tsx";
import Auth from "./pages/auth/auth.tsx";
import Login from "./pages/auth/login/login.tsx";
import ResetPassword from "./pages/resetPassword/resetPassword.tsx";
import Account from "./components/account/account.tsx";
import Dashboard from "./components/account/dashboard/dashboard.tsx";
import Product from "./pages/product/product.tsx";
import Cart from "./pages/cart/cart.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/reset-password",
        element: <ResetPassword/>
    },
    {
        path: "/cart",
        element: <Cart/>
    },
    {
        path: "/account",
        element: <Account/>,
        children: [
            {
                path: "",
                element: <Dashboard/>
            }
        ]
    },
    {
        path: "/products/:id",
        element: <Product/>
    },
    {
        path: "/",
        element: <Auth/>,
        children: [
            {
                path: "/login",
                element: <Login/>,
            },
            {
                path: "/register",
                element: <Register/>,
            },
        ],
    },
    {
        path: "*",
        element: <NotFound/>
    }
]);

export default router;