import Footer from "../../components/Footer"
import EstadisticasStrip from "../../components/HambrePobreza/EstadisticasStrip"
import Habitats from "../../components/HambrePobreza/Habitats"
import Objetivo from "../../components/HambrePobreza/Objetivo"
import Regiones from "../../components/HambrePobreza/Regiones"
import MainNavbar from "../../components/MainNavbar"
import '../../styles/style.css'

const HambrePobrezaPage = () => {
  return (
    <>
    <MainNavbar/>

    <div className="sn-root">
    <section className="sn-hero"
    style={{'--hero-image': 'url(https://th.bing.com/th/id/R.f298b1051719391ab6a43e4cd344694a?rik=lLRDgAi6md4L1A&riu=http%3a%2f%2fwww.aciprensa.com%2fimagespp%2fDonar_Pixabay_141220.jpg&ehk=o84KhiGsMt7TrUgj0cKelWl36pNTsFag%2btcEt8zgstY%3d&risl=&pid=ImgRaw&r=0)'}}>
      <h1> 
        Hambre y <em>Pobreza</em>
      </h1>

      <p className="sn-hero-sub">
        Trabajamos para combatir la inseguridad alimentaria y promover condiciones de vida dignas para las familias más vulnerables de Costa Rica.
      </p>
    </section>
    </div>
    
    <Objetivo/>

    <EstadisticasStrip/>

    <Regiones/>

    <Habitats/>

    <Footer/>
    
    </>
  )
}

export default HambrePobrezaPage