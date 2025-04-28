import app from "./server";
import { PORT } from "./config";

app.listen(PORT, () => {
  console.log(`🚀 Servidor Express escuchando en puerto ${PORT}`);
});
