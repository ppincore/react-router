import { Route, Navigate } from 'react-router-dom';

type TProtectedRoute = {
  isAllowed: boolean;
  redirectTo: string;
  [key: string]: unknown;
};

const ProtectedRoute = ({
  isAllowed,
  redirectTo = '/',
  ...props
}: TProtectedRoute) => {
  return isAllowed ? <Route {...props} /> : <Navigate to={redirectTo} />;
};

export default ProtectedRoute;
