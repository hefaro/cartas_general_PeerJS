// Banco de preguntas de Tablas de Multiplicar del 0 al 10
const cardData = [
    // Tabla del 0
    { question: "0 × 7 = ?", options: ["7", "0", "1", "70"], correctIndex: 1 },
    { question: "9 × 0 = ?", options: ["9", "0", "90", "1"], correctIndex: 1 },
    
    // Tabla del 1
    { question: "1 × 8 = ?", options: ["8", "1", "9", "0"], correctIndex: 0 },
    { question: "6 × 1 = ?", options: ["1", "6", "7", "61"], correctIndex: 1 },

    // Tabla del 2
    { question: "2 × 7 = ?", options: ["12", "14", "16", "9"], correctIndex: 1 },
    { question: "2 × 9 = ?", options: ["18", "16", "20", "11"], correctIndex: 0 },

    // Tabla del 3
    { question: "3 × 6 = ?", options: ["15", "18", "21", "12"], correctIndex: 1 },
    { question: "3 × 8 = ?", options: ["21", "27", "24", "18"], correctIndex: 2 },

    // Tabla del 4
    { question: "4 × 7 = ?", options: ["28", "24", "32", "11"], correctIndex: 0 },
    { question: "4 × 9 = ?", options: ["32", "36", "40", "13"], correctIndex: 1 },

    // Tabla del 5
    { question: "5 × 6 = ?", options: ["25", "30", "35", "20"], correctIndex: 1 },
    { question: "5 × 9 = ?", options: ["40", "50", "45", "35"], correctIndex: 2 },

    // Tabla del 6
    { question: "6 × 7 = ?", options: ["42", "36", "48", "13"], correctIndex: 0 },
    { question: "6 × 8 = ?", options: ["42", "48", "54", "14"], correctIndex: 1 },

    // Tabla del 7
    { question: "7 × 7 = ?", options: ["42", "48", "49", "56"], correctIndex: 2 },
    { question: "7 × 8 = ?", options: ["54", "56", "63", "15"], correctIndex: 1 },
    { question: "7 × 9 = ?", options: ["63", "56", "72", "16"], correctIndex: 0 },

    // Tabla del 8
    { question: "8 × 6 = ?", options: ["42", "48", "54", "14"], correctIndex: 1 },
    { question: "8 × 8 = ?", options: ["56", "64", "72", "16"], correctIndex: 1 },
    { question: "8 × 9 = ?", options: ["72", "81", "63", "17"], correctIndex: 0 },

    // Tabla del 9
    { question: "9 × 6 = ?", options: ["45", "54", "63", "15"], correctIndex: 1 },
    { question: "9 × 7 = ?", options: ["56", "63", "72", "16"], correctIndex: 1 },
    { question: "9 × 9 = ?", options: ["81", "72", "90", "18"], correctIndex: 0 },

    // Tabla del 10
    { question: "10 × 5 = ?", options: ["50", "15", "500", "5"], correctIndex: 0 },
    { question: "10 × 8 = ?", options: ["80", "18", "800", "8"], correctIndex: 0 },

    // Factores Faltantes / Ecuaciones sencillas
    { question: "? × 4 = 36", options: ["8", "9", "7", "6"], correctIndex: 1 },
    { question: "7 × ? = 35", options: ["4", "5", "6", "7"], correctIndex: 1 },
    { question: "? × 6 = 42", options: ["6", "7", "8", "9"], correctIndex: 1 },
    { question: "8 × ? = 56", options: ["6", "7", "8", "9"], correctIndex: 1 },
    { question: "9 × ? = 81", options: ["7", "8", "9", "10"], correctIndex: 2 },
    { question: "? × 5 = 40", options: ["6", "7", "8", "9"], correctIndex: 2 },

    // Preguntas Especiales / Propiedades
    { question: "Cualquier número por 0 es:", options: ["El mismo número", "1", "0", "10"], correctIndex: 2 },
    { question: "Cualquier número por 1 es:", options: ["El mismo número", "0", "1", "2"], correctIndex: 0 },
    { question: "3 × 4 es igual a:", options: ["4 × 3", "3 + 3", "4 + 4", "3 × 3"], correctIndex: 0 },
    { question: "2 × 2 × 2 = ?", options: ["6", "8", "4", "10"], correctIndex: 1 }
];