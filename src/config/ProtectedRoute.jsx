import { Navigate } from "react-router";
import useAuth from "../hook/useAuth";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? children : <Navigate to={"/login"} />;
};

export default ProtectedRoute;
