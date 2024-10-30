import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home";
import Menu from "../Menu/Menu";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
        {
            path:'/menu',
            element:<Menu></Menu>
        }
        ]
    }
])

export default router
