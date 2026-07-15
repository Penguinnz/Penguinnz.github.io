import Footer from '../../components/Footer'
import AccesoEducacion from '../../components/Infancia/AccesoEducacion'
import AccesoTecnologia from '../../components/Infancia/AccesoTecnologia'
import InfanciaAcciones from '../../components/Infancia/InfanciaAcciones'
import InfanciaEntornoSocial from '../../components/Infancia/InfanciaEntornoSocial'
import InfanciaObjetivo from '../../components/Infancia/InfanciaObjetivo'
import PoblacionInfantilDescenso from '../../components/Infancia/PoblacionInfantilDescenso'
import MainNavbar from '../../components/MainNavbar'
import '../../styles/style.css'

const InfanciaPage = () => {
  return (
    <>
    <MainNavbar/>

    <div className="sn-root">
    <section className="sn-hero"
    style={{'--hero-image': 'url(https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1400&q=50)'}}>
      <h1> 
        <em>Infancia</em>
      </h1>

      <p className="sn-hero-sub">
        Trabajamos para garantizar que niños y niñas crezcan en entornos seguros, 
        con acceso a educación, protección, alimentación y oportunidades para desarrollar plenamente sus capacidades.
      </p>
    </section>
    </div>

    <InfanciaObjetivo/>

    <InfanciaAcciones/>

    <PoblacionInfantilDescenso/>

    <InfanciaEntornoSocial/>
    
    <AccesoEducacion/>

    <AccesoTecnologia/>

    <Footer/>

    </>
  )
}

export default InfanciaPage