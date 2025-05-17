import React from 'react'

export default function Body() {
    return (
        <>
            {/* Banner */}
            <div className="text-white text-center py-5 mb-4" style={{ "background-color": " #2d8daa" }}>
                <div className="container">
                    <h1 className="display-4">¡Bienvenidos pequeños soñadores!</h1>
                    <p className="lead">Un lugar donde los niños crecen con amor, motivación e inclusión.</p>
                </div>
            </div>

            {/* Sección de Información  */}
            <section id="info" className="container mb-5">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <blockquote className="imgur-embed-pub" lang="en" data-id="a/LtJlvdP" data-context="false"><a
                            href="//imgur.com/a/LtJlvdP"></a></blockquote>
                        <script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>
                    </div>
                    <div className="col-md-6">
                        <h2>Sobre Nosotros</h2>
                        <p>En AMI brindamos un ambiente seguro, divertido y educativo para el desarrollo integral
                            de los niños. Nuestro equipo está conformado por profesionales apasionados por la educación
                            infantil.</p>
                    </div>
                </div>
            </section>

            {/* Sección de Servicios */}
            <section id="servicios" className="bg-light py-5 mb-5">
                <div className="container">
                    <h2 className="text-center mb-4">Nuestros Servicios</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">Educación Inicial</h5>
                                    <p className="card-text">Programas educativos adaptados a cada etapa del desarrollo infantil.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">Actividades Lúdicas</h5>
                                    <p className="card-text">Juegos, talleres de arte y música para estimular la creatividad y el
                                        aprendizaje.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">Alimentación Saludable</h5>
                                    <p className="card-text">Menús balanceados y supervisados por nutricionistas para el bienestar
                                        de los niños.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
