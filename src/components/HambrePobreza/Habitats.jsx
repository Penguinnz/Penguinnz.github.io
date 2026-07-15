import { Building2, DoorClosed, House, PersonStanding } from "lucide-react";
import { useState } from "react";
import FadeIn from "../../styles/FadeIn";

const HABITATS = [
  {
    id: "asentamientos",
    icono: <Building2/>,
    titulo: "Asentamientos informales",
    cifra: "183 277",
    unidad: "personas",
    color: "#C8102E",
    resumen: "576 precarios en todo el país. Han crecido un 50% desde 2013.",
    datos: [
      { label: "Asentamientos informales", valor: "576" },
      { label: "Hogares en precarios", valor: "64 128" },
      { label: "Población total", valor: "183 277" },
      { label: "AI con menos de 50 hogares", valor: "47,4 %" },
      { label: "AI ubicados en Región Central", valor: "80 %" },
      { label: "Crecimiento desde 2013", valor: "+50 %" },
    ],
    descripcion:
      "Los asentamientos informales concentran miles de familias en espacio urbano y rural sin acceso regular a servicios básicos. El 80% se ubica en la Región Central. En 34 distritos del país, más del 10% de su población vive en estas condiciones.",
    fuente: "CGR 2025, Informe sobre Asentamientos Informales 2021-2024",
  },
  {
    id: "deficit",
    icono: <House/>,
    titulo: "Déficit habitacional",
    cifra: "145 184",
    unidad: "unidades de déficit",
    color: "#0057A8",
    resumen: "Déficit cuantitativo y cualitativo. La Región Central concentra el 71%.",
    datos: [
      { label: "Déficit habitacional tradicional total", valor: "145 184" },
      { label: "Déficit cuantitativo (faltante natural)", valor: "128 365" },
      { label: "Déficit cualitativo", valor: "16 819" },
      { label: "% en Región Central", valor: "71 % del déficit cuantitativo" },
      { label: "Déficit cualitativo alternativo (RC)", valor: "50 %" },
    ],
    descripcion:
      "El déficit habitacional combina la falta de unidades nuevas (cuantitativo) y las viviendas en mal estado que requieren mejora (cualitativo). La Región Central, aunque concentra más recursos, acumula la mayor cantidad absoluta de carencias habitacionales del país.",
    fuente: "MIVAH / UCR, con datos ENAHO 2025",
  },
  {
    id: "cuarterias",
    icono: <DoorClosed/>,
    titulo: "Cuarterías",
    cifra: "Alta",
    unidad: "exclusión y hacinamiento",
    color: "#7B2D8B",
    resumen: "Viviendas precarias compartidas, sin acceso digno a servicios. Invisibles en las estadísticas.",
    datos: [
      { label: "Definición legal", valor: "Habitaciones en propiedad ajena" },
      { label: "Problemática principal", valor: "Hacinamiento y exclusión" },
      { label: "Servicios sanitarios", valor: "Compartidos o inexistentes" },
      { label: "Visibilidad estadística", valor: "Muy limitada en ENAHO" },
      { label: "Condición contractual", valor: "Frecuentemente informal" },
    ],
    descripcion:
      "Las cuarterías son aglomeraciones de habitaciones precarias, generalmente sin servicios propios, donde familias en extrema vulnerabilidad residen en condiciones de hacinamiento. Constituyen hábitats de pobreza con derechos vulnerados, invisibles en gran medida para los sistemas de registro del Estado.",
    fuente: "Hambre y Pobreza en Costa Rica 2025, cap. 3.4",
  },
  {
    id: "calle",
    icono: <PersonStanding/>,
    titulo: "Personas en situación de calle",
    cifra: "7 133",
    unidad: "personas registradas",
    color: "#C8102E",
    resumen: "Más del triple desde 2019. Crisis humanitaria declarada por autoridades.",
    datos: [
      { label: "Total nacional 2025", valor: "7 133" },
      { label: "Total nacional 2019", valor: "2 313" },
      { label: "Crecimiento 2019→2025", valor: "+208 %" },
      { label: "Solo en cantón Central SJ (2024)", valor: "5 611" },
      { label: "Salto en 2024 (un solo año)", valor: "+40 %" },
      { label: "Adultos mayores en calle", valor: "673" },
      { label: "Con alguna adicción", valor: "67,26 %" },
      { label: "Con patología de salud mental", valor: "30–40 %" },
    ],
    descripcion:
      "La población en situación de calle ha experimentado un crecimiento sostenido y alarmante. El alcalde de San José lo calificó como \"un problema humano de salud pública, incluso de emergencia nacional\". San José concentra más del 51% del total. El 2024 marcó un punto de inflexión con un salto del 40% en un solo año.",
    fuente: "IMAS 2025; Municipalidad de San José 2024",
  },
];

// Datos evolución personas en calle por provincia
const EVOLUCION_CALLE = [
  { provincia: "San José", y2019: 1215, y2022: 2004, y2025: 3643 },
  { provincia: "Alajuela", y2019: 476, y2022: 622, y2025: 1159 },
  { provincia: "Puntarenas", y2019: 165, y2022: 353, y2025: 694 },
  { provincia: "Heredia", y2019: 118, y2022: 235, y2025: 497 },
  { provincia: "Limón", y2019: 115, y2022: 201, y2025: 477 },
  { provincia: "Cartago", y2019: 158, y2022: 239, y2025: 425 },
  { provincia: "Guanacaste", y2019: 66, y2022: 105, y2025: 238 },
];

const MAX_VAL = 3643;

function BarraEvolucion({ dato }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 6, color: "#1A1A1A" }}>
        {dato.provincia}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {[
          { year: "2019", val: dato.y2019, color: "#C8E6FA" },
          { year: "2022", val: dato.y2022, color: "#5BA4CF" },
          { year: "2025", val: dato.y2025, color: "#C8102E" },
        ].map(({ year, val, color }) => (
          <div key={year} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{
              width: 36, fontSize: 10, color: "#9B9B9B", textAlign: "right", flexShrink: 0,
            }}>
              {year}
            </div>
            <div style={{ flex: 1, height: 14, background: "#F0EDE8", borderRadius: 2 }}>
              <div style={{
                height: "100%", width: `${(val / MAX_VAL) * 100}%`,
                background: color, borderRadius: 2,
                transition: "width 0.7s ease",
                display: "flex", alignItems: "center", justifyContent: "flex-end",
              }}>
                <span style={{
                  fontSize: 9, color: val > 300 ? "#fff" : "#444",
                  paddingRight: 4, paddingLeft: 4,
                }}>
                  {val.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Habitats() {
  const [activo, setActivo] = useState("asentamientos");
  const hab = HABITATS.find((h) => h.id === activo);

  return (
    <section style={{ background: "#F5F3EE", padding: "72px 5%" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>

        <div style={{ marginBottom: 40 }}>
          
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 700, lineHeight: 1.2,
          }}>
            Habitats
          </h2>
          <p style={{ color: "#6B6B6B", fontSize: 16, lineHeight: 1.75, maxWidth: 580, marginTop: 10 }}>
            Cuatro expresiones territoriales de la pobreza extrema en Costa Rica que demandan
            respuesta pastoral, comunitaria y política.
          </p>
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
          {HABITATS.map((h) => (
            <button
              key={h.id}
              onClick={() => setActivo(h.id)}
              style={{
                padding: "10px 20px",
                borderRadius: 4,
                border: `1.5px solid ${activo === h.id ? h.color : "#E2DDD5"}`,
                background: activo === h.id ? h.color : "#fff",
                color: activo === h.id ? "#fff" : "#444",
                fontSize: 13, fontWeight: 600, cursor: "pointer",
                transition: "all 0.2s",
                display: "flex", alignItems: "center", gap: 7,
              }}
            >
              <span>{h.icono}</span> {h.titulo}
            </button>
          ))}
        </div>


        <FadeIn>
        <div style={{
          display: "grid",
          gridTemplateColumns: activo === "calle" ? "1fr 1fr" : "1fr 1.4fr",
          gap: 24,
        }}>

          {/* Columna izquierda cifra y datos */}
          <div style={{
            background: "#fff", borderRadius: 6, padding: "32px 28px",
            borderTop: `4px solid ${hab.color}`,
            boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <span style={{ fontSize: 36 }}>{hab.icono}</span>
              <div>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(28px, 3.5vw, 44px)",
                  fontWeight: 700, color: hab.color, lineHeight: 1,
                }}>
                  {hab.cifra}
                </div>
                <div style={{ fontSize: 13, color: "#6B6B6B" }}>{hab.unidad}</div>
              </div>
            </div>

            <p style={{ fontSize: 15, color: "#444", lineHeight: 1.75, marginBottom: 20 }}>
              {hab.descripcion}
            </p>

            <div style={{
              background: "#F5F3EE", borderRadius: 4, padding: "16px 18px",
              display: "flex", flexDirection: "column", gap: 10,
            }}>
              {hab.datos.map((d) => (
                <div
                  key={d.label}
                  style={{
                    display: "flex", justifyContent: "space-between", alignItems: "flex-start",
                    fontSize: 13, gap: 12,
                    paddingBottom: 8, borderBottom: "1px solid #E2DDD5",
                  }}
                >
                  <span style={{ color: "#6B6B6B", flex: 1 }}>{d.label}</span>
                  <span style={{ fontWeight: 600, color: "#1A1A1A", textAlign: "right" }}>{d.valor}</span>
                </div>
              ))}
            </div>

            <p style={{ fontSize: 11, color: "#9B9B9B", marginTop: 14 }}>
              Fuente: {hab.fuente}
            </p>
          </div>


          {/* Columna derecha */}
          <div style={{
            background: "#fff", borderRadius: 6, padding: "28px 28px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
          }}>
            {activo === "calle" ? (
              <>
                <div style={{
                  fontSize: 12, fontWeight: 600, letterSpacing: "0.12em",
                  textTransform: "uppercase", color: "#9B9B9B", marginBottom: 20,
                }}>
                  Evolución por provincia 2019 → 2022 → 2025
                </div>
                {EVOLUCION_CALLE.map((d) => (
                  <BarraEvolucion key={d.provincia} dato={d} />
                ))}
                <div style={{ display: "flex", gap: 16, marginTop: 16, flexWrap: "wrap" }}>
                  {[
                    { año: "2019", color: "#C8E6FA" },
                    { año: "2022", color: "#5BA4CF" },
                    { año: "2025", color: "#C8102E" },
                  ].map((l) => (
                    <div key={l.año} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <div style={{ width: 12, height: 12, background: l.color, borderRadius: 2 }} />
                      <span style={{ fontSize: 11, color: "#6B6B6B" }}>{l.año}</span>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div style={{
                  fontSize: 12, fontWeight: 600, letterSpacing: "0.12em",
                  textTransform: "uppercase", color: "#9B9B9B", marginBottom: 20,
                }}>
                  Contexto y acción de Cáritas
                </div>

                <blockquote style={{
                  borderLeft: `3px solid ${hab.color}`,
                  paddingLeft: 16, marginBottom: 24,
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 15, fontStyle: "italic", color: "#444", lineHeight: 1.75,
                }}>
                  {activo === "asentamientos"
                    ? "\"Los asentamientos informales concentran a miles de familias que ocupan espacio urbano y rural sin acceso regular a servicios básicos.\""
                    : activo === "deficit"
                    ? "\"La falta de vivienda es una 'cuestión central de la ecología humana', que afecta profundamente el desarrollo de las familias.\" — Papa Francisco"
                    : "\"Los pobres no son una distracción para la Iglesia, sino los hermanos y hermanas más amados.\" — León XIV, IX Jornada Mundial de los Pobres, 2025"}
                </blockquote>


                <div style={{ marginBottom: 20 }}>
                  <div style={{
                    fontSize: 13, fontWeight: 600, color: "#1A1A1A", marginBottom: 12,
                  }}>
                    ¿Cómo responde Cáritas Costa Rica?
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {(activo === "asentamientos"
                      ? [
                          "Acompañamiento comunitario en precarios de 8 diócesis",
                          "Incidencia para políticas públicas de regularización",
                          "Gestión del riesgo en asentamientos vulnerables",
                          "Red Eclesial de apoyo a familias desplazadas",
                        ]
                      : activo === "deficit"
                      ? [
                          "Proyectos de mejora habitacional con comunidades",
                          "Alianzas con MIVAH y municipalidades",
                          "Asesoría jurídica para acceso a programas de vivienda",
                          "Capacitación en construcción digna y sostenible",
                        ]
                      : [
                          "Comedores solidarios en diócesis de todo el país",
                          "Red Eclesial de Personas en Situación de Calle",
                          "Acompañamiento psicosocial y espiritual",
                          "Incidencia ante el Estado por respuesta humanitaria",
                        ]
                    ).map((accion) => (
                      <div key={accion} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                        <span style={{ color: hab.color, fontWeight: 700, flexShrink: 0 }}>→</span>
                        <span style={{ fontSize: 14, color: "#444", lineHeight: 1.6 }}>{accion}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{
                  background: "#F5F3EE", borderRadius: 4, padding: "14px 16px",
                  display: "flex", gap: 12, alignItems: "flex-start",
                }}>
                  <span style={{
                    background: hab.color, color: "#fff", borderRadius: 4,
                    padding: "4px 10px", fontSize: 12, fontWeight: 700, flexShrink: 0,
                  }}>
                    {activo === "calle" ? "EJE 02" : activo === "asentamientos" ? "EJE 04" : "EJE 05"}
                  </span>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: "#1A1A1A" }}>
                      Vinculado al Marco Estratégico 2026-2028
                    </div>
                    <div style={{ fontSize: 12, color: "#6B6B6B", marginTop: 3 }}>
                      {activo === "calle"
                        ? "Democracia, ciudadanía, derechos humanos y construcción de paz"
                        : activo === "asentamientos"
                        ? "Ecología integral: cuidado de la creación, gestión del riesgo y atención de emergencias"
                        : "Incidencia política y social"}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default Habitats;