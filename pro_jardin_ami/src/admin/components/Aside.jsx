import { Link } from "react-router-dom"
import { linksNavegates } from "../../Components/common/getLinksNavegates"
import { use, useState } from "react"
import { useAuth } from "../../contex/AuthContext"

export default function Aside() {
    let { user } = useAuth()
    let role = user.rol;
    let roleRoutes = role ? [...linksNavegates[role], ...linksNavegates.all] : [];


    let [openSubMenu, setOpenSubMenu] = useState(null)
    let toggleMenu = (label)=> {
        setOpenSubMenu(openSubMenu === label ? null : label)
        }

  return (
    <div>
      
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to={"/dashboard"}>">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">Jardin AMI</div>
            </Link>
            <hr className="sidebar-divider my-0"/>
            <li className="nav-item active">
                <Link className="nav-link" to={"/dashboard"}>
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></Link>
            </li>

            <hr className="sidebar-divider"/>

            <div className="sidebar-heading">
                MODULOS
            </div>

            {/* Nav Item - Pages Collapse Menu */}

            {
                roleRoutes.map((link, index)=> link.children ? (
                    <li className="nav-item" key={index}>
                        <button onClick={()=> toggleMenu(link.label)}
                         className="nav-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" 
                        aria-expanded="true" aria-controls="collapseTwo">
                            <i className={link.icon}></i>
                            <span>{link.label}</span>
                        </button>
                    <div id="collapseTwo" className={`collapse ${openSubMenu === link.label ? "show":""}` } aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Acciones:</h6>
                                {
                                    link.children.map((subLink, subIndex) => (
                                        <Link className="collapse-item" to={subLink.path} key={subIndex}>
                                            {subLink.label}
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                    </li>
                ) 
                : (
                    <li className="nav-item" key={index}>
                        <Link className="nav-link " to={link.path}>
                            <i className={link.icon}></i>
                            <span>{link.label}</span>
                        </Link>
                  </li>
                ))
            }

            


            <hr className="sidebar-divider"/>
  
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>

        </ul>
    </div>
  )
}
