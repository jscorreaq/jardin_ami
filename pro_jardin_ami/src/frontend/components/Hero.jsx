import React from 'react'

export default function Hero() {
  return (

    //  <div className="text-white text-center py-5 mb-4" style={{"background-color":"#2d8daa"}}>
        <div className="text-white text-center py-5 mb-4" style={{
       "background-image": "url('/imagenes/logo2.jpg')", // Ruta a tu imagen de fondo
       "background-size": "cover", // Cubre todo el área del div
       "background-position": "center", // Centra la imagen
       "background-repeat": "no-repeat", // Evita que la imagen se repita
       "min-height": "600px", // Opcional: asegura una altura mínima para que la imagen sea visible
       "display": "flex", // Para centrar el contenido verticalmente
       "align-items": "center", // Centra el contenido verticalmente
       "justify-content": "center" // Centra el contenido horizontalmente   
       }}>  
        <div className="container">
            <h1 className="display-4">¡Bienvenidos pequeños soñadores!</h1>
            <p className="lead">Un lugar donde los niños crecen con amor, motivación e inclusión.</p>
        </div>
    </div>
  )
}
