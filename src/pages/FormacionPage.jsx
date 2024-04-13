import React from 'react'

import bachiller from '../assets/bachiller.jpg'
import tecnol from '../assets/tecnol.png'
import fecha from '../assets/fecha.png'

export const FormacionPage = () => {
  const formacion={
    tecnologia:'Tecnologia en gestion de redes y sistemas teleinformaticos',
    instituto:'Instituto Superior de Eduacion Rural-Iser',
    fecha:'marzo 2021',
    
    bachiller:'Bachiller Academico',
    institucion2:'Institucion Educativa San Luis',
    fecha2:'Enero 2014'
  
  }
    return (
      <>
       <div className='container mt-4'>
        <div className='row'>
          <div className='col d-flex flex-column align-items-center'>
            <div className="d-flex align-items-center mb-3">
              <img src={bachiller} alt="Teléfono" className="rounded me-2" style={{ width: 30, height: 30 }} />
              <p className="mb-0">{formacion.tecnologia}</p>
            </div>
            <div className="d-flex align-items-center mb-3">
              <img src={tecnol} alt="Teléfono" className="rounded me-2" style={{ width: 30, height: 30 }} />
              <p className="mb-0">{formacion.instituto}</p>
            </div>
            <div className="d-flex align-items-center mb-3">
              <img src={fecha} alt="Correo" className="rounded me-2" style={{ width: 30, height: 30 }} />
              <p className="mb-0">{formacion.fecha}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='container mt-4'>
        <div className='row'>
          <div className='col d-flex flex-column align-items-center'>
            <div className="d-flex align-items-center mb-3">
              <img src={bachiller} alt="Teléfono" className="rounded me-2" style={{ width: 30, height: 30 }} />
              <p className="mb-0">{formacion.bachiller}</p>
            </div>
            <div className="d-flex align-items-center mb-3">
              <img src={tecnol} alt="Teléfono" className="rounded me-2" style={{ width: 30, height: 30 }} />
              <p className="mb-0">{formacion.institucion2}</p>
            </div>
            <div className="d-flex align-items-center mb-3">
              <img src={fecha} alt="Correo" className="rounded me-2" style={{ width: 30, height: 30 }} />
              <p className="mb-0">{formacion.fecha2}</p>
            </div>
          </div>
        </div>
      </div>
      
      </>
  )
}
