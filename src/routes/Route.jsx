import { createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import CustomerReview from "../pages/CustomerReview/CustomerReview";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddToCard from "../pages/AddToCard/AddToCard";
import AdminDashboard from "../pages/AddminDashboard/AdminDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/customerreview",
        element: <CustomerReview></CustomerReview>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addtocard",
        element: <AddToCard></AddToCard>,
      },
      {
        path: "/admindashboard",
        element: <AdminDashboard></AdminDashboard>,
      },
    ],
  },
]);

export default router;