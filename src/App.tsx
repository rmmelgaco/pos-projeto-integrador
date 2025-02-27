import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Home from "./pages/home";
import ListAllRecentProducts from "./pages/list-recent-products";
import Details from "./pages/details";
import SearchProducts from "./pages/search-result";
import NotFound from "./pages/not-found";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import QuemSomos from "./pages/quem-somos";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import UserProducts from "./pages/user-products";
import FormProduct from "./pages/form-product";
import FaleConosco from "./pages/fale-conosco";
import FaleConoscoAdmin from "./pages/fale-conosco-admin";
import ListAllProducts from "./pages/list-all-products";
import FormProductEdit from "./pages/form-product-edit";

export default function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "/all-recent-products",
            element: <ListAllRecentProducts/>
        },
        {
            path: "/all-products",
            element: <ListAllProducts/>
        },
        {
            path: "/products/details/:productId",
            element: <Details/>
        },
        {
            path: "/products/search/:productNameToSearch",
            element: <SearchProducts/>
        },
        {
            path: "/products/category/:category",
            element: <SearchProducts/>
        },
        {
            path: '/quem-somos',
            element: <QuemSomos/>
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/register',
            element: <Register/>
        },
        {
            path: '/dashboard',
            element: <Dashboard/>
        },
        {
            path: '/my-products',
            element: <UserProducts/>
        },
        {
            path: '/form-product',
            element: <FormProduct/>
        },
        {
            path: '/form-product-edit/:productId',
            element: <FormProductEdit/>
        },
        {
            path: '/fale-conosco',
            element: <FaleConosco/>
        },
        {
            path: '/fale-conosco-admin',
            element: <FaleConoscoAdmin/>
        },
        {
            path: '*',
            element: <NotFound/>
        }
    ]);

    return <div>
        <RouterProvider router={router}/>
    </div>
}