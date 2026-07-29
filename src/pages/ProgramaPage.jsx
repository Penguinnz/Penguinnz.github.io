import Footer from "../components/Footer"
import MainNavbar from "../components/MainNavbar"
import Videos from "../components/Programa/Videos"


const ProgramaPage = () => {
  return (
    <div>
        <MainNavbar/>

        <div className="sn-root">
        <section className="sn-hero">
          <h1>Programa <em>Somos Caritas</em></h1>
        </section>
      </div>

        <Videos/>

        <Footer/>
    </div>
  )
}

export default ProgramaPage
