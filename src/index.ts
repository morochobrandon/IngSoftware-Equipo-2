import app from './app'
import {PORT} from "./app";

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto: ${PORT}`);
});
