import { createBrowserRouter, Navigate } from "react-router-dom";
import Main from "../main/main";
import Home from "../pages/home/home";
import Article from "../pages/article/article";
import Login from "../pages/login/login";
import User from "../pages/user/user";
import NotFound from "../pages/404";
const router = createBrowserRouter([
    {
        path: '/',
        Component:Main,
        children: [
            {
                path:'/',
                element:<Navigate to="/home" replace/>
            },
            {
                path:'/home',
                Component:Home,
            },
            {
                path: '/login',
                Component: Login,
            },
            {
                path: '/article',
                Component: Article,
            },
            {
                path: '/user/:id/:name',
                Component: User,
            }
        ]
    },
    {
        path:'/*',
        Component:NotFound,
    }

]);
export default router;
