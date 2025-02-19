import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllProducts from "../Components/AllProducts/AllProducts";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ProductDetails from "../Components/ProductDetails/ProductDetails";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Components/Dashboard/Dashboard";
import MyProfile from "../Components/MyProfile/MyProfile";
import AddProducts from "../Components/AddProducts/AddProducts";
import AllUsers from "../Components/AllUsers/AllUsers";
import UnderReview from "../Components/UnderReview/UnderReview";
import AdminRoute from "./AdminRoute";
import ReportedProducts from "../Components/ReportedProducts/ReportedProducts";
import ModeratorRoute from "./ModeratorRoute";
import MyAddedProducts from "../Components/MyAddedProducts/MyAddedProducts";
import Errorpage from "../Components/ErrorPage/ErrorPage";
import DashHome from "../Components/DashHome/DashHome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allproducts",
        element: <AllProducts></AllProducts>,
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
        path: "products/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://product-hunt-server-umber.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
        errorElement: <Errorpage></Errorpage>,
        children: [
          {
            path: "",
            element: <DashHome></DashHome>,
          },
          {
            path: "myprofile",
            element: <MyProfile></MyProfile>,
          },
          {
            path: "addproducts",
            element: <AddProducts></AddProducts>,
          },
          {
            path: "myaddedproducts",
            element: <MyAddedProducts></MyAddedProducts>,
          },
          // Admin Routes
          {
            path: "users",
            element: (
              <AdminRoute>
                <AllUsers></AllUsers>
              </AdminRoute>
            ),
          },
          // Moderator Routes
          {
            path: "underreview",
            element: (
              <ModeratorRoute>
                <UnderReview></UnderReview>
              </ModeratorRoute>
            ),
          },
          {
            path: "reportedproducts",
            element: (
              <ModeratorRoute>
                <ReportedProducts></ReportedProducts>
              </ModeratorRoute>
            ),
          },
        ],
      },
    ],
  },
]);
