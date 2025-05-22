import React from 'react';


export default function Menu() {
  return (
    <>
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
             {/* <a className="navbar-brand fw-bold text-primary" href="#"><img src="imagenes/logo.png" style={{width:"60px"}} />AMI</a> */}
            <a className="navbar-brand" style={{"color":"#F45B69"}} href="#"><img src="imagenes/logo.png" style={{width:"60px"}} />  JARDIN INFANTIL AMI</a>
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

 <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
    <div class="container">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link active" href="#hero">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="#content-info">About Us</a></li>
          <li class="nav-item"><a class="nav-link" href="#degrees">Academics</a></li>
          <li class="nav-item"><a class="nav-link" href="#info">Faculty</a></li>
          <li class="nav-item"><a class="nav-link" href="#footer">Contact</a></li>
          <li class="nav-item"><a class="nav-link btn btn-primary text-white" href="#footer">Campus Virtual</a></li>
        </ul>
      </div>
    </div>
  </nav>
