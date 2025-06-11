import { useAuth } from "../../contex/AuthContext"


export default function CostumerPage() {
  let { user } = useAuth()
  return (
    <div>
      <h1>Bienvenido al Panel de Padres de Familia</h1>
      <p>{user.name}</p>
    </div>
  )
}