import { Flag, Globe, MapPin, Sprout } from "lucide-react"
import Footer from "../../components/Footer"
import InformeLaboresTabs from "./InformeLaboresTabs"
import MainNavbar from "../../components/MainNavbar"
import FadeIn from "../../styles/FadeIn"
import "../../styles/style.css"

const vinculos = [
  {
    icono: <Globe/>,
    titulo: "Cáritas Internationalis",
    desc: "Alineamiento con los estándares de gestión confederales y participación en equipos internacionales de identidad, IA y derechos humanos.",
  },
  {
    icono: <MapPin/>,
    titulo: "Región LAC",
    desc: "Presencia constante en los espacios de directores de la región de Latinoamérica y el Caribe, manteniendo vínculos institucionales construidos en el tiempo.",
  },
  {
    icono: <Sprout/>,
    titulo: "REMAM y CLAMOR",
    desc: "Trabajo articulado con redes eclesiales regionales que nacieron por iniciativa conjunta de Cáritas y el CELAM.",
  },
  {
    icono: <Flag/>,
    titulo: "Zona CAMEX",
    desc: "Coordinación de la zona CAMEX ejercida por Costa Rica durante el período; traspaso exitoso a Cáritas Honduras para el nuevo ciclo.",
  },
]

const ComunionPage = () => {
  return (
    <div>
      <MainNavbar />

      <div className="sn-root">
        <section
          className="sn-hero"
          style={{
            "--hero-image":
              "url(https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1400&q=60)",
          }}
        >
          <h1>
            Comunión con <em>Cáritas Internationalis</em>
          </h1>
          <p className="sn-hero-sub">
            Articulación regional y vínculos institucionales con la red mundial
            de Cáritas, en clave de sinodalidad, incidencia y compromiso con
            las realidades sociales de la región.
          </p>
          <div className="sn-hero-scroll">Informe 2024–2025</div>
        </section>
      </div>

      <section className="sn-section obj-section">
        <div className="obj-inner">
          <FadeIn>

            <blockquote>
              Costa Rica forma parte de la red mundial de Cáritas Internationalis,
              en plena armonía con el caminar de la Confederación tanto en el ámbito
              mundial como en el de la región de Latinoamérica y el Caribe. Esta
              comunión se expresa en el trabajo articulado con redes eclesiales que
              trascienden el ámbito específico de Cáritas, fortaleciendo procesos
              más amplios de sinodalidad e incidencia.
            </blockquote>
          </FadeIn>
        </div>
      </section>


      <section className="sn-section valores-bg">
        <div className="sn-inner">
          <FadeIn>
            <div className="sn-tag">Articulación internacional</div>
            <h2 className="sn-title">
              Nuestros <em>Vínculos</em>
            </h2>
          </FadeIn>
          <div className="valores-grid" style={{ marginTop: 40 }}>
            {vinculos.map((v, i) => (
              <FadeIn key={v.titulo} delay={i * 0.08}>
                <div className="valor-card" style={{ "--vc": "#7B2D8B" }}>
                  <span className="valor-icon">{v.icono}</span>
                  <h3>{v.titulo}</h3>
                  <p>{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <InformeLaboresTabs eje="comunionCI" />

      <Footer />
    </div>
  )
}

export default ComunionPage