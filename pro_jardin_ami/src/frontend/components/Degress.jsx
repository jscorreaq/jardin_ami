import React from 'react'

export default function Degress() {
  return (
    <div>
      <section id="degrees" className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="bg-danger bg-opacity-75 text-white p-4 rounded">
                <h3>Programas Educativos</h3>
                <hr className="border-3 border border-light" />
                <ul className="list-unstyled">
                  <li>
                    <h5>Maternal</h5>
                    <p>Programa especializado para bebés de 6 meses a 2 años, enfocado en el desarrollo temprano.</p>
                  </li>
                  <li>
                    <h5>Párvulos</h5>
                    <p>Educación inicial para niños de 2 a 3 años, con énfasis en el desarrollo social y motor.</p>
                  </li>
                  <li>
                    <h5>Pre-jardín</h5>
                    <p>Programa para niños de 3 a 4 años, preparándolos para su ingreso al jardín infantil.</p>
                  </li>
                  <li>
                    <h5>Certificaciones</h5>
                    <p>Programas especializados en música, arte y desarrollo psicomotor.</p>
                  </li>
                  <li>
                    <h5>Actividades Extra</h5>
                    <p>Clases de natación, música, arte y estimulación temprana.</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-8">
              <h3>Programas y Servicios Educativos</h3>
              <p className="mb-5">En nuestra guardería ofrecemos una educación integral y personalizada, enfocada en el desarrollo físico, emocional y cognitivo de cada niño. Nuestros programas están diseñados para estimular la creatividad, la curiosidad y el amor por el aprendizaje desde los primeros años.</p>
              <div className="row">
                <div className="col-6">
                  <h5>🎨 Desarrollo Artístico</h5>
                  <p>Programa de arte y creatividad que fomenta la expresión personal y el desarrollo de habilidades motoras finas a través de diferentes técnicas artísticas.</p>
                </div>
                <div className="col-6">
                  <h5>🎵 Música y Movimiento</h5>
                  <p>Clases de música y expresión corporal que estimulan el desarrollo auditivo y la coordinación motora de los niños.</p>
                </div>
                <div className="col-6">
                  <h5>🧩 Estimulación Temprana</h5>
                  <p>Programa diseñado para potenciar el desarrollo cognitivo, social y emocional de los niños desde sus primeros meses.</p>
                </div>
                <div className="col-6">
                  <h5>🌱 Educación Ambiental</h5>
                  <p>Actividades que fomentan el amor por la naturaleza y enseñan sobre el cuidado del medio ambiente.</p>
                </div>
                <div className="col-6">
                  <h5>📚 Lectura y Lenguaje</h5>
                  <p>Programa de desarrollo del lenguaje y fomento a la lectura a través de cuentos y actividades lúdicas.</p>
                </div>
                <div className="col-6">
                  <h5>🤝 Desarrollo Social</h5>
                  <p>Actividades grupales que promueven la socialización, el respeto y la empatía entre los niños.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
