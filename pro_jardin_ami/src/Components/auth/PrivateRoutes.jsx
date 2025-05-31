import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from "../../contex/AuthContext";
import LoadingSpinner from '../common/loadingSpinner';


export default function PrivateRoutes() {
    let {user, loading} = useAuth(); // variable que contiene la info del usuario
    if(loading) {
        return <LoadingSpinner/>
    }
    // si no hay usuario autenticado, redirige al login
    if(!user) {
        return <Navigate to="/Login" />
    }
    // si hay usuario autenticado, puede continuar
    return <Outlet />
}
