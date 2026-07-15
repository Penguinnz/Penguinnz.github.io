import { Clapperboard, Download, GraduationCap, MessageCircleMore, Search, Smartphone } from 'lucide-react';
import '../../styles/style.css'

const USOS = [
  { id: "streaming", icono: <Clapperboard/>, etiqueta: "Streaming / música", valor: 69.9, tipo: "entretenimiento" },
  { id: "info", icono: <Search/>, etiqueta: "Buscar información", valor: 50.0, tipo: "educativo" },
  { id: "mensajes", icono: <MessageCircleMore/>, etiqueta: "Enviar mensajes", valor: 26.5, tipo: "comunicacion" },
  { id: "educacion", icono: <GraduationCap/>, etiqueta: "Educación / aprendizaje virtual", valor: 15.8, tipo: "educativo" },
  { id: "apps", icono: <Download/>, etiqueta: "Descargar aplicaciones", valor: 15.5, tipo: "otro" },
  { id: "dispositivos", icono:<Smartphone/>, etiqueta: "Instalar dispositivos (9+ años)", valor: 2.2, tipo: "otro" },
];

const COLOR_TIPO = {
  entretenimiento: "#E78C0A",
  educativo: "#2D6A4F",
  comunicacion: "#0057A8",
  otro: "#9B9B9B",
};

const MAX = 70;

function AccesoTecnologia() {
  return (
    <section style={{ background: "#fff", padding: "72px 5%" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>

        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 48, alignItems: "start",
        }}>

          {/* Texto */}
          <div>
            <p style={{
              fontSize: 11, fontWeight: 600, letterSpacing: "0.18em",
              textTransform: "uppercase", color: "#C8102E", marginBottom: 10,
            }}>
              Brecha digital
            </p>
            <h2 style={{
              fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 3.5vw, 36px)",
              fontWeight: 700, lineHeight: 1.2, marginBottom: 16,
            }}>
              Acceso {" "}
              <span style={{ color: "#C8102E" }}>Tecnologico</span>
            </h2>
            <p style={{ color: "#444", fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
              7 de cada 10 niños usan tecnología para entretenimiento, pero solo 1,6 de cada 10
              la usa para educación virtual. La mitad no tiene acceso adecuado a internet para
              buscar información.
            </p>

            <div style={{ display: "flex", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
              {Object.entries(COLOR_TIPO).filter(([k]) => k !== "otro").map(([tipo, color]) => (
                <div key={tipo} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{ width: 10, height: 10, borderRadius: 2, background: color }} />
                  <span style={{ fontSize: 12, color: "#6B6B6B", textTransform: "capitalize" }}>{tipo}</span>
                </div>
              ))}
            </div>

            <div style={{
              background: "#F5F3EE", borderLeft: "3px solid #0057A8", borderRadius: 4,
              padding: "16px 20px", fontSize: 13, color: "#444", lineHeight: 1.7,
            }}>
              • El uso predominante para entretenimiento, sin
              supervisión adecuada, expone a contenido inapropiado y limita el desarrollo de
              habilidades cognitivas.<br></br>
              <br></br>
              • Las inequidades en el ámbito tecnológico también deben ser consideradas en las tareas de evangelización infantil, de manera que se ideen estrategias para que ningún niño se quede rezagado. Las 
              iniciativas de formación de padres de familia de niños en catequesis debería considerar 
              capacitación para el acompañamiento de sus hijos en el acceso a las tecnologías informáticas.

            </div>
          </div>

          {/* Barras horizontales */}
          <div style={{ background: "#F5F3EE", borderRadius: 8, padding: "28px 28px" }}>
            {USOS.map((u) => (
              <div key={u.id} style={{ marginBottom: 18 }}>
                <div style={{
                  display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 6,
                }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 7 }}>
                    <span>{u.icono}</span> {u.etiqueta}
                  </span>
                  <span style={{ fontWeight: 700, color: COLOR_TIPO[u.tipo] }}>{u.valor}%</span>
                </div>
                <div style={{ height: 14, background: "#fff", borderRadius: 4 }}>
                  <div style={{
                    height: "100%", width: `${(u.valor / MAX) * 100}%`,
                    background: COLOR_TIPO[u.tipo], borderRadius: 4,
                    transition: "width 0.7s ease",
                  }} />
                </div>
              </div>
            ))}
            <p style={{ fontSize: 11, color: "#9B9B9B", marginTop: 4 }}>
              Fuente: INEC, Encuesta Nacional de Hogares 2023
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccesoTecnologia;