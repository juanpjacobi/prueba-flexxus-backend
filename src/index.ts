import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;

console.log(`⚡️ Iniciando servidor en modo DEV…`);
console.log(`→ Puerto: ${PORT}`);

// Aquí luego arrancarás tu app de Express
