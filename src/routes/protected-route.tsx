import { Navigate } from "react-router-dom";
import { auth } from "../firebase";
import { ReactElement, useEffect, useState } from "react";
import LoadingScreen from "../components/Loader/LoadingScreen";

interface ProtectedRouteProps {
  element: ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        setIsAuthenticated(!!user);
        setIsLoading(false);
      });

      return () => unsubscribe();
    }, []);

    if (isLoading) {
      return <LoadingScreen />;
    }

    return isAuthenticated ? element : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
