import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from "../../contex/AuthContext";
import LoadingSpinner from '../common/loadingSpinner';
import { useState, useEffect } from 'react';


export default function PrivateRoutes() {
    let {user, loading} = useAuth(); // variable que contiene la info del usuario
    let[spinner, setSpinner] = useState(true);
    // useEffect para simular un tiempo de carga
    useEffect (() => {
        let time = setTimeout(() => {
            setSpinner(false);
        }, 1000);
        return () => clearTimeout(time);
    }, []);
    if(loading || spinner) {
        return <LoadingSpinner/>
    }
    // si no hay usuario autenticado, redirige al login
    if(!user) {
        return <Navigate to="/Login" />
    }
    // si hay usuario autenticado, puede continuar
    return <Outlet />
}
