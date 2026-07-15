import { Mail, MapPin, MessageCircleCheck, PhoneCall } from "lucide-react"
import FadeIn from "../../styles/FadeIn"

const ContactoCards = () => {

    const contactos = [
    {
        titulo: "Direccion",
        descripcion: "calle 21 Avenida 3 y 5, San José, Costa Rica, 3000",
        icono: <MapPin color="#C8102E" size={40}/>
    },

    {
        titulo: "Telefono",
        descripcion: "+(506) 2221 3053",
        icono: <PhoneCall color="#C8102E" size={40}/>
    },

    {
        titulo: "Correo",
        descripcion: "pscaritas@iglesiacr.org",
        icono: <Mail color="#C8102E" size={40}/>
    },

    {
        titulo: "Redes Sociales",
        descripcion: "Facebook: https://www.facebook.com/caritascostarica/",
        icono: <MessageCircleCheck color="#C8102E" size={40}/>
    }


    ]
  return (
    <>
    <section className="sn-section valores-bg">
        <div className="sn-inner">
        <FadeIn>
            <div className="sn-tag">Contactenos</div>
            <h2 className="sn-title">Estamos aquí para ayudarle</h2>
        </FadeIn>
          <div className="valores-grid">
            {contactos.map((c, i) => (
              <FadeIn key={c.titulo} delay={i * 0.07}>
                <div
                  className="valor-card"
                >
                  <span className="valor-icon">{c.icono}</span>
                  <h3>{c.titulo}</h3>
                  <p>{c.descripcion}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}

export default ContactoCards