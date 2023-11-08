import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/Error/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddJob from "../Pages/AddJob/AddJob";
import Home from "../Pages/Home/Home";
import PrivateRoute from "../Providers/PrivateRoute";
import MyPostedJob from "../Pages/MyPostedJob/MyPostedJob";
import JobDetails from "../Pages/JobDetails/JobDetails";
import UpdatedPage from "../Pages/UpdatedPage/UpdatedPage";
import MyBids from "../Pages/MyBids/MyBids";
import BidRequest from "../Pages/BidRequest/BidRequest";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add-job",
        element: (
          <PrivateRoute>
            <AddJob />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-posted-job",
        element: (
          <PrivateRoute>
            <MyPostedJob />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-bids",
        element: (
          <PrivateRoute>
            <MyBids />
          </PrivateRoute>
        ),
      },
      {
        path: "/bid-requests",
        element: (
          <PrivateRoute>
            <BidRequest />
          </PrivateRoute>
        ),
      },
      {
        path: "/job-details/:id",
        element: (
          <PrivateRoute>
            <JobDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/postedJob/${params.id}`),
      },
      {
        path: "/update-job/:id",
        element: (
          <PrivateRoute>
            <UpdatedPage />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/postedJob/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <Register />,
      },
    ],
  },
]);

export default Routers;
