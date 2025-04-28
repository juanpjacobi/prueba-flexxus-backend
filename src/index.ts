import app from "./server";
import { PORT } from "./config";
import { sequelize } from "./config/database";

async function start() {
  try {
    await sequelize.authenticate();
    console.log("Conexión con la base de datos establecida.");
    await sequelize.sync({ alter: true });
    console.log("Modelos sincronizados con la base de datos.");
    app.listen(PORT, () => {
      console.log(`Servidor Express escuchando en puerto ${PORT}`);
    });
  } catch (error) {
    console.error("No se pudo conectar a la DB:", error);
    process.exit(1);
  }
}

start();
