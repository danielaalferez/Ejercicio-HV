import perfil from '../assets/perfil.png'

export const PefilPage = () => {
  return (
    <>
    
    <div className="text-center"style={{backgroundColor:'#f0f0f0'}}>
      <img src={perfil} className="rounted-image" width={200}  />
    </div>
    <div className="text-center mb-4" style={{ fontFamily: 'Arial, sans-serif', fontSize: '18px', lineHeight: '1.5',backgroundColor:'#f0f0f0'}}>
            <h5 style={{ fontWeight: 'bold', color: '#333' }}>Soy tecnóloga de redes y sistemas </h5>
            <h5 >competente con una sólida formación en la coordinación y supervisión de</h5>
            <h5>actividades relacionadas con el desarrollo de software y la implementación de redes de comunicación.</h5>
            <h5 style={{ fontStyle: 'italic', color: '#666' }}>Tengo la capacidad para estructurar, evaluar y optimizar procesos tecnológicos en ambas áreas.</h5>
        </div>
    <div style={{ backgroundColor: 'turquoise', color: 'white', padding: '5px' }}></div>

  
    </>
    
  )
}
