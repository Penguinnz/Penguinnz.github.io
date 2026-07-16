import '../../styles/style.css'
import FadeIn from '../../styles/FadeIn'
import { Church, Globe, PersonStanding, Sprout } from 'lucide-react'
import { Link } from 'react-router-dom'


const AreasDeTrabajo = () => {

  const ejes = [
    
    {
      icono: <PersonStanding/>,
      titulo:"Derechos Humanos",
      desc: "Ciudadanía, derechos humanos y paz",
      href:"/derechos-humanos",
      color:"#C8102E"
    },

    {
      icono: <Church/>,
      titulo:"Vida Institucional",
      desc: "Fortalecimiento, identidad y espiritualidad",
      href:"/institucional",
      color: "#0057A8"
    },

    {
      icono: <Sprout/>,
      titulo:"Ecologia",
      desc: "Fortalecimiento, identidad y espiritualidad",
      href:"/ecologia",
      color: "#2D6A4F"
    },

    {
      icono: <Globe/>,
      titulo:"Comunion Caritas Internationalis",
      desc: "Fortalecimiento, identidad y espiritualidad",
      href:"/comunion",
      color: "#7B2D8B"
    },
    
  ]


  return (
    <>
      <section className="sn-section valores-bg">
        <div className="sn-inner">
          <FadeIn>
            <h2 className="sn-title">Nuestras <em>Áreas</em> de Trabajo</h2>

          </FadeIn>
          <div className="valores-grid">
            {ejes.map((e, i) => (
              <FadeIn key={e.titulo} delay={i * 0.07}>
                
                <Link to={e.href} style={{ textDecoration: 'none', color: 'inherit' }}>

                <div
                  className="valor-card "
                  style={{ "--vc": e.color,
                            cursor:'pointer'}}
                >

                  <span className="valor-icon">{e.icono}</span>
                  
                  <h3>{e.titulo}</h3>
                  <p>{e.desc}</p>
                </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default AreasDeTrabajo