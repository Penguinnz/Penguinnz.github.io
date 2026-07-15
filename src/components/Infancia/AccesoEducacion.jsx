import { Baby, Backpack, CircleQuestionMark, MoveDown, School } from "lucide-react";
import { useState } from "react";

const COBERTURA = [
  {
    id: "temprana", rango: "0-4 años", etapa: "Materno, Interactivo, Guardería",
    valor: 18.8, estado: "critico", icono: <Baby/>,
  },
  {
    id: "transicion", rango: "5-6 años", etapa: "Transición y preparatoria",
    valor: 97.5, estado: "positivo", icono:<Backpack/>,
  },
  {
    id: "primaria", rango: "7-12 años", etapa: "Escuela y colegio",
    valor: 99.7, estado: "positivo", icono:<School/>,
  },
];

const COLOR_ESTADO = {
  positivo: "#2D6A4F",
  critico: "#C8102E",
};

function Donut({ valor, color, size = 92 }) {
  const r = (size - 12) / 2;
  const circ = 2 * Math.PI * r;
  const dash = (valor / 100) * circ;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#E2DDD5" strokeWidth="10" />
      <circle
        cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth="10"
        strokeDasharray={`${dash} ${circ}`} strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        style={{ transition: "stroke-dasharray 0.8s ease" }}
      />
      <text x="50%" y="50%" textAnchor="middle" dy="0.35em"
        fontSize="18" fontWeight="700" fill="#1A1A1A" fontFamily="'Playfair Display', serif">
        {valor}%
      </text>
    </svg>
  );
}

function AccesoEducacion() {
  const [verCrisis, setVerCrisis] = useState(false);

  return (
    <section style={{ background: "#F5F3EE", padding: "72px 5%" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>

        <div style={{ marginBottom: 36 }}>
          <p style={{
            fontSize: 11, fontWeight: 600, letterSpacing: "0.18em",
            textTransform: "uppercase", color: "#C8102E", marginBottom: 10,
          }}>
            Educación
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 3.5vw, 38px)",
            fontWeight: 700, lineHeight: 1.2,
          }}>
            Acceso a la{" "}
            <span style={{ color: "#C8102E" }}>Educación</span>
          </h2>
          <p style={{ color: "#444", fontSize: 16, lineHeight: 1.8, maxWidth: 700, marginTop: 12 }}>
            La educación primaria alcanza al 99,7% de los niños, pero la educación temprana,
            decisiva para el desarrollo cognitivo y emocional, cubre apenas al 18,8%.
          </p>
        </div>

      
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16,
          marginBottom: 28,
        }}>
          {COBERTURA.map((c) => (
            <div
              key={c.id}
              style={{
                background: "#fff", borderRadius: 6, padding: "24px 20px",
                textAlign: "center", boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                borderTop: `3px solid ${COLOR_ESTADO[c.estado]}`,
              }}
            >
              <span style={{ fontSize: 24 }}>{c.icono}</span>
              <div style={{ margin: "12px 0" }}>
                <Donut valor={c.valor} color={COLOR_ESTADO[c.estado]} />
              </div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#1A1A1A" }}>{c.etapa}</div>
              <div style={{ fontSize: 12, color: "#6B6B6B", marginTop: 2 }}>{c.rango}</div>
            </div>
          ))}

          {/* No asisten */}
          <div style={{
            background: "#4a4343", borderRadius: 6, padding: "24px 20px",
            textAlign: "center", color: "#fff",
          }}>
            <span style={{ fontSize: 24 }}><CircleQuestionMark/></span>
            <div style={{
              fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 700,
              color: "#F5C84A", margin: "10px 0 6px",
            }}>
              24,9%
            </div>
            <div style={{ fontSize: 13, fontWeight: 600 }}>No asiste a educación formal</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", marginTop: 2 }}>0-12 años</div>
          </div>
        </div>

        <button
          onClick={() => setVerCrisis(!verCrisis)}
          style={{
            background: "none", border: "1.5px solid #C8102E", color: "#C8102E",
            padding: "10px 20px", borderRadius: 4, fontSize: 13, fontWeight: 600,
            cursor: "pointer", marginBottom: verCrisis ? 16 : 0,
          }}
        >
          {verCrisis ? "Ocultar" : "Ver"} Contexto
        </button>

        {verCrisis && (
          <div style={{
            background: "#fff", borderRadius: 8, padding: "28px 32px",
            borderLeft: "4px solid #C8102E",
          }}>
            <p style={{ fontSize: 14, color: "#444", lineHeight: 1.8, marginBottom: 14 }}>
              El Noveno Informe Estado de la Educación (2023) documenta la situación más difícil
              del sistema educativo público desde la década de 1980, agravada por el
              "apagón educativo" 2018-2021 y caídas sostenidas de la inversión per cápita.
            </p>
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12,
            }}>
              {[
                { val: "4,9%", label: "del PIB en presupuesto MEP 2025" },
                { val: "8%", label: "exigido por la Constitución Política" },
                { val: <MoveDown/>, label: "Deterioro de salarios reales del magisterio" },
              ].map((d) => (
                <div key={d.label} style={{
                  background: "#F5F3EE", borderRadius: 4, padding: "14px 16px", textAlign: "center",
                }}>
                  <div style={{
                    fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700,
                    color: "#C8102E",
                  }}>
                    {d.val}
                  </div>
                  <div style={{ fontSize: 12, color: "#6B6B6B", marginTop: 4 }}>{d.label}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 13, color: "#6B6B6B", marginTop: 16, fontStyle: "italic" }}>
              "La Iglesia se le presenta, en este contexto, ocasión de abogar por una transformación
              educativa estructural y de ser parte de las sinergias de la sociedad civil."
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default AccesoEducacion;