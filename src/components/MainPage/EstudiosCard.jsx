import { Card} from 'react-bootstrap';
import '../../styles/style.css'
import FadeIn from '../../styles/FadeIn';

function EstudiosCard() {
  const programas = [
    {
      titulo: "Hambre y Pobreza",
      descripcion: "Situación de Costa Rica",
      imagen: "https://th.bing.com/th/id/R.f298b1051719391ab6a43e4cd344694a?rik=lLRDgAi6md4L1A&riu=http%3a%2f%2fwww.aciprensa.com%2fimagespp%2fDonar_Pixabay_141220.jpg&ehk=o84KhiGsMt7TrUgj0cKelWl36pNTsFag%2btcEt8zgstY%3d&risl=&pid=ImgRaw&r=0",
      href: "/hambre-pobreza"
    },
    {
      titulo: "Infancia y Niñez",
      descripcion: "La infancia y niñez en Costa Rica ",
      imagen: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1400&q=50",
      href: "/infancia"
    },

  ];

  return (
    <section className='sn-section valores-bg'>
      <div className='sn-inner'>
      <h2 className="text-dark mb-4 sn-title">
                Nuestros <em>Estudios</em>
            </h2>
    <div className='valores-grid'>
      {programas.map((programa) => (
        
        <FadeIn>
          <Card className='h-100 shadow valores-card'
          style={{ transition: 'transform 0.2s, box-shadow 0.2s', cursor: 'pointer' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                  onClick={()=> {window.location.href=programa.href}}
                  >
            <Card.Img
              variant="top"
              src={programa.imagen}
            />
            <Card.Body>
              <Card.Title>{programa.titulo}</Card.Title>
              <Card.Text>
                {programa.descripcion}
              </Card.Text>
            </Card.Body>
          </Card>
          </FadeIn>
      ))}
    </div>
    </div>
    </section>
  );
}

export default EstudiosCard;