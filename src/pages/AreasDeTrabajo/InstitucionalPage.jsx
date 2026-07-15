import { AudioLines, Bot, Church, Heart } from "lucide-react"
import Footer from "../../components/Footer"
import InformeLaboresTabs from "./InformeLaboresTabs"
import MainNavbar from "../../components/MainNavbar"
import FadeIn from "../../styles/FadeIn"
import "../../styles/style.css"

const pilares = [
  {
    icono: <Church/>,
    titulo: "Fortalecimiento institucional",
    desc: "Crecimiento eficiente, eficaz y transparente del Secretariado y la red de Pastoral Social-Cáritas al servicio del bien común.",
  },
  {
    icono: <AudioLines/>,
    titulo: "Comunicación",
    desc: "Programa semanal 'Somos Cáritas' en Radio y TV San José. Presencia activa en redes sociales y difusión de fechas eclesiales.",
  },
  {
    icono: <Heart/>,
    titulo: "Encadenamientos solidarios",
    desc: "Alianzas con Coopedota y otras empresas de economía social solidaria que generan ingresos para la sostenibilidad de la oficina nacional.",
  },
  {
    icono: <Bot/>,
    titulo: "Inteligencia Artificial",
    desc: "Kit de herramientas de IA gratuitas para construir un mundo solidario, adoptado por el Secretariado de Cáritas LAC.",
  },
]

const InstitucionalPage = () => {
  return (
    <div>
      <MainNavbar />

      <div className="sn-root">
        <section
          className="sn-hero"
          style={{
            "--hero-image":
              "url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=60)",
          }}
        >

          <h1>
            Vida <em>Institucional</em>
          </h1>
          <p className="sn-hero-sub">
            Impulso del crecimiento del Secretariado y la red de Pastoral
            Social-Cáritas como institucionalidad eficiente y transparente al
            servicio de las poblaciones más vulnerables.
          </p>
          <div className="sn-hero-scroll">Informe 2024–2025</div>
        </section>
      </div>


      <section className="sn-section obj-section">
        <div className="obj-inner">
          <FadeIn>
            <blockquote>
              La comprensión de la dimensión social de toda la acción evangelizadora de la Iglesia
              constituye uno de los trasfondos teológicos más importantes de este eje. La
              institucionalidad de Cáritas se orienta a ser eficiente, eficaz y transparente
              al servicio del Reino de Dios y de las poblaciones que anhelan y luchan por alcanzar
              niveles de vida coherentes con su dignidad y sus derechos.
            </blockquote>
          </FadeIn>
        </div>
      </section>


      <section className="sn-section valores-bg">
        <div className="sn-inner">
          <FadeIn>
            <div className="sn-tag">Pilares de trabajo</div>
            <h2 className="sn-title">
              Nuestros <em>Esfuerzos</em>
            </h2>
          </FadeIn>
          <div className="valores-grid" style={{ marginTop: 40 }}>
            {pilares.map((p, i) => (
              <FadeIn key={p.titulo} delay={i * 0.08}>
                <div className="valor-card" style={{ "--vc": "#0057A8" }}>
                  <span className="valor-icon">{p.icono}</span>
                  <h3>{p.titulo}</h3>
                  <p>{p.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>


      <InformeLaboresTabs eje="institucional" />

      <Footer />
    </div>
  )
}

export default InstitucionalPage
