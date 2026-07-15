import FadeIn from "../../styles/FadeIn";


const MisionVision = () => {
  
const VISION =
  "Un mundo justo, transformado para que sea reflejo del Reino de Dios, donde todas las personas de nuestra casa común experimenten el amor, la compasión y la plenitud de la vida.";
  return (

    <>
    

      <section className="sn-section">
        <div className="sn-inner">
          <FadeIn>
            <div className="sn-tag">Identidad institucional</div>
            <h2 className="sn-title">Misión y <em>Visión</em></h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mv-grid">
              <div className="mv-card mision">
                <div className="mv-card-label">
                  Mision
                </div>
                
                <p>
                  • Salvar vidas y reducir riesgos, construyendo comunidades resilientes y respondiendo con rapidez y 
                    eficacia a las crisis humanitarias; 
                </p>

                <p>
                  • Transformar vidas y comunidades mediante la promoción del desarrollo humano integral, el cuidado 
                  de la creación, el restablecimiento de la paz y la justicia social;
                </p>

                <p>
                  • Reclamar un mundo mejor haciendo oír la voz de aquellos a quienes servimos y convocando a la gen
                  te para que actúe, llevando a cabo acciones de incidencia.

                </p>

                <span className="mv-num">M</span>
              </div>
              <div className="mv-card vision">
                <div className="mv-card-label">Visión</div>
                <p>{VISION}</p>
                <span className="mv-num">V</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

    </>
  )
}

export default MisionVision