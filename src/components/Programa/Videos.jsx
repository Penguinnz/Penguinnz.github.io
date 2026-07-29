import '../../styles/style.css';
import Footer from '../Footer';
import MainNavbar from '../MainNavbar';

/**
 * Lista de videos a mostrar. Para agregar uno nuevo solo hace falta
 * copiar el "id" del video de YouTube (la parte que va despues de
 * "v=" en la URL, por ejemplo en
 * https://www.youtube.com/watch?v=XXXXXXXXXXX el id es XXXXXXXXXXX)
 * y agregar un objeto nuevo a este arreglo.
 */
const videos = [
  {
    titulo: "Canal de Cáritas Costa Rica",
    descripcion:
      "Suscríbete al canal oficial de Pastoral Social Cáritas Costa Rica para ver todos los videos de la organización.",
    youtubeId: "", // <-- pegar aqui el id del video que se quiera destacar
  },
];

const CANAL_URL = "https://www.youtube.com/@pastoralsocialcaritascosta609";

const Videos = () => {
  return (
    <div>

      <div className="sn-root">
        <section
          className="sn-hero"
          
        >
          <h1>
            Programa <em>Somos Caritas</em>
          </h1>
          <p className="sn-hero-sub">
            Conoce el trabajo de Cáritas Costa Rica a través de nuestro
            programa.
          </p>
        </section>
      </div>

      <section className="sn-section">
        <div className="obj-inner">
          <div className="videos-grid">
            {videos.map((video, index) => (
              <div className="video-card shadow" key={index}>
                <div className="video-embed">
                  {video.youtubeId ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${video.youtubeId}`}
                      title={video.titulo}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    // Mientras no se defina un youtubeId, se enlaza al canal
                    <a
                      href={CANAL_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="video-embed"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "#1A1A1A",
                        color: "#fff",
                        textDecoration: "none",
                      }}
                    >
                      Ver canal de YouTube
                    </a>
                  )}
                </div>
                <div className="video-card-body">
                  <h3>{video.titulo}</h3>
                  <p>{video.descripcion}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <a
              href={CANAL_URL}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Ver todos los videos en YouTube
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Videos;