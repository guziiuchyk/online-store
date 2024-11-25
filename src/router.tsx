import {createBrowserRouter} from "react-router-dom";
import Home from "./pages/home/home.tsx";
import NotFound from "./pages/notFound/notFount.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path:"*",
        element: <NotFound/>
    }
]);

export default router;