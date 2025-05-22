

export default function Footer() {
  return (
    <div>
        <footer id="footer" className="bg-black text-white py-4">
            <div className="container">
                  <div className="col-12 col-md-6 text-start">
                        <h1><img src="imagenes/logo.png" style={{"width":"80px"}}/> JARDIN AMI</h1>
                        <p className="text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo et doloribus officia cumque facilis quisquam.</p>
                        <ul className="list-unstyled">
                            <li><i className="fa-solid fa-location-dot"></i> Carrera 72 # 53 -12, Barrios Santa Maria - Antioquia</li>
                            <li><i className="fa-solid fa-phone"></i> (+57) 322-581-4260</li>
                            <li><i className="fa-solid fa-envelope"></i> jardininfantilamiitagui@gmail.com</li>
                        </ul>
                    </div>
            </div>
        <div className="container" style={{"color":"#F45B69"}} className="text-center py-3  bg-dark">
            <small>&copy; 2025 Jardín Infantil AMI. Todos los derechos reservados.</small>
        </div>
      </footer>
    </div>
  )
}
