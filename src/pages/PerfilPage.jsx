import React from "react"
import perfil from '../assets/perfil.png'

export const PefilPage = () => {
  return (
    <>
    <div style={{ backgroundColor: 'blue', color: 'white', padding: '10px' }}></div>
    <div className="text-center">
      <img src={perfil} className="rounted-image" width={200}  />
    </div>
    <div className="text-center">
      <h5>Soy tecnóloga de redes y sistemas, altamente competente con
          una sólida formación en la coordinación y supervisión de
          actividades relacionadas con el desarrollo de software y la
          implementación de redes de comunicación.Tengo la capacidad
          para estructurar, evaluar y optimizar procesos tecnológicos en
          ambas áreas.
      </h5>
    </div>
    <div style={{ backgroundColor: 'blue', color: 'white', padding: '10px' }}></div>

  
    </>
    
  )
}
