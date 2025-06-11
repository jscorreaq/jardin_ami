import { useAuth } from "../../contex/AuthContext"


export default function SellerPage() {
  let { user } = useAuth()
  return (
    <div>
      <h1>Bienvenido al Panel de Docentes</h1>
      <p>{user.name}</p>
    </div>
  )
}