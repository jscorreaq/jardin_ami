// File: jardin_ami/pro_jardin_ami/src/contex/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react"; // Eliminado 'use' ya que no es un hook estándar aquí

const AuthProvider = createContext();

export default function AuthContext({ children }) {
  let [user, setUser] = useState(null);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    // verificar si hay datos de autenticación en localStorage
    let storedAuthData = localStorage.getItem("authData"); // Cambiado el nombre de la clave
    if (storedAuthData) {
      try {
        const parsedAuthData = JSON.parse(storedAuthData);
        // Asumimos que el objeto guardado tiene una propiedad 'user'
        setUser(parsedAuthData.user);
        // Si necesitas el token en el contexto, podrías guardarlo en otro estado aquí
        // setToken(parsedAuthData.token);
      } catch (e) {
        console.error("Failed to parse stored auth data:", e);
        // Limpiar datos inválidos si la parseo falla
        localStorage.removeItem("authData");
      }
    }
    setLoading(false);
  }, []);

  // Función para iniciar sesión
  // Espera recibir un objeto con los datos de autenticación (ej: { user: {...}, token: "..." })
  function login(authData) {
    setUser(authData.user); // Establecer el estado del usuario desde la propiedad 'user'
    // Guardar el objeto completo de datos de autenticación en localStorage
    localStorage.setItem("authData", JSON.stringify(authData));
    // Si necesitas el token en el estado del contexto, establécelo aquí
    // setToken(authData.token);
  }

  // Función para cerrar sesión
  function logout() {
    setUser(null);
    // setToken(null); // Si el token está en estado
    // Eliminar los datos de autenticación de localStorage
    localStorage.removeItem("authData");
  }

  return (
    // Exponer el token en el value si es necesario en otros componentes
    <AuthProvider.Provider value={{ login, logout, user, loading /*, token */ }}>
      {children}
    </AuthProvider.Provider>
  );
}

//crear un propio hook, para usar el contexto en cualquier componente
export function useAuth() {
  return useContext(AuthProvider);
}
