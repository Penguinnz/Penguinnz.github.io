import Carousel from 'react-bootstrap/Carousel';
import LogoCaritas from '../../public/Caritas-Costa-Rica-logo.png';
import ejemplo2 from '../../public/Ejemplo2.jpg';
import '../../styles/style.css'
import { Link } from 'react-router-dom';

function Galeria() {

  const carousel = [
    {
      img: LogoCaritas,
      titulo: 'Cáritas Costa Rica',
      desc: 'Construyendo esperanza y solidaridad.',
      href: '/'
    },
    {
      img: ejemplo2,
      titulo: 'Hambre y Pobreza',
      desc: 'Conoce nuestro estudio sobre el hambre y la pobreza en Costa Rica ',
      href: '/hambre-pobreza'
    },
    {
      img: 'https://tse1.mm.bing.net/th/id/OIP.eYAFT3a7C3HpXtBj8YVQCwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
      titulo: 'Somos Cáritas',
      desc: 'Descubre nuestra misión y compromiso',
      href: '/sobre-nosotros'
    }
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