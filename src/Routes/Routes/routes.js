import { createBrowserRouter, Route } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout/MainLayout";
import Home from "../../Pages/Homepage/Home/Home";
import AddCategories from "../../Pages/Inventory/Categories/AddCategories/AddCategories";
import Categories from "../../Pages/Inventory/Categories/Categories/Categories";
import UpdateCategory from "../../Pages/Inventory/Categories/UpdateCategory/UpdateCategory";
import AddProducts from "../../Pages/Inventory/Products/AddProducts/AddProducts";
import Products from "../../Pages/Inventory/Products/Products/Products";
import UpdateProduct from "../../Pages/Inventory/Products/UpdateProduct/UpdateProduct";
import UserProfile from "../../Pages/UserProfile/UserProfile";
import Login from "../../Register/Login/Login";
import Register from "../../Register/Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://inventory-management-server-sigma.vercel.app/products')
            },
            {
                path: '/products',
                element: <Products></Products>
            },
            {
                path: '/categories',
                element: <Categories></Categories>
            },
            {
                path: '/addproducts',
                element: <AddProducts></AddProducts>,
                loader: () => fetch('https://inventory-management-server-sigma.vercel.app/categories')
            },
            {
                path: '/addcategories',
                element: <AddCategories></AddCategories>
            },
            {
                path: '/updateproduct/:id',
                element: <UpdateProduct></UpdateProduct>,
                loader: ({ params }) => fetch(`https://inventory-management-server-sigma.vercel.app/products/${params.id}`)
            },
            {
                path: '/updatecategory/:id',
                element: <UpdateCategory></UpdateCategory>,
                loader: ({ params }) => fetch(`https://inventory-management-server-sigma.vercel.app/categories/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/profile',
                element: <UserProfile></UserProfile>
            }
        ]
    }
])

export default router;