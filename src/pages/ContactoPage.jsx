import React from 'react'
import nombre from '../assets/nombre.png'
import telefono from '../assets/telefono.png'
import correo from '../assets/correo.png'
import ubicacion from '../assets/ubicacion.png'

export const ContactoPage = () => {
const contacto={
  nombre:'Daniela Fernanda Alferez Edegua',
  telefono:'3132789121',
  correo:'danielaalferez23@gmail.com',
  ciudad:'Tame-Arauca'
}

  return (
    <>
    <div className='container mt-4'>
        <div className='row'>
          <div className='col d-flex flex-column align-items-center'>
            <div className="d-flex align-items-center mb-3">
              <img src={nombre} alt="Teléfono" className="rounded me-2" style={{ width: 30, height: 30 }} />
              <p className="mb-0">{contacto.nombre}</p>
            </div>
            <div className="d-flex align-items-center mb-3">
              <img src={telefono} alt="Teléfono" className="rounded me-2" style={{ width: 30, height: 30 }} />
              <p className="mb-0">{contacto.telefono}</p>
            </div>
            <div className="d-flex align-items-center mb-3">
              <img src={correo} alt="Correo" className="rounded me-2" style={{ width: 30, height: 30 }} />
              <p className="mb-0">{contacto.correo}</p>
            </div>
            <div className="d-flex align-items-center">
              <img src={ubicacion} alt="Ubicación" className="rounded me-2" style={{ width: 30, height: 30 }} />
              <p className="mb-0">{contacto.ciudad}</p>
            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}
