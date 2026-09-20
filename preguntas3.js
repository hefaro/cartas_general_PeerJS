// Banco de 40 preguntas sobre departamentos y capitales de Colombia
const cardData = [
    // Preguntar por la Capital
    { question: "¿Capital de Amazonas?", options: ["Leticia", "Puerto Carreño", "Inírida", "Mocoa"], correctIndex: 0 },
    { question: "¿Capital de Antioquia?", options: ["Manizales", "Medellín", "Pereira", "Cúcuta"], correctIndex: 1 },
    { question: "¿Capital de Arauca?", options: ["Yopal", "Florencia", "Arauca", "Mocoa"], correctIndex: 2 },
    { question: "¿Capital del Atlántico?", options: ["Santa Marta", "Cartagena", "Montería", "Barranquilla"], correctIndex: 3 },

    // Preguntar por el Departamento
    { question: "¿A qué dpto. pertenece Armenia?", options: ["Quindío", "Risaralda", "Caldas", "Tolima"], correctIndex: 0 },
    { question: "¿A qué dpto. pertenece Cartagena?", options: ["Magdalena", "Bolívar", "Atlántico", "Sucre"], correctIndex: 1 },
    { question: "¿A qué dpto. pertenece Tunja?", options: ["Cundinamarca", "Santander", "Boyacá", "Huila"], correctIndex: 2 },
    { question: "¿A qué dpto. pertenece Manizales?", options: ["Risaralda", "Quindío", "Antioquia", "Caldas"], correctIndex: 3 },

    // Preguntar por la Capital
    { question: "¿Capital del Caquetá?", options: ["Florencia", "Yopal", "San José del Guaviare", "Mocoa"], correctIndex: 0 },
    { question: "¿Capital del Casanare?", options: ["Arauca", "Yopal", "Villavicencio", "Puerto Carreño"], correctIndex: 1 },
    { question: "¿Capital del Cauca?", options: ["Cali", "Pasto", "Popayán", "Neiva"], correctIndex: 2 },
    { question: "¿Capital del Cesar?", options: ["Riohacha", "Montería", "Santa Marta", "Valledupar"], correctIndex: 3 },

    // Preguntar por el Departamento
    { question: "¿A qué dpto. pertenece Quibdó?", options: ["Chocó", "Valle del Cauca", "Cauca", "Nariño"], correctIndex: 0 },
    { question: "¿A qué dpto. pertenece Montería?", options: ["Sucre", "Córdoba", "Bolívar", "Atlántico"], correctIndex: 1 },
    { question: "¿A qué dpto. pertenece Neiva?", options: ["Tolima", "Caquetá", "Huila", "Cundinamarca"], correctIndex: 2 },
    { question: "¿A qué dpto. pertenece Riohacha?", options: ["Cesar", "Magdalena", "Atlántico", "La Guajira"], correctIndex: 3 },

    // Preguntar por la Capital
    { question: "¿Capital del Magdalena?", options: ["Santa Marta", "Barranquilla", "Cartagena", "Valledupar"], correctIndex: 0 },
    { question: "¿Capital del Meta?", options: ["Yopal", "Villavicencio", "San José del Guaviare", "Arauca"], correctIndex: 1 },
    { question: "¿Capital de Nariño?", options: ["Popayán", "Mocoa", "Pasto", "Cali"], correctIndex: 2 },
    { question: "¿Capital de Norte de Santander?", options: ["Bucaramanga", "Tunja", "Arauca", "Cúcuta"], correctIndex: 3 },

    // Preguntar por el Departamento
    { question: "¿A qué dpto. pertenece Mocoa?", options: ["Putumayo", "Nariño", "Caquetá", "Amazonas"], correctIndex: 0 },
    { question: "¿A qué dpto. pertenece Armenia?", options: ["Tolima", "Quindío", "Risaralda", "Caldas"], correctIndex: 1 },
    { question: "¿A qué dpto. pertenece Pereira?", options: ["Caldas", "Quindío", "Risaralda", "Valle del Cauca"], correctIndex: 2 },
    { question: "¿A qué dpto. pertenece San Andrés?", options: ["Bolívar", "Magdalena", "La Guajira", "San Andrés y Providencia"], correctIndex: 3 },

    // Preguntar por la Capital
    { question: "¿Capital de Santander?", options: ["Bucaramanga", "Cúcuta", "Tunja", "Ibagué"], correctIndex: 0 },
    { question: "¿Capital de Sucre?", options: ["Montería", "Sincelejo", "Cartagena", "Valledupar"], correctIndex: 1 },
    { question: "¿Capital del Tolima?", options: ["Neiva", "Armenia", "Ibagué", "Pereira"], correctIndex: 2 },
    { question: "¿Capital del Valle del Cauca?", options: ["Popayán", "Pastos", "Buenaventura", "Cali"], correctIndex: 3 },

    // Preguntar por el Departamento
    { question: "¿A qué dpto. pertenece Mitú?", options: ["Vaupés", "Guainía", "Guaviare", "Amazonas"], correctIndex: 0 },
    { question: "¿A qué dpto. pertenece Puerto Carreño?", options: ["Casanare", "Vichada", "Meta", "Arauca"], correctIndex: 1 },
    { question: "¿A qué dpto. pertenece Inírida?", options: ["Vaupés", "Amazonas", "Guainía", "Guaviare"], correctIndex: 2 },
    { question: "¿A qué dpto. pertenece San José del Guaviare?", options: ["Meta", "Caquetá", "Vaupés", "Guaviare"], correctIndex: 3 },

    // Preguntar por la Capital
    { question: "¿Capital de Boyacá?", options: ["Tunja", "Sogamoso", "Duitama", "Zipaquirá"], correctIndex: 0 },
    { question: "¿Capital de Cundinamarca?", options: ["Soacha", "Bogotá", "Girardot", "Zipaquirá"], correctIndex: 1 },
    { question: "¿Capital del Huila?", options: ["Garzón", "Pitalito", "Neiva", "Florencia"], correctIndex: 2 },
    { question: "¿Capital de La Guajira?", options: ["Maicao", "Uribia", "Valledupar", "Riohacha"], correctIndex: 3 },

    // Preguntar por el Departamento
    { question: "¿A qué dpto. pertenece Florencia?", options: ["Caquetá", "Putumayo", "Huila", "Amazonas"], correctIndex: 0 },
    { question: "¿A qué dpto. pertenece Popayán?", options: ["Valle del Cauca", "Cauca", "Nariño", "Huila"], correctIndex: 1 },
    { question: "¿A qué dpto. pertenece Cúcuta?", options: ["Santander", "Arauca", "Norte de Santander", "Boyacá"], correctIndex: 2 },
    { question: "¿A qué dpto. pertenece Sincelejo?", options: ["Córdoba", "Bolívar", "Atlántico", "Sucre"], correctIndex: 3 }
];

// Asignación adicional para dar soporte a la selección por banco (Banco 1)
const banco1 = cardData;