import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import useModerator from "../Hooks/useModerator";

const ModeratorRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isModerator, isModeratorLoading] = useModerator();
  const location = useLocation();

  if (loading || isModeratorLoading) {
    return <progress className="progress w-full"></progress>;
  }
  if (user && isModerator) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default ModeratorRoute;
