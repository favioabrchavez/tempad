/* =====================================================
   TEMPAD – DATOS DE CONGREGACIONES
   =====================================================
   Cada congregación tiene sus datos de reunión aquí.
   Los archivos HTML los cargan según su prefijo.
   ===================================================== */

const TEMPAD_DATA = {

  /* ─────────────────────────────────────────
     VISTA HERMOSA (VH)
  ───────────────────────────────────────── */
  VH: {
    nombre: "Vista Hermosa",
    mwb: {
      fecha: "03 mar",
      hora: "07:00 p. m.",
      programa: [
        { tipo: "cancion", texto: "Canción 8 <b><i>Jehová es mi Refugio</i></b>" },
        { tipo: "intro", texto: "Palabras de introducción", mins: 1 },
        { tipo: "tdlb", texto: '1. "No tengas miedo"', mins: 10 },
        { tipo: "tdlb", texto: "2. Busquemos perlas escondidas", mins: 10 },
        { tipo: "tdlb", texto: "3. Lectura de la Biblia", mins: 4 },
        { tipo: "smm", texto: "4. Empiece conversaciones", mins: 3 },
        { tipo: "smm", texto: "5. Empiece conversaciones", mins: 4 },
        { tipo: "smm", texto: "6. Explique sus creencias", mins: 5 },
        { tipo: "intro", texto: "Consejo", mins: 1 },
        { tipo: "cancion", texto: "Canción 19 <b><i>La Cena del Señor</i></b>" },
        { tipo: "nvc", texto: "7. El sábado 7 de marzo comienza la campaña de la Conmemoración", mins: 15 },
        { tipo: "nvc", texto: "8. <i>Logros de la organización</i> para el mes de marzo", mins: 15 },
        { tipo: "nvc", texto: "9. Estudio bíblico de la congregación", mins: 30 },
        { tipo: "intro", texto: "Palabras de conclusión", mins: 3 },
        { tipo: "cancion", texto: "Canción 110 <b><i>El gozo de Jehová</i></b>" }
      ]
    },
    w: {
      fecha: "21 feb",
      hora: "6:00 p. m.",
      programa: [
        { tipo: "cancion", texto: "Canción - <b><i>Título</i></b>", editable: true },
        { tipo: "tk", texto: "<b>Ricardo Otiniano:</b> ¿Será usted un buen trabajador en la cosecha? (66)", mins: 30, editable: true },
        { tipo: "cancion", texto: "Canción 97 <b><i>Nuestra vida depende de la Palabra de Dios</i></b>" },
        { tipo: "w", texto: "<b>Estudio de <i>La Atalaya</i></b>: Sigamos satisfaciendo nuestras \"necesidades espirituales\"", mins: 60 },
        { tipo: "cancion", texto: "Canción 162 <b><i>Mi necesidad espiritual</i></b>" }
      ]
    }
  },

  /* ─────────────────────────────────────────
     VISTA ALEGRE (VA)
  ───────────────────────────────────────── */
  VA: {
    nombre: "Vista Alegre",
    mwb: {
      fecha: "04 mar",
      hora: "07:00 p. m.",
      programa: [
        { tipo: "cancion", texto: "Canción 8 <b><i>Jehová es mi Refugio</i></b>" },
        { tipo: "intro", texto: "Palabras de introducción", mins: 1 },
        { tipo: "tdlb", texto: '1. "No tengas miedo"', mins: 10 },
        { tipo: "tdlb", texto: "2. Busquemos perlas escondidas", mins: 10 },
        { tipo: "tdlb", texto: "3. Lectura de la Biblia", mins: 4 },
        { tipo: "smm", texto: "4. Empiece conversaciones", mins: 3 },
        { tipo: "smm", texto: "5. Empiece conversaciones", mins: 4 },
        { tipo: "smm", texto: "6. Explique sus creencias", mins: 5 },
        { tipo: "intro", texto: "Consejo", mins: 1 },
        { tipo: "cancion", texto: "Canción 19 <b><i>La Cena del Señor</i></b>" },
        { tipo: "nvc", texto: "7. El sábado 7 de marzo comienza la campaña de la Conmemoración", mins: 15 },
        { tipo: "nvc", texto: "8. <i>Logros de la organización</i> para el mes de marzo", mins: 15 },
        { tipo: "nvc", texto: "9. Estudio bíblico de la congregación", mins: 30 },
        { tipo: "intro", texto: "Palabras de conclusión", mins: 3 },
        { tipo: "cancion", texto: "Canción 110 <b><i>El gozo de Jehová</i></b>" }
      ]
    },
    w: {
      fecha: "22 feb",
      hora: "10:00 a. m.",
      programa: [
        { tipo: "cancion", texto: "Canción - <b><i>Título</i></b>", editable: true },
        { tipo: "tk", texto: "<b>Marco Rodríguez:</b> ¿Piensa usted igual que Dios? (53)", mins: 30, editable: true },
        { tipo: "cancion", texto: "Canción 97 <b><i>Nuestra vida depende de la Palabra de Dios</i></b>" },
        { tipo: "w", texto: "<b>Estudio de <i>La Atalaya</i></b>: Sigamos satisfaciendo nuestras \"necesidades espirituales\"", mins: 60 },
        { tipo: "cancion", texto: "Canción 162 <b><i>Mi necesidad espiritual</i></b>" }
      ]
    }
  },

  /* ─────────────────────────────────────────
     BUENOS AIRES (BA)
  ───────────────────────────────────────── */
  BA: {
    nombre: "Buenos Aires",
    mwb: {
      fecha: "05 mar",
      hora: "07:00 p. m.",
      programa: [
        { tipo: "cancion", texto: "Canción 8 <b><i>Jehová es mi Refugio</i></b>" },
        { tipo: "intro", texto: "Palabras de introducción", mins: 1 },
        { tipo: "tdlb", texto: '1. "No tengas miedo"', mins: 10 },
        { tipo: "tdlb", texto: "2. Busquemos perlas escondidas", mins: 10 },
        { tipo: "tdlb", texto: "3. Lectura de la Biblia", mins: 4 },
        { tipo: "smm", texto: "4. Empiece conversaciones", mins: 3 },
        { tipo: "smm", texto: "5. Empiece conversaciones", mins: 4 },
        { tipo: "smm", texto: "6. Explique sus creencias", mins: 5 },
        { tipo: "intro", texto: "Consejo", mins: 1 },
        { tipo: "cancion", texto: "Canción 19 <b><i>La Cena del Señor</i></b>" },
        { tipo: "nvc", texto: "7. El sábado 7 de marzo comienza la campaña de la Conmemoración", mins: 15 },
        { tipo: "nvc", texto: "8. <i>Logros de la organización</i> para el mes de marzo", mins: 15 },
        { tipo: "nvc", texto: "9. Estudio bíblico de la congregación", mins: 30 },
        { tipo: "intro", texto: "Palabras de conclusión", mins: 3 },
        { tipo: "cancion", texto: "Canción 110 <b><i>El gozo de Jehová</i></b>" }
      ]
    },
    w: {
      fecha: "08 feb",
      hora: "4:00 p. m.",
      programa: [
        { tipo: "cancion", texto: "Canción - <b><i>Título</i></b>", editable: true },
        { tipo: "tk", texto: "<b>Idelfonso Benito:</b> Buenas nuevas en un mundo violento (85)", mins: 30, editable: true },
        { tipo: "cancion", texto: "Canción 97 <b><i>Nuestra vida depende de la Palabra de Dios</i></b>" },
        { tipo: "w", texto: "<b>Estudio de <i>La Atalaya</i></b>: Sigamos satisfaciendo nuestras \"necesidades espirituales\"", mins: 60 },
        { tipo: "cancion", texto: "Canción 162 <b><i>Mi necesidad espiritual</i></b>" }
      ]
    }
  },

  /* ─────────────────────────────────────────
     CALIFORNIA (CA)
  ───────────────────────────────────────── */
  CA: {
    nombre: "California",
    mwb: {
      fecha: "13 mar",
      hora: "07:00 p. m.",
      programa: [
        { tipo: "cancion", texto: "Canción 63 <b><i>¡Soy testigo de Jehová!</i></b>" },
        { tipo: "intro", texto: "Palabras de introducción", mins: 1 },
        { tipo: "tdlb", texto: '1. "No tengas miedo"', mins: 10 },
        { tipo: "tdlb", texto: "2. Busquemos perlas escondidas", mins: 10 },
        { tipo: "tdlb", texto: "3. Lectura de la Biblia", mins: 4 },
        { tipo: "smm", texto: "4. Empiece conversaciones", mins: 1 },
        { tipo: "smm", texto: "5. Empiece conversaciones", mins: 3 },
        { tipo: "smm", texto: "6. Explique sus creencias", mins: 3 },
         { tipo: "smm", texto: "7. Haga revisitas", mins: 4 },
        { tipo: "intro", texto: "Consejo", mins: 1 },
        { tipo: "cancion", texto: "Canción 69 <b><i>Prediquen las nuevas del Reino</i></b>" },
        { tipo: "nvc", texto: "8. Necesidades de la congregación", mins: 15 },
        { tipo: "nvc", texto: "9. Estudio bíblico de la congregación", mins: 30 },
        { tipo: "intro", texto: "Palabras de conclusión", mins: 3 },
        { tipo: "cancion", texto: "Canción 137 <b><i>Fieles, valiosas, amadas</i></b>" }
      ]
    },
    w: {
      fecha: "21 feb",
      hora: "6:00 p. m.",
      programa: [
        { tipo: "cancion", texto: "Canción - <b><i>Título</i></b>", editable: true },
        { tipo: "tk", texto: "<b>Mauricio Abanto:</b> Joven, ¿cómo puedes ser feliz y tener éxito? (113)", mins: 30, editable: true },
        { tipo: "cancion", texto: "Canción 97 <b><i>Nuestra vida depende de la Palabra de Dios</i></b>" },
        { tipo: "w", texto: "<b>Estudio de <i>La Atalaya</i></b>: Sigamos satisfaciendo nuestras \"necesidades espirituales\"", mins: 60 },
        { tipo: "cancion", texto: "Canción 162 <b><i>Mi necesidad espiritual</i></b>" }
      ]
    },
