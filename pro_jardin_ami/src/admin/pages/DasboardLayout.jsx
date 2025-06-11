import Content from "../components/Content"
import Aside from "../components/Aside" 
import { Outlet } from "react-router-dom"


export default function DasboardLayout() {
  return (
    <div id="page-top"> 
          {/* <!-- Page Wrapper --> */}
          <div id="wrapper">
            
            <Aside />
            {/* <!-- Contenido que cambia por ruta --> */}
            <Content>
                <Outlet />
            </Content>
           
          </div> 
        </div>
  )
}
