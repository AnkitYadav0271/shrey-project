import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const ProtectedRoute = ({ children }) => {
  const { principal } = useAuth();
  const location = useLocation();

  if (!principal) {
    return <Navigate to="/principle-login" state={{ from: location }} replace />;
  }

  return children;
};
