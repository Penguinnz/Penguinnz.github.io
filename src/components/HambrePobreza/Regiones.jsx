import { useState } from "react";
import FadeIn from "../../styles/FadeIn";

const REGIONES = [
  {
    nombre: "Central",
    ipm: 2.1,
    incidencia: "Menor incidencia nacional",
    dimension_principal: "Vivienda",
    pct_vivienda: 25.6,
    color: "#0057A8",
    icono: "",
  },
  {
    nombre: "Chorotega",
    ipm: 3.2,
    incidencia: "2.ª mejor posición",
    dimension_principal: "Vivienda",
    pct_vivienda: 26.8,
    color: "#E78C0A",
    icono: "",
  },
  {
    nombre: "Brunca",
    ipm: 3.3,
    incidencia: "3.ª mejor posición",
    dimension_principal: "Trabajo",
    pct_vivienda: 22.8,
    color: "#2D6A4F",
    icono: "",
  },
  {
    nombre: "Pacífico Central",
    ipm: 3.5,
    incidencia: "4.º lugar",
    dimension_principal: "Trabajo",
    pct_vivienda: 28.0,
    color: "#7B2D8B",
    icono: "",
  },
  {
    nombre: "Huetar Caribe",
    ipm: 4.6,
    incidencia: "Alta pobreza",
    dimension_principal: "Trabajo",
    pct_vivienda: 24.3,
    color: "#C8102E",
    icono: "",
  },
  {
    nombre: "Huetar Norte",
    ipm: 4.2,
    incidencia: "Alta pobreza · mejoró vs 2024",
    dimension_principal: "Trabajo",
    pct_vivienda: 24.7,
    color: "#C8102E",
    icono: "",
  },
];

const MAX_IPM = 5;

function Regiones() {
  const [activa, setActiva] = useState(null);

  return (
    <section style={{ background: "#fff", padding: "72px 5%" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>

        <div style={{ marginBottom: 40 }}>
          
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 3.5vw, 40px)",
            fontWeight: 700, lineHeight: 1.2,
          }}>
            Brechas regionales
          </h2>
          <p style={{ color: "#6B6B6B", fontSize: 16, lineHeight: 1.75, maxWidth: 580, marginTop: 10 }}>
            La pobreza multidimensional varía significativamente según la región de planificación.
            Huetar Caribe y Huetar Norte concentran los mayores niveles de privación.
          </p>
        </div>

        <FadeIn>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16,
        }}>
          {REGIONES.map((r) => {
            const pct = (r.ipm / MAX_IPM) * 100;
            const esActiva = activa === r.nombre;
            return (
              <div
                key={r.nombre}
                onClick={() => setActiva(esActiva ? null : r.nombre)}
                style={{
                  background: esActiva ? "#FAFAF8" : "#fff",
                  border: `1.5px solid ${esActiva ? r.color : "#E2DDD5"}`,
                  borderRadius: 6, padding: "22px 24px",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  transform: esActiva ? "translateY(-3px)" : "none",
                  boxShadow: esActiva ? `0 8px 24px rgba(0,0,0,0.1)` : "none",
                }}
              >
                {/* Encabezado */}
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                  <span style={{ fontSize: 22 }}>{r.icono}</span>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 600 }}>{r.nombre}</div>
                    <div style={{ fontSize: 12, color: "#6B6B6B" }}>{r.incidencia}</div>
                  </div>
                  <div style={{
                    marginLeft: "auto",
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 26, fontWeight: 700, color: r.color,
                  }}>
                    {r.ipm}
                  </div>
                </div>

                {/* Barra de IPM */}
                <div style={{ marginBottom: 12 }}>
                  <div style={{
                    fontSize: 11, color: "#9B9B9B", marginBottom: 5, letterSpacing: "0.06em",
                  }}>
                    ÍNDICE DE POBREZA MULTIDIMENSIONAL
                  </div>
                  <div style={{
                    height: 6, background: "#F0EDE8", borderRadius: 3, overflow: "hidden",
                  }}>
                    <div style={{
                      height: "100%", width: `${pct}%`, background: r.color,
                      borderRadius: 3, transition: "width 0.6s ease",
                    }} />
                  </div>
                </div>

                {/* Detalle expandido */}
                {esActiva && (
                  <div style={{
                    marginTop: 14, paddingTop: 14, borderTop: "1px solid #E2DDD5",
                    display: "flex", flexDirection: "column", gap: 8,
                  }}>
                    <div style={{ fontSize: 13, color: "#444" }}>
                      <strong>Dimensión principal:</strong> {r.dimension_principal}
                    </div>
                    <div style={{ fontSize: 13, color: "#444" }}>
                      <strong>Aporte de vivienda al IPM:</strong> {r.pct_vivienda}%
                    </div>
                    <div style={{
                      fontSize: 12, color: "#6B6B6B", lineHeight: 1.6,
                      background: "#F5F3EE", borderRadius: 4, padding: "8px 12px", marginTop: 4,
                    }}>
                      {r.nombre === "Huetar Norte"
                        ? "Única región con variación estadísticamente significativa respecto a 2024: el IPM bajó de 5,7 a 4,2."
                        : r.nombre === "Huetar Caribe"
                        ? "Junto con Huetar Norte presentan los mayores niveles de pobreza e intensidad del país."
                        : "La dimensión de vivienda y trabajo concentran el mayor peso del índice en esta región."}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        </FadeIn>

        <p style={{
          fontSize: 12, color: "#9B9B9B", marginTop: 24,
          borderTop: "1px solid #E2DDD5", paddingTop: 14,
        }}>
          Fuente: ENAHO 2025, INEC. Valores del IPM a julio 2025. Haz clic en una región para ver detalles.
        </p>
      </div>
    </section>
  );
}

export default Regiones;