const TEMPAD_DATA = {

  // ── Reuniones
  mwb: {
    nombre:       "Reunión de entre semana",
    color:        "#6b130b",
    shadingColor: "#6b130b33",
    programa: [
     {tipo: "extra",texto: "Palabras de introducción", mins: 1},
      {tipo: "tdlb", texto: "1. Recuperarnos en sentido espiritual es posible", mins: 10},
      {tipo: "tdlb", texto: "2. Busquemos perlas escondidas", mins: 10},
      {tipo: "tdlb", texto: "3. Lectura de la Biblia", mins: 4},
      {tipo: "smm",  texto: "4. Empiece conversaciones", mins: 4},
      {tipo: "smm",  texto: "5. Haga revisitas", mins: 4},
      {tipo: "smm",  texto: "6. Explque sus creencias", mins: 4},
      {tipo: "extra",texto: "Consejo para estudiantes", mins: 1},
      {tipo: "nvc",  texto: "7. Pasos para recuperarnos en sentido espiritual", mins: 15},
      {tipo: "nvc",  texto: "8. Estudio bíblico de la congregación", mins: 30},
      {tipo: "extra",texto: "Palabras de conclusión", mins: 3}
    ]
  },

  w: {
    nombre:       "Reunión del fin de semana",
    color:        "#6C8500",
    shadingColor: "#6C850033",
    programa: [
      {tipo: "main",  texto: "Discurso público", mins: 30},
      {tipo: "main",   texto: "<b>Estudio de <i>La Atalaya</i></b>: Cómo tomar buenas decisiones sobre los estudios adicionales", mins: 60}
    ]
  },

  // Visita del Superintendente
  mwb_overseer: {
    nombre:       "Reunión de entre semana",
    color:        "#6b130b",
    shadingColor: "#6b130b33",
    programa: [
      {tipo: "extra",texto: "Palabras de introducción", mins: 1},
      {tipo: "tdlb", texto: "1. Recuperarnos en sentido espiritual es posible", mins: 10},
      {tipo: "tdlb", texto: "2. Busquemos perlas escondidas", mins: 10},
      {tipo: "tdlb", texto: "3. Lectura de la Biblia", mins: 4},
      {tipo: "smm",  texto: "4. Empiece conversaciones", mins: 4},
      {tipo: "smm",  texto: "5. Haga revisitas", mins: 4},
      {tipo: "smm",  texto: "6. Explque sus creencias", mins: 4},
      {tipo: "extra",texto: "Consejo para estudiantes", mins: 1},
      {tipo: "nvc",  texto: "7. Pasos para recuperarnos en sentido espiritual", mins: 15},
      {tipo: "extra",texto: "Palabras de conclusión", mins: 3},
      {tipo: "main",   texto: "<b>Discurso de servicio</b>: ¿Qué está dispuesto a hacer “por las buenas noticias”?", mins: 30 }
    ]
  },

  w_overseer: {
    nombre:       "Reunión del fin de semana con la visita del superintendente",
    color:        "#6C8500",
    shadingColor: "#6C850033",
    programa: [
      {tipo: "main",  texto: "<b>Discurso público:</b> Cómo cosechar vida eterna", mins: 30},
      {tipo: "main",   texto: "<b>Estudio de <i>La Atalaya</i></b>: Cómo tomar buenas decisiones sobre los estudios adicionales", mins: 30},
      {tipo: "main",  texto: "Discurso final", mins: 30}
    ]
  },

    // ── Asamblea Regional 2026
  CO1: {
    nombre:       "Viernes mañana",
    color:        "#ff852a",
    shadingColor: "#ff852a33",
    programa: [
      { tipo: "extra", texto: "9:20 Video musical"},
      { tipo: "extra", texto: "9:30 Canción 160 y oración"},
      { tipo: "main",  texto: "9:40 <b>DISCURSO DEL PRESIDENTE DE LA ASAMBLEA:</b> ¿Es realista la idea de ser felices para siempre?", mins: 29 },
      { tipo: "main",  texto: "10:10 <b>PRODUCCIÓN AUDIOVISUAL:</b> <i>Las buenas noticias según Jesús: Episodio 4</i>",  mins: 55 },
      { tipo: "extra", texto: "11:05 Canción 17 y anuncios"},
      { tipo: "main",  texto: "<b>SERIE DE DISCURSOS:</b> ¡Las profecías sobre el Mesías se cumplieron!"},
      { tipo: "main",  texto: "• 11:15 “Él mismo tomó nuestras enfermedades”",  mins: 18 },
      { tipo: "main",  texto: "• 11:34 “No discutirá”",  mins: 17 },
      { tipo: "main",  texto: "• 11:52 “Nunca les hablaba sin utilizar alguna comparación”",  mins: 17 },
      { tipo: "extra", texto: "12:10 Canción 14 e intermedio"}
    ]
  },

  CO2: {
    nombre:       "Viernes tarde",
    color:        "#ff852a",
    shadingColor: "#ff852a33",
    programa: [
      { tipo: "extra", texto: "1:35 Video musical"},
      { tipo: "extra", texto: "1:45 Canción 23"},
      { tipo: "main",  texto: "1:50 ¿Qué enseñó Jesús sobre el sábado?", mins: 19 },
      { tipo: "main",  texto: "<b>SERIE DE DISCURSOS:</b> Imitemos a los que sirvieron a Jesús"},
      { tipo: "main",  texto: "• 2:10 Los apóstoles",  mins: 18 },
      { tipo: "main",  texto: "• 2:30 Muchas mujeres",  mins: 17 },
      { tipo: "extra", texto: "2:50 Canción 76 y anuncios"},
      { tipo: "main",  texto: "3:00 “Felices los que lavan sus túnicas largas”", mins: 29},
      { tipo: "extra", texto: "3:30 Canción 155 y oración de conclusión"}
    ]
  },

  CO3: {
    nombre:       "Sábado mañana",
    color:        "#03372a",
    shadingColor: "#03372a33",
    programa: [
      { tipo: "extra", texto: "9:20 Video musical"},
      { tipo: "extra", texto: "9:30 Canción 111 y oración"},
      { tipo: "main",  texto: "9:40 “Él tomó la palabra y se puso a enseñarles”", mins: 10 },
      { tipo: "main",  texto: "10:10 <b>PRODUCCIÓN AUDIOVISUAL:</b> <i>Las buenas noticias según Jesús: Episodio 5</i>",  mins: 31 },
      { tipo: "extra", texto: "10:25 Canción 89 y anuncios"},
      { tipo: "main",  texto: "10:35 Cuatro enemigos de la felicidad", mins: 14 },
      { tipo: "main",  texto: "10:50 ¿Puede ver el principio detrás de la ley?", mins: 24 },
      { tipo: "main",  texto: "<b>SERIE DE DISCURSOS:</b> Lecciones sobre la tierra en la que vivió Jesús"},
      { tipo: "main",  texto: "• 11:15 La sal y la luz",  mins: 10 },
      { tipo: "main",  texto: "• 11:26 Las plantas y los animales",  mins: 13 },
      { tipo: "main",  texto: "11:40 <b>DISCURSO DE BAUTISMO:</b> “Tu Padre, que mira en secreto, te lo pagará”",  mins: 29 },
      { tipo: "extra", texto: "12:10 Canción 51 e intermedio"}
    ]
  },

  CO4: {
    nombre:       "Sábado tarde",
    color:        "#03372a",
    shadingColor: "#03372a33",
    programa: [
      { tipo: "extra", texto: "1:35 Video musical"},
      { tipo: "extra", texto: "1:45 Canción 23"},
      { tipo: "main",  texto: "<b>SERIE DE DISCURSOS:</b> Felices:"},
      { tipo: "main",  texto: "• 1:50 ... los que reconocen sus necesidades espirituales",  mins: 12 },
      { tipo: "main",  texto: "• 2:03 ... los que se lamentan",  mins: 9 },
      { tipo: "main",  texto: "• 2:12 ... los que son apacibles",  mins: 9 },
      { tipo: "main",  texto: "• 2:21 ... los que tienen hambre y sed de justicia",  mins: 9 },
      { tipo: "main",  texto: "• 2:30 ... los que son misericordiosos",  mins: 9 },
      { tipo: "main",  texto: "• 2:39 ... los que tienen un corazón puro",  mins: 9 },
      { tipo: "main",  texto: "• 2:49 ... los que fomentan la paz",  mins: 9 },
      { tipo: "main",  texto: "• 2:59 ... los que han sido perseguidos por causa de la justicia",  mins: 9 },
      { tipo: "main",  texto: "• 3:09 ... ustedes cuando la gente los insulte",  mins: 10 },
      { tipo: "extra", texto: "3:20 Canción 81 y anuncios"},
      { tipo: "main",  texto: "3:30 ¿Por qué se angustian?", mins: 24},
      { tipo: "main",  texto: "3:55 “Entren por la puerta angosta”", mins: 34},
      { tipo: "extra", texto: "4:30 Canción 21 y oración de conclusión"}
    ]
  },

  CO5: {
    nombre:       "Domingo mañana",
    color:        "#0b5394",
    shadingColor: "#0b549433",
    programa: [
      { tipo: "extra", texto: "9:20 Video musical"},
      { tipo: "extra", texto: "9:30 Canción 111 y oración"},
      { tipo: "main",  texto: "<b>SERIE DE DISCURSOS:</b> Lecciones de las comparaciones de Jesús:"},
      { tipo: "main",  texto: "• 9:40 Los cuatro tipos de terreno",  mins: 19 },
      { tipo: "main",  texto: "• 10:00 El trigo y la mala hierba",  mins: 14 },
      { tipo: "main",  texto: "• 10:15 El grano de mostaza",  mins: 13 },
      { tipo: "main",  texto: "• 10:29 La levadura",  mins: 13 },
      { tipo: "main",  texto: "• 10:43 La red de pesca",  mins: 16 },
      { tipo: "extra", texto: "11:00 Canción 64 y anuncios"},
      { tipo: "main",  texto: "11:10 <b>DISCURSO PÚBLICO:</b> ¿Ha encontrado el tesoro?", mins: 29 },
      { tipo: "main",  texto: "11:40 Resumen de <i>La Atalaya</i>", mins: 29},
      { tipo: "extra", texto: "12:10 Canción 140 e intermedio"}
    ]
  },

  CO6: {
    nombre:       "Domingo tarde",
    color:        "#0b5394",
    shadingColor: "#0b549433",
    programa: [
      { tipo: "extra", texto: "1:35 Video musical"},
      { tipo: "extra", texto: "1:45 Canción 108"},
      { tipo: "main",  texto: "1:50 <b>PRODUCCIÓN AUDIOVISUAL:</b> <i>Las buenas noticias según Jesús: Episodio 6</i>",  mins: 51 },
      { tipo: "extra", texto: "2:35 Canción 120 y anuncios"},
      { tipo: "main",  texto: "2:45 ¿Qué hemos aprendido?", mins: 13},
      { tipo: "main",  texto: "2:55 “Felices los ojos de ustedes, que ven”", mins: 49},
      { tipo: "extra", texto: "3:45 Canción 163 y oración de conclusión"}
    ]
  },

  pss1: {
    nombre:       "Lunes",
    color:        "#25231bff",
    shadingColor: "#25231b33",
    programa: [
      { tipo: "extra", texto: "1:35 Video musical"},
      { tipo: "extra", texto: "1:45 Canción 108"},
      { tipo: "main",  texto: "1:50 <b>PRODUCCIÓN AUDIOVISUAL:</b> <i>Las buenas noticias según Jesús: Episodio 6</i>",  mins: 51 },
      { tipo: "extra", texto: "2:35 Canción 120 y anuncios"},
      { tipo: "main",  texto: "2:45 ¿Qué hemos aprendido?", mins: 13},
      { tipo: "main",  texto: "2:55 “Felices los ojos de ustedes, que ven”", mins: 49},
      { tipo: "extra", texto: "3:45 Canción 163 y oración de conclusión"}
    ]
  }

};
