import React from 'react'

export default function Contact() {
    return (
        <>
            {/* Sección de Contacto */}
            <section id="contacto" className="container mb-5">
                <h2 className="text-center mb-4">Contáctanos</h2>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <form>
                            <div className="mb-3">
                                <label for="nombre" className="form-label">Nombre</label>
                                <input type="text" className="form-control" id="nombre" required />
                            </div>
                            <div className="mb-3">
                                <label for="email" className="form-label">Correo Electrónico</label>
                                <input type="email" className="form-control" id="email" required />
                            </div>
                            <div className="mb-3">
                                <label for="mensaje" className="form-label">Mensaje</label>
                                <textarea className="form-control" id="mensaje" rows="4" required></textarea>
                            </div>
                            <button type="submit" style={{ "background-color": " #FCAF58" }} className="btn btn-primary">Enviar</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
