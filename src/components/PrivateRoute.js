import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();

  return currentUser ? <Component /> : <Navigate to="/login" />;

  // return currentUser ? <Component {...props} /> : <Navigate to="/login" />;
}
