// Banco de 40 preguntas generales básicas para 6.º grado
const cardData = [
    // Ciencias Naturales
    { question: "¿Cuál es el órgano principal del sistema circulatorio?", options: ["Corazón", "Pulmón", "Estómago", "Cerebro"], correctIndex: 0 },
    { question: "¿Qué proceso usan las plantas para fabricar su alimento?", options: ["Respiración", "Fotosíntesis", "Digestión", "Transpiración"], correctIndex: 1 },
    { question: "El estado del agua en forma de hielo es:", options: ["Líquido", "Gaseoso", "Sólido", "Plasma"], correctIndex: 2 },
    { question: "¿Cuál es el planeta más cercano al Sol?", options: ["Venus", "Tierra", "Marte", "Mercurio"], correctIndex: 3 },

    // Lenguaje y Literatura
    { question: "Palabras que tienen significado similar:", options: ["Sinónimos", "Antónimos", "Homófonas", "Agudas"], correctIndex: 0 },
    { question: "El núcleo del sujeto en una oración suele ser un:", options: ["Verbo", "Sustantivo", "Adjetivo", "Adverbio"], correctIndex: 1 },
    { question: "Las palabras que llevan el acento en la última sílaba son:", options: ["Graves", "Esdrújulas", "Agudas", "Sobreesdrújulas"], correctIndex: 2 },
    { question: "¿Cuál de estos elementos es un tipo de texto narrativo?", options: ["Ensayo", "Noticia", "Receta", "Cuento"], correctIndex: 3 },

    // Matemáticas Básicas
    { question: "¿Cuánto es 12 × 8?", options: ["96", "84", "108", "92"], correctIndex: 0 },
    { question: "Resultado de calcular 3/5 + 1/5:", options: ["4/10", "4/5", "3/10", "2/5"], correctIndex: 1 },
    { question: "¿Cuál es el perímetro de un cuadrado de lado 6 cm?", options: ["36 cm", "12 cm", "24 cm", "18 cm"], correctIndex: 2 },
    { question: "¿Cómo se llama un ángulo que mide exactamente 90°?", options: ["Agudo", "Obtuso", "Llano", "Recto"], correctIndex: 3 },

    // Geografía e Historia
    { question: "¿Cuál es el océano más grande del planeta?", options: ["Pacífico", "Atlántico", "Índico", "Ártico"], correctIndex: 0 },
    { question: "¿En qué continente se encuentra el río Amazonas?", options: ["África", "América del Sur", "Asia", "Europa"], correctIndex: 1 },
    { question: "¿Qué línea imaginaria divide a la Tierra en hemisferio Norte y Sur?", options: ["Trópico de Cáncer", "Meridiano de Greenwich", "Ecuador", "Trópico de Capricornio"], correctIndex: 2 },
    { question: "La invención de la escritura marca el inicio de la:", options: ["Prehistoria", "Edad Media", "Edad Moderna", "Historia"], correctIndex: 3 },

    // Ciencias Naturales
    { question: "¿Cuál es la unidad básica de la vida en los seres vivos?", options: ["La célula", "El tejido", "El órgano", "El sistema"], correctIndex: 0 },
    { question: "Animales que se alimentan exclusivamente de plantas:", options: ["Carnívoros", "Herbívoros", "Omnívoros", "Descomponedores"], correctIndex: 1 },
    { question: "El gas que los seres humanos inhalamos para vivir es el:", options: ["Dióxido de carbono", "Nitrógeno", "Oxígeno", "Helio"], correctIndex: 2 },
    { question: "¿En qué capa de la Tierra se desarrolla la vida?", options: ["Núcleo", "Manto", "Atmósfera alta", "Biosfera"], correctIndex: 3 },

    // Lenguaje y Ortografía
    { question: "Signo de puntuación usado para indicar una pausa corta:", options: ["Coma", "Punto", "Guion", "Dos puntos"], correctIndex: 0 },
    { question: "La palabra 'teléfono' por su acento es:", options: ["Aguda", "Esdrújula", "Grave", "Sobreesdrújula"], correctIndex: 1 },
    { question: "¿Qué tipo de palabra es 'rápido' en 'El carro rápido'?", options: ["Verbo", "Sustantivo", "Adjetivo", "Pronombres"], correctIndex: 2 },
    { question: "El antónimo de la palabra 'construir' es:", options: ["Edificar", "Crear", "Reparar", "Destruir"], correctIndex: 3 },

    // Matemáticas y Lógica
    { question: "¿Cuál es el residuo de dividir 17 entre 5?", options: ["2", "3", "1", "4"], correctIndex: 0 },
    { question: "Si un tren recorre 60 km en 1 hora, ¿cuánto recorre en 3 horas?", options: ["120 km", "180 km", "240 km", "150 km"], correctIndex: 1 },
    { question: "¿Cuál es el número primo menor que 10?", options: ["9", "4", "7", "8"], correctIndex: 2 },
    { question: "Si tengo $50.000 y gasto $18.000, ¿cuánto me queda?", options: ["$38.000", "$28.000", "$34.000", "$32.000"], correctIndex: 3 },

    // Cultura General y Geografía
    { question: "¿Cuál es la capital del departamento del Valle del Cauca?", options: ["Cali", "Buga", "Palmira", "Tulua"], correctIndex: 0 },
    { question: "Representación gráfica y plana de la superficie terrestre:", options: ["Globo terráqueo", "Mapa", "Maqueta", "Fotografía"], correctIndex: 1 },
    { question: "Principal fuente de energía natural de la Tierra:", options: ["La Luna", "El viento", "El Sol", "El agua"], correctIndex: 2 },
    { question: "Instrumento utilizado para orientarse mediante los puntos cardinales:", options: ["Telescopio", "Reloj", "Termómetro", "Brújula"], correctIndex: 3 },

    // Biología y Física Básica
    { question: "¿Qué fuerza atrae los objetos hacia el centro de la Tierra?", options: ["Gravedad", "Fricción", "Magnetismo", "Tensión"], correctIndex: 0 },
    { question: "Son animales vertebrados los que poseen:", options: ["Caparazón", "Columna vertebral", "Piel desnuda", "Antenas"], correctIndex: 1 },
    { question: "El cambio del estado líquido a gaseoso se denomina:", options: ["Fusión", "Solidificación", "Evaporación", "Condensación"], correctIndex: 2 },
    { question: "¿Qué sistema del cuerpo humano se encarga de procesar los alimentos?", options: ["Nervioso", "Respiratorio", "Circulatorio", "Digestivo"], correctIndex: 3 }
];

// Asignación para mantener compatibilidad con el selector de bancos
const banco1 = cardData;