
import FadeIn from '../../styles/FadeIn'
import "../../styles/style.css"

const Donaciones = () => {
  return (

    <>
    

      <section className="sn-section">
        <div className="sn-inner">
          <FadeIn>
            <h2 className="sn-title"><em>Donaciones</em></h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mv-grid">
              <div className="mv-card mision">
                <img
                className="d-block w-100"
                src={'https://www.ceutaactualidad.com/media/ceutaactualidad/images/2021/06/03/2021060317453780949.jpg'}
                alt="Primer slide"
                style={{
                height: '300px',
                objectFit: 'contain',
                borderRadius: '30px'
                }} />

              </div>
              <div className="mv-card vision">
                <div className="mv-card-label">Donación</div>
                <p>Tu donación puede cambiar vida. Con tu apoyo, podemos
                    brindar esperanza y oportunidades a quienes más lo necesitan.
                    ¡Únete a nosotros y haz la diferencia hoy! </p>

                    
                <h1 > Sinpe: 8409-9980</h1>
                <span className="mv-num">V</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

    </>
  )
}

export default Donaciones