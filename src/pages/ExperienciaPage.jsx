import React from 'react'

export const ExperienciaPage = () => {
  const experiencia={
   experiencia1:'Lideré el desarrollo de sistemas de gestión empresarial, utilizando tecnologías de vanguardia como Python, Django y PostgreSQL. ',
   experiencia2:'Diseñé y desarrollé aplicaciones móviles, utilizando frameworks como React. ',
  }  
  return (
    <>
    
    <div className='container mt-4'>
    <div className='row'>
      <div className='col d-flex flex-column align-items-center'>
        <div className="d-flex align-items-center mb-3">
          <p className="mb-0">{experiencia.experiencia1}</p>
        </div>
        <div className="d-flex align-items-center mb-3">
          <p className="mb-0">{experiencia.experiencia2}</p>
        </div>
      </div>
    </div>
  </div>
    
    </>
    
  )
}
