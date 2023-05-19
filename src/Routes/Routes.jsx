import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../Layout/NewsLayout/NewsLayout";
import News from "../pages/News/News/News";

const router = createBrowserRouter([
    {
        path : "/",
        element : <NewsLayout></NewsLayout>,
        children : [
            {
                path : "/",
                element : <Home></Home>
            },
            {
                path : '/category/:id',
                element : <Category></Category>
            }
           
        ]
    },
    {
        path : '/news',
        element : <NewsLayout></NewsLayout>,
        children : [
            {
                path: ':id',
                element: <News></News>
            }
        ]
    }
]);

export default router;