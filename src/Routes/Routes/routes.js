import { createBrowserRouter, Route } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout/MainLayout";
import Home from "../../Pages/Homepage/Home/Home";
import AddProducts from "../../Pages/Inventory/Products/AddProducts/AddProducts";
import Products from "../../Pages/Inventory/Products/Products/Products";
import Login from "../../Register/Login/Login";
import Register from "../../Register/Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/products',
                element: <Products></Products>
            },
            {
                path: '/addproducts',
                element: <AddProducts></AddProducts>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default router;