import '../../styles/style.css';


import Noticia1 from '../../public/noticias/Noticia1.png' ;
import Noticia2 from '../../public/noticias/Noticia2.jpg'
import Noticia3 from '../../public/noticias/Noticia3.jpg'
import FadeIn from '../../styles/FadeIn';

const noticias = [
  {
    titulo:
      "La Zona CAMEX se fortalece en Panamá rumbo al XXI Congreso Regional de Cáritas en Brasil",
    fuente: "Cáritas América Latina y el Caribe",
    fecha: "17 de julio de 2026",
    resumen:
      "Delegaciones de los seis países de Centroamérica y México se reunieron en Ciudad de Panamá para el encuentro zonal 'Brasilerito', un espacio de diálogo e identificación de prioridades comunes de cara al XXI Congreso Regional de Cáritas América Latina y el Caribe, previsto en Brasil para febrero de 2027. El encuentro abordó temas como la realidad social de la región, la integración de la juventud y otros ejes transversales en el trabajo pastoral.",
    imagen:
      Noticia1,
    enlace:
      "https://caritaslatinoamerica.org/es/historias/la-zona-camex-se-fortalece-en-panama-rumbo-al-xxi-congreso-regional-de-caritas-en-brasil",
  },
  {
    titulo:
      "Cáritas LAC fortalece su respuesta regional y espiritualidad en encuentro estratégico en Bogotá",
    fuente: "Cáritas América Latina y el Caribe",
    fecha: "26 de febrero de 2026",
    resumen:
    "los equipos regionales de MAGRE (Medio Ambiente, Gestión de Riesgos y Emergencias) y Ecología Integral e Identidad y Espiritualidad se reunieron en Bogotá para talleres presenciales de sus equipos.",
    imagen:
      Noticia2,
    enlace:
      "https://caritaslatinoamerica.org/es/historias/caritas-lac-fortalece-su-respuesta-regional-y-espiritualidad-en-encuentro-estrategico-en-bogota",
  },
  {
    titulo:
      "Cáritas América Latina y el Caribe avanza en la implementación de sus Estándares de Gestión",
    fuente: "Cáritas América Latina y el Caribe",
    fecha: "1 de octubre de 2025",
    resumen:
      "Cáritas América Latina y el Caribe continúa dando pasos firmes en la implementación de los Estándares de Gestión de Cáritas Internationalis (EGCI), un marco que fortalece la transparencia, la participación, la responsabilidad y la salvaguardia en la misión que la Iglesia realiza a través de sus Cáritas nacionales.",
    imagen:
      Noticia3,
    enlace:
      "https://caritaslatinoamerica.org/es/historias/caritas-america-latina-y-el-caribe-avanza-en-la-implementacion-de-sus-estandares-de-gestion",
  },
];
 
const NoticiasPage = () => {
  return (
    <div>
 
    <FadeIn>
      <section className="sn-section">
        <div className="obj-inner">
          <div className="noticias-lista">
            {noticias.map((noticia, index) => (
              <a
                href={noticia.enlace}
                target="_blank"
                rel="noreferrer"
                className="noticia-card"
                key={index}
              >
                <img
                  src={noticia.imagen}
                  alt={noticia.titulo}
                  className="noticia-img"
                />
                <div className="noticia-body">
                  <p className="noticia-meta">
                    {noticia.fuente} - {noticia.fecha}
                  </p>
                  <h3>{noticia.titulo}</h3>
                  <p>{noticia.resumen}</p>
                  <span className="btn btn-rojo mt-2" style={{ alignSelf: "anchor-center" }}>
                    Leer noticia completa
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      </FadeIn>
 
    </div>
  );
};
 
export default NoticiasPage;