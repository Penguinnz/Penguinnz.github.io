import FadeIn from "../../styles/FadeIn";
import "../../styles/style.css";

const EjesCard = () => {

    const ejes = [
  {
    num: "01",
    titulo: "Vida institucional",
    subtitulo: "Fortalecimiento, identidad y espiritualidad",
    desc: "Impulsa el crecimiento del Secretariado y la red de Pastoral Social-Cáritas como una institucionalidad eficiente, eficaz y transparente al servicio del Reino de Dios.",
    color: "#0057A8",
  },
  {
    num: "02",
    titulo: "Democracia y derechos",
    subtitulo: "Ciudadanía, derechos humanos y paz",
    desc: "Impulsa el fortalecimiento de la democracia participativa y una cultura cimentada en la protección de los derechos humanos y la construcción de la paz.",
    color: "#2D6A4F",
  },
  {
    num: "03",
    titulo: "Movilidad humana",
    subtitulo: "Migración, refugio y trata de personas",
    desc: "Solidaridad con personas que migran por pobreza, violencia y persecución, y con víctimas de trata y tráfico ilícito de migrantes.",
    color: "#E78C0A",
  },
  {
    num: "04",
    titulo: "Ecología integral",
    subtitulo: "Cuidado de la creación y gestión del riesgo",
    desc: "Compromiso con la protección del medioambiente, la gestión del riesgo como parte del desarrollo humano integral y la atención solidaria en emergencias.",
    color: "#C8102E",
  },
  {
    num: "05",
    titulo: "Incidencia política",
    subtitulo: "Incidencia política y social",
    desc: "Incidencia creativa en los ámbitos nacional, regional y local para promover políticas que promuevan el desarrollo humano inclusivo.",
    color: "#7B2D8B",
  },
  {
    num: "06",
    titulo: "Comunicación",
    subtitulo: "Para fortalecer la solidaridad",
    desc: "Comunicar la posición de la Iglesia en materia socioeconómica y ecológica, y la acción solidaria de la red de PS-Cáritas.",
    color: "#0057A8",
  },
];

  return (
    <>
    <div>

      <section className="sn-section">
        <div className="sn-inner">
          <FadeIn>
            <div className="sn-tag">Lineamientos estratégicos</div>
            <h2 className="sn-title"><em>Ejes</em> de trabajo</h2>
            <p style={{ color: "#6B6B6B", marginTop: 12, fontSize: 17, maxWidth: 560, lineHeight: 1.7 }}>
              Un marco entretejido de lineamientos que guían el cumplimiento de la misión y el avance hacia la visión.
            </p>
          </FadeIn>
          <div className="ejes-list">
            {ejes.map((e, i) => (
              <FadeIn key={e.num} delay={i * 0.06}>
                <div className="eje-row">
                  <div className="eje-num">{e.num}</div>
                  <div className="eje-titles">
                    <h3>
                      <span className="eje-dot" style={{ background: e.color }} />
                      {e.titulo}
                    </h3>
                    <span>{e.subtitulo}</span>
                  </div>
                  <p className="eje-desc">{e.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
    
    </>
  )
}

export default EjesCard