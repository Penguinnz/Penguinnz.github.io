
import FadeIn from '../../styles/FadeIn'

const Objetivo = () => {
  return (
    <>
    
    <section className="sn-section">
        <div className="sn-inner">
          <FadeIn>
            <h2 className="sn-title">Objetivos </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mv-grid">
              <div className="mv-card mision">
                <div className="mv-card-label">
                  General
                </div>
                
                <p>
                  Contribuir a la reducción del hambre y la pobreza mediante acciones solidarias, acompañamiento comunitario y fortalecimiento de capacidades para el desarrollo humano integral.
                </p>

                <span className="mv-num">Gen</span>
              </div>
              <div className="mv-card vision">
                <div className="mv-card-label">especificos</div>
                <p>
                    • Atender necesidades alimentarias urgentes.
                </p>
                
                <p>
                    • Apoyar familias en situación de vulnerabilidad.
                </p>
                    
                <p>
                    • Fortalecer redes comunitarias de apoyo.
                </p>

                <p>
                   • Promover oportunidades de desarrollo económico y social.
                </p>

                <p>
                    • Sensibilizar sobre las causas estructurales de la pobreza.
                </p>
                <span className="mv-num">Esp</span>
              </div>
            </div>
              
          </FadeIn>
        </div>
      </section>

    </>
  )
}

export default Objetivo