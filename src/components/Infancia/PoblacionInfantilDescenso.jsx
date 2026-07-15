import '../../styles/style.css'

const DATOS = [
  { año: "2014", valor: 20.7, color: "#0057A8" },
  { año: "2024", valor: 16.3, color: "#C8102E" },
  { año: "2034", valor: 11.6, color: "#9B9B9B" },
];

const MAX = 22;

function PoblacionInfantilDescenso() {
  return (
    <section style={{ background: "#fff", padding: "72px 5%" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 48, alignItems: "center",
        }}>

          {/* Texto */}
          <div>
            
            <h2 style={{
              fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 3.5vw, 38px)",
              fontWeight: 700, lineHeight: 1.2, marginBottom: 16,
            }}>
              Población en {" "}
              <span style={{ color: "#C8102E" }}>Descenso</span>
            </h2>
            <p style={{ color: "#444", fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
              En 2024, Costa Rica cuenta con <strong>846 760 niños y niñas</strong> de 0 a 12 años.
              La proporción de población infantil respecto al total del país cae de forma sostenida,
              configurando un reto pastoral de adaptación a una nueva realidad demográfica.
            </p>
            <div style={{
              background: "#F5F3EE", borderLeft: "3px solid #C8102E", borderRadius: 4,
              padding: "16px 20px", fontSize: 14, color: "#444", lineHeight: 1.7,
            }}>
              <strong>Reto pastoral:</strong> ¿qué porcentaje de estos niños participa en alguna
              acción evangelizadora —catequesis, Infancia Misionera, grupos infantiles—?
              ¿Cuántos reciben asistencia solidaria directa o indirecta?
            </div>
          </div>

          
          <div style={{
            background: "#F5F3EE", borderRadius: 8, padding: "32px 28px",
          }}>
            <div style={{
              fontSize: 12, color: "#6B6B6B", marginBottom: 20, textAlign: "center",
            }}>
              % de población infantil (0-12 años) respecto al total del país
            </div>
            <div style={{
              display: "flex", justifyContent: "space-around", alignItems: "flex-end",
              height: 200, gap: 16,
            }}>
              {DATOS.map((d) => (
                <div key={d.año} style={{
                  display: "flex", flexDirection: "column", alignItems: "center", flex: 1,
                }}>
                  <div style={{
                    fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 20,
                    color: d.color, marginBottom: 8,
                  }}>
                    {d.valor}%
                  </div>
                  <div style={{
                    width: "100%", maxWidth: 64,
                    height: `${(d.valor / MAX) * 150}px`,
                    background: d.color, borderRadius: "4px 4px 0 0",
                    transition: "height 0.7s ease",
                  }} />
                  <div style={{ fontSize: 13, color: "#1A1A1A", marginTop: 10, fontWeight: 600 }}>
                    {d.año}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PoblacionInfantilDescenso;