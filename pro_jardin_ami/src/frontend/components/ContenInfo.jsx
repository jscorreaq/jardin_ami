import React from 'react'
import { Carousel } from 'react-bootstrap'

export default function ContenInfo() {
  return (
    <div>
      <section id="content-info" className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="fw-bold">Sobre Nosotros</h2>
              <p className="text-muted">En AMI brindamos un ambiente seguro, divertido y educativo para el desarrollo integral
                de los niños. Nuestro equipo está conformado por profesionales apasionados por la educación
                infantil.</p>
              <div className="row">
                <div className="col-12 col-sm-6">
                  <h2>✅ Educación Inicial</h2>
                  <p>Programas educativos adaptados a cada etapa del desarrollo infantil.</p>
                </div>
                <div className="col-12 col-sm-6">
                  <h2>🌍 Alimentación Saludable</h2>
                  <p>Menús balanceados y supervisados por nutricionistas para el bienestar
                    de los niños.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <Carousel>
                <Carousel.Item>
                  <img src="/imagenes/estudiantes.jpg" className="d-block w-100" alt="Estudiantes jugando" />
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src="/imagenes/kids.jpg" className="d-block w-100" alt="Actividades recreativas" />
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src="/imagenes/kids2.jpg" className="d-block w-100" alt="Clase de arte" />
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src="/imagenes/logo.png" className="d-block w-100" alt="Clase de música" />
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
