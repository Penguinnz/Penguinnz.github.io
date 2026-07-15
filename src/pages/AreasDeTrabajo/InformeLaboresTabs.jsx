
import { CircleCheck, CircleDashed, RefreshCcw } from "lucide-react";
import { useState } from "react";

const DATA = {
  institucional: {
    titulo: "Vida institucional",
    subtitulo: "Fortalecimiento, identidad y desarrollo humano integral",
    color: "#0057A8",
    logros: [
      {
        titulo: "Encadenamientos solidarios",
        desc: "Alianza renovada con Coopedota (65 años, ~1000 productores). Relación activa con Ateco para recubrimientos de bajo consumo energético.",
      },
      {
        titulo: "Comunicación sostenida",
        desc: "Programa semanal \"Somos Caritas\" en Radio y TV San José, sin interrupciones, con entrevistas a directores diocesanos.",
      },
      {
        titulo: "Identidad y espiritualidad",
        desc: "Primer encuentro presencial del Equipo de Identidad en Colombia (febrero 2025). Elaboración de fascículos formativos en curso.",
      },
      {
        titulo: "Estándares de Gestión retomados",
        desc: "Proceso reactivado en febrero 2024 con apoyo de Cáritas LAC, tras un período sin seguimiento desde 2019.",
      },
      {
        titulo: "Análisis sociopastoral",
        desc: "Nueve estudios publicados como insumo de reflexión pastoral durante el período, incluyendo pobreza, niñez, adultos mayores y violencia de género.",
      },
      {
        titulo: "Incidencia sociopolítica",
        desc: "Encuentro Patriótico activo en seguridad ciudadana. Representación en el CONIS. Propuesta de régimen mipyme presentada a candidatos.",
      },
      {
        titulo: "Inteligencia Artificial",
        desc: "Kit de herramientas de IA adoptado por Cáritas LAC. Incorporación a equipos internacionales de IA de CI y LAC.",
      },
    ],
    enCurso: [
      {
        titulo: "Autoevaluación de Estándares de Gestión",
        desc: "Roxana Durán facilitará la documentación a finales de enero 2026 para iniciar la autoevaluación institucional, previo a la evaluación externa de Cáritas Internationalis.",
      },
      {
        titulo: "Sistema de registro de participantes",
        desc: "Avanza en la diócesis de Alajuela, la Arquidiócesis cuenta con sistema propio. Pendiente de consolidación y adaptación a otras diócesis.",
      },
      {
        titulo: "Salud desde la Economía Social Solidaria",
        desc: "Propuesta retomada en 2025 ante la crisis de listas de espera de la CCSS, encuentro reprogramado para 2026.",
      },
    ],
    pendientes: [
      "Pastoral Social Transformadora: formación de facilitadores diocesanos quedó rezagada",
      "Estrategia de autofinanciamiento aún no concluida (Food for the Poor no incluyó a Costa Rica)",
      "Diseño del modelo de Supermercado Solidario sin avance",
      "Profundización en documentos fundamentales de ética de CI a nivel diocesano",
      "Observatorio Sociopastoral sigue sin concretarse",
    ],
  },

  derechosHumanos: {
    titulo: "Derechos humanos, justicia y paz",
    subtitulo: "Movilidad humana, pastoral penitenciaria y construcción de paz",
    color: "#C8102E",
    logros: [
      {
        titulo: "Atención a población migrante",
        desc: "Asistencia humanitaria directa y articulación con ACNUR, OIM, HIAS y el Servicio Jesuita para Migrantes, con énfasis en población venezolana.",
      },
      {
        titulo: "Participación en CONATT",
        desc: "Cáritas Costa Rica integrada al equipo de prevención de la Coalición Nacional contra la Trata y el Tráfico de Personas.",
      },
      {
        titulo: "Asesoría jurídica migratoria",
        desc: "Orientación en refugio, residencias y permisos de trabajo, con apoyo de estudiantes de Derecho especializados en migración.",
      },
      {
        titulo: "Pastoral Penitenciaria activa",
        desc: "Presencia sostenida en las 8 diócesis con visitas regulares a centros penales, a pesar de la inestabilidad del sistema penitenciario.",
      },
      {
        titulo: "Foro regional sobre crimen organizado",
        desc: "Realizado el 2 de septiembre de 2025 con panelistas de México, Colombia y Ecuador/España.",
      },
      {
        titulo: "Observación electoral en Honduras",
        desc: "Primera participación de Cáritas regional como entidad observadora en un proceso electoral.",
      },
    ],
    enCurso: [
      {
        titulo: "Proyecto con jóvenes migrantes nicaragüenses",
        desc: "Formulado con CENIEF-UPF y Progettomondo para presentar a la Conferencia Episcopal Italiana, se implementaría en Ciudad Quesada, Limón y Puntarenas.",
      },
      {
        titulo: "Plan de trabajo regional de DDHH hasta 2027",
        desc: "En construcción con nuevo coordinador (Jorge Chávez, Uruguay) tras un período de pausa en las reuniones.",
      },
    ],
    pendientes: [
      "Acuerdo de cooperación con el Ministerio de Justicia para reinserción social",
      "Consolidación y organización de la Red Eclesial de Personas en Situación de Calle",
    ],
  },

  ecologia: {
    titulo: "Ecología integral",
    subtitulo: "Cuidado de la creación, gestión del riesgo y atención de emergencias",
    color: "#2D6A4F",
    logros: [
      {
        titulo: "Reactivación de REMAM",
        desc: "Capítulo nacional reactivado tras período de inactividad, nueva asistente nombrada y participación activa en la dinámica regional.",
      },
      {
        titulo: "Programa Bandera Azul Ecológica",
        desc: "Continuidad en la categoría eclesial, complementado con el modelo de Comunidades Laudato si' impulsado desde la Arquidiócesis.",
      },
      {
        titulo: "Respuesta a emergencia por lluvias (nov. 2024)",
        desc: "Cooperación interdiocesana en alimentos y bienes, apoyo de CRS y Cáritas Chile en Tilarán-Liberia, Limón, Puntarenas y San Isidro de El General.",
      },
      {
        titulo: "Vinculación al programa Empower de CRS",
        desc: "Capacitaciones técnicas en gestión del riesgo, incluyendo transferencias monetarias a familias afectadas por desastres.",
      },
      {
        titulo: "Participación en Mesa de GRD y CATAPS",
        desc: "Representación sostenida en espacios interinstitucionales de gestión del riesgo y atención psicosocial en emergencias.",
      },
    ],
    enCurso: [
      {
        titulo: "Reorganización del área de GRD",
        desc: "P. Ronald Sáenz nombrado referente y coordinador, en desarrollo una política institucional de GRD y un equipo nacional.",
      },
    ],
    pendientes: [
      "Concluir el protocolo eclesial de albergues",
      "Mapeo de instalaciones eclesiales para albergue temporal en emergencias",
      "Protocolo de seguridad de instalaciones eclesiales",
      "Organización nacional de la Pastoral de la Tierra y las Gentes del Mar",
      "Acompañamiento a procesos de adaptación y mitigación del cambio climático",
      "Conformación del equipo de asesores técnicos en ecología integral",
    ],
  },

  comunionCI: {
    titulo: "Comunión con Caritas Internationalis",
    subtitulo: "Articulación regional y vínculos institucionales",
    color: "#7B2D8B",
    logros: [
      {
        titulo: "Traspaso de coordinación CAMEX",
        desc: "Concluido el servicio de coordinación de la zona CAMEX a cargo de Costa Rica, propuesta exitosa de Cáritas Honduras como sucesora.",
      },
      {
        titulo: "Presencia regional sostenida",
        desc: "Participación constante en espacios de directores de la región LAC, manteniendo los vínculos institucionales construidos en el tiempo.",
      },
      {
        titulo: "Redes eclesiales ampliadas",
        desc: "Trabajo articulado con REMAM y CLAMOR, redes que trascienden el ámbito de Cáritas pero nacieron de su iniciativa junto al CELAM.",
      },
    ],
    enCurso: [
      {
        titulo: "Participación de referentes en instancias regionales",
        desc: "Contribución activa desde responsabilidades específicas, asegurando continuidad del compromiso en las instancias de trabajo común.",
      },
    ],
    pendientes: [],
  },
};

const ICONOS = { logros: <CircleCheck/> , enCurso: <RefreshCcw/>, pendientes: <CircleDashed/> };
const TITULOS_TAB = { logros: "Logros del período", enCurso: "En curso", pendientes: "Pendientes" };

function InformeLaboresTabs({ eje = "institucional" }) {
  const data = DATA[eje] || DATA.institucional;
  const tabsDisponibles = ["logros", "enCurso", ...(data.pendientes.length ? ["pendientes"] : [])];
  const [tab, setTab] = useState("logros");

  return (
    <section style={{ background: "#FAFAF8", padding: "72px 5%" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        
        <div style={{ marginBottom: 32 }}>
          <p style={{
            fontSize: 11, fontWeight: 600, letterSpacing: "0.18em",
            textTransform: "uppercase", color: data.color, marginBottom: 10,
          }}>
            Informe de Presidencia - Asamblea General 2025
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 3.5vw, 38px)",
            fontWeight: 700, lineHeight: 1.2,
          }}>
            {data.titulo}
          </h2>
          <p style={{ color: "#6B6B6B", fontSize: 16, lineHeight: 1.7, marginTop: 8, maxWidth: 640 }}>
            {data.subtitulo}
          </p>
        </div>

        
        <div style={{ display: "flex", gap: 8, marginBottom: 28, borderBottom: "1px solid #E2DDD5" }}>
          {tabsDisponibles.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                padding: "12px 22px",
                border: "none",
                borderBottom: tab === t ? `3px solid ${data.color}` : "3px solid transparent",
                background: "none",
                color: tab === t ? data.color : "#6B6B6B",
                fontSize: 14, fontWeight: 600, cursor: "pointer",
                transition: "all 0.2s",
                display: "flex", alignItems: "center", gap: 8,
              }}
            >
              <span style={{
                width: 20, height: 20, borderRadius: "50%",
                background: tab === t ? data.color : "#E2DDD5",
                color: tab === t ? "#fff" : "#9B9B9B",
                fontSize: 11, display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                {ICONOS[t]}
              </span>
              {TITULOS_TAB[t]}
              <span style={{
                fontSize: 11, color: "#9B9B9B", background: "#F0EDE8",
                borderRadius: 10, padding: "1px 7px",
              }}>
                {data[t].length}
              </span>
            </button>
          ))}
        </div>

        
        {(tab === "logros" || tab === "enCurso") && (
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16,
          }}>
            {data[tab].map((item) => (
              <div
                key={item.titulo}
                style={{
                  background: "#fff", borderRadius: 6, padding: "22px 22px",
                  borderLeft: `3px solid ${data.color}`,
                  boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 8 }}>
                  <span style={{
                    width: 22, height: 22, borderRadius: "50%", background: data.color,
                    color: "#fff", fontSize: 12, flexShrink: 0,
                    display: "flex", alignItems: "center", justifyContent: "center", marginTop: 1,
                  }}>
                    {ICONOS[tab]}
                  </span>
                  <h3 style={{ fontSize: 15, fontWeight: 600, color: "#1A1A1A", lineHeight: 1.4 }}>
                    {item.titulo}
                  </h3>
                </div>
                <p style={{ fontSize: 13.5, color: "#6B6B6B", lineHeight: 1.7, paddingLeft: 32 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        )}

        
        {tab === "pendientes" && (
          <div style={{
            background: "#fff", borderRadius: 8, padding: "28px 32px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
          }}>
            <p style={{ fontSize: 13, color: "#6B6B6B", marginBottom: 18, lineHeight: 1.7 }}>
              Tareas planificadas para el período anterior que quedan como prioridad para el
              siguiente ciclo de trabajo.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {data.pendientes.map((p, i) => (
                <div key={i} style={{
                  display: "flex", gap: 12, alignItems: "flex-start",
                  paddingBottom: 12,
                  borderBottom: i < data.pendientes.length - 1 ? "1px solid #F0EDE8" : "none",
                }}>
                  <span style={{
                    width: 8, height: 8, borderRadius: "50%", border: `2px solid ${data.color}`,
                    flexShrink: 0, marginTop: 5,
                  }} />
                  <span style={{ fontSize: 14, color: "#444", lineHeight: 1.6 }}>{p}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default InformeLaboresTabs;