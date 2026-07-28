import Footer from "../components/Footer"
import MainNavbar from "../components/MainNavbar"
import NovedadesCard from "../components/Novedades/NovedadesCard"

const NovedadesPage = () => {
  return (
    <>
    <MainNavbar/>

      <div className="sn-root">
        <section className="sn-hero">
          <h1>Novedades</h1>
        </section>
      </div>

      <NovedadesCard/>

    <Footer/>
    </>
  )
}

export default NovedadesPage