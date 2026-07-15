import Footer from "../../components/Footer"
import MainNavbar from "../../components/MainNavbar"
import InformeLaboresTabs from "./InformeLaboresTabs"
import FadeIn from "../../styles/FadeIn"
import "../../styles/style.css"
import { HeartHandshake, Landmark, Scale, UsersRound } from "lucide-react"

const acciones = [
  {
    icono:  <UsersRound/>,
    titulo: "Movilidad Humana",
    desc: "Acompañamiento a personas migrantes y refugiadas en coordinación con ACNUR, OIM y el Servicio Jesuita para Migrantes.",
  },
  {
    icono:  <Scale/> ,
    titulo: "Justicia y Paz",
    desc: "Defensa de la dignidad humana y construcción de una cultura de paz mediante la reconciliación del tejido social.",
  },
  {
    icono: <Landmark/>,
    titulo: "Pastoral Penitenciaria",
    desc: "Presencia y acompañamiento espiritual en centros penales de las 8 diócesis del país.",
  },
  {
    icono: <HeartHandshake/>,
    titulo: "Incidencia Regional",
    desc: "Participación en CONATT, equipo regional de DDHH y observación de procesos electorales en Latinoamérica.",
  },
]

const DerechosHumanosPage = () => {
  return (
    <div>
      <MainNavbar />

      <div className="sn-root">
        <section
          className="sn-hero"
          style={{
            "--hero-image":
              "url(https://images.unsplash.com/photo-1521790945508-bf2a36314e85?w=1400&q=60)",
          }}
        >
          <h1>
            Derechos Humanos, <em>Justicia y Paz</em>
          </h1>
          <p className="sn-hero-sub">
            Compromiso con el cuidado de la vida humana desde la defensa y
            promoción de los derechos, la justicia en las relaciones sociales y
            la construcción de una cultura de paz.
          </p>
          <div className="sn-hero-scroll">Informe 2024–2025</div>
        </section>
      </div>


      <section className="sn-section obj-section">
        <div className="obj-inner">
          <FadeIn>
            <blockquote>
              La defensa y promoción de la vida y la dignidad de la persona es parte esencial
              de la misión evangelizadora. La Pastoral de los Derechos Humanos, como corazón
              de la Pastoral Social, es la misión evangelizadora que la Iglesia realiza en el
              campo de la defensa y promoción de la vida y la dignidad humana.
            </blockquote>
          </FadeIn>
        </div>
      </section>


      <section className="sn-section valores-bg">
        <div className="sn-inner">
          <FadeIn>
            <div className="sn-tag">Líneas de Acción</div>
            <h2 className="sn-title">
              Cómo <em>Actuamos</em>
            </h2>
          </FadeIn>
          <div className="valores-grid" style={{ marginTop: 40 }}>
            {acciones.map((a, i) => (
              <FadeIn key={a.titulo} delay={i * 0.08}>
                <div className="valor-card" style={{ "--vc": "#C8102E" }}>
                  <span className="valor-icon">{a.icono}</span>
                  <h3>{a.titulo}</h3>
                  <p>{a.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs del informe */}
      <InformeLaboresTabs eje="derechosHumanos" />

      <Footer />
    </div>
  )
}

export default DerechosHumanosPage