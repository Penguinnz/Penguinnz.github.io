import { ChartColumnDecreasing, House, PersonStanding, ShieldAlert, TriangleAlert, Utensils } from "lucide-react";
import FadeIn from "../../styles/FadeIn";

function EstadisticasStrip() {
  const stats = [
    {
      valor: "15,2 %",
      etiqueta: "Pobreza por ingreso",
      sub: "ENAHO 2025 · INEC",
      icono: <ChartColumnDecreasing size={40}/>,
      tendencia: "baja",
    },
    {
      valor: "9,9 %",
      etiqueta: "Pobreza multidimensional",
      sub: "186 541 hogares",
      icono: <House size={40}/>,
      tendencia: "estable",
    },
    {
      valor: "15,4 %",
      etiqueta: "Inseguridad alimentaria",
      sub: "Moderada o grave · SOFI 2025",
      icono: <Utensils size={40}/>,
      tendencia: "alerta",
    },
    {
      valor: "700 mil",
      etiqueta: "Sin dieta saludable accesible",
      sub: "14,2 % de la población",
      icono: <TriangleAlert size={40}/>,
      tendencia: "alerta",
    },
    {
      valor: "7 133",
      etiqueta: "Personas en situación de calle",
      sub: "+3× desde 2019 · IMAS 2025",
      icono: <PersonStanding size={40}/>,
      tendencia: "critico",
    },
    {
      valor: "183 277",
      etiqueta: "En asentamientos informales",
      sub: "576 precarios · 64 128 hogares",
      icono: <ShieldAlert size={40}/>,
      tendencia: "critico",
    },
  ];

  const colorTendencia = {
    baja: { bg: "#EAF3DE", texto: "#27500A", borde: "#7FBA3F" },
    estable: { bg: "#FFF8E6", texto: "#7A5000", borde: "#E78C0A" },
    alerta: { bg: "#FFF0E6", texto: "#7A3000", borde: "#E84E10" },
    critico: { bg: "#FCEBEB", texto: "#791F1F", borde: "#C8102E" },
  };

  return (
    <section style={{ background: "#F5F3EE", padding: "72px 5%" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>

        {/* Encabezado */}
        <div style={{ marginBottom: 40 }}>
          
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 3.5vw, 40px)",
            fontWeight: 700, lineHeight: 1.2, color: "#1A1A1A",
          }}>
            La Realidad <span style={{ color: "#C8102E" }}>Costarricense</span>
          </h2>
          <p style={{
            color: "#6B6B6B", fontSize: 16, lineHeight: 1.75, maxWidth: 600, marginTop: 10,
          }}>
            Las múltiples
            dimensiones de la pobreza en Costa Rica.
          </p>
        </div>

        <FadeIn>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 16,
        }}>
          {stats.map((s) => {
            const c = colorTendencia[s.tendencia];
            return (
              <div
                key={s.etiqueta}
                style={{
                  background: "#fff",
                  borderRadius: 6,
                  padding: "24px 24px 20px",
                  borderLeft: `4px solid ${c.borde}`,
                  boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                  display: "flex", flexDirection: "column", gap: 6,
                }}
              >
                <span style={{ fontSize: 28 }}>{s.icono}</span>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(26px, 3vw, 36px)",
                  fontWeight: 700,
                  color: c.borde,
                  lineHeight: 1.1,
                }}>
                  {s.valor}
                </div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#1A1A1A" }}>
                  {s.etiqueta}
                </div>
                <div style={{
                  fontSize: 12, color: "#6B6B6B",
                  paddingTop: 6, borderTop: "1px solid #E2DDD5",
                }}>
                  {s.sub}
                </div>
              </div>
            );
          })}
        </div>
        </FadeIn>

        {/* Nota de fuente */}
        <p style={{
          fontSize: 12, color: "#9B9B9B", marginTop: 20,
          borderTop: "1px solid #E2DDD5", paddingTop: 16,
        }}>
          Fuentes: ENAHO 2025 (INEC) · SOFI 2025 (FAO/ONU) · IMAS 2025 · CGR 2025 ·
          Municipalidad de San José 2024 · Pastoral Social Cáritas Costa Rica
        </p>
      </div>
    </section>
  );
}

export default EstadisticasStrip;