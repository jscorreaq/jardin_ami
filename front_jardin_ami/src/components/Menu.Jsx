import React from 'react';

export default function Menu() {
  return (
    <>
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" style={{"color":"#F45B69"}} href="#">Centro educativo AMI</a>
            <button className="navbar-toggler" style={{"color":"#F45B69"}} type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item"><a className="nav-link" href="#info">Información</a></li>
                    <li className="nav-item"><a className="nav-link" href="#servicios">Servicios</a></li>
                    <li className="nav-item"><a className="nav-link" href="#contacto">Contacto</a></li>
                    <li className="nav-item"><a className="nav-link" href="#login">Iniciar sesión</a></li>
                </ul>
            </div>
        </div>
    </nav>
</div>
    </>
  )
}
