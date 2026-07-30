import Footer from "../components/Footer"
import MainNavbar from "../components/MainNavbar"
import NovedadesCard from "../components/Novedades/NovedadesCard"

const NovedadesPage = () => {
  return (
    <>
    <MainNavbar/>

      <div className="sn-root">
        <section className="sn-hero">
          <h1><em>Novedades</em></h1>
          <p className="sn-hero-sub">
            Noticias de Cáritas Costa Rica y de la red regional e
            internacional de Cáritas.
          </p>
        </section>
      </div>

      <NovedadesCard/>

    <Footer/>
    </>
  )
}

export default NovedadesPage