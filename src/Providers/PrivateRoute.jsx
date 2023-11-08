import { Navigate, useLocation } from "react-router-dom";
import useAuthInfoHook from "../Hooks/useAuthInfoHook";
import gif from "../assets/tick.gif";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuthInfoHook();
  const location = useLocation();

  if (loading) {
    return (
      <div className="w-1/2 mx-auto text-center py-10">
        {/* <span className="loading loading-spinner loading-lg text-accent"></span> */}
        <img src={gif} alt="" />
      </div>
    );
  }
  if (user) {
    return children;
  }

  return <Navigate to="/login" state={location.pathname} replace />;
};

export default PrivateRoute;
