
import { Container } from 'react-bootstrap'
import Galeria from '../components/MainPage/Galeria'
import MainNavbar from '../components/MainNavbar'
import Footer from '../components/Footer'
import '../styles/style.css'
import Donaciones from '../components/MainPage/Donaciones'
import AreasDeTrabajo from '../components/MainPage/AreasDeTrabajoCard'
import EstudiosCard from '../components/MainPage/EstudiosCard'


const MainPage
 = () => {
  return (
    <>
        <MainNavbar />

        <Container className="my-4">
            <Galeria/>
        </Container>

        <EstudiosCard/>

        <AreasDeTrabajo/>

        <Donaciones/>

        <Footer />  

    </>
  )
}

export default MainPage
