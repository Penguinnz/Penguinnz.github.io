
import { ActivityIcon, Church, Hammer, House, OctagonAlert, UsersRound } from "lucide-react";
import { useState } from "react";

const INDICADORES = [
  { id: "Pobreza", icono: <House/>, valor: 25.8, etiqueta: "En situación de pobreza", color: "#E78C0A" },
  { id: "Extrema", icono: <OctagonAlert/>, valor: 13.5, etiqueta: "En pobreza extrema", color: "#C8102E" },
  { id: "Vivienda", icono: <Hammer/>, valor: 10.0, etiqueta: "Viviendas en mal estado", color: "#7B2D8B" },
  { id: "Servicios", icono: <ActivityIcon/>, valor: 6.7, etiqueta: "Servicios básicos deficientes", color: "#0057A8" },
  { id: "Hacinamiento", icono: <UsersRound/>, valor: 3.6, etiqueta: "Hacinamiento", color: "#2D6A4F" },
];

const REGIONES_2022 = [
  { region: "Huetar Caribe", valor: 23.0, color: "#C8102E" },
  { region: "Pacífico Central", valor: 22.5, color: "#E78C0A" },
  { region: "Huetar Norte", valor: 18.5, color: "#E78C0A" },
  { region: "Brunca", valor: 17.4, color: "#0057A8" },
  { region: "Chorotega", valor: 13.6, color: "#0057A8" },
  { region: "Costa Rica (país)", valor: 13.5, color: "#1A1A1A" },
  { region: "Central", valor: 9.0, color: "#2D6A4F" },
];

function InfanciaEntornoSocial() {
  const [tab, setTab] = useState("nacional");

  return (
    <section style={{ background: "#F5F3EE", padding: "72px 5%" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>

        <div style={{ marginBottom: 36 }}>
          <p style={{
            fontSize: 11, fontWeight: 600, letterSpacing: "0.18em",
            textTransform: "uppercase", color: "#C8102E", marginBottom: 10,
          }}>
            Entorno social
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 3.5vw, 38px)",
            fontWeight: 700, lineHeight: 1.2,
          }}>
            Costa Rica: primer lugar en la OCDE en{" "}
            <span style={{ color: "#C8102E" }}>pobreza infantil</span>
          </h2>
          <p style={{ color: "#444", fontSize: 16, lineHeight: 1.8, maxWidth: 700, marginTop: 12 }}>
            Un cuarto de los niños y niñas del país no cuenta con los recursos para satisfacer
            necesidades básicas de alimentación, vivienda, educación y salud.
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
          {[
            { id: "nacional", label: "Datos nacionales 2023" },
            { id: "regional", label: "Pobreza extrema por región (2022)" },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                padding: "10px 20px", borderRadius: 4,
                border: `1.5px solid ${tab === t.id ? "#C8102E" : "#E2DDD5"}`,
                background: tab === t.id ? "#C8102E" : "#fff",
                color: tab === t.id ? "#fff" : "#444",
                fontSize: 13, fontWeight: 600, cursor: "pointer", transition: "0.2s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === "nacional" ? (
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 14,
          }}>
            {INDICADORES.map((i) => (
              <div
                key={i.id}
                style={{
                  background: "#fff", borderRadius: 6, padding: "24px 20px",
                  borderTop: `3px solid ${i.color}`, boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                }}
              >
                <span style={{ fontSize: 26 }}>{i.icono}</span>
                <div style={{
                  fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700,
                  color: i.color, margin: "10px 0 6px",
                }}>
                  {i.valor}%
                </div>
                <div style={{ fontSize: 13, color: "#444", lineHeight: 1.5 }}>{i.etiqueta}</div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{
            background: "#fff", borderRadius: 6, padding: "28px 28px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
          }}>
            {REGIONES_2022.map((r) => (
              <div key={r.region} style={{ marginBottom: 14 }}>
                <div style={{
                  display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 5,
                }}>
                  <span style={{
                    fontWeight: r.region.includes("Costa Rica") ? 700 : 500,
                    color: "#1A1A1A",
                  }}>
                    {r.region}
                  </span>
                  <span style={{ fontWeight: 700, color: r.color }}>{r.valor}%</span>
                </div>
                <div style={{ height: 10, background: "#F0EDE8", borderRadius: 5 }}>
                  <div style={{
                    height: "100%", width: `${(r.valor / 25) * 100}%`,
                    background: r.color, borderRadius: 5, transition: "width 0.6s ease",
                  }} />
                </div>
              </div>
            ))}
            <p style={{ fontSize: 11, color: "#9B9B9B", marginTop: 10 }}>
              Fuente: INEC-Costa Rica, Encuesta Nacional de Hogares 2022. La cifra de 2023 no mejoró
              respecto a 2022, por lo que estos datos regionales conservan vigencia.
            </p>
          </div>
        )}

        {/* Cita / desafío pastoral */}
        <div style={{
          marginTop: 28, background: "#0D2B4E", borderRadius: 8, padding: "28px 32px",
          display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap",
        }}>
          <span style={{ fontSize: 28 }}><Church color="white"/></span>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: "#F5C84A", marginBottom: 6 }}>
              Desafío para la Iglesia
            </div>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 14, lineHeight: 1.75 }}>
              La Iglesia debe convertirse en abogada de la niñez en la búsqueda de su desarrollo
              humano pleno, sin abandonar la acción asistencial que realiza, y desarrollar estrategias
              innovadoras junto con la sociedad civil y el Estado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfanciaEntornoSocial;