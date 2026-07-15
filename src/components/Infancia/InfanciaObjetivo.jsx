
import FadeIn from '../../styles/FadeIn'

const InfanciaObjetivo = () => {
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
                  Trabajar por una niñez protegida, educada y con oportunidades para desarrollarse plenamente en un entorno digno, seguro e inclusivo.
                </p>

                <span className="mv-num">Gen</span>
              </div>
              <div className="mv-card vision">
                <div className="mv-card-label">especificos</div>
                <p>
                    • Apoyar el crecimiento humano, espiritual, educativo y social de la niñez.
                </p>
                
                <p>
                    • Impulsar oportunidades educativas y acceso a tecnologías digitales.
                </p>
                    
                <p>
                    • Garantizar condiciones seguras para todos los niños.
                </p>

                <p>
                   • Brindar apoyo y protección a menores migrantes residentes y en tránsito.
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

export default InfanciaObjetivo