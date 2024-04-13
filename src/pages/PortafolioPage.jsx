
import appPeliculas2 from '../assets/appPeliculas2.png'
import juegoPreguntas from '../assets/juegoPreguntas.png'
import blog from '../assets/blog.png'


export const PortafolioPage = () => {
  const portafolio={
    proyecto1:'En Este proyecto academico se realizo una aplicacion de peliculas en el area de movil I, con el framework de vue',
    proyecto2:'En Este proyecto fue realizado una app de juegos de preguntas en el area de movil I con vue',
    proyecto3:'En Este proyecto academico se realizo un blog de peliculas en el area de movil I '

  }
  return (
   <>
  
              
              
      <div className='container mt-4'>
        <div className='row'>
          <div className='col d-flex flex-column align-items-center mb-5'>
            <img src={appPeliculas2} alt="educa" className="rounded me-2" style={{ width: 600, height: 300 }} />
            <p className="mb-0">{portafolio.proyecto1}</p>
          </div>
          <div className='col d-flex flex-column align-items-center mb-5'>
            <img src={juegoPreguntas} alt="educación" className="rounded me-2" style={{ width: 600, height: 300 }} />
            <p className="mb-0">{portafolio.proyecto2}</p>
          </div>
          <div className='col d-flex flex-column align-items-center mb-5'>
            <img src={blog} alt="educación" className="rounded me-2" style={{ width: 600, height: 300 }} />
            <p className="mb-0">{portafolio.proyecto3}</p>
          </div>
        </div>
      </div>
    
   </>
  )
}
