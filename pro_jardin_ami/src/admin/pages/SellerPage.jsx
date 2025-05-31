import { useAuth } from "../../contex/AuthContext"
import Aside from "../components/Aside"
import Content from "../components/Content"



export default function SellerPage() {
    let {user} = useAuth()
  return (
     <div id="page-top"> 
          {/* <!-- Page Wrapper --> */}
          <div id="wrapper">
                <Aside />
                <Content />
                {/* <h1>Bienvenido al Panel de Administradores</h1>
                <p>{user.rol} {user.username}</p> */}
            </div> 
        </div>    
  )
}
