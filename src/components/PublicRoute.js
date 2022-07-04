import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PublicRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();

  // return !currentUser ? (
  //   <Route {...rest}>{(props) => <Component {...props} />}</Route>
  // ) : (
  //   <Navigate to="/" />
  // );

  return !currentUser ? <Component /> : <Navigate to="/" />;
}
