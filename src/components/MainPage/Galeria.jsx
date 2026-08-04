import Carousel from 'react-bootstrap/Carousel';
import Galeria1 from '../../public/Galeria1.jpg';
import '../../styles/style.css'
import { Link } from 'react-router-dom';

function Galeria() {

  const carousel = [
    {
      img: Galeria1,
      titulo: 'Cáritas Costa Rica',
      desc: 'Descubre nuestra misión y compromiso',
      href: '/sobre-nosotros'
    },
    
    {
      img: 'https://tse1.mm.bing.net/th/id/OIP.eYAFT3a7C3HpXtBj8YVQCwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
      titulo: 'Contactanos',
      desc: '',
      href: '/contacto'
    },
  ];

  return (

    <Carousel slide interval={5000} variant="light">

      {carousel.map((item, index) => (

        
        <Carousel.Item key={index} 
        style={{cursor: 'pointer'}}>

        <Link to={item.href} style={{ textDecoration: 'none', color: 'inherit' }}>
          <img
            className="d-block w-100"
            src={item.img}
            alt={item.titulo}
            style={{
              height: '700px',
              objectFit: 'cover',
            }}
          />

          <div className="carousel-overlay"></div>

          <Carousel.Caption>
            <h3>{item.titulo}</h3>

            {item.desc && (
              <p>{item.desc}</p>
            )}

          </Carousel.Caption>
        </Link>
        </Carousel.Item>
      ))}

    </Carousel>
  );
}


export default Galeria;