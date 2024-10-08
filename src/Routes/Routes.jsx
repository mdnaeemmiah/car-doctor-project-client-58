import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Singup from "../Pages/Singup/Singup";
import BookService from "../Pages/BookService/BookService";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element: <Home></Home>
        },
        {
          path:'login',
          element: <Login></Login>
        },
        {
          path:'singup',
          element: <Singup></Singup>
        },
        {
          path:'book/:id',
          element: <BookService></BookService>,
          loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'bookings',
          element:<PrivateRoutes><Bookings></Bookings></PrivateRoutes>,
        }
      ]
    },
  ]);
  export default router;