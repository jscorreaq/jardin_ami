import React from 'react'

export default function Form() {
  return (
    <>  
         {/* <!-- Begin Page Content --> */}
                <div className="container-fluid">

                    {/* <!-- Page Heading --> */}
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                        <a href="listado-pro.html" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                            <i className="fas fa-list fa-sm text-white-50"></i> Listado </a>
                    </div>

                    {/* <!-- Content Row --> */}
                    <div className="row">
                        <div className="col-6">
                            <form>
                          
                                {/* <!-- Text input --> */}
                                <div data-mdb-input-init className="form-outline mb-4">
                                    <select id="productos-select" className="form-select form-control">
                                        <option selected>Seleccionar un producto</option>
                                        <option value="Hamburguesa">Hambruguesa</option>
                                        <option value="Picada">Picada</option>
                                        <option value="Pasta">Pasta</option>
                                        <option value="Perro">Perro</option>
                                        <option value="Sanchipapa">Sanchipapa</option>
                                        <option value="Chuzo">Chuzo</option>
                                        <option value="Pizza">Pizza</option>
                                        <option value="Pollo">Pollo</option>
                                        <option value="Tacos">Tacos</option>
                                        <option value="Burrito">Burrito</option>
                                      </select>
                                  <label className="form-label" for="form6Example3">Producto</label>
                                </div>
                              
                                {/* <!-- Email input --> */}
                                <div data-mdb-input-init className="form-outline mb-4">
                                  <input type="number" id="precio-pro" className="form-control" />
                                  <label className="form-label" for="form6Example5">Precio</label>
                                </div>
    
                                {/* <!-- Number input --> */}
                                <div data-mdb-input-init className="form-outline mb-4">
                                  <input type="number" id="form6Example6" className="form-control" />
                                  <label className="form-label" for="form6Example6">Stock</label>
                                </div>
                              
                                {/* <!-- Message input --> */}
                                <div data-mdb-input-init className="form-outline mb-4">
                                  <textarea className="form-control" id="form6Example7" rows="4"></textarea>
                                  <label className="form-label" for="form6Example7">Descripcion</label>
                                </div>
                            
                              
                                {/* <!-- Submit button --> */}
                                <button data-mdb-ripple-init type="button" className="btn btn-primary btn-block mb-4">Crear Producto</button>
                            </form>
                        </div>
                        <div className="col-5">
                            <img id="imagen-pro" src="https://m.media-amazon.com/images/I/61XV8PihCwL._SY250_.jpg" className="img-fluid" alt=""/>
                        </div>
                        
                      
                    </div>

                </div>
                {/* <!-- /.container-fluid --> */}
    </>
  )
}
