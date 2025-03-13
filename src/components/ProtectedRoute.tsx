
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredUserType?: string | string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  requiredUserType 
}) => {
  const { user, profile, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
    </div>;
  }

  if (!user) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Check if specific user type is required
  if (requiredUserType && profile) {
    const allowedTypes = Array.isArray(requiredUserType) 
      ? requiredUserType 
      : [requiredUserType];
    
    if (!allowedTypes.includes(profile.user_type)) {
      // Redirect to appropriate dashboard based on user type
      if (profile.user_type === 'farmer') {
        return <Navigate to="/farmer-dashboard" replace />;
      } else if (profile.user_type === 'representative') {
        return <Navigate to="/rep-dashboard" replace />;
      } else {
        return <Navigate to="/marketplace" replace />;
      }
    }
  }

  return <>{children}</>;
};

export default ProtectedRoute;
