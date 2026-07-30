import '../../styles/style.css';
import Noticia1 from '../../public/Noticia1.png' ;

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
];
 
const NoticiasPage = () => {
  return (
    <div>
 
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
 
    </div>
  );
};
 
export default NoticiasPage;