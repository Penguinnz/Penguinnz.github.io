import { BookMarked, Leaf, ShieldAlert, Siren } from "lucide-react"
import Footer from "../../components/Footer"
import InformeLaboresTabs from "./InformeLaboresTabs"
import MainNavbar from "../../components/MainNavbar"
import FadeIn from "../../styles/FadeIn"
import "../../styles/style.css"

const acciones = [
  {
    icono: <Leaf/>,
    titulo: "Cuidado de la Creación",
    desc: "Participación activa en REMAM y el Programa Bandera Azul Ecológica en la categoría eclesial, con el modelo Comunidades Laudato si'.",
  },
  {
    icono: <ShieldAlert/>,
    titulo: "Gestión del Riesgo",
    desc: "Representación en la Mesa de Gestión del Riesgo de Desastres (MGRD) y en el Comité Asesor Técnico Psicosocial (CATAPS).",
  },
  {
    icono: <Siren/>,
    titulo: "Atención de Emergencias",
    desc: "Respuesta a la emergencia por lluvias de noviembre 2024 en cuatro diócesis, con apoyo de CRS y Cáritas Chile.",
  },
  {
    icono: <BookMarked/>,
    titulo: "Formación técnica",
    desc: "Capacitaciones en gestión del riesgo mediante el programa Empower de CRS, incluyendo transferencias monetarias a familias afectadas.",
  },
]

const EcologiaPage = () => {
  return (
    <div>
      <MainNavbar />

      <div className="sn-root">
        <section
          className="sn-hero"
          style={{
            "--hero-image":
              "url(https://images.unsplash.com/photo-1448375240586-882707db888b?w=1400&q=60)",
          }}
        >
          <h1>
            Ecología <em>Integral</em>
          </h1>
          <p className="sn-hero-sub">
            Compromiso con el cuidado de la creación, la protección del
            medioambiente y la gestión del riesgo como parte integral del
            desarrollo humano sostenible.
          </p>
          <div className="sn-hero-scroll">Informe 2024–2025</div>
        </section>
      </div>

      
      <section className="sn-section obj-section">
        <div className="obj-inner">
          <FadeIn>

            <blockquote>
              La encíclica Laudato si' constituye el documento marco que sintetiza la
              trayectoria del Magisterio Social de la Iglesia relativo al medioambiente.
              El compromiso de la Pastoral Social-Cáritas abarca tanto la protección y
              recuperación del medioambiente como la gestión del riesgo en todas sus
              fases, con especial dedicación a la atención solidaria de las personas
              afectadas por emergencias.
            </blockquote>
          </FadeIn>
        </div>
      </section>

      
      <section className="sn-section valores-bg">
        <div className="sn-inner">
          <FadeIn>
            <div className="sn-tag">Líneas de acción</div>
            <h2 className="sn-title">
              Cómo <em>Actuamos</em>
            </h2>
          </FadeIn>
          <div className="valores-grid" style={{ marginTop: 40 }}>
            {acciones.map((a, i) => (
              <FadeIn key={a.titulo} delay={i * 0.08}>
                <div className="valor-card" style={{ "--vc": "#2D6A4F" }}>
                  <span className="valor-icon">{a.icono}</span>
                  <h3>{a.titulo}</h3>
                  <p>{a.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <InformeLaboresTabs eje="ecologia" />

      <Footer />
    </div>
  )
}

export default EcologiaPage