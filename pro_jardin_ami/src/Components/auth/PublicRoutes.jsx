import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from "../../contex/AuthContext";
import LoadingSpinner from '../common/loadingSpinner';

export default function PublicRoutes() {
    let {user, loading} = useAuth(); // variable que contiene la info del usuario
    if (loading) {
        return <LoadingSpinner />;
    }
    
    if (user) {
        let redirectPath = user.rol=="admin" 
        ? "/dashboard/admin" :
        user.rol== "seller"
        ? "/dashboard/seller" :
        user.rol== "costumer"
        ? "/dashboard/costumer" : "/dashboard"
        return <Navigate to={redirectPath} replace  />;
    }
    // si no hay usuario autenticado, puede continuar
    return <Outlet />
}
