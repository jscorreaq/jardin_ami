import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../../contex/AuthContext";
import LoadingSpinner from "../common/loadingSpinner";
  export default function RoleRoutes({allowedRoles}) {
      let {user, loading} = useAuth(); //variable que contiene la info del usuario
      console.log("Loading state:", loading); // Added console log for loading state
      console.log("User:", user); // Added console log for user state
  
      if(loading){
          return <LoadingSpinner />
}

    //si no hay usuario autenticado, redirige al login 
    if(!user){
        return <Navigate to="/Login" />
    }

    //si el usuario no tiene un rol permitido, redirige al home
    if(!allowedRoles.includes(user.rol)){
        return <Navigate to="/" replace/>
    }
      //usuario permitido puede continuar
      return <Outlet />
  }