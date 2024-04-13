
import {Routes, Route} from 'react-router-dom'
import { PefilPage } from './pages/PerfilPage'
import { ContactoPage } from './pages/ContactoPage'
import { FormacionPage} from './pages/FormacionPage'
import { ExperienciaPage} from './pages/ExperienciaPage'
import { PortafolioPage} from './pages/PortafolioPage'
import { NavBarApp } from './components/NavBarApp'

export const App = () => {
  return (
   <>
   <NavBarApp></NavBarApp>
   <Routes>
    <Route path='/' element={<PefilPage></PefilPage>}> </Route>
    <Route path='contacto' element={<ContactoPage></ContactoPage>}> </Route>
    <Route path='formacion' element={<FormacionPage></FormacionPage>}> </Route>
    <Route path='experiencia' element={<ExperienciaPage></ExperienciaPage>}> </Route>
    <Route path='portafolio' element={<PortafolioPage></PortafolioPage>}> </Route>
    
   </Routes>
   </>
  )
}
