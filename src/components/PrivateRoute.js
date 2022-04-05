import { Navigate } from "react-router";
import { useAuth } from "../context";

const PrivateRoute = ({ children }) => {
  const {
    auth: { isAuth },
  } = useAuth();
  return isAuth ? children : <Navigate to="/login" />;
};

export { PrivateRoute };
