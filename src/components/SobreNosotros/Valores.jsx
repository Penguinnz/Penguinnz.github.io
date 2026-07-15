import { Earth, HandFist, Handshake, Landmark, Sparkle, Sprout } from "lucide-react";
import FadeIn from "../../styles/FadeIn";


const Valores = () => {
    const valores = [
  {
    icon: <Sparkle size={35}/>,
    titulo: "Dignidad humana",
    desc: "Creemos en el valor intrínseco de cada persona, sirviendo a todos sin importar etnia, sexo, edad ni religión.",
    color: "#C8102E",
  },
  {
    icon: <Sprout size={35} color="#2D6A4F"/>,
    titulo: "Desarrollo humano",
    desc: "Promovemos el desarrollo integral del ser humano en todos sus ámbitos, en el marco del bien común solidario.",
    color: "#2D6A4F",
  },
  {
    icon: <Handshake size={35} color="#0057A8"/>,
    titulo: "Solidaridad",
    desc: "Caminamos junto al otro creando una cultura del encuentro, cuidando a los más vulnerables como comunidad.",
    color: "#0057A8",
  },
  {
    icon: <Landmark size={35} color="#E78C0A"/>,
    titulo: "Subsidiariedad",
    desc: "El poder y las decisiones se ejercen a nivel local siempre que sea posible, valorando el liderazgo participativo.",
    color: "#E78C0A",
  },
  {
    icon: <Earth size={35} color="#7B2D8B"/>,
    titulo: "Custodia",
    desc: "Somos guardianes responsables de la creación de Dios, éticos y transparentes en el uso de todos los recursos.",
    color: "#7B2D8B",
  },
  {
    icon: <HandFist  size={35} color="#C8102E"/>,
    titulo: "Sinodalidad",
    desc: "Caminar juntos en comunión, escucha recíproca y discernimiento para una Iglesia más participativa y misionera.",
    color: "#C8102E",
  },
];

  return (
    <>
      <section className="sn-section valores-bg">
        <div className="sn-inner">
          <FadeIn>
            <div className="sn-tag">Nuestros valores</div>
            <h2 className="sn-title">Los <em>principios</em> que guían nuestra acción</h2>
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

export default Valores