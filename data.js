/* =====================================================
   TEMPAD – DATOS DE CONGREGACIONES
   =====================================================
   Qué editar cada semana:
   - fecha y hora de cada congregación
   - Canción 000 → número real
   - <i>---</i> → título de la canción
   - "1. Título" → título del discurso
   - "Orador:" → nombre del orador (solo en w)
   - "Título (000)" → tema y número (solo en w)
   - La Atalaya: actualizar título del estudio
   ===================================================== */

const TEMPAD_DATA = {

  /* ─────────────────────────────────────────
     VISTA HERMOSA (VH)
  ───────────────────────────────────────── */
  VH: {
    nombre: "Vista Hermosa",
    mwb: {
      fecha: "fecha",
      hora: "07:00 p. m.",
      programa: [
        { tipo: "cancion", texto: "Canción 000 <b><i>---</i></b>" },
        { tipo: "intro",   texto: "Palabras de introducción", mins: 1 },
        { tipo: "tdlb",    texto: "1. Título", mins: 10 },
        { tipo: "tdlb",    texto: "2. Busquemos perlas escondidas", mins: 10 },
        { tipo: "tdlb",    texto: "3. Lectura de la Biblia", mins: 4 },
        { tipo: "smm",     texto: "4. Título", mins: 3 },
        { tipo: "smm",     texto: "5. Título", mins: 4 },
        { tipo: "smm",     texto: "6. Título", mins: 5 },
        { tipo: "intro",   texto: "Consejo", mins: 1 },
        { tipo: "cancion", texto: "Canción 000 <b><i>---</i></b>" },
        { tipo: "nvc",     texto: "7. Título", mins: 15 },
        { tipo: "nvc",     texto: "8. Título", mins: 15 },
        { tipo: "nvc",     texto: "9. Estudio bíblico de la congregación", mins: 30 },
        { tipo: "intro",   texto: "Palabras de conclusión", mins: 3 },
        { tipo: "cancion", texto: "Canción 000 <b><i>---</i></b>" }
      ]
    },
    w: {
      fecha: "fecha",
      hora: "6:00 p. m.",
      programa: [
        { tipo: "cancion", texto: "Canción 000 <b><i>---</i></b>" },
        { tipo: "tk",      texto: "<b>Orador:</b> Título (000)", mins: 30, editable: true },
        { tipo: "cancion", texto: "Canción 97 <b><i>Nuestra vida depende de la Palabra de Dios</i></b>" },
        { tipo: "w",       texto: "<b>Estudio de <i>La Atalaya</i></b>: Título", mins: 60 },
        { tipo: "cancion", texto: "Canción 000 <b><i>---</i></b>" }
      ]
    }
  },

  /* ─────────────────────────────────────────
     VISTA ALEGRE (VA)
  ───────────────────────────────────────── */
  VA: {
    nombre: "Vista Alegre",
    mwb: {
      fecha: "fecha",
      hora: "07:00 p. m.",
      programa: [
        { tipo: "cancion", texto: "Canción 000 <b><i>---</i></b>" },
        { tipo: "intro",   texto: "Palabras de introducción", mins: 1 },
        { tipo: "tdlb",    texto: "1. Título", mins: 10 },
        { tipo: "tdlb",    texto: "2. Busquemos perlas escondidas", mins: 10 },
        { tipo: "tdlb",    texto: "3. Lectura de la Biblia", mins: 4 },
        { tipo: "smm",     texto: "4. Título", mins: 3 },
        { tipo: "smm",     texto: "5. Título", mins: 4 },
        { tipo: "smm",     texto: "6. Título", mins: 5 },
        { tipo: "intro",   texto: "Consejo", mins: 1 },
        { tipo: "cancion", texto: "Canción 000 <b><i>---</i></b>" },
        { tipo: "nvc",     texto: "7. Título", mins: 15 },
        { tipo: "nvc",     texto: "8. Título", mins: 15 },
        { tipo: "nvc",     texto: "9. Estudio bíblico de la congregación", mins: 30 },
        { tipo: "intro",   texto: "Palabras de conclusión", mins: 3 },
        { tipo: "cancion", texto: "Canción 000 <b><i>---</i></b>" }
      ]
    },
    w: {
      fecha: "fecha",
      hora: "10:00 a. m.",
      programa: [
        { tipo: "cancion", texto: "Canción 000 <b><i>---</i></b>" },
        { tipo: "tk",      texto: "<b>Orador:</b> Título (000)", mins: 30, editable: true },
        { tipo: "cancion", texto: "Canción 97 <b><i>Nuestra vida depende de la Palabra de Dios</i></b>" },
        { tipo: "w",       texto: "<b>Estudio de <i>La Atalaya</i></b>: Título", mins: 60 },
        { tipo: "cancion", texto: "Canción 000 <b><i>---</i></b>" }
      ]
    }
  },

  /* ─────────────────────────────────────────
     BUENOS AIRES (BA)
  ───────────────────────────────────────── */
  BA: {
    nombre: "Buenos Aires",
    mwb: {
      fecha: "fecha",
      hora: "07:00 p. m.",
      programa: [
        { tipo: "cancion", texto: "Canción 000 <b><i>---</i></b>" },
        { tipo: "intro",   texto: "Palabras de introducción", mins: 1 },
        { tipo: "tdlb",    texto: "1. Título", mins: 10 },
        { tipo: "tdlb",    texto: "2. Busquemos perlas escondidas", mins: 10 },
        { tipo: "tdlb",    texto: "3. Lectura de la Biblia", mins: 4 },
        { tipo: "smm",     texto: "4. Título", mins: 3 },
        { tipo: "smm",     texto: "5. Título", mins: 4 },
        { tipo: "smm",     texto: "6. Título", mins: 5 },
        { tipo: "intro",   texto: "Consejo", mins: 1 },
        { tipo: "cancion", texto: "Canción 000 <b><i>---</i></b>" },
        { tipo: "nvc",     texto: "7. Título", mins: 15 },
        { tipo: "nvc",     texto: "8. Título", mins: 15 },
        { tipo: "nvc",     texto: "9. Estudio bíblico de la congregación", mins: 30 },
        { tipo: "intro",   texto: "Palabras de conclusión", mins: 3 },
        { tipo: "cancion", texto: "Canción 000 <b><i>---</i></b>" }
      ]
    },
    w: {
      fecha: "fecha",
      hora: "4:00 p. m.",
      programa: [
        { tipo: "cancion", texto: "Canción 000 <b><i>---</i></b>" },
        { tipo: "tk",      texto: "<b>Orador:</b> Título (000)", mins: 30, editable: true },
        { tipo: "cancion", texto: "Canción 97 <b><i>Nuestra vida depende de la Palabra de Dios</i></b>" },
        { tipo: "w",       texto: "<b>Estudio de <i>La Atalaya</i></b>: Título", mins: 60 },
        { tipo: "cancion", texto: "Canción 000 <b><i>---</i></b>" }
      ]
    }
  },

  /* ─────────────────────────────────────────
     CALIFORNIA (CA)
  ───────────────────────────────────────── */
  CA: {
    nombre: "California",
    mwb: {
      fecha: "fecha",
      hora: "07:00 p. m.",
      programa: [
        { tipo: "cancion", texto: "Canción 000 <b><i>---</i></b>" },
        { tipo: "intro",   texto: "Palabras de introducción", mins: 1 },
        { tipo: "tdlb",    texto: "1. Título", mins: 10 },
        { tipo: "tdlb",    texto: "2. Busquemos perlas escondidas", mins: 10 },
        { tipo: "tdlb",    texto: "3. Lectura de la Biblia", mins: 4 },
        { tipo: "smm",     texto: "4. Título", mins: 3 },
        { tipo: "smm",     texto: "5. Título", mins: 4 },
        { tipo: "smm",     texto: "6. Título", mins: 5 },
        { tipo: "intro",   texto: "Consejo", mins: 1 },
        { tipo: "cancion", texto: "Canción 000 <b><i>---</i></b>" },
        { tipo: "nvc",     texto: "7. Título", mins: 15 },
        { tipo: "nvc",     texto: "8. Título", mins: 15 },
        { tipo: "nvc",     texto: "9. Estudio bíblico de la congregación", mins: 30 },
        { tipo: "intro",   texto: "Palabras de conclusión", mins: 3 },
        { tipo: "cancion", texto: "Canción 000 <b><i>---</i></b>" }
      ]
    },
    w: {
      fecha: "fecha",
      hora: "6:00 p. m.",
      programa: [
        { tipo: "cancion", texto: "Canción 000 <b><i>---</i></b>" },
        { tipo: "tk",      texto: "<b>Orador:</b> Título (000)", mins: 30, editable: true },
        { tipo: "cancion", texto: "Canción 97 <b><i>Nuestra vida depende de la Palabra de Dios</i></b>" },
        { tipo: "w",       texto: "<b>Estudio de <i>La Atalaya</i></b>: Título", mins: 60 },
        { tipo: "cancion", texto: "Canción 000 <b><i>---</i></b>" }
      ]
    }
  }

};
