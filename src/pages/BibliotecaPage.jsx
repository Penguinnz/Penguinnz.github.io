import '../styles/style.css';
import Footer from '../components/Footer';
import MainNavbar from '../components/MainNavbar';

import pdfHambre from "../public/pdfs/HAMBRE Y POBREZA EN COSTA RICA 2025.pdf";
import pdfMarco from "../public/pdfs/MARCO ESTRATÉGICO 2026-2029.pdf";
import pdfInfancia from "../public/pdfs/infancia-e-iglesia-en-costa-rica.pdf";
import pdfInforme from "../public/pdfs/INFORME DE PRESIDENCIA 2024-2025.pdf";

import portadaInforme from "../public/portadapdf/portada-informe-presidencia-2024-2025.png"
import portadaMarco from "../public/portadapdf/portada-MarcoEstrategico-2026-2028.png"
import portadaHambre from "../public/portadapdf/portada-hambre-pobreza.png"
import portadaInfancia from "../public/portadapdf/portada-infancia.png"



import { Card } from 'react-bootstrap';

const BibliotecaPage = () => {

  const documentos = [
    {
      titulo: "Marco Estratégico 2026-2029",
      img: portadaMarco ,
      archivo: pdfMarco
    },
    {
      titulo: "Informe de Presidencia 2024-2025",
      img: portadaInforme ,
      archivo: pdfInforme
    },
    {
      titulo: "Hambre y Pobreza",
      img: portadaHambre ,
      archivo: pdfHambre
    },
    {
      titulo: "La Infancia y la Iglesia en Costa Rica",
      img: portadaInfancia ,
      archivo: pdfInfancia
    }
  ];

  return (
    <div>
      <MainNavbar />

      <div className="sn-root">
        <section className="sn-hero">
          <h1>Biblioteca</h1>
        </section>
      </div>

<div className="valores-grid m-3 p-3">

  {documentos.map((documento, index) => (

    <Card
      key={index}
      className="valor-card shadow"
    >

      <Card.Img
        src={documento.img}
        
      />

      <Card.Body>

        <Card.Title>
          {documento.titulo}
        </Card.Title>

        <a
          href={documento.archivo}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary mt-3"
        >
          Ver documento
        </a>

      </Card.Body>
    </Card>

  ))}

</div>

      <Footer />
    </div>
  );
};

export default BibliotecaPage;