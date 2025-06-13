import React from 'react'

export default function Hero() {
  return (
    <div className="text-white text-center py-5 mb-4" style={{
      "background-image": "url('/imagenes/logo2.jpg')",
      "background-size": "cover",
      "background-position": "center",
      "background-repeat": "no-repeat",
      "min-height": "600px",
      "display": "flex",
      "align-items": "center",
      "justify-content": "center",
      "position": "relative" // Añadido para el efecto de difuminado
    }}>
      <div style={{
        "position": "absolute",
        "top": 0,
        "left": 0,
        "right": 0,
        "bottom": 0,
        "backdrop-filter": "blur(2px)",
        "background-color": "rgba(0, 0, 0, 0.3)" // Añade un overlay semi-transparente
      }}></div>
      <div className="container" style={{ "position": "relative", "z-index": 1 }}>
        <h1 className="display-4 fw-bold">¡Bienvenidos pequeños soñadores!</h1>
        <p className="lead fs-3">Un lugar donde los niños crecen con amor, motivación e inclusión.</p>
      </div>
    </div>
  )
}