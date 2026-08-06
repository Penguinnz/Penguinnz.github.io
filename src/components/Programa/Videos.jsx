import '../../styles/style.css';

/*
  Lista de videos a mostrar. Para agregar uno nuevo
  copiar el "id" del video de YouTube (la parte que va despues de
  "v=" en la URL, por ejemplo en
  https://www.youtube.com/watch?v=XXXXXXXXXXX el id es XXXXXXXXXXX)
  y agregar un objeto nuevo a este arreglo.
 */
const videos = [
  {
    titulo: "Somos Caritas",
    descripcion:
      "Siguenos en el canal de Radio Fides para ver nuestro programa Somos Caritas.",
    youtubeId: "", // pegar aca el id del video que se quiere mostrar
  },
];

const CANAL_URL = "https://www.youtube.com/watch?v=usZad8BG8JU";

const Videos = () => {
  return (
    <div>

      <div className="sn-root">
        <section
          className="sn-hero"
        >
          <h1>
            Programa<em> Somos Caritas</em>
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
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
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
              className="btn btn-rojo"
            >
              Ver todos los videos en YouTube
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Videos;