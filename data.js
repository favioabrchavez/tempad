const TEMPAD_DATA = {

  // ── Reunión Entre Semana ───────────────────────────────────────────
  mwb: {
    nombre:       "Reunión de entre semana",
    color:        "#6b130b",
    shadingColor: "#f0e7e7",
    programa: [
     {tipo: "extra",texto: "Palabras de introducción", mins: 1},
      {tipo: "tdlb", texto: "1. ¿Estamos confiando en la persona correcta?", mins: 10},
      {tipo: "tdlb", texto: "2. Busquemos perlas escondidas", mins: 10},
      {tipo: "tdlb", texto: "3. Lectura de la Biblia", mins: 4},
      {tipo: "smm",  texto: "4. Empiece conversaciones", mins: 3},
      {tipo: "smm",  texto: "5. Haga revisitas", mins: 4},
      {tipo: "smm",  texto: "6. Haga discípulos", mins: 5},
      {tipo: "extra",texto: "Consejo para estudiantes", mins: 1},
      {tipo: "nvc",  texto: "7. Joven, confía en los consejos de la Biblia", mins: 15},
      {tipo: "nvc",  texto: "8. Estudio bíblico de la congregación", mins: 30},
      {tipo: "extra",texto: "Palabras de conclusión", mins: 3}
    ]
  },

  // ── Reunión Fin de Semana ──────────────────────────────────────────
  w: {
    nombre:       "Reunión del fin de semana",
    color:        "#224680",
    shadingColor: "#e9edf2",
    programa: [
      {tipo: "CO",  texto: "Discurso público", mins: 30},
      {tipo: "CO",   texto: "<b>Estudio de <i>La Atalaya</i></b>: Cómo utilizar los principios bíblicos para educar la conciencia", mins: 60}
    ]
  },

  // ── Entre Semana · Visita del Superintendente ──────────────────────
  mwb_overseer: {
    nombre:       "Reunión de entre semana",
    color:        "#6b130b",
    shadingColor: "#f0e7e7",
    programa: [
      {tipo: "extra",texto: "Palabras de introducción", mins: 1},
      {tipo: "tdlb", texto: "1. ¿Estamos confiando en la persona correcta?", mins: 10},
      {tipo: "tdlb", texto: "2. Busquemos perlas escondidas", mins: 10},
      {tipo: "tdlb", texto: "3. Lectura de la Biblia", mins: 4},
      {tipo: "smm",  texto: "4. Empiece conversaciones", mins: 3},
      {tipo: "smm",  texto: "5. Haga revisitas", mins: 4},
      {tipo: "smm",  texto: "6. Haga discípulos", mins: 5},
      {tipo: "extra",texto: "Consejo para estudiantes", mins: 1},
      {tipo: "nvc",  texto: "7. Joven, confía en los consejos de la Biblia", mins: 15},
      {tipo: "extra",texto: "Palabras de conclusión", mins: 3},
      {tipo: "CO",   texto: "<b>Discurso de servicio</b>: ¿Qué está dispuesto a hacer “por las buenas noticias”?", mins: 30 }
    ]
  },

  // ── Fin de Semana · Visita del Superintendente ─────────────────────
  w_overseer: {
    nombre:       "Reunión del fin de semana con la visita del superintendente",
    color:        "#224680",
    shadingColor: "#e9edf2",
    programa: [
      {tipo: "CO",  texto: "Discurso público", mins: 30},
      {tipo: "CO",   texto: "<b>Estudio de <i>La Atalaya</i></b>: Cómo utilizar los principios bíblicos para educar la conciencia", mins: 30},
      {tipo: "CO",  texto: "Discurso final", mins: 30}
    ]
  },

    // ── Asamblea Regional 2026 · Viernes Mañana ───────────────────────
  CO1: {
    nombre:       "Viernes Mañana",
    color:        "#ff852a",
    shadingColor: "#fce5cd",
    programa: [
      { tipo: "extra", texto: "9:20 Video musical"                                                                                           },
      { tipo: "extra", texto: "9:30 Canción 160 y oración"                                                                        },
      { tipo: "CO",    texto: "9:40 <b>DISCURSO DEL PRESIDENTE DE LA ASAMBLEA:<b> Es realista la idea de ser felices para siempre?", mins: 29 },
      { tipo: "CO",    texto: "10:10 <b>PRODUCCIÓN AUDIOVISUAL:</b> <i>Las buenas noticias segúnn Jesús: Episodio 4</i>",  mins: 29 }
    ]
  },

  // ── Asamblea Regional 2026 · Viernes Tarde ────────────────────────
  CO2: {
    nombre:       "Viernes Tarde",
    color:        "#ff852a",
    shadingColor: "#fce5cd",
    programa: []
  },

  // ── Asamblea Regional 2026 · Sábado Mañana ───────────────────────
  CO3: {
    nombre:       "S\u00e1bado Ma\u00f1ana",
    color:        "#ff852a",
    shadingColor: "#fce5cd",
    programa: []
  },

  // ── Asamblea Regional 2026 · Sábado Tarde ─────────────────────────
  CO4: {
    nombre:       "S\u00e1bado Tarde",
    color:        "#ff852a",
    shadingColor: "#fce5cd",
    programa: []
  },

  // ── Asamblea Regional 2026 · Domingo Mañana ──────────────────────
  CO5: {
    nombre:       "Domingo Ma\u00f1ana",
    color:        "#ff852a",
    shadingColor: "#fce5cd",
    programa: []
  },

  // ── Asamblea Regional 2026 · Domingo Tarde ────────────────────────
  CO6: {
    nombre:       "Domingo Tarde",
    color:        "#ff852a",
    shadingColor: "#fce5cd",
    programa: []
  }

};
