import Layout from "@/pages/Layout";
import Month from "@/pages/Month";
import New from "@/pages/New";
import Year from "@/pages/Year";
import { createBrowserRouter, Navigate } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            {
                path:'/',
                element:<Navigate to='/month' relace/>
            },
            {
                path: '/month',
                Component: Month,
            }, 
            {
                path:'/year',
                Component:Year,
            }
        ]
    },
    {
        path:'/new',
        Component:New,
    }
]);

export default router;