import { Church, Handshake, ShieldPlus, Utensils } from "lucide-react";
import FadeIn from "../../styles/FadeIn";


const InfanciaAcciones = () => {
    const valores = [
  {
    icon: <Church size={35}/>,
    titulo: "Desarrollo",
    desc: "Formación en la fe desde la catequesis infantil.",
    color: "#C8102E",
  },
  {
    icon: <Utensils size={35} color="#2D6A4F"/>,
    titulo: "Alimenticia",
    desc: "Creación de espacios seguros de alimentación y cuidado.",
    color: "#2D6A4F",
  },
  {
    icon: <ShieldPlus size={35} color="#0057A8"/>,
    titulo: "Proteccion",
    desc: "Creación de la Mesa “Nuestros niños son sagrados”, en la cual participan diversas confesiones religiosas y organizaciones civiles, comprometidas en la protección integral de la infancia.",
    color: "#0057A8",
  },
  {
    icon: <Handshake size={35} color="#E78C0A"/>,
    titulo: "Apoyo",
    desc: "Distribución de alimentos y la atención a familias en situación de extrema pobreza.",
    color: "#E78C0A",
  },

];

  return (
    <>
      <section className="sn-section valores-bg">
        <div className="sn-inner">
          <FadeIn>
            <h2 className="sn-title">Nuestra <em>Acción</em></h2>
          </FadeIn>
          <div className="valores-grid">
            {valores.map((v, i) => (
              <FadeIn key={v.titulo} delay={i * 0.07}>
                <div
                  className="valor-card"
                  style={{ "--vc": v.color }}
                >
                  <span className="valor-icon">{v.icon}</span>
                  <h3>{v.titulo}</h3>
                  <p>{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default InfanciaAcciones