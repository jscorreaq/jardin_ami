import { createContext, useContext, useState, useEffect, use } from "react"

const AuthProvider = createContext()

export default function AuthContext( {children} ) {
  let [user, setUser] = useState(null)
  let [loading, setLoading] = useState(true)

  useEffect(() => {
    //verificar si hay un usuario en localStorage
        let storedUser = localStorage.getItem("userData")
        if (storedUser) {
        setUser(JSON.parse(storedUser))
        }
        setLoading(false)
    }, [])
    // Función para iniciar sesión
    function login(forUser) {
      setUser(forUser)
      // Guardar el usuario en localStorage
      localStorage.setItem("userData", JSON.stringify(userData))
    }

    // Función para cerrar sesión
    function logout() {
      setUser(null)
      // Eliminar el usuario de localStorage
      localStorage.removeItem("userData")
    }

    return (
        <AuthProvider.Provider value={{  login, logout, user, loading }}>
            {children}
        </AuthProvider.Provider>
  )
}

//crear un propio hook, para usar el contexto en cualquier componente
export function useAuth() {
  return useContext(AuthProvider)
}
