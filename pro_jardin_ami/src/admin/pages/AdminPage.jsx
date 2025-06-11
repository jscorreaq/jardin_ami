import { useAuth } from "../../contex/AuthContext"


export default function AdminPage() {
  let { user } = useAuth()
  return (
    <div>
      <h1>Bienvenido al Panel de Administración</h1>
      <p>{user.name}</p>
    </div>
  )
}
